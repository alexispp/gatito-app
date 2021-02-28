// import React, { Component, useState, useEffect } from "react";
// import { PanResponder, Animated } from "react-native";

// const Card = (props: any) => {
//   const [pan, setPan]: any = useState(new Animated.ValueXY());
//   const [panResponder, setPanResponder]: any = useState();

//   useEffect(() => {
//     const pr = PanResponder.create({
//       onMoveShouldSetPanResponderCapture: () => true,
//       onPanResponderGrant: (e, gestureState) => {
//         pan.setValue({ x: 0, y: 0 });
//       },
//       onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }],{useNativeDriver: true}),
//       onPanResponderRelease: (e, { vx, vy }) => {
//         if (pan.x._value < props.leftSwipeThreshold) {
//           props.onSwipeLeft(props.index);
//         } else if (pan.x._value > props.rightSwipeThreshold) {
//           props.onSwipeRight(props.index);
//         } else if (pan.y._value < props.upSwipeThreshold) {
//           props.onSwipeUp(props.index);
//         } else if (pan.y._value > props.downSwipeThreshold) {
//           props.onSwipeDown(props.index);
//         } else {
//           Animated.spring(pan, {
//             toValue: 0,
//             useNativeDriver: true,
//           }).start();
//         }
//       },
//     });

//     setPanResponder(pr);

//     return () => {
//       pan.x.removeAllListeners();
//       pan.y.removeAllListeners();
//     };
//   }, []);

//   const getAnimatedViewStyle = () => {
//     return [
//       { position: "absolute" },
//       { left: (props.cardWidth / 2) * -1 },
//       { top: (props.cardHeight / 2) * -1 },
//       {
//         transform: [
//           { translateX: pan.x },
//           { translateY: pan.y },
//           {
//             rotate: pan.x.interpolate({
//               inputRange: [
//                 props.leftSwipeThreshold,
//                 0,
//                 props.rightSwipeThreshold,
//               ],
//               outputRange: [
//                 `-${props.cardRotation}deg`,
//                 "0deg",
//                 `${props.cardRotation}deg`,
//               ],
//             }),
//           },
//         ],
//       },
//       {
//         opacity: pan.x.interpolate({
//           inputRange: [props.leftSwipeThreshold, 0, props.rightSwipeThreshold],
//           outputRange: [props.cardOpacity, 1, props.cardOpacity],
//         }),
//       },
//     ];
//   };

//   return panResponder ? (
//     <Animated.View style={getAnimatedViewStyle()} {...panResponder.panHandlers}>
//       {props.renderCard(props.item)}
//     </Animated.View>
//   ) : (
//     <Animated.View>{props.renderCard(props.item)}</Animated.View>
//   );
// };

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  Animated,
  PanResponder,
  PanResponderInstance,
  Dimensions,
  StyleSheet,
} from "react-native";
// import { shape, string, number } from "prop-types";
import styles from "./Card.styles";

import uuid from "react-native-uuid";

export interface Card {
  index: number;
  item: { photo: ImageSourcePropType; name: string; age: number; id: string };
  onSwipe?: Function;
}

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export const Card = (card: Card) => {
  // <View style={styles.card}>
  //   <Image style={styles.image} source={card.photo} resizeMode="cover" />
  //   <View style={styles.photoDescriptionContainer}>
  //     <Text style={styles.text}>{`${card.name}, ${card.age}`}</Text>
  //   </View>
  // </View>

  const [currentIndex, setCurrentIndex] = useState(0);
  const [panResponder, setPanResponder] = useState<PanResponderInstance>(
    PanResponder.create({})
  );

  useEffect(() => {
    const pp = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        pan.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(pan, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: true,
          }).start(() => {
            setCurrentIndex((prev) => prev + 1);
            card.onSwipe(currentIndex);
            pan.setValue({ x: 0, y: 0 });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(pan, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: true,
          }).start(() => {
            setCurrentIndex((prev) => prev + 1);
            card.onSwipe(currentIndex);
            pan.setValue({ x: 0, y: 0 });
          });
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
            friction: 4,
          }).start();
        }
      },
    });
    setPanResponder(pp);
  }, []);

  const pan = useRef(new Animated.ValueXY()).current;

  const rotate: any = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ["-30deg", "0deg", "10deg"],
    // extrapolate: "clamp",
  });

  const rotateAndTranslate: any = {
    transform: [
      { translateX: pan.x },
      { translateY: pan.y },
      {
        rotate: rotate,
      },
      
      ...pan.getTranslateTransform(),
    ],
  };

  return (
    <Animated.View
      key={uuid.v4()}
      style={[
        {
          position: "absolute",
          left: (SCREEN_WIDTH / 2) * -1,

          top: 0,
          width: SCREEN_WIDTH + 5,
          height: "100%",
          // height: SCREEN_HEIGHT,
          // width: SCREEN_WIDTH,
          // padding: 10,
          // top: (SCREEN_HEIGHT / 2) * -1,
        },
        {
          opacity: pan.x.interpolate({
            inputRange: [card.index - 1, card.index, card.index + 1],
            outputRange: [0, 1, 0],
          }),
        },
        rotateAndTranslate,
      ]}
      {...panResponder.panHandlers}
    >
      <View style={Styles.card}>
        <Image source={card.item.photo} style={Styles.cardImage} />
      </View>
    </Animated.View>
  );
};
// Card.propTypes = {
//   card: shape({
//     photo: ImageSourcePropType,
//     name: string,
//     age: number,
//   }).isRequired,
// }

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
