import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";

type WelcomeProps = {
  name: string
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.message}>Bienvenido de vuelta!</CustomText>
      <CustomText style={styles.name}>{name}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
  },
});

export default Welcome;