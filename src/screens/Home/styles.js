import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 60,
    padding: 16,
    backgroundColor: "#FFF",
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
  btnSearching: {
    backgroundColor: "#3843D0",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 100,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
  },
  btnIconText: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 16,
  },
  btnIconTextBlack: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 16,
  },

  btnActor: {
    backgroundColor: "#4ADE80",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 100,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
  },
  btnNotFound: {
    backgroundColor: "#FDE047",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 100,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
    color: "black",
  },
  btnError: {
    backgroundColor: "#F75555",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 100,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 14,
  },
  ButtonContainer: {
    width: "100%",
    marginTop: 20,
    borderRadius: 12,
  },

  sheetIcons: {
    width: 24,
    height: 24,
  },

  selectImageIcon: {
    width: 49,
    height: 48,
  },
});

export default styles;
