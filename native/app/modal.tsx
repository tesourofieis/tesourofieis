import { useLocalSearchParams } from "expo-router";
import { WebView } from "react-native-webview";

export default function Modal() {
  const { url } = useLocalSearchParams();

  return (
    <WebView
      source={{ uri: `https://tesourofieis.com/${url}` }}
      startInLoadingState={true}
      cacheEnabled={true}
    />
  );
}
