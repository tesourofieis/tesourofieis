import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useUpdates } from "expo-updates";
import * as Updates from "expo-updates";
import { Platform } from "react-native";

type UpdateState =
  | "idle"
  | "available"
  | "downloading"
  | "ready"
  | "error"
  | "checking";

type UpdateContextType = {
  updateState: UpdateState;
  applyUpdate: () => void;
  dismissUpdate: () => void;
  continueWithoutUpdate: () => void;
  reloadApp: () => void;
};

const UpdateContext = createContext<UpdateContextType | undefined>(undefined);

export const UpdateProvider = ({ children }: { children: ReactNode }) => {
  const { isUpdateAvailable, isUpdatePending, isChecking, isDownloading } =
    useUpdates();
  const [updateState, setUpdateState] = useState<UpdateState>("idle");
  const [hasShownUpdatePrompt, setHasShownUpdatePrompt] = useState(false);

  const applyUpdate = useCallback(async () => {
    try {
      setUpdateState("downloading");
      await Updates.fetchUpdateAsync();
      setUpdateState("ready");
    } catch (err) {
      console.error("Update fetch failed:", err);
      setUpdateState("error");
    }
  }, []);

  const reloadApp = useCallback(async () => {
    try {
      await Updates.reloadAsync();
    } catch (err) {
      console.error("Update reload failed:", err);
      setUpdateState("error");
    }
  }, []);

  const dismissUpdate = useCallback(() => {
    setUpdateState("idle");
  }, []);

  const continueWithoutUpdate = useCallback(() => {
    setUpdateState("idle");
  }, []);

  useEffect(() => {
    const checkForUpdates = async () => {
      if (__DEV__ || Platform.OS === "web") return;

      try {
        await Updates.checkForUpdateAsync();
      } catch (err) {
        console.error("Update check failed:", err);
      }
    };

    checkForUpdates();
  }, []);

  useEffect(() => {
    if (isChecking && Platform.OS !== "web") {
      setUpdateState("checking");
    } else if (!isChecking && updateState === "checking") {
      setUpdateState("idle");
    }
  }, [isChecking]);

  useEffect(() => {
    if (
      isUpdateAvailable &&
      !hasShownUpdatePrompt &&
      !isDownloading &&
      !isUpdatePending
    ) {
      setHasShownUpdatePrompt(true);
      setUpdateState("available");
    }
  }, [isUpdateAvailable, hasShownUpdatePrompt, isDownloading, isUpdatePending]);

  useEffect(() => {
    if (isUpdatePending && updateState !== "ready") {
      setUpdateState("ready");
    }
  }, [isUpdatePending]);

  return (
    <UpdateContext.Provider
      value={{
        updateState,
        applyUpdate,
        dismissUpdate,
        continueWithoutUpdate,
        reloadApp,
      }}
    >
      {children}
    </UpdateContext.Provider>
  );
};

export const useUpdate = () => {
  const context = useContext(UpdateContext);
  if (!context) {
    throw new Error("useUpdate must be used within UpdateProvider");
  }
  return context;
};
