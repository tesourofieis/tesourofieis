import { burgundy } from "config";
import { Trash2 } from "lucide-react-native";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Typography } from "./typography";
import { CartItem } from "./User";

export function Cart({
  items,
  onRemove,
  onCheckout,
  loading,
}: {
  items: CartItem[];
  onRemove: (index: number) => void;
  onCheckout: () => void;
  loading: boolean;
}) {
  if (items.length === 0) return null;

  const totalMasses = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCents = items.reduce(
    (sum, item) => sum + item.quantity * item.amountPerMass,
    0,
  );

  return (
    <View className="mb-8 border-t border-sepia pt-6">
      <Typography className="text-lg bold mb-4 text-sepia-800">
        A pedir ({totalMasses} missa{totalMasses !== 1 ? "s" : ""})
      </Typography>

      {items.map((item, idx) => (
        <View
          key={idx}
          className="soft-background p-4 rounded-xl mb-3 border border-sepia-200 flex-row justify-between items-start"
        >
          <View className="flex-1 mr-4">
            <Typography className="bold text-sepia-900">
              {item.intention}
            </Typography>
            {item.preferredStartDate && item.preferredEndDate && (
              <Typography className="text-xs text-sepia-500 mt-1">
                Período: {item.preferredStartDate.toLocaleDateString("pt-PT")} —{" "}
                {item.preferredEndDate.toLocaleDateString("pt-PT")}
              </Typography>
            )}
            <Typography className="text-sm text-sepia-700 mt-1">
              {item.quantity} × €{(item.amountPerMass / 100).toFixed(2)} = €
              {((item.quantity * item.amountPerMass) / 100).toFixed(2)}
            </Typography>
          </View>
          <TouchableOpacity onPress={() => onRemove(idx)}>
            <Trash2 size={20} color={burgundy[500]} />
          </TouchableOpacity>
        </View>
      ))}

      <View className="bg-sepia-300/30 p-5 rounded-xl border border-dashed border-sepia-400">
        <Typography className="text-2xl bold text-center text-sepia-900">
          Total: €{(totalCents / 100).toFixed(2)}
        </Typography>
      </View>

      <TouchableOpacity
        className="bg-burgundy-700 p-5 rounded-xl items-center shadow-md mt-6"
        onPress={onCheckout}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Typography className="text-white bold text-lg">Pagar</Typography>
        )}
      </TouchableOpacity>
    </View>
  );
}
