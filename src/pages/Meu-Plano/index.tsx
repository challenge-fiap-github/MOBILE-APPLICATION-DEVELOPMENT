import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

type MeuPlanoNavigationProp = StackNavigationProp<RootStackParamList, "MeuPlano">;

interface Props {
  navigation: MeuPlanoNavigationProp;
}

export default function MeuPlano({ navigation }: Props) {
  return (
    <View style={style.container}>
      {/* Cabeçalho */}
      <View style={style.header}>
        {/* Logo à esquerda */}
        <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
        
        {/* Título no centro */}
        <Text style={style.title}>Meu Plano</Text>

        {/* Ícone de voltar à direita */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
          <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
        </TouchableOpacity>
      </View>

      {/* Conteúdo da tela */}
      <Text style={style.subtitle}>Cobertura</Text>
    </View>
  );
}
