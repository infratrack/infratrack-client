import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MapScreen from "../screens/MapScreen";
import AddReportScreen from "../screens/AddReportScreen";
import AddLocationScreen from "../screens/AddLocationScreen";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="AddReport" component={AddReportScreen} />
      <Stack.Screen name="AddLocation" component={AddLocationScreen} />
    </Stack.Navigator>
  );
}
