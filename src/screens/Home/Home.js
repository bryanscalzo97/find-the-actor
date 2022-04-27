import { View, Text, TouchableOpacity, Button } from "react-native";
import React, { useRef } from "react";
import styles from "./styles";
import RBSheet from "react-native-raw-bottom-sheet";
const Home = ({ navigation }) => {
  const refRBSheet = useRef();
  return (
    <View style={styles.homeContainer}>
      <View>
        <Text style={styles.heyDev}>Hey, Dev</Text>
        <Text style={styles.text}>Keep up the good work!</Text>
      </View>
      <View style={styles.famousContainer}>
        <Text>¿Quién es el famoso?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Results")}>
          <Text>Ver actor</Text>
        </TouchableOpacity>
        <Button
          title="subir imagen"
          onPress={() => refRBSheet.current.open()}
        />
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
            },
          }}
        >
          <View style={styles.bottomSheetContainer}>
            <Text style={styles.selectImage}>Selecciona una foto</Text>
            <View>
              <Text>Galería de imágenes</Text>
            </View>
            <View>
              <Text>Cámara</Text>
            </View>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};

export default Home;
