import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import React, { useRef, useState } from "react";
import styles from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const Home = ({ navigation }) => {
  const [image, setImage] = useState(null);

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
      setImage(result.uri);
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
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (image != null) {
      const formdata = new FormData();
      formdata.append("file", {
        uri: image,
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
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.homeContainer}>
      <View>
        <Text style={styles.heyDev}>Hey, Dev</Text>
        <Text style={styles.text}>Keep up the good work!</Text>
      </View>
      <View style={styles.famousContainer}>
        <Text style={styles.famousText}>¿Quién es el famoso?</Text>

        {/* <Button
          title="subir imagen"
          onPress={() => refRBSheet.current.open()}
        /> */}
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => refRBSheet.current.open()}
        >
          <Text style={styles.selectText}>Presiona para elegir una foto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Results")}>
          <Text>Ver actor</Text>
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
            {image === null ? (
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
              image && (
                <View style={styles.containerImage}>
                  <Text style={styles.uploadingText}>Subiendo...</Text>
                  <Image
                    source={{ uri: image }}
                    style={{ width: 175, height: 211, borderRadius: 36 }}
                  />
                  <Button title="Enviar imagen" onPress={uploadImage}>
                    Enviar imagen
                  </Button>
                </View>
              )
            )}
          </View>
        </RBSheet>
      </View>
    </View>
  );
};

export default Home;
