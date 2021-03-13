import React from "react";
import { StyleSheet, View } from "react-native";

import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { HomeScreen2 } from "./src/screens/HomeScreen/HomeScreen2";

export default function App() {
  return (
    // <View style={styles.container}>
      <HomeScreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
