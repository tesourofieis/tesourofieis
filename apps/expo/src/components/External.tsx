import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import * as Clipboard from "expo-clipboard";
import * as WebBrowser from "expo-web-browser";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { COLORS } from "~/constants/Colors";

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

export const openExternalLink = async (link: string) => {
  await WebBrowser.openBrowserAsync(link);
};

export default function ExternalLinks() {
  const colorScheme = useColorScheme();
  return (
    <View className="flex-col gap-4 mt-2 p-4 border-t">
      {externalLinks.map((link) => (
        <Pressable
          key={link.name}
          onPress={() => openExternalLink(link.url)}
          className="flex-col items-start py-2 px-3 gap-1 rounded-xl border border-sepia-700 active:bg-sepia-700"
          accessibilityLabel={`${link.title}: ${link.desc}`}
          accessibilityRole="link"
        >
          <View className="flex-row justify-between w-full">
            <View className="flex-row items-center">
              <View className="ml-3">
                <FontAwesome6
                  name={link.icon}
                  size={20}
                  color={colorScheme === "dark" ? COLORS["200"] : COLORS["800"]}
                />
              </View>
              <Text className="text-sm text-pretty text-sepia-300">
                {link.title}
              </Text>
            </View>
          </View>
          <Text className="text-xs text-pretty text-sepia-400">
            {link.desc}
          </Text>
          {link.copyValue && (
            <Pressable
              onPress={() => copyToClipboard(link.copyValue as string)}
              className="mt-1 py-1 px-2 bg-sepia-600 rounded-xl active:bg-sepia-500 w-full"
            >
              <View className="flex-row items-center justify-between">
                <Text
                  className="text-xs font-mono text-sepia-200"
                  numberOfLines={1}
                  ellipsizeMode="middle"
                >
                  {link.copyValue}
                </Text>
                <FontAwesome6 name="copy" size={12} color={COLORS["400"]} />
              </View>
            </Pressable>
          )}
        </Pressable>
      ))}
    </View>
  );
}
