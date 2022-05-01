import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import GenderButton from "../GenderButton/GenderButton";
import BackButton from "../BackButton/BackButton";

const ActorInfo = ({ dataActor, navigation }) => {
  const { name, gender, profile_path, popularity } = dataActor;
  const imageUrl = "https://image.tmdb.org/t/p/w500/" + profile_path;

  return (
    <ImageBackground
      style={styles.infoActor}
      source={{ uri: imageUrl }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      >
        <View>
          <BackButton navigation={navigation} />
        </View>
        <View style={styles.dataActor}>
          <View>
            <View>
              <Text style={styles.actor}>{name}</Text>
            </View>
            <View>
              <GenderButton gender={gender} />
            </View>
          </View>
          <View style={styles.popularContainer}>
            <Text style={styles.popular}>Popularidad</Text>
            <View style={styles.starsContainer}>
              <Text style={styles.starsNumber}>{popularity}</Text>
              <FontAwesome name={"star"} size={16} color="#FACC15" />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default ActorInfo;
