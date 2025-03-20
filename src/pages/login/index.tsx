import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

// Definição das rotas disponíveis
type RootStackParamList = {
  Login: undefined;
  PrimeiroAcesso: undefined;
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

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />

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

        <TouchableOpacity style={style.forgotPassword}>
          <Text style={style.forgotPasswordText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.loginButton}>
          <Text style={style.loginButtonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={style.registerButton} 
          onPress={() => navigation.navigate("PrimeiroAcesso")}
        >
          <Text style={style.registerButtonText}>Primeiro Acesso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
