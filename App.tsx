import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

// Importando as telas
import Login from "./src/pages/Login";
import PrimeiroAcesso from "./src/pages/Primeiro-acesso/index";

// Definição das rotas disponíveis
export type RootStackParamList = {
  Login: undefined;
  PrimeiroAcesso: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PrimeiroAcesso" component={PrimeiroAcesso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
