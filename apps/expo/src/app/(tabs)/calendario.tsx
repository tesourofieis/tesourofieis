import React from "react";
import MonthCalendar from "~/components/MonthCalendar";

import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Render() {
  return (
    <SafeAreaView>
      <ScrollView>
        <MonthCalendar />
      </ScrollView>
    </SafeAreaView>
  );
}
