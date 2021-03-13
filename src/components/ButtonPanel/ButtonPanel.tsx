import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

export const ButtonPanel = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        {
          top: height * 0.9,
          justifyContent: "space-evenly",
          flexDirection: "row",
        },
      ]}
    >
      <Ionicons name="heart" size={32} color="pink" onPress={() => {}} />
      <Ionicons
        name="heart-dislike"
        size={32}
        color="pink"
        onPress={() => {}}
      />
    </View>
  );
};
