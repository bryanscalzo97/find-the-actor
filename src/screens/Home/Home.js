import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import React, { useRef, useState } from "react";
import styles from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

const Home = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [isImageSet, setIsImageSet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actor, setActor] = useState("");
  const [errorActor, setErrorActor] = useState("");
  const [errorServer, setErrorServer] = useState(false);

  const refRBSheet = useRef();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      let url = result.uri;
      uploadImage(url);
    }
  };

  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      let url = result.uri;
      uploadImage(url);
    }
  };

  const uploadImage = async (url) => {
    setImage(url);
    setIsImageSet(true);
    setIsLoading(true);
    const formdata = new FormData();
    formdata.append("file", {
      uri: url,
      type: "image/jpg",
      name: "name",
    });
    axios
      .post(
        "https://whois.nomada.cloud/upload",
        formdata,

        {
          headers: {
            Nomada: "NzFlZTQ5NmItOWZiYy00MDMwLWJiOTgtN2FlZjM0NDVkYTc4",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        console.log(response.data);
        if (response.data.error === "") {
          setActor(response.data.actorName);
          setIsLoading(false);
        } else {
          setErrorActor(response.data.error);
          setIsLoading(false);
        }

        console.log(actor);
      })
      .catch(function (error) {
        console.log(error);
        setErrorServer(true);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.homeContainer}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.heyDev}>Hey, Dev</Text>
          <Image
            style={styles.emoji}
            source={require("../../../assets/emoji.png")}
          />
        </View>

        <Text style={styles.text}>Keep up the good work!</Text>
      </View>
      <View style={styles.famousContainer}>
        <Text style={styles.famousText}>¿Quién es el famoso?</Text>

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => refRBSheet.current.open()}
        >
          <Image
            style={styles.selectImageIcon}
            source={require("../../../assets/selectImageIcon.png")}
          />
          <Text style={styles.selectText}>Presiona para elegir una foto</Text>
        </TouchableOpacity>

        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: "#F1F5F9",
            },
            container: {
              borderTopEndRadius: 32,
              borderTopStartRadius: 32,
              height: "auto",
            },
          }}
        >
          <View style={styles.bottomSheetContainer}>
            {isImageSet === false ? (
              <View>
                <View style={styles.selectImageContainer}>
                  <Text style={styles.selectImage}>Selecciona una foto</Text>
                </View>
                <View style={styles.pickerContainer}>
                  <TouchableOpacity
                    style={styles.pickerGallery}
                    onPress={pickImage}
                  >
                    <FontAwesome name={"image"} size={16} color="#000" />
                    <Text style={styles.pickerText}>Galería de imágenes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.pickerGallery}
                    onPress={pickImageCamera}
                  >
                    <FontAwesome name={"camera"} size={16} color="#000" />
                    <Text style={styles.pickerText}>Cámara</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={styles.containerImage}>
                <Text style={styles.uploadingText}>
                  {isLoading
                    ? "Subiendo..."
                    : errorActor != ""
                    ? "¿Es un famoso?"
                    : errorServer === false
                    ? "Listo"
                    : "Hubo un error"}
                </Text>

                <Image
                  source={{ uri: image != "" ? image : undefined }}
                  style={{ width: 175, height: 211, borderRadius: 36 }}
                />

                <TouchableOpacity
                  style={
                    isLoading
                      ? styles.btnSearching
                      : errorActor != ""
                      ? styles.btnNotFound
                      : errorServer === false
                      ? styles.btnActor
                      : styles.btnError
                  }
                  onPress={() => {
                    if (actor != "")
                      navigation.navigate("Results", { theActor: actor });
                  }}
                >
                  <Text
                    style={
                      errorActor != ""
                        ? styles.btnIconTextBlack
                        : styles.btnIconText
                    }
                  >
                    {isLoading
                      ? "Buscando..."
                      : errorActor != ""
                      ? "No se encontró"
                      : errorServer === false
                      ? actor
                      : "Error de red o de servidor"}
                  </Text>
                </TouchableOpacity>
                <View style={styles.ButtonContainer}>
                  {(errorServer === true || errorActor != "") && (
                    <Button
                      title="Cerrar"
                      color="#3843D0"
                      accessibilityLabel="Cerrar"
                    />
                  )}
                </View>
              </View>
            )}
          </View>
        </RBSheet>
      </View>
    </View>
  );
};

export default Home;
