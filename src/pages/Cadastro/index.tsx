import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, ScrollView, Alert } from "react-native";
import { style } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";

// Tipagem da navegação para a tela de Cadastro
type CadastroScreenNavigationProp = StackNavigationProp<RootStackParamList, "Cadastro">;
type CadastroScreenRouteProp = RouteProp<RootStackParamList, "Cadastro">;

// Definição das props do componente
interface Props {
  navigation: CadastroScreenNavigationProp;
  route: CadastroScreenRouteProp;
}

export default function Cadastro({ navigation, route }: Props) {
  const { cpf } = route.params; // Pegamos o CPF passado da tela anterior
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = async () => {
    if (!dataNascimento || !email || !celular || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      const novoUsuario = { cpf, dataNascimento, email, celular, senha };
      await AsyncStorage.setItem(`user_${cpf}`, JSON.stringify(novoUsuario));
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={style.scrollContainer}>
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
        <Text style={style.title}>Cadastro</Text>

        {/* Campos de entrada */}
        <TextInput style={style.input} placeholder="Data de nascimento *" placeholderTextColor="#ccc" value={dataNascimento} onChangeText={setDataNascimento} />
        <TextInput style={style.input} placeholder="E-mail *" placeholderTextColor="#ccc" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <TextInput style={style.input} placeholder="Celular *" placeholderTextColor="#ccc" keyboardType="phone-pad" value={celular} onChangeText={setCelular} />
        <TextInput style={style.input} placeholder="Defina sua senha *" placeholderTextColor="#ccc" secureTextEntry value={senha} onChangeText={setSenha} />
        <TextInput style={style.input} placeholder="Confirme sua senha *" placeholderTextColor="#ccc" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />

        {/* Botão de cadastro */}
        <TouchableOpacity style={style.button} onPress={handleCadastro}>
          <Text style={style.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
