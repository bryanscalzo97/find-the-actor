import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
  },
  infoActor: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
  },
  movies: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFF",
  },
  moviesList: {
    width: "100%",
  },
  dataActor: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actor: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  gender: {
    backgroundColor: "#FACC15",
  },
  popular: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  starsNumber: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  popularContainer: {
    paddingTop: 14,
  },
  moviesTitle: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default styles;
