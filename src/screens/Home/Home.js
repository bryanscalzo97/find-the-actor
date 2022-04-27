import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
const Home = ({ navigation }) => {
  console.log("entre al home");
  return (
    <View style={styles.homeContainer}>
      <View>
        <Text style={styles.heyDev}>Hey, Dev</Text>
        <Text style={styles.text}>Keep up the good work!</Text>
      </View>
      <View style={styles.famousContainer}>
        <Text>¿Quién es el famoso?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Results")}>
          <Text>Ver actor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
