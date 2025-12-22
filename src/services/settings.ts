import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Settings } from "~/providers/settings";

const SETTINGS_STORAGE_KEY = "app_settings";

const DEFAULT_SETTINGS: Settings = {
  angelusEnabled: true,
  massEnabled: true,
  novenaEnabled: true,
  officeEnabled: false,
  permissionRequested: false,
  permissionSoftRejected: false,
};

export async function getSettings(): Promise<Settings> {
  console.log("Attempting to retrieve settings from AsyncStorage...");
  try {
    const jsonValue = await AsyncStorage.getItem(SETTINGS_STORAGE_KEY);
    if (jsonValue != null) {
      const parsedSettings: Settings = JSON.parse(jsonValue);
      console.log("Settings retrieved from AsyncStorage:", parsedSettings);
      return parsedSettings;
    } else {
      console.log("No settings found in AsyncStorage, returning default.");
      await AsyncStorage.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify(DEFAULT_SETTINGS),
      );
      return DEFAULT_SETTINGS;
    }
  } catch (e: any) {
    console.error("Error retrieving settings from AsyncStorage:", e);
    // Fallback to default in case of any read error
    return DEFAULT_SETTINGS;
  }
}

export async function updateSettings(
  newValues: Partial<Settings>,
): Promise<Settings> {
  console.debug("updateSettings called with:", newValues);
  try {
    const currentSettings = await getSettings();

    const updatedSettings: Settings = {
      ...currentSettings,
      ...newValues,
    };

    await AsyncStorage.setItem(
      SETTINGS_STORAGE_KEY,
      JSON.stringify(updatedSettings),
    );
    console.log("Settings successfully updated and saved:", updatedSettings);
    return updatedSettings;
  } catch (e: any) {
    console.error("Error updating settings in AsyncStorage:", e);
    throw new Error(`Failed to update settings: ${e.message}`);
  }
}
