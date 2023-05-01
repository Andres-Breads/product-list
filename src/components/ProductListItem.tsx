import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import CustomText from './CustomText';
import { ProductType } from '../types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

type ProductListItemProps = {
  product: ProductType;
  onPress: () => void;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ product, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image style={styles.image} source={{ uri: product.image }} />
    <View style={styles.details}>
      <CustomText style={styles.product}>{product.product}</CustomText>
      <CustomText style={styles.createdAt}>
        {new Date(product.createdAt).toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </CustomText>
    </View>
    <View style={styles.points}>
      <CustomText style={[styles.pointsText, {color: product.is_redemption ? "#FF0000" : "#00B833"}]}>
        {product.is_redemption ? '-' : '+'}
      </CustomText>
      <CustomText style={styles.pointsText}>
        {product.points}
      </CustomText>
      <Icon name='chevron-right' size={18} color='#070707' style={styles.arrow} />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 16,
    borderRadius: 10,
  },
  details: {
    alignSelf: 'center',
    flex: 4,
  },
  product: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  createdAt: {
    fontSize: 12,
  },
  points: {
    alignSelf: 'center',
    flex: 2,
    flexDirection: 'row',
  },
  pointsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    marginLeft: 'auto',
  },
});

export default ProductListItem;