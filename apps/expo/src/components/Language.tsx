import React from "react";
import { View } from "react-native";
import { useLanguage } from "../providers/language";

export default function Language({ children }) {
  const { language } = useLanguage();
  const childrenArray = React.Children.toArray(children);

  if (language === "latin") {
    return (
      <View className="side-by-side">
        {childrenArray.filter((child) => child.props.className === "latin")}
      </View>
    );
  }
  return (
    <View className="side-by-side">
      {childrenArray.filter((child) => child.props.className === "vernacular")}
    </View>
  );
}
