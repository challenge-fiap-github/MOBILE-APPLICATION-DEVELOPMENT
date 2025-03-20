import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

// TELAS
import Login from "./src/pages/Login";
import PrimeiroAcesso from "./src/pages/Primeiro-acesso/index";
import Cadastro from "./src/pages/Cadastro/index";
import Menu from "./src/pages/Menu/indext";
import MeuPlano from "./src/pages/Meu-Plano/index";
import Agenda from "./src/pages/Agendamento/index";
import MeuPerfil from "./src/pages/Meu-Perfil";
import BuscarDentista from "./src/pages/Buscar-Dentista/index";
import FaleConosco from "./src/pages/Fale-Conosco/index";

export type RootStackParamList = {
  Login: undefined;
  PrimeiroAcesso: undefined;
  Cadastro: { cpf: string };
  Menu: undefined;
  MeuPlano: undefined;
  Agenda: undefined;
  MeuPerfil: undefined;
  BuscarDentista: undefined;
  FaleConosco: undefined;
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
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="MeuPlano" component={MeuPlano} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="MeuPerfil" component={MeuPerfil} />
        <Stack.Screen name="BuscarDentista" component={BuscarDentista} />
        <Stack.Screen name="FaleConosco" component={FaleConosco} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
