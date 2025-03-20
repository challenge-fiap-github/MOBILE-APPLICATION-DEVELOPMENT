import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, Alert } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";


type PrimeiroAcessoScreenNavigationProp = StackNavigationProp<RootStackParamList, "PrimeiroAcesso">;
type PrimeiroAcessoScreenRouteProp = RouteProp<RootStackParamList, "PrimeiroAcesso">;


interface Props {
  navigation: PrimeiroAcessoScreenNavigationProp;
  route: PrimeiroAcessoScreenRouteProp;
}

export default function PrimeiroAcesso({ navigation }: Props) {
  const [cpf, setCpf] = useState("");

  const verificarCPF = async () => {
    if (!cpf) {
      Alert.alert("Erro", "Por favor, informe seu CPF ou Carteirinha.");
      return;
    }

    try {
      const usuario = await AsyncStorage.getItem(`user_${cpf}`);

      if (usuario) {
        Alert.alert("Usuário já cadastrado", "Este CPF já está cadastrado. Faça login.");
      } else {
        
        await AsyncStorage.setItem("temp_cpf", cpf);
        navigation.navigate("Cadastro", { cpf });
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  };

  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0066ff" />

      {/* Header com seta de voltar */}
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <Image source={require("../../assets/logo.png")} style={style.logo} />

      {/* Texto de introdução */}
      <Text style={style.title}>Primeiro acesso</Text>

      {/* Campo de entrada */}
      <TextInput 
        style={style.input} 
        placeholder="CPF ou Carteirinha" 
        placeholderTextColor="#ccc"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      {/* Botão de cadastro */}
      <TouchableOpacity style={style.button} onPress={verificarCPF}>
        <Text style={style.buttonText}>VERIFICAR</Text>
      </TouchableOpacity>
    </View>
  );
}
