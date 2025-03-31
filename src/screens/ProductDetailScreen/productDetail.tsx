import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DetailBox from "../../components/DetailBox/DetailBox";
import DetailProperty from "../../components/DetailProperty/DetailProperty";
import CardButton from "../../components/CardButton/CardButton";

const productDetail = (props) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);

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
  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View style={styles.retArea}>
      <ScrollView>
        <ImageCarousel images={product.images} />
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text style={styles.detailsArea}>Detaylar</Text>
        <DetailProperty />
      </ScrollView>
      {/* ScrollView'in dışında tuturak sabit hale geldi.*/}
      <CardButton item={product} />
    </View>
  );
};

export default productDetail;

const styles = StyleSheet.create({
  retArea: {
    flex: 1,
  },
  detailsArea: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: "#808b99",
    fontWeight: "700",
    fontSize: 16,
  },
});
