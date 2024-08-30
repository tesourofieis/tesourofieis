import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function MoreScreen() {
  const router = useRouter();

  return (
    <View>
      <Button
        title="Missal"
        onPress={() =>
          router.push({ pathname: "/modal", params: { url: "missal" } })
        }
      />
      <Button
        title="Devocionário"
        onPress={() =>
          router.push({ pathname: "/modal", params: { url: "devocionario" } })
        }
      />
      <Button
        title="Fé"
        onPress={() =>
          router.push({ pathname: "/modal", params: { url: "fe" } })
        }
      />
      <Button
        title="Cânticos"
        onPress={() =>
          router.push({ pathname: "/modal", params: { url: "canticos" } })
        }
      />
      <Button
        title="Ritual"
        onPress={() =>
          router.push({ pathname: "/modal", params: { url: "ritual" } })
        }
      />
    </View>
  );
}
