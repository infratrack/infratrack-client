import React from "react";
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

import colors from "../styles/colors";

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Image
          resizeMode="contain"
          source={require("../../assets/logo.png")}
          style={styles.image}
        />

        <Text style={styles.helloText}>Olá</Text>
        <Text style={styles.welcomeText}>bem-vindo de volta</Text>

        <TextInput placeholder="email" style={styles.input} />

        <TextInput placeholder="senha" style={styles.input} />

        <Text style={styles.forgotPasswordText}>esqueci a senha</Text>

        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.welcomeText}>ou continue com</Text>

        <TouchableOpacity>
          <Text>fazer login com o Google</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.welcomeText}>não tem uma conta? </Text>
          <Text style={styles.forgotPasswordText}>cadastre-se</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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

  image: {
    height: Dimensions.get("window").width * 0.7,
  },

  helloText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  welcomeText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: 20,
    color: colors.input,
    fontSize: 18,
    textAlign: "center",
    width: "75%",
  },

  forgotPasswordText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
