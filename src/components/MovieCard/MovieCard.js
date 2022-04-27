import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const MovieCard = ({ item }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500/" + item.backdrop_path;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>{item.original_title}</Text>
        <Text style={styles.text}>{item.overview}</Text>
      </View>
      <View style={styles.image}>
        <Image style={styles.imageMovie} source={{ uri: imageUrl }} />
        <Text style={styles.starsMovie}>{item.vote_average}</Text>
      </View>
    </View>
  );
};

export default MovieCard;
