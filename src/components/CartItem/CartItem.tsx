import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Product } from "../../models";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import * as actions from "../../redux/actions/cartActions";

type CartItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (prodcut: Product) => void;
};

const { width, height } = Dimensions.get("window");
const CartItem = ({ product, quantity, removeFromCart }: CartItemProps) => {
  return (
    <View style={styles.containerAll}>
      <View style={styles.container}>
        <View style={styles.imagesArea}>
          <View style={styles.imagesContainer}>
            <Image style={styles.images} source={{ uri: product.image }} />
          </View>
          <View style={styles.imagesDesc}>
            <Text style={styles.textName}>{product.name}</Text>
            <Text style={styles.textMiktar}>{product.miktar}</Text>
            <Text style={styles.textFiyat}>₺{product.fiyat}</Text>
          </View>
        </View>

        <View style={styles.quantityArea}>
          <TouchableOpacity
            onPress={() => removeFromCart(product)}
            style={styles.minus}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <View style={styles.amount}>
            <Text style={styles.amountText}>{quantity}</Text>
          </View>
          <View style={styles.plus}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

const styles = StyleSheet.create({
  containerAll: {
    width: "100%",
    backgroundColor: "white",
  },

  container: {
    width: width * 0.92,
    height: height * 0.13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: width * 0.04,
    backgroundColor: "white",
    borderBottomWidth: 0.4,
    borderBottomColor: "lightgrey",
  },

  imagesArea: {
    flexDirection: "row",
    alignItems: "center",
  },

  imagesDesc: {
    marginLeft: 8,
  },

  imagesContainer: {
    borderWidth: 0.45,
    borderColor: "lightgray",
    borderRadius: 8,
    padding: 4,
  },

  images: {
    width: width * 0.16,
    height: height * 0.09,
  },

  textName: {
    fontSize: 13,
    fontWeight: "600",
  },

  textMiktar: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 3,
    color: "#848897",
  },

  textFiyat: {
    color: "#5D3EBD",
    fontWeight: "bold",
    marginTop: 6,
    fontSize: 15,
  },

  quantityArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: width * 0.21,
    height: height * 0.037,
    borderColor: "ligthgrey",
    borderWidth: 0.5,
    borderRadius: 10,
    shadowOpacity: 0.6,
    shadowColor: "gray",
  },

  minus: {
    flex: 1,
    alignItems: "center",
  },

  amount: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#5D3EBD",
    height: height * 0.037,
    justifyContent: "center",
    fontWeight: "700",
  },

  amountText: {
    color: "#fff",
    fontSize: 15,
  },

  plus: {
    flex: 1,
    alignItems: "center",
  },
});

