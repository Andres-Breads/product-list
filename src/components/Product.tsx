import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ProductType } from '../types';
import CustomText from './CustomText';

const Product: React.FC<ProductType> = ({createdAt, product, points, image, is_redemption, id}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <CustomText style={[styles.message, {marginBottom: 20}]}>Detalles del producto:</CustomText>
      <CustomText style={[styles.detail, {marginBottom: 20}]}>
        Comprado el {new Date(createdAt).toLocaleDateString("es-MX", {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </CustomText>
      <CustomText style={[styles.message, {marginBottom: 32}]}>Con esta compra {is_redemption ? 'redimiste' : 'acumulaste'}:</CustomText>
      <CustomText style={[styles.detail, {fontSize: 24}]}>{points} puntos</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  details: {

  },
  message: {
    color: "#9B9898",
    fontSize: 14,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Product;