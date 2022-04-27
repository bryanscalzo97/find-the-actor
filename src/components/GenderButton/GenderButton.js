import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const GenderButton = ({ gender }) => {
  return (
    <View style={styles.genderBtn}>
      <Text>{gender === 1 ? "Mujer" : "Hombre"}</Text>
    </View>
  );
};

export default GenderButton;
