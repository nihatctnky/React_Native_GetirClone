import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import categoriesGet from "../../../assets/categoriesGet";
import { Category } from "../../models";

const MainCategories = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesGet);
  return (
    <View>
      <View style={styles.category}>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default MainCategories;

const styles = StyleSheet.create({
  category: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});
