import { Entypo } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";

const { width, height } = Dimensions.get("window");

type productItemType = {
  item: Product;
  addItemToCart: (a: Product) => void;
};
const ProductItem = ({ item, addItemToCart }: productItemType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={styles.container}
    >
      <Image
        style={styles.imageArea}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.descArea}>
        <Text style={styles.descPrice}>
          <Text>{"₺"}</Text>
          {item.fiyat}
        </Text>

        <Text style={styles.textPrice}>
          <Text>{"₺"}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>

      <Text style={styles.proDetail}>{item.name}</Text>
      <Text style={styles.proTitle}>{item.miktar}</Text>

      <TouchableOpacity
        onPress={() => {
          addItemToCart(item);
        }}
        style={styles.cartIcon}
      >
        <Entypo name="plus" size={30} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);

const styles = StyleSheet.create({
  container: {
    width: width * 0.28,
    height: height * 0.25,
    marginTop: 12,
    marginLeft: 12,
    marginBottom: 6,
  },

  descArea: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  descPrice: {
    fontSize: 13,
    color: "#747990",
    textDecorationLine: "line-through",
  },

  textPrice: {
    color: "#5D3EBD",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 4,
  },

  proDetail: {
    fontSize: 13,
    fontWeight: "700",
    marginTop: 5,
  },

  proTitle: {
    color: "#747990",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },

  cartIcon: {
    width: 30,
    height: 30,
    borderWidth: 0.3,
    borderColor: "lightgrey",
    backgroundColor: "#fff",
    position: "absolute",
    right: -6,
    top: -6,
    borderRadius: 6,
    shadowRadius: 3.8,
    shadowOpacity: 0.05,
  },

  imageArea: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: "gray",
  },
});
