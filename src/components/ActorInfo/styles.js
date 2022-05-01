import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  infoActor: {
    flex: 1,
  },
  gradient: {
    padding: 16,
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
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
  popularContainer: {
    paddingTop: 14,
  },
  popular: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  starsNumber: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
