import { ParamListBase, RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { View } from "react-native"
import Product from "./Product"
import { MainStackParamList } from "../types/MainStackParamLIst"

type ProductDetailProps = {
  navigation: StackNavigationProp<MainStackParamList>,
  route: RouteProp<MainStackParamList, 'ProductDetail'>
}

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
  const { product } = route.params;

  return (
    <View>
      <Product {...product} />
    </View>
  );
}

export default ProductDetail