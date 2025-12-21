import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { supabase } from "../../supabase";

export default function PedidosScreen() {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);

  // Auth State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  // User Form State
  const [intention, setIntention] = useState("");
  const [massDate, setMassDate] = useState("");

  // Data State
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Listen for auth changes
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchProfile(session.user.id);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchProfile(session.user.id);
    });
  }, []);

  useEffect(() => {
    if (profile) fetchData();
  }, [profile]);

  // --- LOGIC FUNCTIONS ---

  async function fetchProfile(userId) {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    setProfile(data);
  }

  async function fetchData() {
    setLoading(true);
    let query = supabase.from("mass_requests").select("*");

    if (profile.role === "user") {
      query = query.eq("user_id", session.user.id);
    } else if (profile.role === "priest") {
      // Priests see available masses OR masses they've accepted
      query = query.or(`status.eq.available,priest_id.eq.${session.user.id}`);
    }

    const { data } = await query.order("created_at", { ascending: false });
    setRequests(data || []);
    setLoading(false);
  }

  async function handleAuth() {
    setLoading(true);
    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) Alert.alert("Error", error.message);
      else Alert.alert("Success", "Check your email for confirmation!");
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) Alert.alert("Error", error.message);
    }
    setLoading(false);
  }

  async function submitRequest() {
    if (!intention || !massDate) return Alert.alert("Missing info");
    setLoading(true);

    // NOTE: In a real app, Stripe payment happens BEFORE this insert
    const { error } = await supabase.from("mass_requests").insert([
      {
        user_id: session.user.id,
        intention_name: intention,
        mass_date: massDate,
        status: "available", // Simulating payment success
      },
    ]);

    if (error) Alert.alert("Error", error.message);
    else {
      setIntention("");
      setMassDate("");
      fetchData();
    }
    setLoading(false);
  }

  async function updateStatus(id, newStatus) {
    const updateData = { status: newStatus };
    if (newStatus === "accepted") updateData.priest_id = session.user.id;

    const { error } = await supabase
      .from("mass_requests")
      .update(updateData)
      .eq("id", id);
    if (error) Alert.alert("Error", error.message);
    else fetchData();
  }

  // --- UI RENDERING ---

  if (!session) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {isSignUp ? "Create Account" : "Login"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleAuth}>
          <Text style={styles.buttonText}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={styles.linkText}>
            {isSignUp
              ? "Already have an account? Login"
              : "Need an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Welcome, {profile?.role === "priest" ? "Father" : "User"}
      </Text>

      {/* USER VIEW: Request Form */}
      {profile?.role === "user" && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Request a Mass</Text>
          <TextInput
            style={styles.input}
            placeholder="Intention (e.g., In memory of...)"
            value={intention}
            onChangeText={setIntention}
          />
          <TextInput
            style={styles.input}
            placeholder="Date (YYYY-MM-DD)"
            value={massDate}
            onChangeText={setMassDate}
          />
          <TouchableOpacity style={styles.button} onPress={submitRequest}>
            <Text style={styles.buttonText}>Pay & Request</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* COMMON: List of Requests */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>
          {profile?.role === "priest" ? "Mass Opportunities" : "Your History"}
        </Text>
        {loading ? (
          <ActivityIndicator />
        ) : (
          requests.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.intention_name}</Text>
              <Text>
                Date: {item.mass_date} | Status:{" "}
                <Text style={styles.status}>{item.status}</Text>
              </Text>

              {/* PRIEST ACTIONS */}
              {profile?.role === "priest" && item.status === "available" && (
                <TouchableOpacity
                  style={styles.actionBtn}
                  onPress={() => updateStatus(item.id, "accepted")}
                >
                  <Text style={styles.actionBtnText}>Accept Mass</Text>
                </TouchableOpacity>
              )}
              {profile?.role === "priest" && item.status === "accepted" && (
                <TouchableOpacity
                  style={[styles.actionBtn, { backgroundColor: "green" }]}
                  onPress={() => updateStatus(item.id, "completed")}
                >
                  <Text style={styles.actionBtnText}>Mark Celebrated</Text>
                </TouchableOpacity>
              )}
            </View>
          ))
        )}
      </View>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => supabase.auth.signOut()}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: { fontSize: 18, fontWeight: "600", marginBottom: 10 },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
  linkText: { marginTop: 15, color: "#007AFF", textAlign: "center" },
  section: { marginBottom: 30 },
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: { fontWeight: "bold", fontSize: 16 },
  status: { fontWeight: "bold", color: "#e67e22" },
  actionBtn: {
    marginTop: 10,
    backgroundColor: "#2ecc71",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  actionBtnText: { color: "white", fontWeight: "bold" },
  logout: { marginTop: 20, marginBottom: 50, alignItems: "center" },
  logoutText: { color: "red" },
});
