import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

const NotificationBadge = () => {
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    const scheduleNotifications = async () => {
      // Clear existing badge count
      await Notifications.setBadgeCountAsync(0);

      // Your logic to determine notifications for the day
      const notificationsForDay = [
        {
          title: "Notification 1",
          body: "Body 1",
          time: new Date(Date.now() + 3600000),
        },
        {
          title: "Notification 2",
          body: "Body 2",
          time: new Date(Date.now() + 7200000),
        },
        // Add more notifications
      ];

      // Schedule notifications and update the badge count
      for (const notification of notificationsForDay) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: notification.title,
            body: notification.body,
          },
          trigger: {
            date: notification.time,
          },
        });

        // Increment and set badge count
        const currentBadgeCount = badgeCount + 1;
        setBadgeCount(currentBadgeCount);
        await Notifications.setBadgeCountAsync(currentBadgeCount);
      }
    };

    scheduleNotifications();
  }, []);

  return (
    <View style={styles.container}>
      <FontAwesome name="bell" size={32} color="black" />
      {badgeCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 32,
    height: 32,
  },
  badge: {
    position: "absolute",
    right: -6,
    top: -6,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default NotificationBadge;
