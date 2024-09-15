import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => router.push("(home)/playlist")}
      />
    </View>
  );
};

export default HomeScreen;
