import { useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAngelus } from "./notifications/useAngelus";
import { useDailyMass } from "./notifications/useMass";
import { useNovena } from "./notifications/useNovena";
import { useOffice } from "./notifications/useOffice";

export interface NotificationPreference {
  enabled: boolean;
  loading: boolean;
  toggle: () => Promise<void>;
}

export interface NotificationHookResult {
  angelus: NotificationPreference;
  dailyMass: NotificationPreference;
  novena: NotificationPreference;
  office: NotificationPreference;
}

export const STORAGE_KEYS = {
  ANGELUS_ENABLED: "angelusEnabled",
  DAILY_MASS_ENABLED: "dailyMassEnabled",
  NOVENA_ENABLED: "novenaEnabled",
  OFFICE_ENABLED: "officeEnabled",
};

export const useNotifications = (): NotificationHookResult => {
  const angelus = useAngelus();
  const dailyMass = useDailyMass();
  const novena = useNovena();
  const office = useOffice();

  const loadPreferences = useCallback(async () => {
    try {
      const [
        angelusEnabledStr,
        dailyMassEnabledStr,
        novenaEnabledStr,
        officeEnabledStr,
      ] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.ANGELUS_ENABLED),
        AsyncStorage.getItem(STORAGE_KEYS.DAILY_MASS_ENABLED),
        AsyncStorage.getItem(STORAGE_KEYS.NOVENA_ENABLED),
        AsyncStorage.getItem(STORAGE_KEYS.OFFICE_ENABLED),
      ]);

      angelus.enabled = angelusEnabledStr !== "false";
      dailyMass.enabled = dailyMassEnabledStr !== "false";
      novena.enabled = novenaEnabledStr !== "false";
      office.enabled = officeEnabledStr !== "false";
    } catch (error) {
      console.error("Error loading preferences:", error);
    }
  }, [angelus, dailyMass, novena, office]);

  useEffect(() => {
    const initializeNotifications = async () => {
      await loadPreferences();
      // You might want to add logic here to schedule or cancel notifications based on the loaded preferences
    };

    initializeNotifications();
  }, [loadPreferences]);

  return { angelus, dailyMass, novena, office };
};
