import React from "react";
import { Text, TouchableOpacity, View, Image, FlatList, StatusBar, SafeAreaView } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Tipagem da navegação para a tela de Menu
type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, "Menu">;
type MenuScreenRouteProp = RouteProp<RootStackParamList, "Menu">;

// Definição das props do componente
interface Props {
  navigation: MenuScreenNavigationProp;
  route: MenuScreenRouteProp;
}

const menuItems = [
  { id: "1", title: "Meu Plano" },
  { id: "2", title: "Agenda" },
  { id: "3", title: "Meu Perfil" },
  { id: "4", title: "Buscar Dentista" },
  { id: "5", title: "Fale Conosco" },
];

export default function Menu({ navigation }: Props) {
  // Função para deslogar
  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <SafeAreaView style={style.container}>
      {/* Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#0066ff" />

      {/* Cabeçalho */}
      <View style={style.header}>
        <Image source={require("../../assets/logo_small.png")} style={style.logo} />
        <Image source={require("../../assets/icon_user.png")} style={style.userIcon} />
      </View>

      {/* Mensagem de boas-vindas */}
      <Text style={style.welcomeText}>Olá, Seja Bem-vindo!</Text>

      {/* Lista de opções do menu */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={style.menuItem}>
            <Text style={style.menuText}>{item.title}</Text>
            <Text style={style.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />

      {/* Botão de Logout */}
      <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
        <Text style={style.logoutText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
