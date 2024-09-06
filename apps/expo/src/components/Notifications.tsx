import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View, ActivityIndicator, Switch, Text, Button } from "react-native";
import { COLORS } from "~/constants/Colors";
import { useColorScheme } from "nativewind";
import { useNotifications } from "~/hooks/useNotifications";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Not() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const [notificationsPermission, setNotificationsPermission] = useState(null);

  const {
    angelusEnabled,
    dailyMassEnabled,
    angelusLoading,
    dailyMassLoading,
    toggleAngelus,
    toggleDailyMass,
  } = useNotifications();

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data.url;
        if (url) {
          router.push(`/modal?url=${url}`);
        }
      }
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

  if (notificationsPermission !== "granted") {
    return (
      <View className="bg-sepia-200 dark:bg-sepia-800 p-5">
        <Text className="dark:text-sepia-200 text-lg text-bold mb-4">
          Notificações Desativadas
        </Text>
        <Text className="dark:text-sepia-200 text-sm mb-4">
          Para receber notificações sobre orações e missas, por favor, active as
          notificações.
        </Text>
        <Button
          title="Activar Notificações"
          onPress={requestNotificationPermissions}
          color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
        />
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
          Configure Notificações
        </Text>
      </View>

      <Text className="font-serif dark:text-sepia-200 text-sm">
        Receba notificações sobre as mais importantes orações do dia.
      </Text>

      <View className="py-3">
        <View className="flex flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <FontAwesome6
              name="bell"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <View>
              <Text className="font-black text-sepia-800 dark:text-sepia-200">
                Angelus
              </Text>
              <Text className="font-serif text-sepia-800 dark:text-sepia-200 text-sm">
                Receba o toque das Trindades
              </Text>
            </View>
          </View>
          {angelusLoading ? (
            <ActivityIndicator color={COLORS["400"]} />
          ) : (
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={angelusEnabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleAngelus}
              value={angelusEnabled}
              disabled={angelusLoading}
              accessibilityLabel="Toggle angelus notifications"
            />
          )}
        </View>
        <View className="flex-row items-center ml-5">
          <Text className="text-sm text-center font-semibold text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900">
            6:00
          </Text>
          <Text className="text-sm text-center font-semibold text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900">
            12:00
          </Text>
          <Text className="text-sm text-center 12 font-semibold text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900">
            18:00
          </Text>
        </View>
      </View>

      <View className="border-t border-sepia-300" />

      <View className="py-3">
        <View className="my-1 flex flex-row items-center justify-between py-1">
          <View className="flex-row items-center justify-between gap-3">
            <FontAwesome6
              name="calendar"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <View className="w-52">
              <Text className="font-black text-sepia-800 dark:text-sepia-200">
                Missa do Dia
              </Text>
              <Text className="font-serif text-sepia-800 dark:text-sepia-200 text-sm text-wrap">
                Receba informações sobre as celebrações e comemorações do dia.
              </Text>
            </View>
          </View>
          {dailyMassLoading ? (
            <ActivityIndicator color={COLORS["400"]} />
          ) : (
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={dailyMassEnabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDailyMass}
              value={dailyMassEnabled}
              disabled={dailyMassLoading}
              accessibilityLabel="Toggle daily notifications"
            />
          )}
        </View>
        <View className="flex-row items-center ml-5">
          <Text className="text-sm font-semibold text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900 text-center">
            7:00
          </Text>
        </View>
      </View>

      <View className="border-t border-sepia-300" />

      <View className="py-3">
        <View className="my-1 flex flex-row items-center justify-between py-1">
          <View className="flex-row items-center justify-between gap-3">
            <View className="flex-row items-center gap-3">
              <FontAwesome6
                name="hourglass-start"
                size={15}
                color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
              />
              <View>
                <Text className="font-black text-sepia-800 dark:text-sepia-200">
                  Novenas
                </Text>
                <Text className="font-serif text-sepia-800 dark:text-sepia-200 text-sm">
                  Brevemente
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
