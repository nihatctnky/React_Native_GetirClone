import { ScrollView } from "react-native-gesture-handler";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import { useState } from "react";
import { Category } from "../../models";
import TypeFilter from "../../components/TypeFilter/TypeFilter";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

const CategoryScreen = (props) => {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFilter category={category} active={category} />
      <TypeFilter />
      <ProductsContainer />
    </ScrollView>
  );
};

export default CategoryScreen;
