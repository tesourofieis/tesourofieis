import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect } from "react";
import {
  type NotificationHookResult,
  STORAGE_KEYS,
} from "./notifications/types";
import { useAngelus } from "./notifications/useAngelus";
import { useMass } from "./notifications/useMass";
import { useNovena } from "./notifications/useNovena";
import { useOffice } from "./notifications/useOffice";

export const useNotifications = (): NotificationHookResult => {
  const angelus = useAngelus();
  const mass = useMass();
  const novena = useNovena();
  const office = useOffice();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const loadPreferences = useCallback(async () => {
    try {
      const [
        angelusEnabledStr,
        massEnabledStr,
        novenaEnabledStr,
        officeEnabledStr,
      ] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.ANGELUS_ENABLED),
        AsyncStorage.getItem(STORAGE_KEYS.DAILY_MASS_ENABLED),
        AsyncStorage.getItem(STORAGE_KEYS.NOVENA_ENABLED),
        AsyncStorage.getItem(STORAGE_KEYS.OFFICE_ENABLED),
      ]);
      angelus.setEnabled(angelusEnabledStr !== "false");
      mass.setEnabled(massEnabledStr !== "false");
      novena.setEnabled(novenaEnabledStr !== "false");
      office.setEnabled(officeEnabledStr !== "false");
    } catch (error) {
      console.error("Error loading preferences:", error);
    }
  }, []);

  useEffect(() => {
    const initializeNotifications = async () => {
      await loadPreferences();
    };
    initializeNotifications();
  }, [loadPreferences]);

  return { angelus, mass, novena, office };
};
