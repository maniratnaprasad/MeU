import { View, Text } from "react-native";
import React from "react";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";

const HomeScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="playlist" options={{ headerTitle: "PlayList" }} />
      </Stack>
    </View>
  );
};

export default HomeScreenLayout;
