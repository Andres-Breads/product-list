import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ProductType } from '../types';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ProductListItemProps = {
  product: ProductType;
  onPress: () => void;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ product, onPress }) => (
  <TouchableOpacity style={styles.productItem} onPress={onPress}>
    <Text>{product.product}</Text>
  </TouchableOpacity>
)

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

export default ProductListItem;