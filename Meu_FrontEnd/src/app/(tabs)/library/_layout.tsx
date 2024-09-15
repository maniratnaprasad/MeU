import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { defaultStyles } from "@/styles";

const LibraryScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Library" }} />
      </Stack>
    </View>
  );
};

export default LibraryScreenLayout;
