import React, { useEffect, useState } from "react";
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
const { width } = Dimensions.get("screen");
import { EvilIcons } from "@expo/vector-icons";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";

import { CardList } from "../../components/CardList/CardList";

import { DATA } from "res/data";

const DIMENSIONS = Dimensions.get("window");

export const HomeScreen = (props: any) => {
  useEffect(() => {}, []);

  return (
    <>
      <CardList
        cardList={DATA}
        style={{
          flex: 1,
          width: DIMENSIONS.width,
        }}
      />
    </>
  );
};

const Styles = StyleSheet.create({
  card: {
    height: 500,
    width: 350,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    overflow: "hidden",
  },
  cardTop: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 200,
    width: 350,
    backgroundColor: "#D3D3D3",
  },
  cardImage: {
    position: "absolute",
    left: 85,
    top: 110,
    width: 180,
    height: 180,
    borderRadius: 90,
    borderColor: "#FFF",
    borderWidth: 4,
    backgroundColor: "#1E90FF",
  },
  cardImageBorder: {
    position: "absolute",
    left: 83.5,
    top: 108.5,
    width: 183,
    height: 183,
    borderRadius: 91.5,
    backgroundColor: "#A9A9A9",
  },
  cardText: {
    position: "absolute",
    left: 0,
    top: 300,
    width: 350,
    alignItems: "center",
    padding: 20,
  },
  cardTextMain: {
    textAlign: "left",
    fontSize: 25,
    color: "#696969",
    backgroundColor: "transparent",
    paddingBottom: 10,
  },
  cardTextSecondary: {
    textAlign: "left",
    fontSize: 18,
    color: "grey",
    backgroundColor: "transparent",
  },
  cardTextTerciary: {
    textAlign: "left",
    fontSize: 18,
    color: "#696969",
    backgroundColor: "transparent",
    paddingTop: 10,
  },
});
