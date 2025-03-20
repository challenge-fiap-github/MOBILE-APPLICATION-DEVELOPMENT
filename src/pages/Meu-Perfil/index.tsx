import React from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";


type MeuPerfilNavigationProp = StackNavigationProp<RootStackParamList, "MeuPerfil">;

interface Props {
    navigation: MeuPerfilNavigationProp;
}

export default function MeuPerfil({ navigation }: Props) {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

            {/* Cabeçalho */}
            <View style={style.header}>
                {/* Logo à esquerda */}
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                
                {/* Título centralizado */}
                <Text style={style.title}>Meu Perfil</Text>

                {/* Ícone de voltar à direita */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
                    <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
                </TouchableOpacity>
            </View>

            {/* Título Dados do Beneficiário */}
            <Text style={style.subtitle}>Dados do Beneficiário</Text>

            {/* Opções */}
            <TouchableOpacity style={style.option}>
                <Text style={style.optionText}>2ª Via do Boleto</Text>
                <Text style={style.arrow}>{">"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.option}>
                <Text style={style.optionText}>Cadastrar Débito Automático</Text>
                <Text style={style.arrow}>{">"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.option}>
                <Text style={style.optionText}>Termo de Serviço</Text>
                <Text style={style.arrow}>{">"}</Text>
            </TouchableOpacity>
        </View>
    );
}
