import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import * as Clipboard from "expo-clipboard";
import * as WebBrowser from "expo-web-browser";
import {
  Pressable,
  useColorScheme,
  View,
  Platform,
  ToastAndroid,
  Alert,
  ScrollView,
} from "react-native";
import { burgundy } from "config";
import { COLORS } from "~/constants/Colors";
import { cardBase } from "./LinkCard";
import type { GestureResponderEvent } from "react-native";
import { Typography } from "./typography";

export function getColor(color?: string) {
  switch (color) {
    case "w":
      return "white";
    case "r":
      return burgundy[500];
    case "g":
      return "green";
    case "v":
      return "violet";
    case "b":
      return "black";
    default:
      return "gray";
  }
}

interface ExternalLink {
  name: string;
  url: string;
  icon: string;
  title: string;
  desc: string;
  copyValue?: string;
}

const externalLinks: ExternalLink[] = [
  {
    name: "KO-FI",
    url: "https://ko-fi.com/tesourofieis",
    icon: "mug-hot",
    title: "Ajudar",
    desc: "Ajude a manter o Tesouro dos Fiéis com uma doação.",
  },
  {
    name: "Bitcoin",
    url: "bitcoin:bc1qh0sjg9m26ejhg7qxqevs5rldyysy0yc7mdpve5",
    icon: "bitcoin-sign",
    title: "Doar Bitcoin",
    desc: "Ajude-nos com uma doação em Bitcoin.",
    copyValue: "BC1QAJM5VN255SEU2UGSSVNN3APXX7TQLEW4E0J7CV",
  },
  {
    name: "Email",
    url: "mailto:info@tesourofieis.com",
    icon: "envelope",
    title: "Falar",
    desc: "Fale connosco por email. Caso tenha alguma dúvida ou sugestão.",
  },
  {
    name: "X / Twitter",
    url: "https://x.com/tesourofieis",
    icon: "x-twitter",
    title: "Acompanhar",
    desc: "Acompanhe as novidades do Tesouro dos Fiéis.",
  },
  {
    name: "Web",
    url: "https://tesourofieis.com",
    icon: "book-bible",
    title: "Tesouro dos Fiéis",
    desc: "Visite o nosso website para mais informações.",
  },
];

const copyToClipboard = async (text: string) => {
  await Clipboard.setStringAsync(text);
};

const showCopiedFeedback = (
  message = "Copiado para a área de transferência",
) => {
  if (Platform.OS === "android") {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert("", message);
  }
};

export const openExternalLink = async (link: string) => {
  try {
    await WebBrowser.openBrowserAsync(link);
  } catch (err) {
    // opcional: lidar com erro de abertura do browser
    console.warn("Erro ao abrir link:", err);
  }
};

export default function ExternalLinks() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView className="gap-1 mt-1 p-4 border-t">
      {externalLinks.map((link) => (
        <Pressable
          key={link.name}
          onPress={() => openExternalLink(link.url)}
          className="w-full"
          accessibilityLabel={`${link.title}: ${link.desc}`}
          accessibilityRole="link"
        >
          {({ pressed }) => (
            <View className={cardBase(pressed)}>
              <View className="flex flex-row justify-between items-center gap-1 mr-2">
                <View className="flex-1">
                  <View className="flex text-pretty flex-row items-center gap-2">
                    <FontAwesome6
                      name={link.icon}
                      size={15}
                      color={
                        colorScheme === "dark" ? COLORS["200"] : COLORS["800"]
                      }
                    />
                    <Typography className="text-lg font-serif text-sepia-600 dark:text-sepia-300">
                      {link.title}
                    </Typography>
                  </View>

                  <View className="flex flex-row">
                    <Typography
                      className="text-pretty text-xs text-sepia-600 dark:text-sepia-200"
                      numberOfLines={1}
                    >
                      {link.desc}
                    </Typography>
                  </View>

                  {link.copyValue && (
                    <View className="flex-row items-center gap-2 mt-1">
                      {/* Important: stopPropagation to avoid opening the external link when pressing copy */}
                      <Pressable
                        onPress={async (e: GestureResponderEvent) => {
                          // evita que o Pressable pai seja acionado
                          e.stopPropagation?.();
                          try {
                            await copyToClipboard(link.copyValue as string);
                            showCopiedFeedback();
                          } catch (err) {
                            console.warn("Erro ao copiar:", err);
                            showCopiedFeedback("Erro ao copiar");
                          }
                        }}
                        accessibilityRole="button"
                        accessibilityLabel={`Copiar ${link.name}`}
                      >
                        <View className="flex-row gap-2 items-center text-xs text-sepia bg-sepia-200 dark:bg-sepia-900 rounded-xl p-1 pr-1 ml-2">
                          <Typography
                            className="p-1 font-mono text-xs"
                            numberOfLines={1}
                            ellipsizeMode="middle"
                          >
                            {link.copyValue}
                          </Typography>

                          <FontAwesome6
                            name="copy"
                            size={12}
                            color={COLORS[500]}
                          />
                        </View>
                      </Pressable>
                    </View>
                  )}
                </View>
              </View>
            </View>
          )}
        </Pressable>
      ))}
    </ScrollView>
  );
}
