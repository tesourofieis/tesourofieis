import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, Switch, Text, View } from "react-native";
import { COLORS } from "~/constants/Colors";
import { useNotifications } from "~/hooks/useNotifications";

export default function Not() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const [notificationsPermission, setNotificationsPermission] = useState(null);

  const {
    angelusEnabled,
    dailyMassEnabled,
    novenaEnabled,
    angelusLoading,
    dailyMassLoading,
    novenaLoading,
    toggleAngelus,
    toggleDailyMass,
    toggleNovena,
  } = useNotifications();

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
          Configure Notificações
        </Text>
      </View>

      <Text className="font-serif dark:text-sepia-200 text-sm">
        Receba notificações sobre as mais importantes orações do dia.
      </Text>

      <View className="py-3">
        <View className="my-1 py-1">
          <View className="flex flex-row items-center justify-between">
            <FontAwesome6
              name="bell"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <View className="flex-1 ml-3">
              <Text className="font-black text-sepia-800 dark:text-sepia-200">
                Angelus
              </Text>
              <Text className="font-serif text-sepia-800 dark:text-sepia-200 text-sm">
                Receba o toque das Trindades
              </Text>
            </View>
            <View className="ml-3">
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
          </View>
        </View>
        <View className="flex-row items-center ml-5">
          <Text className="text-sm text-center text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900">
            6:00
          </Text>
          <Text className="text-sm text-center text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900">
            12:00
          </Text>
          <Text className="text-sm text-center text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900">
            18:00
          </Text>
        </View>
      </View>

      <View className="border-t border-sepia-300" />

      <View className="py-3">
        <View className="my-1 py-1">
          <View className="flex flex-row items-center justify-between">
            <FontAwesome6
              name="calendar"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <View className="flex-1 ml-3">
              <Text className="font-black text-sepia-800 dark:text-sepia-200">
                Missa do Dia
              </Text>
              <Text className="font-serif text-sepia-800 dark:text-sepia-200 text-sm">
                Receba informações sobre as celebrações e comemorações do dia.
              </Text>
            </View>
            <View className="ml-3">
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
          </View>
        </View>
        <View className="flex-row items-center ml-5">
          <Text className="text-sm text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900 text-center">
            7:00
          </Text>
        </View>
      </View>

      <View className="border-t border-sepia-300" />

      <View className="py-3">
        <View className="my-1 py-1">
          <View className="flex flex-row items-center justify-between">
            <FontAwesome6
              name="circle"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <View className="flex-1 ml-3">
              <Text className="font-black text-sepia-800 dark:text-sepia-200">
                Novenas
              </Text>
              <Text className="font-serif text-sepia-800 dark:text-sepia-200 text-sm">
                Receba alertas nos dias de novena.
              </Text>
            </View>
            <View className="ml-3">
              {novenaLoading ? (
                <ActivityIndicator color={COLORS["400"]} />
              ) : (
                <Switch
                  trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
                  thumbColor={novenaEnabled ? COLORS["200"] : COLORS["500"]}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleNovena}
                  value={novenaEnabled}
                  disabled={novenaLoading}
                  accessibilityLabel="Toggle daily notifications"
                />
              )}
            </View>
          </View>
        </View>
        <View className="flex-row items-center ml-5">
          <Text className="text-sm text-sepia-200 ml-2 px-2 py-1 rounded-full bg-sepia-900 text-center">
            20:00
          </Text>
        </View>
      </View>
    </View>
  );
}
