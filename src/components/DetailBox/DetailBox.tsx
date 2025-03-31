import { StyleSheet, Text, View } from "react-native";

type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
};

const DetailBox = ({ price, name, quantity }: DetailBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceDesc}>
        <Text>₺</Text>
        {price}
      </Text>
      <Text style={styles.nameDesc}>{name}</Text>
      <Text style={styles.quantityDesc}>{quantity}</Text>
    </View>
  );
};

export default DetailBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  priceDesc: {
    color: "#5D3EBD",
    fontWeight: "bold",
    marginTop: 12,
    fontSize: 20,
  },

  nameDesc: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 12,
  },

  quantityDesc: {
    color: "#848897",
    fontSize: 12,
    fontWeight: "400",
    marginTop: 8,
    paddingBottom: 18,
  },
});
