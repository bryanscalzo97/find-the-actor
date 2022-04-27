import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#F1F5F9",
    borderRadius: 16,
    marginBottom: 16,
    padding: 10,
    flex: 3,
  },
  card: { flex: 3 },
  image: {
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  imageMovie: {
    width: 77,
    height: 129,
    borderRadius: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default styles;
