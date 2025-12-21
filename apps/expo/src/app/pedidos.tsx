// My intention is to have a requests page
// the requests for mass celebration should have status
// a user should be able to request a mass and describe optionally more details
// a priest should be able to see open requests and accept them for a certain date
// a priest and a user should be able to see the history of requested and assigned requests they creates/accepted
// we should use expo 54 and nativewind v5 with serverless backend in convex to control auth and functions and stripe payments
// i already have the following in .env STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, EXPO_PUBLIC_CONVEX_URL, EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY
//
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  Platform,
  Linking,
} from "react-native";
import { useConvex, useMutation, useQuery, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { WebView } from "react-native-webview";
import { H1, H3 } from "~/components/Headings";
import { Typography } from "~/components/typography";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type OrderStatus = "cart" | "pending_payment" | "paid";
type RequestStatus = "available" | "accepted" | "completed";
type UserRole = "user" | "priest";

const MASS_STIPEND = 1000; // €10.00 em cêntimos

interface CartItem {
  intention: string;
  quantity: number;
}

interface Order {
  _id: Id<"orders">;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  checkoutSessionId?: string;
  _creationTime: number;
}

interface MassRequest {
  _id: Id<"massRequests">;
  orderId: string;
  userId: string;
  priestId?: string;
  intentionName: string;
  status: RequestStatus;
  _creationTime: number;
}

interface UserProfile {
  userId: string;
  role: UserRole;
  email: string;
}

export default function MassRequestsScreen() {
  const convex = useConvex();

  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const [intention, setIntention] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [cart, setCart] = useState<CartItem[]>([]);

  const profile = useQuery(api.users.getProfile, userId ? { userId } : "skip");
  const myOrders = useQuery(
    api.orders.listUserOrders,
    userId ? { userId } : "skip",
  );
  const availableRequests = useQuery(
    api.massRequests.listAvailable,
    profile?.role === "priest" ? {} : "skip",
  );
  const myAcceptedRequests = useQuery(
    api.massRequests.listByPriest,
    profile?.role === "priest" && userId ? { priestId: userId } : "skip",
  );

  const createCheckoutSession = useAction(api.checkout.createSession);
  const acceptRequest = useMutation(api.massRequests.accept);
  const completeRequest = useMutation(api.massRequests.complete);

  async function handleAuth() {
    setLoading(true);
    try {
      if (isSignUp) {
        const result = await convex.mutation(api.auth.signUp, {
          email,
          password,
        });
        if (result.success) {
          Alert.alert("Sucesso", "Conta criada! Por favor, inicie sessão.");
          setIsSignUp(false);
        } else {
          Alert.alert("Erro", result.error || "Falha ao criar conta");
        }
      } else {
        const result = await convex.mutation(api.auth.signIn, {
          email,
          password,
        });
        if (result.success && result.userId) {
          setUserId(result.userId);
        } else {
          Alert.alert("Erro", result.error || "Falha ao iniciar sessão");
        }
      }
    } catch (error) {
      Alert.alert("Erro", "Falha na autenticação");
    }
    setLoading(false);
  }

  function addToCart() {
    if (!intention.trim()) {
      return Alert.alert(
        "Informação em falta",
        "Por favor, indique a intenção",
      );
    }

    const qty = parseInt(quantity);
    if (isNaN(qty) || qty < 1 || qty > 30) {
      return Alert.alert("Quantidade inválida", "Escolha entre 1 e 30 missas");
    }

    setCart([...cart, { intention: intention.trim(), quantity: qty }]);
    setIntention("");
    setQuantity("1");
  }

  function removeFromCart(index: number) {
    setCart(cart.filter((_, i) => i !== index));
  }

  function getTotalMasses() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function getTotalAmount() {
    return getTotalMasses() * MASS_STIPEND;
  }

  async function handleCheckout() {
    if (cart.length === 0) {
      return Alert.alert("Carrinho vazio", "Adicione pedidos ao carrinho");
    }

    if (!userId || !profile?.email) return;

    setLoading(true);
    try {
      const session = await createCheckoutSession({
        userId,
        email: profile.email,
        items: cart,
        totalAmount: getTotalAmount(),
      });

      if (!session.url) {
        throw new Error("Falha ao criar sessão de pagamento");
      }

      if (Platform.OS === "web") {
        window.location.href = session.url;
      } else {
        setCheckoutUrl(session.url);
      }
    } catch (error) {
      Alert.alert("Erro", "Falha ao iniciar pagamento");
      setLoading(false);
    }
  }

  function handleWebViewNavigation(url: string) {
    if (url.includes("/success")) {
      setCheckoutUrl(null);
      setCart([]);
      setLoading(false);
      Alert.alert("Sucesso", "Pagamento confirmado!");
    } else if (url.includes("/cancel")) {
      setCheckoutUrl(null);
      setLoading(false);
      Alert.alert("Cancelado", "Pagamento cancelado");
    }
  }

  async function handleAcceptRequest(requestId: Id<"massRequests">) {
    if (!userId) return;

    try {
      await acceptRequest({ requestId, priestId: userId });
      Alert.alert("Sucesso", "Missa aceite");
    } catch (error) {
      Alert.alert("Erro", "Falha ao aceitar pedido");
    }
  }

  async function handleCompleteRequest(requestId: Id<"massRequests">) {
    try {
      await completeRequest({ requestId });
      Alert.alert("Sucesso", "Missa marcada como celebrada");
    } catch (error) {
      Alert.alert("Erro", "Falha ao completar pedido");
    }
  }

  function handleLogout() {
    setUserId(null);
    setEmail("");
    setPassword("");
    setCart([]);
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
            <Typography className="text-burgundy-600 font-bold">
              ← Cancelar
            </Typography>
          </TouchableOpacity>
        </View>
        <WebView
          source={{ uri: checkoutUrl }}
          onNavigationStateChange={(navState) => {
            handleWebViewNavigation(navState.url);
          }}
        />
      </View>
    );
  }

  if (!userId || !profile) {
    return (
      <View className="flex-1 p-5 pt-16 medium-background">
        <H1 text="Pedidos" />
        <View className="flex-1 gap-4 justify-center my-auto px-5">
          <H3 text={isSignUp ? "Criar Conta" : "Iniciar Sessão"} />
          <TextInput
            className="soft-background text-sepia-900 p-5 rounded-xl border border-sepia-300"
            placeholder="Email"
            placeholderTextColor="#928374"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            className="soft-background text-sepia-900 p-5 rounded-xl border border-sepia-300"
            placeholder="Palavra-passe"
            placeholderTextColor="#928374"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity
            className="extreme-background p-5 rounded-xl items-center shadow-md active:opacity-90"
            onPress={handleAuth}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Typography className="text-white font-bold">
                {isSignUp ? "Registar" : "Entrar"}
              </Typography>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
            <Typography className="mt-4 text-burgundy-600 text-center font-italic">
              {isSignUp
                ? "Já tem conta? Iniciar sessão"
                : "Precisa de conta? Registar"}
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (profile.role === "user") {
    return (
      <ScrollView className="flex-1 p-5 medium-background pt-8">
        <H1 text="Intenções de Missa" />

        {/* New Request Section */}
        <View className="mb-8 soft-background p-5 rounded-2xl border border-sepia-300 shadow-sm">
          <Typography className="text-lg font-bold mb-4 text-burgundy-900">
            Novo Pedido
          </Typography>
          <TextInput
            className="bg-white/50 p-4 rounded-lg mb-4 border border-sepia-200 text-sepia-900"
            placeholder="Intenção (ex: Pelo eterno descanso de...)"
            placeholderTextColor="#928374"
            value={intention}
            onChangeText={setIntention}
            multiline
          />
          <View className="flex-row items-center mb-4 gap-3">
            <Typography className="text-base">Quantidade:</Typography>
            <TextInput
              className="bg-white/50 p-3 rounded-lg border border-sepia-200 flex-1 text-center text-sepia-900"
              placeholder="1"
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="number-pad"
            />
          </View>
          <TouchableOpacity
            className="extreme-background p-4 rounded-xl items-center shadow-sm"
            onPress={addToCart}
          >
            <Typography className="text-white font-bold text-base">
              Adicionar ao Carrinho
            </Typography>
          </TouchableOpacity>
        </View>

        {/* Cart Section */}
        {cart.length > 0 && (
          <View className="mb-8 border-t border-sepia pt-6">
            <Typography className="text-lg font-bold mb-4 text-sepia-800">
              Carrinho ({getTotalMasses()}{" "}
              {getTotalMasses() === 1 ? "missa" : "missas"})
            </Typography>
            {cart.map((item, index) => (
              <View
                key={index}
                className="soft-background p-4 rounded-xl mb-3 border border-sepia-200 flex-row justify-between items-center"
              >
                <View className="flex-1 mr-4">
                  <Typography className="font-bold text-sepia-900">
                    {item.intention}
                  </Typography>
                  <Typography className="text-xs text-sepia-600 mt-1">
                    {item.quantity} × €{(MASS_STIPEND / 100).toFixed(2)}
                  </Typography>
                </View>
                <TouchableOpacity
                  onPress={() => removeFromCart(index)}
                  className="p-2"
                >
                  <FontAwesome6
                    name="trash-can"
                    size={16}
                    color={burgundy[500]}
                  />
                </TouchableOpacity>
              </View>
            ))}

            <View className="bg-sepia-300/30 p-4 rounded-xl mb-4 border border-dashed border-sepia-400">
              <Typography className="text-lg font-bold text-center text-sepia-900">
                Total: €{(getTotalAmount() / 100).toFixed(2)}
              </Typography>
            </View>

            <TouchableOpacity
              className="bg-burgundy-700 p-5 rounded-xl items-center shadow-md mb-8"
              onPress={handleCheckout}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Typography className="text-white font-bold text-lg">
                  Pagar e Finalizar
                </Typography>
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* History Section */}
        <View className="mb-12">
          <Typography className="text-xl font-bold mb-4 text-sepia-800">
            Meus Pedidos
          </Typography>
          {!myOrders ? (
            <ActivityIndicator color={burgundy[500]} />
          ) : myOrders.length === 0 ? (
            <Typography className="text-sepia-500 text-center py-8 font-italic">
              Sem pedidos realizados
            </Typography>
          ) : (
            myOrders.map((order) => (
              <View
                key={order._id}
                className="soft-background p-4 rounded-xl mb-4 border border-sepia-300"
              >
                <View className="flex-row justify-between mb-2">
                  <Typography className="font-bold text-sepia-900">
                    {new Date(order._creationTime).toLocaleDateString("pt-PT")}
                  </Typography>
                  <Typography
                    className={`font-bold text-xs uppercase ${order.status === "paid" ? "text-green-700" : "text-amber-700"}`}
                  >
                    {order.status === "paid" ? "Pago" : "Pendente"}
                  </Typography>
                </View>
                {order.items.map((item, idx) => (
                  <Typography
                    key={idx}
                    className="text-sepia-700 text-sm italic"
                  >
                    • {item.intention}
                  </Typography>
                ))}
              </View>
            ))
          )}
        </View>

        <TouchableOpacity className="mb-20 items-center" onPress={handleLogout}>
          <Typography className="text-burgundy-600 font-semibold underline">
            Terminar Sessão
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // PRIEST VIEW
  return (
    <ScrollView className="flex-1 p-5 medium-background pt-8">
      <H1 text="Painel do Clero" />

      <View className="mb-8">
        <Typography className="text-xl font-bold mb-4 text-sepia-800">
          Missas Disponíveis
        </Typography>
        {!availableRequests ? (
          <ActivityIndicator color={burgundy[500]} />
        ) : availableRequests.length === 0 ? (
          <Typography className="text-sepia-500 text-center py-8 font-italic">
            Não há intenções aguardando celebração
          </Typography>
        ) : (
          availableRequests.map((request) => (
            <View
              key={request._id}
              className="soft-background p-5 rounded-xl mb-4 border border-sepia-300 shadow-sm"
            >
              <Typography className="font-serif-bold text-lg text-sepia-900 mb-1">
                {request.intentionName}
              </Typography>
              <Typography className="text-sepia-600 text-xs mb-4">
                Solicitado em:{" "}
                {new Date(request._creationTime).toLocaleDateString("pt-PT")}
              </Typography>
              <TouchableOpacity
                className="bg-burgundy-700 p-3 rounded-lg items-center"
                onPress={() => handleAcceptRequest(request._id)}
              >
                <Typography className="text-white font-bold">
                  Aceitar Missa
                </Typography>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>

      <View className="mb-12">
        <Typography className="text-xl font-bold mb-4 text-sepia-800">
          Minha Agenda
        </Typography>
        {!myAcceptedRequests ? (
          <ActivityIndicator color={burgundy[500]} />
        ) : myAcceptedRequests.length === 0 ? (
          <Typography className="text-sepia-500 text-center py-8 font-italic">
            Nenhuma missa aceite no momento
          </Typography>
        ) : (
          myAcceptedRequests.map((request) => (
            <View
              key={request._id}
              className="soft-background p-5 rounded-xl mb-4 border-l-4 border-burgundy-600 border-t border-r border-b border-sepia-300"
            >
              <Typography className="font-serif-bold text-base text-sepia-900 mb-2">
                {request.intentionName}
              </Typography>
              <View className="flex-row justify-between items-center">
                <Typography
                  className={`text-xs font-bold ${request.status === "completed" ? "text-green-700" : "text-burgundy-600"}`}
                >
                  {request.status === "completed" ? "✓ CELEBRADA" : "● ACEITE"}
                </Typography>
                {request.status === "accepted" && (
                  <TouchableOpacity
                    className="bg-sepia-200 px-4 py-2 rounded-lg border border-sepia-400"
                    onPress={() => handleCompleteRequest(request._id)}
                  >
                    <Typography className="text-sepia-900 font-bold text-xs">
                      Concluir
                    </Typography>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))
        )}
      </View>

      <TouchableOpacity className="mb-20 items-center" onPress={handleLogout}>
        <Typography className="text-burgundy-600 font-semibold underline">
          Terminar Sessão
        </Typography>
      </TouchableOpacity>
    </ScrollView>
  );
}
