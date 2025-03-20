import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

// Importando as telas
import Login from "./src/pages/Login";
import PrimeiroAcesso from "./src/pages/Primeiro-acesso/index";
import Cadastro from "./src/pages/Cadastro/index";

export type RootStackParamList = {
  Login: undefined;
  PrimeiroAcesso: undefined;
  Cadastro: { cpf: string }; // Passamos o CPF para a tela de Cadastro
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PrimeiroAcesso" component={PrimeiroAcesso} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
