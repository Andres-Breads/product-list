import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type ProductProps = {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
};

const Product: React.FC<ProductProps> = ({createdAt, product, points, image, is_redemption, id}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.details}>
        <Text style={styles.product}>{product}</Text>
        <Text style={styles.points}>{points} points</Text>
        <Text style={styles.createdAt}>{new Date(createdAt).toLocaleDateString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  product: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  points: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  createdAt: {
    fontSize: 14,
    color: '#666',
  },
});

export default Product;