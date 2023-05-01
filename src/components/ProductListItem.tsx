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
      <CustomText style={styles.pointsText}>
        {product.is_redemption ? '-' : '+'}{product.points}
      </CustomText>
      <Icon name='chevron-right' size={18} color='#666' style={styles.arrow} />
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
    flex: 4,
  },
  product: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  points: {
    alignSelf: 'center',
    flex: 2,
    flexDirection: 'row',
  },
  pointsText: {
    fontSize: 16,
    color: '#666',
  },
  arrowContainer: {
    
  },
  arrow: {
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  createdAt: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProductListItem;