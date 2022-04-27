import { TouchableHighlight, Image } from "react-native";
import React from "react";
import styles from "./styles";

const BackButton = () => {
  return (
    <TouchableHighlight style={styles.btnContainer}>
      <Image
        source={require("../../../assets/arrow-left.png")}
        style={styles.btnIcon}
      />
    </TouchableHighlight>
  );
};

export default BackButton;
