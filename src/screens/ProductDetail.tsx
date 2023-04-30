import { ParamListBase, RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { StyleSheet, View } from "react-native"
import Product from "../components/Product"
import { MainStackParamList } from "../types/MainStackParamLIst"

type ProductDetailProps = {
  navigation: StackNavigationProp<MainStackParamList>,
  route: RouteProp<MainStackParamList, 'ProductDetail'>
}

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Product {...product} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productItem: {
    padding: 16
  }
});

export default ProductDetail