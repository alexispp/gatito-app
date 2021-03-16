import React, { useState, useRef } from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("screen");
const imageW = width * 0.7;
const imageH = imageW * 1.54;
const data = [
  {
    breeds: [],
    categories: [
      {
        id: 5,
        name: "boxes",
      },
    ],
    id: "gs",
    url: "https://cdn2.thecatapi.com/images/gs.jpg",
    width: 1152,
    height: 770,
  },
  {
    breeds: [],
    id: "196",
    url: "https://cdn2.thecatapi.com/images/196.gif",
    width: 500,
    height: 281,
  },
  {
    breeds: [],
    id: "1hd",
    url: "https://cdn2.thecatapi.com/images/1hd.gif",
    width: 300,
    height: 169,
  },
  {
    breeds: [],
    id: "2d2",
    url: "https://cdn2.thecatapi.com/images/2d2.jpg",
    width: 397,
    height: 500,
  },
  {
    breeds: [],
    id: "3ka",
    url: "https://cdn2.thecatapi.com/images/3ka.jpg",
    width: 500,
    height: 330,
  },
  {
    breeds: [],
    id: "3pj",
    url: "https://cdn2.thecatapi.com/images/3pj.jpg",
    width: 500,
    height: 334,
  },
  {
    breeds: [],
    id: "446",
    url: "https://cdn2.thecatapi.com/images/446.jpg",
    width: 500,
    height: 340,
  },
  {
    breeds: [],
    id: "87n",
    url: "https://cdn2.thecatapi.com/images/87n.jpg",
    width: 500,
    height: 313,
  },
  {
    breeds: [],
    id: "9uo",
    url: "https://cdn2.thecatapi.com/images/9uo.jpg",
    width: 681,
    height: 1024,
  },
  {
    breeds: [],
    id: "abo",
    url: "https://cdn2.thecatapi.com/images/abo.jpg",
    width: 433,
    height: 650,
  },
  {
    breeds: [],
    id: "aqk",
    url: "https://cdn2.thecatapi.com/images/aqk.jpg",
    width: 570,
    height: 432,
  },
  {
    breeds: [],
    id: "at4",
    url: "https://cdn2.thecatapi.com/images/at4.jpg",
    width: 400,
    height: 268,
  },
  {
    breeds: [],
    id: "bil",
    url: "https://cdn2.thecatapi.com/images/bil.jpg",
    width: 500,
    height: 334,
  },
  {
    breeds: [],
    id: "bl3",
    url: "https://cdn2.thecatapi.com/images/bl3.png",
    width: 430,
    height: 502,
  },
  {
    breeds: [],
    id: "c5d",
    url: "https://cdn2.thecatapi.com/images/c5d.jpg",
    width: 900,
    height: 600,
  },
  {
    breeds: [],
    id: "d6d",
    url: "https://cdn2.thecatapi.com/images/d6d.jpg",
    width: 1024,
    height: 768,
  },
  {
    breeds: [],
    id: "dim",
    url: "https://cdn2.thecatapi.com/images/dim.jpg",
    width: 640,
    height: 427,
  },
  {
    breeds: [],
    id: "MTc3MjU5NQ",
    url: "https://cdn2.thecatapi.com/images/MTc3MjU5NQ.png",
    width: 571,
    height: 407,
  },
  {
    breeds: [],
    id: "MTk5OTUzNg",
    url: "https://cdn2.thecatapi.com/images/MTk5OTUzNg.jpg",
    width: 743,
    height: 570,
  },
  {
    breeds: [
      {
        weight: {
          imperial: "8 - 16",
          metric: "4 - 7",
        },
        id: "sibe",
        name: "Siberian",
        cfa_url: "http://cfa.org/Breeds/BreedsSthruT/Siberian.aspx",
        vetstreet_url: "http://www.vetstreet.com/cats/siberian",
        vcahospitals_url:
          "https://vcahospitals.com/know-your-pet/cat-breeds/siberian",
        temperament:
          "Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate",
        origin: "Russia",
        country_codes: "RU",
        country_code: "RU",
        description:
          "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ",
        life_span: "12 - 15",
        indoor: 0,
        lap: 1,
        alt_names: "Moscow Semi-longhair, HairSiberian Forest Cat",
        adaptability: 5,
        affection_level: 5,
        child_friendly: 4,
        dog_friendly: 5,
        energy_level: 5,
        grooming: 2,
        health_issues: 2,
        intelligence: 5,
        shedding_level: 3,
        social_needs: 4,
        stranger_friendly: 3,
        vocalisation: 1,
        experimental: 0,
        hairless: 0,
        natural: 1,
        rare: 0,
        rex: 0,
        suppressed_tail: 0,
        short_legs: 0,
        wikipedia_url: "https://en.wikipedia.org/wiki/Siberian_(cat)",
        hypoallergenic: 1,
        reference_image_id: "3bkZAjRh1",
      },
    ],
    id: "Sdsf0JSot",
    url: "https://cdn2.thecatapi.com/images/Sdsf0JSot.jpg",
    width: 1024,
    height: 768,
  },
  {
    breeds: [],
    id: "LWRnHjvZb",
    url: "https://cdn2.thecatapi.com/images/LWRnHjvZb.jpg",
    width: 2304,
    height: 1536,
  },
  {
    breeds: [],
    id: "6XxCfLGUC",
    url: "https://cdn2.thecatapi.com/images/6XxCfLGUC.png",
    width: 418,
    height: 700,
  },
  {
    breeds: [],
    id: "DlDXGeA4h",
    url: "https://cdn2.thecatapi.com/images/DlDXGeA4h.jpg",
    width: 1265,
    height: 951,
  },
  {
    breeds: [],
    id: "5HNLKOfE1",
    url: "https://cdn2.thecatapi.com/images/5HNLKOfE1.jpg",
    width: 4032,
    height: 3024,
  },
  {
    breeds: [],
    id: "n3HKiw54e",
    url: "https://cdn2.thecatapi.com/images/n3HKiw54e.png",
    width: 264,
    height: 181,
  },
];

export const CatList = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <>
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((image, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              source={{ uri: image.url }}
              key={`image-${index}`}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              blurRadius={20}
            />
          );
        })}
      </View>

      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                justifyContent: "center",
                alignItems: "center",
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 1,
              }}
            >
              <Image
                source={{ uri: item.url }}
                style={{
                  width,
                  height,
                  resizeMode: "contain",
                  borderRadius: 16,
                }}
              />
            </View>
          );
        }}
      ></Animated.FlatList>
    </>
  );
};

