import { useLocalSearchParams } from "expo-router";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default function Modal() {
  const { url } = useLocalSearchParams();

  return (
    <WebView
      style={styles.container}
      source={{ uri: `https://tesourofieis.com/${url}` }}
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
