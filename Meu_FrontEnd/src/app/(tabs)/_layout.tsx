import React from "react";
import { Tabs } from "expo-router";
import { colors, fontSize } from "@/constants/constant";

const TabNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "500",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen name="(home)" options={{ headerTitle: "Home" }} />
      <Tabs.Screen name="songs" options={{ headerTitle: "Songs" }} />
      <Tabs.Screen name="library" options={{ headerTitle: "Library" }} />
    </Tabs>
  );
};

export default TabNavigation;
