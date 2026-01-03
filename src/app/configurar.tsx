import { ScrollView } from "react-native";
import { FontSizeSelector } from "~/components/FontSelector";
import { DefaultLanguageSelector } from "~/components/LanguageSelector";
import { Notifications } from "~/components/Notifications";

export default function PageNot() {
  return (
    <ScrollView className="px-5 medium-background">
      <DefaultLanguageSelector />
      <FontSizeSelector />
      <Notifications />
    </ScrollView>
  );
}
