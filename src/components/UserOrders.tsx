import { burgundy } from "config";
import { ActivityIndicator, View } from "react-native";
import { Typography } from "./typography";

export function UserOrders({ orders }: { orders: any[] | undefined }) {
  if (!orders) return <ActivityIndicator color={burgundy[500]} />;

  if (orders.length === 0) {
    return (
      <Typography className="text-sepia-500 text-center py-8 italic">
        Sem pedidos realizados
      </Typography>
    );
  }

  return (
    <>
      {orders.map((order) => (
        <View
          key={order._id}
          className="soft-background p-4 rounded-xl mb-4 border border-sepia-300"
        >
          <View className="flex-row justify-between mb-2">
            <Typography className="bold text-sepia-900">
              {new Date(order._creationTime).toLocaleDateString("pt-PT")}
            </Typography>
            <Typography
              className={`bold text-xs uppercase ${
                order.status === "paid"
                  ? "text-green-700"
                  : order.status === "refunded"
                    ? "text-red-700"
                    : "text-amber-700"
              }`}
            >
              {order.status === "paid"
                ? "Pago"
                : order.status === "refunded"
                  ? "Reembolsado"
                  : "Pendente"}
            </Typography>
          </View>
          {order.items.map((item: any, idx: number) => (
            <Typography key={idx} className="text-sepia-700 text-sm italic">
              • {item.intention}
            </Typography>
          ))}
        </View>
      ))}
    </>
  );
}
