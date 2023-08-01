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
import axios from "axios";
import { API_URL } from "@env";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

async function handleCreateUser(name, email, password, navigation) {
  console.log("Trying to create user");
  await axios
    .post(`${API_URL}/user/create`, {
      name,
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      navigation.navigate("AddReport");
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function RegisterScreen({ navigation }) {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={require("../../assets/logo.png")}
          style={styles.image}
        />

        <Text style={styles.newAccountText}>Nova Conta</Text>
      </View>

      <SafeAreaView style={styles.forms}>
        <TextInput
          value={name}
          onChangeText={onChangeName}
          placeholder="nome de usuário"
          style={styles.input}
          placeholderTextColor={colors.input}
        />

        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          placeholder="email"
          style={styles.input}
          placeholderTextColor={colors.input}
        />

        <TextInput
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
          placeholder="senha"
          style={styles.input}
          placeholderTextColor={colors.input}
        />

        <TextInput
          value={confirmPassword}
          onChangeText={onChangeConfirmPassword}
          secureTextEntry={true}
          placeholder="confirmar a senha"
          style={styles.input}
          placeholderTextColor={colors.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            // handleCreateUser(name, email, password, navigation)
            navigation.navigate("AddReport")
          }
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.haveAccountView}>
          <Text style={styles.haveAccountText}>já possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}> Fazer login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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

  newAccountText: {
    color: colors.white,
    fontSize: 35,
    textAlign: "center",
    fontFamily: fonts.bold,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: 20,
    color: "#000",
    fontFamily: fonts.bold,
    fontSize: 15,
    textAlign: "left",
    height: 50,
    paddingLeft: 17,
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
  haveAccountText: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: 15,
  },

  loginText: {
    fontFamily: fonts.bold,
    color: colors.text,
    fontSize: 15,
    textAlign: "center",
  },

  haveAccountView: {
    display: "flex",
    marginTop: 20,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignSelf: "center",
  },
});
