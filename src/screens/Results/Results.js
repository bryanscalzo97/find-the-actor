import { View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import axios from "axios";
import MoviesList from "../../components/MoviesList/MoviesList";
import ActorInfo from "../../components/ActorInfo/ActorInfo";

const Results = ({ route, navigation }) => {
  const { nameActorRequest } = route.params;
  const [dataActor, setDataActor] = useState([]);

  async function loadData() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&query=" +
          nameActorRequest +
          "&page=1&include_adult=false"
      );
      setDataActor(response.data.results[0]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.resultsContainer}>
      <ActorInfo dataActor={dataActor} navigation={navigation} />
      <MoviesList dataActor={dataActor} />
    </View>
  );
};

export default Results;
