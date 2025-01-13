import React, { type ReactElement, useState } from "react";
import { Button, View } from "react-native";

export function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = React.Children.toArray(children);

  return (
    <View className="mt-4 pb-2">
      <View className="flex border-b border-sepia-200">
        {tabs.map((tab: ReactElement, index: number) => (
          <Button
            key={tab.props.label}
            title={tab.props.label}
            onPress={() => setActiveTab(index)}
            className={`px-4 py-2 mr-2 text-sm font-medium rounded-t-lg ${
              activeTab === index
                ? "bg-sepia-50 text-sepia-600 border-b-2 border-sepia-600"
                : "text-sepia-500 hover:text-sepia-700"
            }`}
          />
        ))}
      </View>
      {tabs[activeTab]}
    </View>
  );
}

// biome-ignore lint/correctness/noUnusedVariables: <explanation>
export function TabItem({ label, children }) {
  return children;
}
