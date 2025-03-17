import React from "react";
import { View } from "react-native";
import { useLanguage } from "../providers/language";

export const SideBySide = ({ children }) => {
  const { language } = useLanguage();
  const childrenArray = React.Children.toArray(children);

  if (language === "latin") {
    return (
      <View>
        {childrenArray.filter((child) => child.props.className === "latin")}
      </View>
    );
  }
  return (
    <View>
      {childrenArray.filter((child) => child.props.className === "vernacular")}
    </View>
  );
};
