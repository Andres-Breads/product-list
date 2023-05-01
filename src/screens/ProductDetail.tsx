import { ParamListBase, RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import CustomText from "../components/CustomText"
import Product from "../components/Product"
import { MainStackParamList } from "../types/MainStackParamLIst"

type ProductDetailProps = {
  navigation: StackNavigationProp<MainStackParamList>,
  route: RouteProp<MainStackParamList, 'ProductDetail'>
}

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
  const { product } = route.params;
  const insets = useSafeAreaInsets();

  const handleReturn = () => {
    navigation.navigate("ProductList");
  }

  return (
    <View style={styles.container}>
      <View style={[styles.header, {marginTop: insets.top}]}>
        <CustomText style={styles.headerTitle}>{product.product}</CustomText>
      </View>
      <View style={styles.body}>
        <Product {...product} />
      </View>
      <View style={styles.footer}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => {handleReturn()}}>
            <CustomText style={styles.buttonText}>Aceptar</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    flex: 1,
    backgroundColor: "#CFD6FF",
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "auto",
  },
  body: {
    flex: 6,
    padding: 20
  },
  footer: {
    flex: 1,
    padding: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#334FFA",
    borderRadius: 10,
    paddingVertical: 17,
    flex: 1,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ProductDetail