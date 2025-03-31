import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const DetailProperty = () => {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);

  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={[
          styles.container,
          { borderBottomWidth: index === details.length - 1 ? 0 : 0.4 },
        ]}
      >
        <Text
          style={{
            color: index === 0 ? "#4E4E4E" : "#687482",
            fontSize: index === 0 ? 11 : 13,
            fontWeight: index === 0 ? "400" : "500",
          }}
        >
          {detail}
        </Text>
        {index != 0 && (
          <Feather name="chevron-down" size={24} color="#9f9f9f" />
        )}
      </View>
    );
  };

  return (
    <View style={styles.mapContainer}>
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
};

export default DetailProperty;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  mapContainer: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
