import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import productDetailsScreen from "../screens/ProductDetailScreen/productDetail";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen/CartScreen";
import { connect, useDispatch } from "react-redux";
import cartItems from "../redux/reducers/cartItem";
import { Product } from "../models";
import { useState, useEffect } from "react";
import * as actions from "../redux/actions/cartActions";

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("window");

const HomeNavigator = ({
  cartItems,
}: {
  cartItems: { product: Product; quantity: number }[];
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.product.fiyat;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const clearCart = () => {
    dispatch(actions.clearCart());
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              style={{ width: 70, height: 30 }}
              source={require("../../assets/getirlogo.png")}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryScreen}
        options={{
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                marginRight: width * 0.03,
                borderRadius: 9,
                backgroundColor: "white",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: "white" }}
              />

              <View
                style={{
                  flex: 1,
                  height: 33,
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  backgroundColor: "#F3effe",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 12 }}
                >
                  ₺<Text>{totalPrice.toFixed(2)}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={productDetailsScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,

          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons
                style={{ marginLeft: 8 }}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Foundation
                style={{ marginRight: 8 }}
                name="heart"
                size={26}
                color="#32177a"
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 10 }}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => clearCart()}
              style={{ paddingRight: 10 }}
            >
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
