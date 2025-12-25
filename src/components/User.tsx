import { useAuthActions } from "@convex-dev/auth/react";
import { api } from "convex/_generated/api";
import { useQuery, useAction } from "convex/react";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { H1 } from "./Headings";
import { Typography } from "./typography";
import { UserOrders } from "./UserOrders";
import { Cart } from "./Cart";
import { MassRequestForm } from "./MassRequestForm";

export interface MassRequestDraft {
  title: string;
  details: string;
  quantity: number;
  stipendCents: number;
  startDate: Date | null;
  endDate: Date | null;
}

export interface CartItem {
  intention: string;
  quantity: number;
  amountPerMass: number;
  preferredStartDate?: Date;
  preferredEndDate?: Date;
}

export const User = () => {
  const [loading, setLoading] = useState(false);
  const { signOut } = useAuthActions();
  const [, setCheckoutUrl] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const viewer = useQuery(api.users.viewer);

  const myOrders = useQuery(
    api.orders.listUserOrders,
    viewer ? { userId: viewer._id } : "skip",
  );

  const createCheckoutSession = useAction(api.checkout.createSession);

  async function handleSignOut() {
    await signOut();
    setCart([]);
  }

  function handleAddToCart(draft: MassRequestDraft) {
    const combinedIntention = [draft.title, draft.details]
      .filter(Boolean)
      .join(": ");

    setCart([
      ...cart,
      {
        intention: combinedIntention,
        quantity: draft.quantity,
        amountPerMass: draft.stipendCents,
        preferredStartDate: draft.startDate || undefined,
        preferredEndDate: draft.endDate || undefined,
      },
    ]);
  }

  function removeFromCart(index: number) {
    setCart(cart.filter((_, i) => i !== index));
  }

  async function handleCheckout() {
    if (cart.length === 0) {
      return Alert.alert("Carrinho vazio", "Adicione pedidos");
    }
    if (!viewer) return;

    setLoading(true);
    try {
      const totalAmount = cart.reduce(
        (sum, item) => sum + item.quantity * item.amountPerMass,
        0,
      );

      const session = await createCheckoutSession({
        userId: viewer._id,
        email: viewer.email,
        items: cart,
        totalAmount,
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

  return (
    <ScrollView className="flex-1 p-5 medium-background pt-8">
      <H1 text={`Olá ${viewer?.name}`} />

      <MassRequestForm onAdd={handleAddToCart} />

      <Cart
        items={cart}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
        loading={loading}
      />

      <View className="mb-12">
        <Typography className="text-xl bold mb-4 text-sepia-800">
          Meus Pedidos
        </Typography>
        <UserOrders orders={myOrders} />
      </View>

      <TouchableOpacity className="mb-20 items-center" onPress={handleSignOut}>
        <Typography className="text-burgundy-600 font-semibold underline">
          Terminar Sessão
        </Typography>
      </TouchableOpacity>
    </ScrollView>
  );
};
