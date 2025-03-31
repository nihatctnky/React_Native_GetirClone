import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
  View,
} from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window");

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.containerAll}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"center"}
        snapToInterval={width * 0.5}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        style={styles.container}
        data={images}
        renderItem={(item) => (
          <Image source={{ uri: item.item }} style={styles.imageArea} />
        )}
      ></FlatList>
      <View>
        <View style={styles.containerDesign}>
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.imageDesign,
                {
                  backgroundColor: activeIndex == index ? "#5D3EBD" : "#F2F0FD",
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  containerAll: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 25,
    resizeMode: "stretch",
  },

  container: {
    width: width * 0.5,
    height: height * 0.21,
  },
  imageArea: {
    width: width * 0.5,
    height: height * 0.21,
  },

  containerDesign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 30,
    height: 10,
  },

  imageDesign: {
    width: 8,
    height: 8,
    borderRadius: 20,
  },
});
