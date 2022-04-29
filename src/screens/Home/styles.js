import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 60,
    padding: 16,
    backgroundColor: "#FFF",
  },
  heyDev: {
    color: "#0F172A",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#475569",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectImage: {
    fontSize: 16,
    fontWeight: "bold",

    padding: 20,
    color: "#64748B",
  },
  selectImageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSheetContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
  pickerContainer: {
    width: "100%",
  },
  pickerGallery: {
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  pickerText: {
    fontSize: 16,
    marginLeft: 16,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  uploadingText: {
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: "#64748B",
  },
  famousContainer: {
    marginTop: 32,
  },
  famousText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  uploadButton: {
    width: "100%",
    height: 137,
    backgroundColor: "#F1F5F9",
    borderWidth: 3,
    borderColor: "#3843D0",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderStyle: "dotted",
    borderRadius: 1,
  },
  selectText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3843D0",
  },
});

export default styles;
