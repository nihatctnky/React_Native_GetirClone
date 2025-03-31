import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

type categoryProps = {
  item: Category;
};

const CategoryItem = ({ item }: categoryProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryDetails", { category: item })}
      style={styles.container}
    >
      <Image style={styles.imagesDetail} source={{ uri: item.src }} />
      <Text style={styles.desc}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: width * 0.25,
    height: width * 0.24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  desc: {
    fontSize: 14,
    fontWeight: "600",
    color: "#616161",
  },

  imagesDetail: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: 10,
  },
});
