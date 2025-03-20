import React, { useState } from "react";
import { Text, TouchableOpacity, View, Image, FlatList, StatusBar, SafeAreaView, Modal, Alert } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";


type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, "Menu">;
type MenuScreenRouteProp = RouteProp<RootStackParamList, "Menu">;


interface Props {
  navigation: MenuScreenNavigationProp;
  route: MenuScreenRouteProp;
}

const menuItems = [
  { id: "1", title: "Meu Plano", screen: "MeuPlano" },
  { id: "2", title: "Agenda", screen: "Agenda" },
  { id: "3", title: "Meu Perfil", screen: "MeuPerfil" },
  { id: "4", title: "Buscar Dentista", screen: "BuscarDentista" },
  { id: "5", title: "Fale Conosco", screen: "FaleConosco" },
];

export default function Menu({ navigation }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  // Função para deslogar
  const handleLogout = async () => {
    setModalVisible(false);
    await AsyncStorage.clear();
    Alert.alert("Logout", "Você saiu da sua conta.");
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
        
        {/* Ícone do usuário que abre o menu */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={require("../../assets/icon_user.png")} style={style.userIcon} />
        </TouchableOpacity>
      </View>

      {/* Mensagem de boas-vindas */}
      <Text style={style.welcomeText}>Olá, Seja Bem-vindo!</Text>

      {/* Lista de opções do menu */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={style.menuItem} 
            onPress={() => navigation.navigate(item.screen as any)}
          >
            <Text style={style.menuText}>{item.title}</Text>
            <Text style={style.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal do menu do usuário */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={style.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={style.modalContainer}>
            <TouchableOpacity style={style.modalItem} onPress={handleLogout}>
              <Text style={style.modalText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}
