import React from 'react';
import { Text } from 'react-native';
import { ProductType } from '../types';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ProductListItemProps = {
  product: ProductType;
  onPress: () => void;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ product, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{product.product}</Text>
  </TouchableOpacity>
)

export default ProductListItem;