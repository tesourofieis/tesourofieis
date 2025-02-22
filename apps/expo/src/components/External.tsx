import { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Alert, Linking } from "react-native";
import { Pressable, Text, View } from "react-native";
import { COLORS } from "~/constants/Colors";

interface ExternalLink {
  name: string;
  url: string;
  icon: string;
  title: string;
  desc: string;
}

const externalLinks: ExternalLink[] = [
  {
    name: "Patreon",
    url: "https://patreon.com/tesourofieis",
    icon: "patreon",
    title: "Ajudar",
    desc: "Ajude a manter o Tesouro dos Fiéis com uma doação mensal.",
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

const openLink = async (
  url: string,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", `Cannot open this link: ${url}`);
    }
  } catch (_error) {
    Alert.alert("Error", "Something went wrong while opening the link.");
  } finally {
    setLoading(false);
  }
};

export default function ExternalLinks() {
  const [loadingLink, setLoadingLink] = useState<string | null>(null);

  return (
    <View className="flex-col gap-4 p-4 bg-sepia-900 border-t">
      {externalLinks.map((link) => (
        <Pressable
          key={link.name}
          onPress={() =>
            openLink(link.url, (loading) =>
              setLoadingLink(loading ? link.name : null)
            )
          }
          className="flex-col items-start py-2 px-3 gap-1 rounded-lg bg-sepia-800"
          disabled={loadingLink === link.name}
          accessibilityLabel={`${link.title}: ${link.desc}`}
          accessibilityRole="link"
        >
          <View className="flex-row gap-3">
            <FontAwesome6
              name={loadingLink === link.name ? "spinner" : link.icon}
              size={20}
              color={COLORS["400"]}
              spin={loadingLink === link.name}
            />
            <Text className="text-sm bold text-sepia-500">{link.title}</Text>
          </View>
          <Text className="text-xs bold text-sepia-600">{link.desc}</Text>
        </Pressable>
      ))}
    </View>
  );
}
