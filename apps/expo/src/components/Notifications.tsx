import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Platform,
  Switch,
  Text,
  View,
} from "react-native";
import { COLORS } from "~/constants/Colors";
import { useNotifications } from "~/hooks/useNotifications";

export default function Not() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const [notificationsPermission, setNotificationsPermission] = useState(null);

  const { angelus, mass, novena, office } = useNotifications();

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data.url;
        if (url) {
          router.push(`/modal?url=${url}`);
        }
      },
    );

    checkNotificationPermissions();

    return () => subscription.remove();
  }, [router]);

  const checkNotificationPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setNotificationsPermission(status);
  };

  const requestNotificationPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    setNotificationsPermission(status);
  };

  if (Platform.OS === "web") {
    return;
  }

  if (notificationsPermission !== "granted") {
    return (
      <View className="bg-sepia-200 dark:bg-sepia-800 p-5">
        <View className="flex-row items-center">
          <FontAwesome6
            name="gear"
            size={15}
            color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
          />
          <Text className="font-black dark:text-sepia-200 text-left p-3 text-xl text-bold">
            Notificações Desativadas
          </Text>
        </View>

        <Text className="font-serif dark:text-sepia-200 text-sm">
          Para receber notificações active as notificações.
        </Text>
        <Text className="font-serif dark:text-sepia-200 text-xs">
          Pode ter que activar nas definições do dispositivo.
        </Text>
        <View className="p-3">
          <Button
            title="Activar Notificações"
            onPress={requestNotificationPermissions}
            color={colorScheme === "light" ? COLORS["200"] : COLORS["900"]}
          />
        </View>
      </View>
    );
  }

  return (
    <View className="bg-sepia-200 dark:bg-sepia-800 p-5">
      <View className="flex-row items-center">
        <FontAwesome6
          name="gear"
          size={15}
          color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
        />
        <Text className="font-black dark:text-sepia-200 text-left p-3 text-xl text-bold">
          Configurar Notificações
        </Text>

        <Text className="text-sm text-center text-sepia-200 px-3 py-1 rounded-full bg-red-800">
          Beta
        </Text>
      </View>

      <Text className="font-serif dark:text-sepia-200 text-sm">
        Receba notificações sobre as mais importantes orações do dia.
      </Text>

      <NotificationToggle
        title="Angelus"
        icon="bell"
        description="Receba o toque das Trindades"
        times={["6:00", "12:00", "18:00"]}
        {...angelus}
      />

      <NotificationToggle
        title="Missa do Dia"
        icon="calendar"
        description="Receba informações sobre as celebrações e comemorações do dia."
        times={["7:00"]}
        {...mass}
      />

      <NotificationToggle
        title="Novenas"
        icon="circle"
        description="Receba alertas nos dias de novena."
        times={["20:00"]}
        {...novena}
      />

      <NotificationToggle
        title="Ofício"
        icon="book"
        description="Receba lembretes para o Pequeno Ofício de Nossa Senhora."
        times={[
          "0:00",
          "3:00",
          "6:00",
          "9:00",
          "12:00",
          "15:00",
          "18:00",
          "21:00",
        ]}
        {...office}
      />
    </View>
  );
}

const NotificationToggle = ({
  title,
  icon,
  description,
  times,
  enabled,
  loading,
  toggle,
}) => {
  const { colorScheme } = useColorScheme();
  return (
    <View className="py-3">
      <View className="my-1 py-1">
        <View className="flex flex-row items-center justify-between">
          <FontAwesome6
            name={icon}
            size={15}
            color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
          />
          <View className="flex-1 ml-3">
            <Text className="font-black text-sepia-800 dark:text-sepia-200">
              {title}
            </Text>
            <Text className="font-serif text-sepia-800 dark:text-sepia-200 text-sm">
              {description}
            </Text>
          </View>
          <View className="ml-3">
            {loading ? (
              <ActivityIndicator color={COLORS["400"]} />
            ) : (
              <Switch
                trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
                thumbColor={enabled ? COLORS["200"] : COLORS["500"]}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggle}
                value={enabled}
                disabled={loading}
                accessibilityLabel={`Toggle ${title.toLowerCase()} notifications`}
              />
            )}
          </View>
        </View>
      </View>
      <View className="flex-row flex-wrap items-center ml-5">
        {times.map((time) => (
          <Text
            key={time}
            className="text-sm text-center text-sepia-200 ml-2 mt-2 px-2 py-1 rounded-full bg-sepia-900"
          >
            {time}
          </Text>
        ))}
      </View>
    </View>
  );
};
