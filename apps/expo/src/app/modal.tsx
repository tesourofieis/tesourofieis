import Constants from "expo-constants";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function Modal() {
  const { url } = useLocalSearchParams();

  const newLocal = url ?? "";
  return (
    <WebView
      style={styles.container}
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      source={{ uri: `https://tesourofieis.com/${newLocal}` }}
      startInLoadingState={true}
      cacheEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
