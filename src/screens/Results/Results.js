import { View, Text, FlatList, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
import GenderButton from "../../components/GenderButton/GenderButton";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Results = ({ route }) => {
  const [movies, setMovies] = useState([]);
  const [actor, setActor] = useState("");
  const [gender, setGender] = useState();
  const [image, setImage] = useState("");
  const { theActor } = route.params;

  const imageUrl = "https://image.tmdb.org/t/p/w500/" + image;
  const myActor = theActor;

  async function loadData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&query=" +
          myActor +
          "&page=1&include_adult=false"
      );
      setMovies(response.data.results[0].known_for);
      setActor(response.data.results[0].name);
      setGender(response.data.results[0].gender);
      setImage(response.data.results[0].profile_path);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <View style={styles.resultsContainer}>
      <ImageBackground
        style={styles.infoActor}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.gradient}
        >
          <View style={styles.dataActor}>
            <View>
              <View>
                <Text style={styles.actor}>{actor}</Text>
              </View>
              <View>
                <GenderButton gender={gender} />
              </View>
            </View>
            <View style={styles.popularContainer}>
              <Text style={styles.popular}>Popularidad</Text>
              <View style={styles.starsContainer}>
                <Text style={styles.starsNumber}>27.22</Text>
                <FontAwesome name={"star"} size={16} color="#FACC15" />
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.movies}>
        <Text style={styles.moviesTitle}>Peliculas:</Text>

        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard item={item} />}
        />
      </View>
    </View>
  );
};

export default Results;
