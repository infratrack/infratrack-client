import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function AddReportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Title}>Adicionar Report</Text>
      </View>

      <View style={styles.forms}>
        <TextInput
          placeholder="Título do report"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Título do report"
          style={styles.input}
        ></TextInput>
        <TextInput
          multiline={true}
          numberOfLines={5}
          placeholder="Descrição do Report"
          style={styles.descriptionInput}
        ></TextInput>
      </View>

      <View style={styles.evidenceLocation}>
        <Text style={styles.Text}>Adicione uma evidência</Text>
      </View>

      <View style={styles.buttonView}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
    fontFamily: fonts.bold,
  },
  header: {
    display: "flex",
    // paddingTop: 20,
    justifyContent: "space-evenly",
    flex: 1.6,
    paddingTop: 20,
    // backgroundColor: 'blue'
  },
  forms: {
    display: "flex",
    flex: 2.75,
    width: "75%",
    gap: 20,
    // justifyContent: 'center',
    // backgroundColor: 'red'
  },

  image: {
    height: Dimensions.get("window").width * 0.3,
    marginTop: 10,
  },

  Title: {
    color: colors.white,
    fontSize: 35,
    textAlign: "center",
    fontFamily: fonts.bold,
  },
  Text: {
    color: colors.white,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 20,
    color: colors.background,
    fontFamily: fonts.bold,
    fontSize: 15,
    textAlign: "left",
    height: 50,
    paddingLeft: 17,
  },

  descriptionInput: {
    backgroundColor: colors.white,
    borderRadius: 20,
    color: colors.background,
    fontFamily: fonts.bold,
    fontSize: 15,
    textAlign: "left",
    height: 150,
    paddingLeft: 17,
    paddingTop: 17,
    textAlignVertical: "top",
  },

  button: {
    marginTop: 30,
    backgroundColor: colors.button,
    borderRadius: 20,
    height: 50,
    display: "flex",
    justifyContent: "center",
  },

  buttonText: {
    color: colors.background,
    fontFamily: fonts.bold,
    fontSize: 25,

    textAlign: "center",
  },
  evidenceLocation: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
  },
});
