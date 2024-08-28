import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "~/constants/Colors";

const menuItems = [
  { title: "Missal", url: "missal" },
  { title: "Devocionário", url: "devocionario" },
  { title: "Fé", url: "fe" },
  { title: "Cânticos", url: "canticos" },
  { title: "Ritual", url: "ritual" },
];

const MENU_WIDTH = 200;
const MENU_MARGIN = 10;

export default function MoreMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  const openWebView = (url: string) => {
    router.push({ pathname: "/modal", params: { url } });
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setMenuVisible(true)} />

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setMenuVisible(false)}
        >
          <View
            style={[
              styles.menuContainer,
              { bottom: MENU_MARGIN, right: MENU_MARGIN },
            ]}
          >
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.title}
                style={styles.menuItem}
                onPress={() => openWebView(item.url)}
              >
                <Text style={styles.menuText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabButton: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  menuContainer: {
    position: "absolute",
    width: MENU_WIDTH,
    backgroundColor: COLORS["700"],
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS["600"],
  },
  menuText: {
    color: COLORS["200"],
  },
});
