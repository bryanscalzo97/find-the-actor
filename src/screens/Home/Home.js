import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import styles from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

const Home = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [isImageSet, setIsImageSet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actor, setActor] = useState("");
  const [errorActor, setErrorActor] = useState("");
  const [errorServer, setErrorServer] = useState(false);
 
  useEffect(() => {
    navigation.addListener("focus", async () => {
      restartBottomSheet()
    });
  }, []);

  const refRBSheet = useRef();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      let url = result.uri;
      sentImage(url);
    }
  };

  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      let url = result.uri;
      sentImage(url);
    }
  };

  function sentImage(url) {
    const allowedExtension = ["png", "PNG", "jpg", "JPG"];
    const fileExtension = url.split(".").pop().toLowerCase();
    let isValidFile = false;

    for (let index in allowedExtension) {
      if (fileExtension === allowedExtension[index]) {
        isValidFile = true;
        uploadImage(url);
        break;
      }
    }

    if (!isValidFile) {
      alert(
        "Solo puedes cargar imagenes png y jpg, por favor vuelve a intentar"
      );
    }
  }

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
        if (response.data.error === "") {
          setActor(response.data.actorName);
          setIsLoading(false);
        } else {
          setErrorActor(response.data.error);
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
        setErrorServer(true);
        setIsLoading(false);
      });
  };

  function restartBottomSheet() {
    setImage("");
      setIsImageSet(false);
      setIsLoading(false);
      setActor("");
      setErrorActor("");
      setErrorServer(false);
  } 

  return (
    <View style={styles.homeContainer}>
      <HomeHeader />
      <View style={styles.famousContainer}>
        <Text style={styles.famousText}>??Qui??n es el famoso?</Text>

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
                    <Image
                      style={styles.sheetIcons}
                      source={require("../../../assets/image-icon.png")}
                    />
                    <Text style={styles.pickerText}>Galer??a de im??genes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.pickerGallery}
                    onPress={pickImageCamera}
                  >
                    <Image
                      style={styles.sheetIcons}
                      source={require("../../../assets/camera-icon.png")}
                    />
                    <Text style={styles.pickerText}>C??mara</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={styles.containerImage}>
                <Text style={styles.uploadingText}>
                  {isLoading
                    ? "Subiendo..."
                    : errorActor != ""
                    ? "??Es un famoso?"
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
                      navigation.navigate("Results", {
                        nameActorRequest: actor,
                      });

                    refRBSheet.current.close();
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
                      ? "No se encontr??"
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
                      onPress={() => {
                        restartBottomSheet(),
                         refRBSheet.current.close()
                        }}
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
