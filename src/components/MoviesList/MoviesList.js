import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ dataActor }) => {
  const { known_for } = dataActor;
  return (
    <View style={styles.movies}>
      <Text style={styles.moviesTitle}>Peliculas:</Text>

      <FlatList
        data={known_for}
        renderItem={({ item }) => <MovieCard item={item} />}
      />
    </View>
  );
};

export default MoviesList;
