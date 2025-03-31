import { ScrollView } from "react-native";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import BannerArea from "../../components/BannerArea/BannerArea";
import MainCategories from "../../components/MainCategories/MainCategories";

const HomeScreen = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ backgroundColor: "#f5f5f5", flex: 1 }}
    >
      <HeaderMain />
      <BannerArea />
      <MainCategories />
    </ScrollView>
  );
};

export default HomeScreen;
