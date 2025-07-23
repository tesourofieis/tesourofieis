import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { H6 } from "~/components/Headings";
import PageWrapper from "~/components/Page";
import { COLORS } from "~/constants/Colors";
import { useSettings } from "~/providers/settings";

export type FontSize = "small" | "normal" | "big";

const FONT_SIZE_MAP: Record<FontSize, number> = {
  small: 14,
  normal: 16,
  big: 20,
};

export default function PageNot() {
  const colorScheme = useColorScheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    settings,
    setNotificationPref,
    setFontSize,
    list,
    permissionStatus,
    requestPermission,
    isSoftRejected,
  } = useSettings();

  console.log("page", settings.fontSize);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (Platform.OS === "web") {
    return (
      <PageWrapper>
        <View>
          <FontAwesome6
            name="gear"
            size={15}
            color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
          />
          <H6 text="Apenas em dispositivos móveis." />
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
                color={colorScheme === "light" ? COLORS["200"] : COLORS["800"]}
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
                color={colorScheme === "light" ? COLORS["200"] : COLORS["800"]}
              />
            </Link>
          </View>
        </View>
      </PageWrapper>
    );
  }

  if (permissionStatus !== "granted") {
    return (
      <SafeAreaView className="flex-1">
        <View className="bg-sepia-200 dark:bg-sepia-800 p-5">
          <View className="flex-row items-center">
            <FontAwesome6
              name="gear"
              size={15}
              color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
            />
            <H6 text="Notificações Desativadas" />
          </View>

          <Text className="font-serif dark:text-sepia-200 text-sm">
            {isSoftRejected
              ? "Os lembretes de oração ajudam a santificar o seu dia."
              : "Para receber notificações active as notificações."}
          </Text>
          <Text className="font-serif dark:text-sepia-200 text-xs">
            {isSoftRejected
              ? '"Orai sem cessar" (1 Tes 5:17)'
              : "Pode ter que activar nas definições do dispositivo."}
          </Text>
          <Pressable
            className="bg-sepia-800 dark:bg-sepia-200 items-center justify-center rounded mt-3 active:bg-sepia-700 dark:active:bg-sepia-300"
            onPressOut={requestPermission}
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
    <SafeAreaView className="flex-1">
      <ScrollView className="px-5 bg-sepia-200 dark:bg-sepia-800 h-full">
        <FontSizeSelector
          selectedSize={settings.fontSize}
          onSizeChange={(size) => setFontSize(size)}
          colorScheme={colorScheme}
        />

        <View className="flex-row items-center">
          <FontAwesome6
            name="gear"
            size={15}
            color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
          />
          <H6 text="Configurar Notificações" />
        </View>

        <Text className="font-serif dark:text-sepia-200 text-sm">
          Receba notificações sobre as mais importantes orações do dia.
        </Text>

        <Text className="font-serif text-xs text-sepia-700 dark:text-sepia-300">
          As notificações dinâmicas, como as da Missa do Dia e Novenas,
          necessitam de que o utilizador use a aplicação pelo menos uma vez por
          semana.
        </Text>

        <NotificationToggle
          title="Angelus"
          icon="bell"
          description="Receba o toque das Trindades"
          times={["6:00", "12:00", "18:00"]}
          enabled={settings.angelusEnabled}
          toggle={() =>
            setNotificationPref("ANGELUS", !settings.angelusEnabled)
          }
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
              className="p-3 bg-sepia-300 dark:bg-sepia-700 text-sepia-700 dark:text-sepia-300"
            >
              <Text className="text-center font-bold text-sepia-800 dark:text-sepia-200">
                {isExpanded
                  ? "Esconder lista notificações"
                  : "Mostrar lista de notificações"}
              </Text>
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
                  <Text className="text-sepia-800 dark:text-sepia-200">
                    {notification.content.title}
                  </Text>
                  {notification.content.body ? (
                    <Text className="text-sepia-700 dark:text-sepia-300">
                      {notification.content.body}
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

const FontSizeSelector = ({
  selectedSize,
  onSizeChange,
  colorScheme,
}: {
  selectedSize: string;
  onSizeChange: (size: FontSize) => void;
  colorScheme: string | null | undefined;
}) => {
  const sizes: FontSize[] = ["small", "normal", "big"];

  return (
    <View className="py-3 my-3 border-b border-sepia-300 dark:border-sepia-700">
      <View className="flex-row items-center mb-3">
        <FontAwesome6
          name="text-height"
          size={15}
          color={colorScheme === "light" ? COLORS["900"] : COLORS["200"]}
        />
        <H6 text="Tamanho da Letra" />
      </View>

      <View className="flex-row justify-between items-center">
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => onSizeChange(size)}
            className={`flex-1 mx-1 py-3 px-4 rounded-lg items-center ${
              selectedSize === size
                ? "bg-sepia-800 dark:bg-sepia-200"
                : "bg-sepia-300 dark:bg-sepia-700"
            }`}
          >
            <Text
              className={`font-medium ${
                selectedSize === size
                  ? "text-sepia-200 dark:text-sepia-800"
                  : "text-sepia-800 dark:text-sepia-200"
              }`}
              style={{ fontSize: FONT_SIZE_MAP[size] }}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const NotificationToggle = ({
  title,
  icon,
  description,
  times,
  enabled,
  toggle,
}) => {
  const colorScheme = useColorScheme();
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
            <Text className="font-bold text-sepia-800 dark:text-sepia-200">
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
