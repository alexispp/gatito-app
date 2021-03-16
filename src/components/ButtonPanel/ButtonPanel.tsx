import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  memo,
} from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  AppRegistry,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const uuid = require("react-native-uuid");
const { width, height } = Dimensions.get("screen");

import withMemo from "../../../utils/withMemo";

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const ButtonPanel = () => {
  const [hearts, setHearts] = useState<any>([]);
  const [startCount, setStartCount] = useState<number>(1);

  useEffect(() => {
    console.log('--------------------')
    // console.log(props.item)

  }, [hearts]);

  // const Heart = (props: any) => {
  //   return (
  //     <View {...props} style={[styles.heart, props.style]}>
  //       {/* <Text style={{fontSize:30, color:'white'}}>{props.id}</Text> */}
  //       <Ionicons
  //         name="heart-dislike"
  //         size={32}
  //         color="pink"
  //         onPress={() => {}}
  //       />
  //     </View>
  //   );
  // };

  const addHeart = useCallback(() => {
    const heart = {
      id: uuid.v4(),
      // key: uuid.v4(),
      // right: getRandomNumber(50, 150),
    };
    // setHearts(hearts.concat([heart]));
    // setHearts((prev: any) =>
    //   prev.concat([])
    // );
    setHearts((prev: any) => [...prev, heart]);
  },[]);

  // const removeHeart = useCallback((v: number) => {
  //   const index = hearts.findIndex((heart: any) => heart.id === v);
  //   // hearts.splice(index, 1);
  //   // setHearts(hearts);
  //   setHearts((prev: any) => {
  //     prev.splice(index, 1);
  //     return prev;
  //   });
  // }, []);

  // const areEqual = (prevProps:any, nextProps:any)=> {
  //   let isEqual = true;
  //   if (
  //     JSON.stringify(prevProps.id) !==
  //     JSON.stringify(nextProps.id)
  //   ) {
  //     isEqual = false;
  //   }
  //   console.log(isEqual)
  //   return isEqual;
  // }

  // const AnimatedHeart = React.memo(
  //   (props: any) => {
  //     // const [position, setPosition] = useState(useRef(new Animated.Value(0)).current);
  //     const position = useRef(new Animated.Value(0));
  //     // const [opacityAnimation, setOpacityAnimation]: any = useState(0);
  //     // const [scaleAnimation, setScaleAnimation]: any = useState(0);
  //     // const [xAnimation, setXAnimation]: any = useState(0);
  //     // const [rotateAnimation, setRotateAnimation]: any = useState("0deg");

  //     const ANIMATION_END_Y = Math.ceil(height - 100);
  //     // const ANIMATION_END_Y = Math.ceil(height * 0.5);
  //     const NEGATIVE_END_Y = ANIMATION_END_Y * -1;

  //     useEffect(() => {
  //       //  console.log("position", position);
  //       // console.log(props.id);
  //       console.log(hearts.length);
  //     }, []);

  //     const timing = useCallback(() => {
  //       console.log("hearts.length delete", hearts.length);
  //       Animated.timing(position.current, {
  //         duration: 12000,
  //         toValue: NEGATIVE_END_Y,

  //         useNativeDriver: true,
  //       }).start(() => {
  //         props.onComplete();
  //       });
  //     }, [props.onComplete]);

  //     useEffect(() => {
  //       timing();
  //     }, []);

  //     // useEffect(() => {
  //     //   const yAnimation = position.interpolate({
  //     //     inputRange: [NEGATIVE_END_Y, 0],
  //     //     outputRange: [ANIMATION_END_Y, 0],
  //     //   });

  //     //   const opacity = yAnimation.interpolate({
  //     //     inputRange: [0, ANIMATION_END_Y],
  //     //     outputRange: [1, 0],
  //     //   });
  //     //   setOpacityAnimation(opacity);

  //     //   const scale = yAnimation.interpolate({
  //     //     inputRange: [0, 15, 30],
  //     //     outputRange: [0, 1.2, 1],
  //     //     extrapolate: "clamp",
  //     //   });
  //     //   setScaleAnimation(scale);

  //     //   const x = yAnimation.interpolate({
  //     //     inputRange: [0, ANIMATION_END_Y / 2, ANIMATION_END_Y],
  //     //     outputRange: [0, 15, 0],
  //     //   });
  //     //   setXAnimation(x);

  //     //   const rotate = yAnimation.interpolate({
  //     //     inputRange: [
  //     //       0,
  //     //       ANIMATION_END_Y / 4,
  //     //       ANIMATION_END_Y / 3,
  //     //       ANIMATION_END_Y / 2,
  //     //       ANIMATION_END_Y,
  //     //     ],
  //     //     outputRange: ["0deg", "-2deg", "0deg", "2deg", "0deg"],
  //     //   });
  //     //   setRotateAnimation(rotate);
  //     // }, []);

  //     const getHeartAnimationStyle = () => ({
  //       transform: [
  //         { translateY: position.current },
  //         // { scale: scaleAnimation },
  //         // { translateX: xAnimation },
  //         // { rotate: rotateAnimation },
  //       ],
  //       // opacity: opacityAnimation,
  //     });

  //     return (
  //       <Animated.View
  //         style={[styles.heartWrap, getHeartAnimationStyle(), props.style]}
  //       >
  //         {/* <Heart id={props.id} key={props.id} /> */}
  //         <Text style={{ color: "white", fontSize: 15 }}>123</Text>
  //       </Animated.View>
  //     );
  //   },
  //   (prevProps: any, nextProps: any) => {
  //     let isEqual = true;
  //     if (JSON.stringify(prevProps.id) !== JSON.stringify(nextProps.id)) {
  //       isEqual = false;
  //     }
  //     console.log(isEqual);
  //     return isEqual;
  //   }
  // );

  // const HeartList = React.memo(() => {
  //   return (
  //     <>
  //       {hearts.map((v: any, index: number) => {
  //         return (
  //           <AnimatedHeart
  //             key={v.id}
  //             onComplete={() => {
  //               removeHeart(v.id);
  //             }}
  //             id={v.id}
  //             style={{ left: v.right }}
  //           />
  //         );
  //       })}
  //     </>
  //   );
  // });

  const TextAnimated = useCallback(({item}:any) => {
    // const opacityAnimation: any = useRef(new Animated.Value(0)).current;

    const [opacityAnimation, setOpacityAnimation]: any = useState(
      new Animated.Value(0)
    );

    useEffect(() => {

      Animated.timing(opacityAnimation, {
        duration: 2000,
        toValue: 1,
        useNativeDriver: true,
      }).start(() => {});
    }, []);

    // const id = useMemo(() => uuid.v4(), []);

    const getHeartAnimationStyle = useCallback(() => ({
      opacity: opacityAnimation,
    }), []);

    return (
        <Animated.View style={[getHeartAnimationStyle()]}> 
        <Text  style={{ color: "white" }} >
          {item.id}
        </Text>
       </Animated.View>
    );
  },[]);



  return (
    <>
      {/* <HeartList />
       */}
      <>
        {hearts.map((v: any, index: number) => {
          return (
            <>
            <TextAnimated key={v.id} item={v}/>
            </>
            // <AnimatedHeart
            //   key={v.id}
            //   onComplete={() => {
            //     removeHeart(v.id);
            //   }}
            //   id={v.id}
            //   style={{ left: v.right }}
            // />
          );
        })}
      </>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            top: height * 0.8,
            justifyContent: "space-evenly",
            flexDirection: "row",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            addHeart();
          }}
        >
          <View style={[styles.button, { backgroundColor: "#179c34" }]}>
            <Image
              style={{ width: 64, height: 64 }}
              source={require("./like.png")}
            />
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => {}}>
          <View style={[styles.button, { backgroundColor: "#bd2222" }]}>
            <Image
              style={{ width: 64, height: 64 }}
              source={require("./dislike.png")}
            />
          </View>
        </TouchableOpacity> */}
      </View>
    </>
  );
};

export default ButtonPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 10,

    borderRadius: 40,
    borderWidth: 1,
    borderColor: "black",
  },
  heartWrap: {
    position: "absolute",
    bottom: 30,
    // height: 32,
    // width,
    backgroundColor: "transparent",
  },
  heart: {
    width: 32,
    height: 32,
    backgroundColor: "transparent",
  },
});
