import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const HeaderMain = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.containerHeader}>
        <Image
          style={styles.image}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.descOne}>
          <Text style={styles.textHome}>Ev</Text>
          <Text style={styles.desc}>Mustafa Kemal Paşa Mahallesi...</Text>
          <Entypo name="chevron-right" size={22} color="#5D3EBD" />
        </View>

        <View style={styles.descTwo}>
          <Text style={styles.tvsDetail}>TVS</Text>
          <Text style={styles.timeDetail}>17dk</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderMain;

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: "#F7D102",
    justifyContent: "space-between",
  },

  containerHeader: {
    height: height * 0.064,
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: "3%",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },

  image: {
    width: 30,
    height: 30,
  },
  descOne: {
    height: height * 0.035,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    marginLeft: 8,
  },

  textHome: {
    borderColor: "#F3F2FD",
    borderLeftWidth: 4,
    paddingLeft: 8,
    fontSize: 17,
    fontWeight: "800",
  },

  desc: {
    color: "#6E7480",
    paddingLeft: 6,
    fontSize: 14,
  },

  descTwo: {
    width: "25%",
    height: height * 0.065,
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 35,
    alignItems: "center",
  },

  tvsDetail: {
    fontSize: 12,
  },
  timeDetail: {
    fontSize: 18,
    fontWeight: "600",
  },
});
