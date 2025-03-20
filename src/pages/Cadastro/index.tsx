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
  const { cpf } = route.params;
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // ✅ Função para formatar a data automaticamente
  const formatarDataNascimento = (text: string) => {
    // Remove caracteres não numéricos
    let cleaned = text.replace(/\D/g, "");

    // Limita a 8 dígitos (DDMMAAAA)
    if (cleaned.length > 8) {
      cleaned = cleaned.substring(0, 8);
    }

    // Aplica a formatação DD/MM/AAAA
    let formatted = cleaned;
    if (cleaned.length > 2) {
      formatted = cleaned.substring(0, 2) + "/" + cleaned.substring(2);
    }
    if (cleaned.length > 4) {
      formatted = formatted.substring(0, 5) + "/" + formatted.substring(5);
    }

    setDataNascimento(formatted);
  };

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

        {/* Logo */}
        <Image source={require("../../assets/logo.png")} style={style.logo} />

        {/* Texto de introdução */}
        <Text style={style.title}>Cadastro</Text>

        {/* Campos de entrada */}
        <TextInput
          style={style.input}
          placeholder="Data de nascimento *"
          placeholderTextColor="#ccc"
          value={dataNascimento}
          onChangeText={formatarDataNascimento} // Chama a função de formatação
          keyboardType="numeric"
          maxLength={10} // Limita a 10 caracteres (DD/MM/AAAA)
        />
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
