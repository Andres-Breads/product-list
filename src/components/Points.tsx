import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";

type PointsProps = {
  total: number
}

const Points: React.FC<PointsProps> = ({ total }) => {
  const [currentMonth, setCurrentMonth] = useState<string>("")

  useEffect(() => {
    let month = (new Date).toLocaleString('es-MX', { month: 'long' });
    month = month.charAt(0).toUpperCase() + month.slice(1);
    setCurrentMonth(month);
  }, []);

  return (
    <View style={styles.container}>
      <CustomText style={styles.message}>TUS PUNTOS</CustomText>
      <View style={styles.card}>
        <CustomText style={styles.cardTitle}>{currentMonth}</CustomText>
        <CustomText style={styles.cardContent}>{total.toLocaleString("es-MX")} pts</CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#334FFA",
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 50,
    position: "relative",
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    width: '80%',
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    top: 20,
    left: 20,
  },
  cardContent: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
  },
  message: {
    color: "#9B9898",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Points;