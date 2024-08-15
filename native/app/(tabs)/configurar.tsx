import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, View, Text, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/Colors";
import * as Notifications from "expo-notifications";

import { useNotifications, NOTIFICATION_TYPES } from "@/hooks/useNotifications";
import NotificationBadge from "@/components/NotificationBadge";

export default function Render() {
  const { angelusEnabled, dailyMassEnabled, toggleAngelus, toggleDailyMass } =
    useNotifications();

  const [scheduledNotifications, setScheduledNotifications] = useState<
    Notifications.NotificationRequest[]
  >([]);

  // Fetch scheduled notifications
  useEffect(() => {
    const fetchScheduledNotifications = async () => {
      const notifications =
        await Notifications.getAllScheduledNotificationsAsync();
      setScheduledNotifications(notifications);
    };

    fetchScheduledNotifications();

    // Optionally, re-fetch notifications when toggling options
  }, [angelusEnabled, dailyMassEnabled]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 items-center gap-2 p-2">
          <Text className="text-2xl p-3">Configurar Notificações 🔔</Text>
          <View className="flex-1 w-full flex-row items-center justify-between border rounded border-sepia-500 dark:border-sepia-700 hover:bg-sepia-100 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-600 p-3">
            <Text className="text-2xl h6">Angelus</Text>
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={angelusEnabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleAngelus}
              value={angelusEnabled}
              accessibilityLabel="Toggle angelus notifications"
            />
          </View>

          <View className="flex-1 w-full flex-row items-center justify-between border rounded border-sepia-500 dark:border-sepia-700 hover:bg-sepia-100 dark:hover:bg-sepia-900 hover:border-sepia-800 dark:hover:border-sepia-600 p-3">
            <Text className="text-2xl h6">Missa do Dia</Text>
            <Switch
              trackColor={{ false: COLORS["600"], true: COLORS["400"] }}
              thumbColor={dailyMassEnabled ? COLORS["200"] : COLORS["500"]}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDailyMass}
              value={dailyMassEnabled}
              accessibilityLabel={`Toggle daily notifications`}
            />
          </View>
        </View>
        <Text>
          {JSON.stringify(
            {
              content: scheduledNotifications.map((i) => i.content),
              trigger: scheduledNotifications.map((i) => i.trigger),
            },
            null,
            2
          )}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
