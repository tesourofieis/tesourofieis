import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
// components/MoreMenu.js
import React, { useState, useRef, useEffect } from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

export default function MoreMenu({ color }: { color: string }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();
  const buttonRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({
    bottom: MENU_MARGIN,
    right: MENU_MARGIN,
  });

  const openWebView = (url: string) => {
    router.push({ pathname: "/modal", params: { url } });
    setMenuVisible(false);
  };

  useEffect(() => {
    if (buttonRef.current && menuVisible) {
      // @ts-ignore
      buttonRef.current.measure(
        (
          _x: number,
          _y: number,
          _width: number,
          _height: number,
          _pageX: number,
          pageY: number,
        ) => {
          const windowHeight = Dimensions.get("window").height;
          setMenuPosition({
            bottom: windowHeight - pageY,
            right: MENU_MARGIN,
          });
        },
      );
    }
  }, [menuVisible]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setMenuVisible(true)}
        ref={buttonRef}
        style={styles.tabButton}
      >
        <FontAwesome size={15} name="ellipsis-h" color={color} />
      </TouchableOpacity>

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
              { bottom: menuPosition.bottom, right: menuPosition.right },
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
