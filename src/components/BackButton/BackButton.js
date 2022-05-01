import { TouchableHighlight, Image } from "react-native";
import React from "react";
import styles from "./styles";

const BackButton = ({ navigation }) => {
  return (
    <TouchableHighlight
      underlayColor="none"
      style={styles.btnContainer}
      onPress={() => navigation.goBack()}
    >
      <Image
        source={require("../../../assets/arrow-left.png")}
        style={styles.btnIcon}
      />
    </TouchableHighlight>
  );
};

export default BackButton;
