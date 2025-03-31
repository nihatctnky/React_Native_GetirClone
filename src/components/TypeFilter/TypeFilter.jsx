import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

const TypeBox = ({
  item,
  active,
  setCat,
}: {
  item: string,
  active: string,
  setCat: any,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        styles.touchArea,
        item === active
          ? { backgroundColor: "#5C3EBC" }
          : { borderColor: "#F0EFF7", borderWidth: 2 },
      ]}
    >
      <Text style={[styles.typeText, item == active && { color: "#fff" }]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const TypeFilter = () => {
  const [category, setCategory] = useState("Birlikte iyi gider");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={true}
      style={styles.container}
    >
      {["Birlikte iyi gider", "Çubuk", "Külah", "Çoklu", "Bar"].map((item) => (
        <TypeBox setCat={setCategory} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default TypeFilter;

const styles = StyleSheet.create({
  touchArea: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 12,
    borderRadius: 6,
    height: height * 0.044,
  },

  container: {
    flexDirection: "row",
    width: "100%",
    height: height * 0.072,
    paddingVertical: height * 0.014,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },

  typeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7849F7",
  },
});
