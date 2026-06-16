import type React from "react";
import { TouchableOpacity, View } from "react-native";
import { H6 } from "~/components/Headings";
import { Typography } from "~/components/typography";

export function SettingsSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View className="py-3 my-3 border-b border-sepia-300 dark:border-sepia-700">
      <View className="flex-row items-center mb-3 gap-1">
        {icon}
        <H6 text={title} />
      </View>
      {children}
    </View>
  );
}

export function SegmentedOption<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: T }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <View className="flex-row justify-between items-center">
      {options.map((option) => {
        const selected = value === option.value;
        return (
          <TouchableOpacity
            key={option.value}
            onPress={() => onChange(option.value)}
            className={`flex-1 mx-1 py-3 px-4 rounded-lg items-center ${
              selected ? "bg-sepia-800 dark:bg-sepia-200" : "soft-background"
            }`}
            accessibilityRole="button"
            accessibilityState={{ selected }}
          >
            <Typography
              className={`font-strong ${
                selected
                  ? "text-sepia-200 dark:text-sepia-800"
                  : "text-sepia-800 dark:text-sepia-200"
              }`}
            >
              {option.label}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
