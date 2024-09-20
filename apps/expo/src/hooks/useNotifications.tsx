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

      angelus.enabled = angelusEnabledStr !== "false";
      mass.enabled = massEnabledStr !== "false";
      novena.enabled = novenaEnabledStr !== "false";
      office.enabled = officeEnabledStr !== "false";
    } catch (error) {
      console.error("Error loading preferences:", error);
    }
  }, [angelus, mass, novena, office]);

  useEffect(() => {
    const initializeNotifications = async () => {
      await loadPreferences();
      // You might want to add logic here to schedule or cancel notifications based on the loaded preferences
    };

    initializeNotifications();
  }, [loadPreferences]);

  return { angelus, mass: mass, novena, office };
};
