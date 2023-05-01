import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

type CustomTextProps = {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

const CustomText: React.FC<CustomTextProps> = ({ children, style }) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Avenir-Roman",
  },
});

export default CustomText;