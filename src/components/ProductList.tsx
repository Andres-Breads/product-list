import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, ScrollView, RefreshControl, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Product from './Product';
import { fetchProducts } from '../api/Api';
import { ProductType } from '../types';
import { MainStackParamList } from '../types/MainStackParamLIst';
import ProductListItem from './ProductListItem';

type ProductListProps = {
  navigation: StackNavigationProp<MainStackParamList>;
};

const ProductList: React.FC<ProductListProps> = ({ navigation }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [abortController, setAbortController] = useState<AbortController>(new AbortController());

  const loadProducts = async () => {
    try {
      const signal = abortController.signal;
      const data = await fetchProducts(signal);
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setProducts([]);
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleRefresh = async () => {
    const newAbortController = new AbortController();
    setAbortController(newAbortController);
    setRefreshing(true);
    await loadProducts();
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

  return (
    <View style={styles.container}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>

      </ScrollView>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} onPress={() => handleProductPress(item)} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ProductList;