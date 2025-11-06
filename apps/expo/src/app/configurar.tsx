import { Platform, ScrollView } from "react-native";
import { FontSizeSelector } from "~/components/FontSelector";
import { DefaultLanguageSelector } from "~/components/LanguageSelector";
import { Notifications } from "~/components/Notifications";

export default function PageNot() {
  return (
    <ScrollView className="px-5 bg-sepia-200 dark:bg-sepia-800">
      <DefaultLanguageSelector />
      <FontSizeSelector />
      {Platform.OS !== "web" && <Notifications />}
    </ScrollView>
  );
}
