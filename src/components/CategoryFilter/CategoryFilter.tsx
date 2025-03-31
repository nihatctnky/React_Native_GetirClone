import { StyleSheet, Text, ScrollView, Dimensions, View } from "react-native";
import categoriesGet from "../../../assets/categoriesGet";
import { useState } from "react";
import { Category } from "../../models";

const { width, height } = Dimensions.get("window");

const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 9,
        },
        item == active && {
          borderBottomColor: "#FFD00C",
          borderBottomWidth: 2.5,
        },
      ]}
    >
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );
};

const CategoryFilter = ({
  item,
  category,
}: {
  category: Category;
  active: Category;
}) => {
  const [categories, setCategories] = useState<Category[]>(categoriesGet);
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((item) => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#7849F7",
    height: height * 0.065,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },

  categoryName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
