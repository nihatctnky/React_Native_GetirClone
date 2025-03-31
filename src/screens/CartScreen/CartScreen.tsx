import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import productsGet from "../../../assets/productsGet";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

const CartScreen = ({
  cartItems,
}: {
  cartItems: { product: Product; quantity: number }[];
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: "none" },
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: "flex" },
      });
    };
  }, [navigation]);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const getProductPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.fiyat;
      setTotalPrice(total);
    });
    cartItems.length ? null : setTotalPrice(0);
  };
  useEffect(() => {
    getProductPrice();
  }, [cartItems]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <FlatList
          data={cartItems} // Doğru prop gönderildi
          keyExtractor={(item, index) => index.toString()} // FlatList hata vermemesi için key eklendi
          renderItem={({ item }) => (
            <CartItem product={item.product} quantity={item.quantity} />
          )}
        />
        <Text style={styles.textDesc}>Önerilen Ürünler</Text>
        <ScrollView
          style={{ backgroundColor: "#fff" }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
        >
          {productsGet.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.touchArea}>
          <Text style={styles.textArea}>Devam</Text>
        </TouchableOpacity>
        <View style={styles.otherArea}>
          <Text style={styles.subText}>
            <Text>₺</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(CartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    height: height * 0.12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
    backgroundColor: "#f8f8f8",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  touchArea: {
    height: height * 0.06,
    flex: 3,
    backgroundColor: "#5D3EBD",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textArea: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
  },
  otherArea: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    height: height * 0.06,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  subText: {
    color: "#5D3EBD",
    fontWeight: "900",
    fontSize: 20,
  },
  textDesc: {
    padding: 15,
    fontWeight: "800",
    color: "#5d3ebd",
  },
});
