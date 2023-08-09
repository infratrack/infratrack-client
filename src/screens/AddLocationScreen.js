import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

import pinBueiro from "../../assets/pin-bueiro.png";
import pinBuraco from "../../assets/pin-buraco.png";
import pinConstrucao from "../../assets/pin-construcao.png";
import pinEletrica from "../../assets/pin-eletrica.png";
import pinEsgoto from "../../assets/pin-esgoto.png";
import pinIluminacao from "../../assets/pin-iluminacao.png";
import pinLixo from "../../assets/pin-lixo.png";
import pinProblemasNaturais from "../../assets/pin-problemasNaturais.png";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function AddLocationScreen({ navigation, route }) {
  const [region, setRegion] = useState({});

  const { problemType } = route.params;

  const pinImages = {
    "Problema de Energia": pinEletrica,
    "Problema de iluminação": pinIluminacao,
    Buraco: pinBuraco,
    "Problemas naturais": pinProblemasNaturais,
    Esgoto: pinEsgoto,
    Lixo: pinLixo,
    Bueiro: pinBueiro,
    "Problema em Construções": pinConstrucao,
  };

  useEffect(() => {
    getRegion();
  }, []);

  async function getRegion() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let currentPosition = await Location.getCurrentPositionAsync({});

    setRegion({
      latitude: currentPosition.coords.latitude,
      longitude: currentPosition.coords.longitude,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.addLocationText}>Adicionar localização</Text>

        <View style={styles.locationInputContainer}>
          <Image
            resizeMode="contain"
            source={require("../../assets/location.png")}
            style={styles.locationImage}
          />
          <TextInput
            placeholder="Rua tal, bairro tal. Número tal."
            placeholderTextColor={colors.input}
            style={styles.locationInput}
            autoComplete="street-address"
          />
        </View>
      </View>

      <MapView style={styles.map} region={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          draggable
          onDragEnd={(e) => {
            setRegion({
              ...region,
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            console.log(region);
          }}
        >
          <Image
            resizeMode="contain"
            source={pinImages[problemType]}
            style={styles.pinImage}
          />
        </Marker>
      </MapView>

      <TouchableOpacity
        onPress={() => {
          route.params.setLocation(region);
          navigation.goBack();
        }}
        style={styles.confirmButton}
      >
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: "100%",
    height: "80%",
  },

  header: {
    alignItems: "center",
    backgroundColor: colors.background,
    justifyContent: "space-evenly",
    width: "100%",
    height: "20%",
  },

  addLocationText: {
    fontFamily: fonts.bold,
    fontSize: 27,
    color: colors.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  locationInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 15,
    height: 40,
    marginTop: -5,
    width: "85%",
  },

  locationImage: {
    height: 25,
    marginLeft: 10,
    resizeMode: "contain",
    alignItems: "center",
  },

  locationInput: {
    fontFamily: fonts.bold,
    color: colors.background,
    flex: 1,
    fontSize: 18,
    paddingTop: 3,
    paddingLeft: 5,
  },

  confirmButton: {
    borderRadius: 20,
    backgroundColor: colors.background,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    width: "80%",
    height: 55,
    marginTop: -90,
  },

  confirmText: {
    fontFamily: fonts.bold,
    fontSize: 30,
    color: colors.button,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  pinImage: {
    height: 60,
    marginTop: 150,
    resizeMode: "contain",
  },
});
