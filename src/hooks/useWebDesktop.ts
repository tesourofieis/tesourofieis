import { Platform } from "react-native";
import { useSyncExternalStore } from "react";

function getServerSnapshot() {
  return true; // Default to desktop on SSR to avoid layout shift
}

function getClientSnapshot() {
  return globalThis.matchMedia?.("(min-width: 768px)").matches ?? true;
}

function subscribe(callback: () => void) {
  const mql = globalThis.matchMedia?.("(min-width: 768px)");
  if (!mql) {
    return () => {};
  }
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export function useWebDesktop(): boolean {
  const isWeb = Platform.OS === "web";
  const isDesktop = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  return isWeb && isDesktop;
}
