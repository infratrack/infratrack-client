import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
    </Stack.Navigator>
  );
}
