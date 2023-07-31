import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome5";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function MapScreen({ navigation }) {
  const [menuActive, setMenuActive] = useState(false);
  const [region, setRegion] = useState(null);
  const menuOpacity = useRef(new Animated.Value(0)).current;
  const menuTop = useRef(new Animated.Value(100)).current;

  const popIn = () => {
    setMenuActive(true);

    Animated.timing(menuTop, {
      toValue: 110,
      duration: 250,
      useNativeDriver: false,
    }).start();

    Animated.timing(menuOpacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setMenuActive(false);

    Animated.timing(menuTop, {
      toValue: 100,
      duration: 250,
      useNativeDriver: false,
    }).start();

    Animated.timing(menuOpacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
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
      <MapView style={styles.map} region={region} />

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => {
          menuActive === false ? popIn() : popOut();
        }}
      >
        <Icon name="bars" size={25} color={colors.white} />
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.menuItems,
          {
            opacity: menuOpacity,
            top: menuTop,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.addReportButton}
          onPress={() => navigation.navigate("AddReport")}
          disabled={!menuActive}
        >
          <Icon name="plus" size={25} color={colors.white} />
          <Text style={styles.addReportText}>Adicionar report</Text>
        </TouchableOpacity>

        <Image
          resizeMode="contain"
          source={require("../../assets/line.png")}
          style={styles.lineImage}
        />

        <TouchableOpacity style={styles.myProfileButton} disabled={!menuActive}>
          <Icon name="user" size={25} color={colors.white} solid />
          <Text style={styles.myProfileText}>Meu perfil</Text>
        </TouchableOpacity>
      </Animated.View>
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

  menuItems: {
    position: "absolute",
    top: 110,
    left: 10,
    width: 200,
    height: 100,
    borderRadius: 30,
    backgroundColor: colors.background,
  },

  addReportButton: {
    flexDirection: "row",
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  addReportText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  lineImage: {
    width: "100%",
  },

  myProfileButton: {
    flexDirection: "row",
    height: "50%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  myProfileText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 25,
    paddingLeft: 15,
  },
});
