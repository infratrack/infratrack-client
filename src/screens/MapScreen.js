import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome5";

import colors from "../styles/colors";

export default function MapScreen() {
  const [region, setRegion] = useState(null);

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
      <MapView style={styles.map} region={region} />

      <TouchableOpacity style={styles.menuButton}>
        <Icon name="bars" size={25} color={colors.white} />
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
    height: "100%",
  },

  menuButton: {
    backgroundColor: colors.background,
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    left: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
