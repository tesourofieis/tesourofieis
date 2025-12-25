import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useQuery, useConvexAuth } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "../../convex/_generated/api";
import { WebView } from "react-native-webview";
import { H1, H3 } from "~/components/Headings";
import { Typography } from "~/components/typography";
import { Priest } from "~/components/Priest";
import { User } from "~/components/User";

export default function MassRequestsScreen() {
  const [loading, setLoading] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { signIn } = useAuthActions();

  const viewer = useQuery(api.users.viewer);

  function handleWebViewNavigation(url: string) {
    if (url.includes("/success") || url.includes("checkout/session")) {
      setCheckoutUrl(null);
      setLoading(false);
      Alert.alert(
        "Sucesso",
        "Pagamento confirmado! As missas foram adicionadas à lista de pedidos disponíveis.",
      );
    } else if (url.includes("/cancel")) {
      setCheckoutUrl(null);
      setLoading(false);
      Alert.alert("Cancelado", "Pagamento cancelado");
    }
  }

  async function handleGoogleSignIn() {
    setLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      Alert.alert("Erro", "Falha na autenticação com Google");
    }
    setLoading(false);
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (checkoutUrl && Platform.OS !== "web") {
    return (
      <View className="flex-1 medium-background">
        <View className="p-4 pt-12 flex-row items-center border-b border-sepia soft-background">
          <TouchableOpacity
            onPress={() => {
              setCheckoutUrl(null);
              setLoading(false);
            }}
          >
            <Typography className="text-burgundy-600 bold">
              ← Cancelar
            </Typography>
          </TouchableOpacity>
        </View>
        <WebView
          source={{ uri: checkoutUrl }}
          onNavigationStateChange={(navState) =>
            handleWebViewNavigation(navState.url)
          }
        />
      </View>
    );
  }

  if (!isAuthenticated) {
    return (
      <View className="flex-1 p-5 pt-16 medium-background">
        <H1 text="Intenções" />
        <View className="flex-1 gap-4 justify-center my-auto px-5">
          <H3 text="Iniciar Sessão" />
          <TouchableOpacity
            className="extreme-background p-5 rounded-xl items-center shadow-md active:opacity-90"
            onPress={handleGoogleSignIn}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Typography className="text-white bold text-lg">
                Entrar com conta Google
              </Typography>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (viewer && viewer.role === "user") {
    return <User />;
  }

  return <Priest />;
}
