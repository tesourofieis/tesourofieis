import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import * as Notifications from "expo-notifications";
import { Link, useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import {
  Button,
  Platform,
  Pressable,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "~/constants/Colors";
import { useNotifications } from "~/providers/notifications";

export default function Not() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const [notificationsPermission, setNotificationsPermission] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const { notificationPrefs, setNotificationPref, list } = useNotifications();

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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (Platform.OS === "web") {
    return (
      <SafeAreaView>
        <View className="bg-sepia-200 dark:bg-sepia-800 p-5">
          <View className="flex-row items-center">
            <FontAwesome6
              name="gear"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <Text className="font-black dark:text-sepia-200 text-left p-3 text-xl text-bold">
              Apenas em dispositivos móveis.
            </Text>
          </View>

          <View>
            <Text className="text-sm text-sepia-800 dark:text-sepia-200">
              Para receber notificações instale a nossa aplicação para telemóvel
              para receber notificações.
            </Text>

            <View className="flex-row items-center justify-center gap-5 mt-3">
              <Link
                className="bg-sepia-500 p-3"
                href="https://apps.apple.com/no/app/tesouro-dos-fi%C3%A9is/id6689521725"
              >
                iOS{" "}
                <FontAwesome6
                  name="apple"
                  size={15}
                  color={
                    colorScheme === "light" ? COLORS["200"] : COLORS["800"]
                  }
                />
              </Link>

              <Link
                className="bg-sepia-500 p-3"
                href="https://play.google.com/store/apps/details?id=com.tesourofieis.app"
              >
                Android{" "}
                <FontAwesome6
                  name="android"
                  size={15}
                  color={
                    colorScheme === "light" ? COLORS["200"] : COLORS["800"]
                  }
                />
              </Link>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  if (notificationsPermission !== "granted") {
    return (
      <SafeAreaView>
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
          <Pressable
            className="bg-sepia-800 dark:bg-sepia-200 items-center justify-center rounded mt-3"
            onPress={requestNotificationPermissions}
          >
            <Text className="m-5 text-sepia-300 dark:text-sepia-700">
              Activar Notificações
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView className="px-5">
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
          enabled={notificationPrefs.ANGELUS.enabled}
          toggle={() =>
            setNotificationPref("ANGELUS", !notificationPrefs.ANGELUS.enabled)
          }
        />

        <NotificationToggle
          title="Missa do Dia"
          icon="calendar"
          description="Receba informações sobre as celebrações e comemorações do dia."
          times={["7:00"]}
          enabled={notificationPrefs.MASS.enabled}
          toggle={() =>
            setNotificationPref("MASS", !notificationPrefs.MASS.enabled)
          }
        />

        <NotificationToggle
          title="Novenas"
          icon="circle"
          description="Receba alertas nos dias de novena."
          times={["20:00"]}
          enabled={notificationPrefs.NOVENA.enabled}
          toggle={() =>
            setNotificationPref("NOVENA", !notificationPrefs.NOVENA.enabled)
          }
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
          enabled={notificationPrefs.OFFICE.enabled}
          toggle={() =>
            setNotificationPref("OFFICE", !notificationPrefs.OFFICE.enabled)
          }
        />

        <View className="bg-sepia-200 dark:bg-sepia-800 mb-5">
          {list?.length > 0 ? (
            <TouchableOpacity
              onPress={toggleExpand}
              className="p-3 bg-sepia-300 dark:bg-sepia-700 text-sepia-700 dark:text-sepia-300"
            >
              <Text className="text-center font-bold">
                {isExpanded
                  ? "Esconder lista notificações"
                  : "Mostrar lista de notificações"}
              </Text>
            </TouchableOpacity>
          ) : undefined}

          {isExpanded && list?.length ? (
            <View>
              {list
                .sort(
                  (a, b) =>
                    a.trigger.hour - b.trigger.hour ||
                    a.trigger.weekday - b.trigger.weekday,
                )
                .map((notification) => (
                  <View
                    key={notification.identifier}
                    style={{
                      padding: 10,
                      borderBottomWidth: 1,
                      borderColor: "#ccc",
                    }}
                  >
                    <Text className="text-sepia-800 dark:text-sepia-200">
                      {notification.content.title}
                    </Text>
                    {notification.content.body ? (
                      <Text className="text-sepia-700 dark:text-sepia-300">
                        {notification.content.body}
                      </Text>
                    ) : undefined}
                    {notification.trigger.hour ? (
                      <Text className="text-sepia-800 dark:text-sepia-200">
                        {notification.trigger.hour}
                      </Text>
                    ) : undefined}
                    {notification.trigger.weekday ? (
                      <Text className="text-sepia-800 dark:text-sepia-200">
                        Dia da semana: {notification.trigger.weekday}
                      </Text>
                    ) : undefined}
                  </View>
                ))}
            </View>
          ) : undefined}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const NotificationToggle = ({
  title,
  icon,
  description,
  times,
  enabled,
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
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={enabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggle}
              value={enabled}
              accessibilityLabel={`Toggle ${title.toLowerCase()} notifications`}
            />
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
