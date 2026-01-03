import {
  Settings,
  Bell,
  Calendar,
  Circle,
  BookPlus,
} from "lucide-react-native";
import { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  Switch,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { H6 } from "~/components/Headings";
import { COLORS } from "~/constants/Colors";
import { useSettings } from "~/providers/settings";
import { Typography } from "./typography";
import { webNotificationService } from "~/services/webNotifications";

const NotificationToggle = ({
  title,
  icon,
  description,
  times,
  enabled,
  toggle,
}: {
  title: string;
  icon: string;
  description: string;
  times: string[];
  enabled: boolean;
  toggle: () => void;
}) => {
  const colorScheme = useColorScheme();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "bell":
        return Bell;
      case "calendar":
        return Calendar;
      case "circle":
        return Circle;
      case "book":
        return BookPlus;
      default:
        return Settings;
    }
  };

  const IconComponent = getIconComponent(icon);

  return (
    <View className="py-3">
      <View className="my-1 py-1">
        <View className="flex flex-row items-center justify-between">
          <IconComponent
            size={15}
            color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
          />
          <View className="flex-1 ml-3">
            <Typography className="bold text-sepia-800 dark:text-sepia-200">
              {title}
            </Typography>
            <Typography className="font-display text-sepia-800 dark:text-sepia-200 text-sm">
              {description}
            </Typography>
          </View>
          <View className="ml-3">
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={enabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor={COLORS["500"]}
              onValueChange={toggle}
              value={enabled}
              accessibilityLabel={`Toggle ${title.toLowerCase()} notifications`}
            />
          </View>
        </View>
      </View>
      <View className="flex-row flex-wrap items-center ml-5">
        {times.map((time) => (
          <Typography
            key={time}
            className="text-sm text-center text-sepia-200 ml-2 mt-2 px-2 py-1 rounded-full bg-sepia-900"
          >
            {time}
          </Typography>
        ))}
      </View>
    </View>
  );
};

export const Notifications = () => {
  const colorScheme = useColorScheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    settings,
    setNotificationPref,
    list,
    permissionStatus,
    requestPermission,
    isSoftRejected,
  } = useSettings();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDebugPanel, setShowDebugPanel] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Web platform now supports notifications
  if (Platform.OS === "web") {
    // Show the same notification settings as mobile
    // but fall through to the normal UI below
  }

  if (permissionStatus !== "granted") {
    const isWeb = Platform.OS === "web";

    return (
      <View className="py-3 my-3 border-b border-sepia-300 dark:border-sepia-700">
        <View className="flex-row items-center gap-1">
          <Settings
            size={15}
            color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
          />
          <H6 text={isWeb ? "Notificações Web" : "Notificações Desativadas"} />
        </View>

        {isWeb ? (
          <>
            <Typography className="font-display dark:text-sepia-200 text-sm">
              Receba lembretes de oração diretamente no seu navegador, mesmo
              quando a página não estiver aberta.
            </Typography>
            <Typography className="font-display dark:text-sepia-200 text-sm mt-2">
              🔔 <Typography className="bold">Angelus</Typography> - 6:00,
              12:00, 18:00
            </Typography>
            <Typography className="font-display dark:text-sepia-200 text-sm">
              📅 <Typography className="bold">Missa do Dia</Typography> - 7:00
            </Typography>
            <Typography className="font-display dark:text-sepia-200 text-sm">
              🙏 <Typography className="bold">Novenas</Typography> - 20:00
            </Typography>
            <Typography className="font-display dark:text-sepia-200 text-sm">
              ⏰ <Typography className="bold">Ofício</Typography> - 8 vezes ao
              dia
            </Typography>
            <Typography className="font-display text-xs text-sepia-700 dark:text-sepia-300 mt-3">
              O seu navegador pedirá permissão para mostrar notificações.
              {isSoftRejected
                ? ' Clique em "Permitir" para receber os lembretes.'
                : ""}
            </Typography>
          </>
        ) : (
          <>
            <Typography className="font-display dark:text-sepia-200 text-sm">
              {isSoftRejected
                ? "Os lembretes de oração ajudam a santificar o seu dia."
                : "Para receber notificações active as notificações."}
            </Typography>
            <Typography className="font-display dark:text-sepia-200 text-xs">
              {isSoftRejected
                ? '"Orai sem cessar" (1 Tes 5:17)'
                : "Pode ter que activar nas definições do dispositivo."}
            </Typography>
          </>
        )}

        <Pressable
          className="bg-sepia-800 dark:bg-sepia-200 items-center justify-center rounded mt-3 active:bg-sepia-700 dark:active:bg-sepia-300"
          onPressOut={async () => {
            const success = await requestPermission();
            if (success && isWeb) {
              setShowSuccessMessage(true);
              setTimeout(() => setShowSuccessMessage(false), 3000);
            }
          }}
        >
          <Typography className="m-5 text-sepia-300 dark:text-sepia-700">
            {isWeb ? "Permitir Notificações" : "Activar Notificações"}
          </Typography>
        </Pressable>

        {showSuccessMessage && isWeb && (
          <View className="mt-3 p-3 bg-green-100 dark:bg-green-900 rounded">
            <Typography className="text-center text-green-800 dark:text-green-200 text-sm">
              ✅ Notificações ativadas! Receberá lembretes de oração mesmo com o
              navegador fechado.
            </Typography>
          </View>
        )}
      </View>
    );
  }

  return (
    <ScrollView className="py-3 my-3 border-b border-sepia-300 dark:border-sepia-700">
      <View className="flex-row items-center gap-1">
        <Settings
          size={15}
          color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
        />
        <H6 text="Configurar Notificações" />
      </View>

      <Typography className="font-display dark:text-sepia-200 text-sm">
        Receba notificações sobre as mais importantes orações do dia.
      </Typography>

      <Typography className="font-display text-xs text-sepia-700 dark:text-sepia-300">
        As notificações dinâmicas, como as da Missa do Dia e Novenas, necessitam
        de que o utilizador use a aplicação pelo menos uma vez por semana.
      </Typography>

      <NotificationToggle
        title="Angelus"
        icon="bell"
        description="Receba o toque das Trindades"
        times={["6:00", "12:00", "18:00"]}
        enabled={settings.angelusEnabled}
        toggle={() => setNotificationPref("ANGELUS", !settings.angelusEnabled)}
      />

      <NotificationToggle
        title="Missa do Dia"
        icon="calendar"
        description="Receba informações sobre as celebrações e comemorações do dia."
        times={["7:00"]}
        enabled={settings.massEnabled}
        toggle={() => setNotificationPref("MASS", !settings.massEnabled)}
      />

      <NotificationToggle
        title="Novenas"
        icon="circle"
        description="Receba alertas nos dias de novena."
        times={["20:00"]}
        enabled={settings.novenaEnabled}
        toggle={() => setNotificationPref("NOVENA", !settings.novenaEnabled)}
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
        enabled={settings.officeEnabled}
        toggle={() => setNotificationPref("OFFICE", !settings.officeEnabled)}
      />

      <View className="mt-5">
        {list?.length > 0 ? (
          <TouchableOpacity
            onPressOut={toggleExpand}
            className="p-3 soft-background text-sepia-700 dark:text-sepia-300"
          >
            <Typography className="text-center bold text-sepia-800 dark:text-sepia-200">
              {isExpanded
                ? "Esconder lista notificações"
                : "Mostrar lista de notificações"}
            </Typography>
          </TouchableOpacity>
        ) : undefined}

        {isExpanded && list?.length ? (
          <View>
            {list.map((notification) => (
              <View
                key={notification.identifier}
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderColor:
                    colorScheme === "light" ? COLORS["300"] : COLORS["700"],
                }}
              >
                <Typography className="text-sepia-800 dark:text-sepia-200">
                  {notification.content.title}
                </Typography>
                {notification.content.body ? (
                  <Typography className="text-sepia-700 dark:text-sepia-300">
                    {notification.content.body}
                  </Typography>
                ) : undefined}
              </View>
            ))}
          </View>
        ) : undefined}

        {Platform.OS === "web" && permissionStatus === "granted" && (
          <View className="mt-5 p-3 border border-sepia-300 dark:border-sepia-700 rounded">
            <TouchableOpacity
              onPress={() => {
                if (!showDebugPanel) {
                  setDebugInfo(webNotificationService.getDebugInfo());
                }
                setShowDebugPanel(!showDebugPanel);
              }}
            >
              <Typography className="text-center text-sepia-600 dark:text-sepia-400 text-sm">
                {showDebugPanel ? "Esconder" : "Mostrar"} Depuração Web
              </Typography>
            </TouchableOpacity>

            {showDebugPanel && (
              <View className="mt-3">
                <Typography className="text-sepia-800 dark:text-sepia-200 text-xs">
                  <Typography className="bold">Estado:</Typography>{" "}
                  {JSON.stringify(debugInfo, null, 2)}
                </Typography>

                <TouchableOpacity
                  className="bg-green-500 p-2 rounded mt-2"
                  onPress={() => {
                    const success =
                      webNotificationService.scheduleTestNotification();
                    if (success) {
                      console.log(
                        "✅ Notificação agendada para daqui a 5 segundos!",
                      );
                    }
                  }}
                >
                  <Typography className="text-white text-center text-sm">
                    Testar Notificação Imediata
                  </Typography>
                </TouchableOpacity>

                <TouchableOpacity
                  className="bg-green-500 p-2 rounded mt-2"
                  onPress={() => {
                    const success =
                      webNotificationService.scheduleTestNotification();
                    if (success) {
                      console.log(
                        "✅ Notificação agendada para daqui a 5 segundos!",
                      );
                    }
                  }}
                >
                  <Typography className="text-white text-center text-sm">
                    Testar Agendamento (5s)
                  </Typography>
                </TouchableOpacity>

                <TouchableOpacity
                  className="bg-gray-500 p-2 rounded mt-2"
                  onPress={() => {
                    setDebugInfo(webNotificationService.getDebugInfo());
                  }}
                >
                  <Typography className="text-white text-center text-sm">
                    Atualizar Estado
                  </Typography>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};
