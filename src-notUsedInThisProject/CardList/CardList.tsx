import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from "react";
import {
  StatusBar,
  Image,
  Text,
  FlatList,
  Dimensions,
  Animated,
  View,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("screen");
import {
  FlingGestureHandler,
  Directions,
  State,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { ICard } from "./Card.type";

import ImageViewer from "react-native-image-zoom-viewer";

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

export const CardList = forwardRef((props: any, ref) => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;

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

  // const setActiveIndex = (activeIndex: number) => {
  //   // scrollXIndex.setValue(activeIndex);
  //   // setCurrentIndex(activeIndex);
  //   Animated.spring(scrollXAnimated, {
  //     toValue: activeIndex,
  //     useNativeDriver: true,
  //   }).start(() => {});
  //   //   // const response = await getCatPics();
  // };

  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: currentIndex,
      useNativeDriver: true,
    }).start(() => {});
  }, [currentIndex]);


  // useImperativeHandle(ref, () => ({}));

  const moveLeft = () => {
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;
    // scrollXIndex.setValue(newIndex);
    setCurrentIndex(newIndex);
    // setActiveIndex(newIndex);
  };

  const moveRight = () => {
    const newIndex =
      currentIndex === cards.length - 1 ? cards.length - 1 : currentIndex + 1;
    // scrollXIndex.setValue(newIndex);
    setCurrentIndex(newIndex);
    // setActiveIndex(
    //   currentIndex === cards.length - 1 ? cards.length - 1 : currentIndex + 1
    // );
  };

  const Card = 
  // useCallback(
    (props: any) => {
      const { item, index } = props;
      console.log(item)
    const inputRange = [index - 1, index, index + 1];
    const translateX = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [50, 0, -50],
    });

    const scale = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    const opacity = scrollXAnimated.interpolate({
      inputRange,
      outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 1 - 1 / VISIBLE_ITEMS],
    });

    return (
      <Animated.View
        style={{
          position: "absolute",
          left: -ITEM_WIDTH / 2,
          opacity,
          transform: [
            {
              translateX,
            },
            { scale },
          ],
        }}
      >
        <View style={{ zIndex: index / 2 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setFullScreen(true);
            }}
          >
            <Image
              source={{ uri: item.url }}
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                borderRadius: 14,
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      </Animated.View>
    );
  }
  // , []);

  return (
    <>
      <Modal visible={fullScreen} style={{}}>
        <View
          style={{
            height: "100%",
            backgroundColor: "black",
          }}
        >
          <TouchableOpacity
            style={{ position: "absolute", zIndex: 900, left: 10, top: 10 }}
            onPress={() => setFullScreen(false)}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "green",
              }}
            >
              X
            </Text>
          </TouchableOpacity>
          <ImageViewer
            imageUrls={[
              {
                url: data[currentIndex].url,
              },
            ]}
            renderIndicator={() => <></>}
            useNativeDriver
            enableSwipeDown
            onSwipeDown={() => setFullScreen(false)}
          />
        </View>
      </Modal>
      {/* <FlingGestureHandler
        key="left"
        direction={Directions.LEFT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (currentIndex === cards.length - 1) {
              return;
            }
            setActiveIndex(currentIndex + 1);
          }
        }}
      >
        <FlingGestureHandler
          key="right"
          direction={Directions.RIGHT}
          onHandlerStateChange={(ev) => {
            if (ev.nativeEvent.state === State.END) {
              if (currentIndex === 0) {
                return;
              }
              setActiveIndex(currentIndex - 1);
            }
          }}
        > */}
          <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <FlatList
              data={data}
              keyExtractor={(_, currentIndex) => String(currentIndex)}
              // extraData={currentIndex}
              horizontal
              inverted
              contentContainerStyle={{
                flex: 1,
                justifyContent: "center",
                padding: SPACING * 2,
                marginTop: 50,
              }}
              scrollEnabled={false}
              removeClippedSubviews={false}
              CellRendererComponent={({
                item,
                index: indexC,
                children,
                style,
                ...props
              }) => {
                const zIndex = indexC === currentIndex ? 1 : 0;
                const newStyle = [style, { zIndex }];
                return (
                  <View style={newStyle} index={currentIndex} {...props}>
                    {children}
                  </View>
                );
              }}
              renderItem={({ item, index }) => (
                <Card item={item} index={index} />
              )}
            />

            <View
              style={{
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="chevron-back-circle"
                size={32}
                color="green"
                onPress={moveLeft}
              />
              <Ionicons
                name="heart"
                size={32}
                color="pink"
                onPress={() => {}}
              />
              <Ionicons
                name="heart-dislike"
                size={32}
                color="pink"
                onPress={() => {}}
              />
              <Ionicons
                name="chevron-forward-circle"
                size={32}
                color="green"
                onPress={moveRight}
              />
            </View>
          </SafeAreaView>
        {/* </FlingGestureHandler>
      </FlingGestureHandler> */}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: -1,
  },
  location: {
    fontSize: 16,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
  },
  itemContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: "hidden",
  },
});
