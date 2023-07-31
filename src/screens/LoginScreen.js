import React, { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { handleLogin } from "./handleLogin";
import { authContext } from "../utils/Context";

export default function LoginScreen({navigation}) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Image
          resizeMode="contain"
          source={require("../../assets/logo.png")}
          style={styles.logoImage}
        />

        <View style={styles.welcomeContainer}>
          <Text style={styles.helloText}>Olá</Text>
          <Text style={styles.welcomeText}>bem-vindo de volta</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="email"
            placeholderTextColor={colors.input}
            style={styles.input}
            autoComplete="email"
            value={email}
            onChangeText={onChangeEmail}
            />

          <TextInput
            placeholder="senha"
            placeholderTextColor={colors.input}
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={onChangePassword}
            />
        </View>

        <Text style={styles.forgotPasswordText}>esqueci a senha</Text>

        <TouchableOpacity onPress={() => handleLogin(email, password)} style={styles.enterButton}>
          <Text style={styles.enterButtonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.continueWithContainer}>
          <Image
            resizeMode="contain"
            source={require("../../assets/line.png")}
            style={styles.lineImage}
          />
          <Text style={styles.continueWithText}>ou continue com</Text>
          <Image
            resizeMode="contain"
            source={require("../../assets/line.png")}
            style={styles.lineImage}
          />
        </View>

        <TouchableOpacity style={styles.googleButton} onPress={async () => alert(await AsyncStorage.getItem('token'))} >
          <Image
            resizeMode="contain"
            source={require("../../assets/google.png")}
            style={styles.googleImage}
          />
          <Text style={styles.googleButtonText}>fazer login com o Google</Text>
        </TouchableOpacity>

        <View style={styles.dontHaveAccountContainer}>
          <Text style={styles.dontHaveAccountText}>não tem uma conta? </Text>
          <Text style={styles.signUpText}>cadastre-se</Text>
        </View>
      </KeyboardAvoidingView>
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
  },

  logoImage: {
    height: Dimensions.get("window").width * 0.3,
    marginTop: 50,
  },

  welcomeContainer: {
    justifyContent: "space-between",
  },

  helloText: {
    fontFamily: fonts.bold,
    fontSize: 30,
    color: colors.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  welcomeText: {
    fontFamily: fonts.bold,
    fontSize: 17,
    color: colors.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },

  input: {
    fontFamily: fonts.bold,
    backgroundColor: colors.white,
    borderRadius: 20,
    color: colors.input,
    fontSize: 18,
    height: 50,
    marginTop: 15,
    paddingLeft: 17,
    textAlign: "left",
    width: "100%",
  },

  forgotPasswordText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.text,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    paddingRight: 40,
    marginTop: -15,
  },

  enterButton: {
    borderRadius: 20,
    backgroundColor: colors.button,
    display: "flex",
    justifyContent: "center",
    width: "80%",
    height: 55,
    marginTop: -15,
  },

  enterButtonText: {
    fontFamily: fonts.bold,
    fontSize: 30,
    color: colors.background,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  continueWithContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: -15,
  },

  lineImage: {
    marginHorizontal: 5,
    width: 90,
  },

  continueWithText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  googleButton: {
    borderRadius: 20,
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
    height: 55,
    marginTop: -15,
  },

  googleImage: {
    height: 25,
  },

  googleButtonText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.input,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  dontHaveAccountContainer: {
    flexDirection: "row",
    marginBottom: 50,
  },

  dontHaveAccountText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  signUpText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.text,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
