import React from "react";
import { Text, TouchableOpacity, View, Image, FlatList, StatusBar, SafeAreaView } from "react-native";
import { style } from "./styles";

const menuItems = [
  { id: "1", title: "Meu Plano" },
  { id: "2", title: "Agenda" },
  { id: "3", title: "Meu Perfil" },
  { id: "4", title: "Buscar Dentista" },
  { id: "5", title: "Fale Conosco" },
];

export default function Menu() {
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
    </SafeAreaView>
  );
}
