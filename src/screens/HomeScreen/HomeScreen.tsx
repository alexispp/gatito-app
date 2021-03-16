import React from "react";
import { StatusBar, View } from "react-native";

import { CatList } from "components/CatList/CatList";
import ButtonPanel  from "components/ButtonPanel/ButtonPanel";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <StatusBar hidden />
      {/* <CatList /> */}
      <ButtonPanel />
    </View>
  );
};
