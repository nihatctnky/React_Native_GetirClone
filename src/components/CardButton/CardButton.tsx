import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions/cartActions";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

type cartButtonType = {
  addItemToCart: (a: Product) => void;
  item: Product;
};

const CardButton = ({ item, addItemToCart }: cartButtonType) => {
  return (
    <TouchableOpacity
      onPress={() => addItemToCart(item)}
      style={styles.container}
    >
      <View style={styles.descArea}>
        <Text style={styles.textArea}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(CardButton);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.12,
    backgroundColor: "#fff",
    position: "absolute",
    justifyContent: "center",
    bottom: 0,
  },

  descArea: {
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.06,
    width: "90%",
    backgroundColor: "#5D39C1",
    marginHorizontal: "5%",
    borderRadius: 8,
    marginTop: -10,
  },
  textArea: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
