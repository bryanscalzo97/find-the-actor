import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const HomeHeader = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.heyDev}>Hey, Dev</Text>
        <Image
          style={styles.emoji}
          source={require("../../../assets/emoji.png")}
        />
      </View>

      <Text style={styles.text}>Keep up the good work!</Text>
    </View>
  );
};

export default HomeHeader;
