import { Platform } from "react-native";
import { useSyncExternalStore } from "react";

function getServerSnapshot() {
  return true; // Default to desktop on SSR to avoid layout shift
}

function getClientSnapshot() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return true;
  }
  return window.matchMedia("(min-width: 768px)").matches;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return () => {};
  }
  const mql = window.matchMedia("(min-width: 768px)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export function useWebDesktop(): boolean {
  const isWeb = Platform.OS === "web";
  const isDesktop = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  return isWeb && isDesktop;
}
