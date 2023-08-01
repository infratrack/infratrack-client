import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

export async function handleLogin(email, password) {
  console.log("Trying to login: " + email + " " + password);
  await axios
    .post(`${API_URL}/auth/login`, {
      email,
      password,
    })
    .then((response) => {
      console.log(response.data);
      const data = response.data;
      AsyncStorage.setItem("token", "Bearer " + data.access_token);
      AsyncStorage.setItem("id", data.id);
    })
    .catch((error) => {
      console.log(error);
    });
}
