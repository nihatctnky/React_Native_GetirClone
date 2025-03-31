import { StyleSheet, Text, View } from "react-native";
import ProductItem from "../ProductItem/ProductItem";
import productsGet from "../../../assets/productsGet";

const ProductsContainer = () => {
  return (
    <View>
      <View style={styles.productsArea}>
        {productsGet.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={styles.barArea}>Çubuk</Text>

      <View style={styles.productsTwoArea}>
        {productsGet.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductsContainer;

const styles = StyleSheet.create({
  productsArea: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  productsTwoArea: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 10,
    alignItems: "center",
  },

  barArea: {
    color: "gray",
    fontWeight: "bold",
    padding: 14,
  },
});
