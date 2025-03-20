import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definição das rotas disponíveis
type RootStackParamList = {
  Login: undefined;
  PrimeiroAcesso: undefined;
  Cadastro: { cpf: string };
  Menu: undefined;
};

// Tipagem da navegação para a tela de Login
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;
type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;

// Definição das props do componente
interface Props {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
}

export default function Login({ navigation }: Props) {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  // Função para validar login e redirecionar para o Menu
  const handleLogin = async () => {
    if (!cpf || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const usuario = await AsyncStorage.getItem(`user_${cpf}`);

      if (usuario) {
        const dadosUsuario = JSON.parse(usuario);

        if (dadosUsuario.senha === senha) {
          Alert.alert("Sucesso", "Login realizado com sucesso!");
          navigation.reset({
            index: 0,
            routes: [{ name: "Menu" }],
          });
        } else {
          Alert.alert("Erro", "Senha incorreta!");
        }
      } else {
        Alert.alert("Erro", "Usuário não encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        {/* Logo */}
        <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />

        {/* Campos de entrada */}
        <TextInput
          style={style.input}
          placeholder="CPF ou Carteirinha"
          placeholderTextColor="#B0B0B0"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
        <TextInput
          style={style.input}
          placeholder="Senha"
          placeholderTextColor="#B0B0B0"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        {/* Esqueci minha senha */}
        <TouchableOpacity style={style.forgotPassword}>
          <Text style={style.forgotPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        {/* Botão de Acesso */}
        <TouchableOpacity style={style.loginButton} onPress={handleLogin}>
          <Text style={style.loginButtonText}>Acessar</Text>
        </TouchableOpacity>

        {/* Botão de Primeiro Acesso */}
        <TouchableOpacity style={style.registerButton} onPress={() => navigation.navigate("PrimeiroAcesso")}>
          <Text style={style.registerButtonText}>Primeiro Acesso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
