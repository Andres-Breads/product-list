import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fetchProducts } from '../api/Api';
import { ProductType } from '../types';
import { MainStackParamList } from '../types/MainStackParamLIst';
import CustomText from '../components/CustomText';
import ProductListItem from '../components/ProductListItem';
import Points from '../components/Points';
import Welcome from '../components/Welcome';

type ProductListProps = {
  navigation: StackNavigationProp<MainStackParamList>;
};

const ProductList: React.FC<ProductListProps> = ({ navigation }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [abortController, setAbortController] = useState<AbortController>(new AbortController());
  const insets = useSafeAreaInsets();

  const loadProducts = async () => {
    try {
      const signal = abortController.signal;
      const data = await fetchProducts(signal);
      setProducts(data);
      updateTotalPoints(data);
      setIsLoading(false);
    } catch (error) {
      setProducts([]);
      setIsLoading(false);
      console.error(error);
    }
  };

  const updateTotalPoints = (products: ProductType[]) => {
    let total = products.reduce((acc, curr) => {
      let value = curr.is_redemption ? -curr.points : curr.points;
      return acc + value;
    }, 0)
    setTotalPoints(total);
  }

  const handleRefresh = async () => {
    const newAbortController = new AbortController();
    setAbortController(newAbortController);
    setRefreshing(true);
    await loadProducts();
    setIsFiltering(false);
    setRefreshing(false);
  };

  useEffect(() => {
    loadProducts();

    return () => {
      abortController.abort();
    }
  }, []);

  const handleProductPress = (product: ProductType) => {
    navigation.navigate('ProductDetail', { product: product });
  }

  const filterEarned = () => {
    const filteredProducts = products.filter(product => !product.is_redemption);
    setProducts(filteredProducts);
    setIsFiltering(true);
  }

  const filterRedeemed = () => {
    const filteredProducts = products.filter(product => product.is_redemption);
    setProducts(filteredProducts);
    setIsFiltering(true);
  }

  const resetFilters = () => {
    loadProducts();
    setIsFiltering(false);
  }

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Welcome name="Ruben Rodriguez" />
      <Points total={totalPoints} />
      <CustomText style={styles.message}>TUS MOVIMIENTOS</CustomText>
      <FlatList
        data={products}
        style={styles.itemsContainer}
        renderItem={({ item }) => <ProductListItem product={item} onPress={() => handleProductPress(item)} />}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
      <View style={styles.buttons}>
        {!isFiltering ?
          (
            <>
              <TouchableOpacity style={[styles.button, {marginRight: 7}]}
                onPress={() => {filterEarned()}}
              >
                <CustomText style={styles.buttonText}>Ganados</CustomText>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, {marginLeft: 7}]}
                onPress={() => {filterRedeemed()}}
              >
                <CustomText style={styles.buttonText}>Canjeados</CustomText>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity style={styles.button} onPress={() => {resetFilters()}}>
              <CustomText style={styles.buttonText}>Todos</CustomText>
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    padding: 20,
  },
  itemsContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    // paddingVertical: 20,
  },
  message: {
    color: "#9B9898",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 43,
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
  },
});

export default ProductList;