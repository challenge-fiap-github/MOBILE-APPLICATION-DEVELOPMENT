import React from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";


type FaleConoscoNavigationProp = StackNavigationProp<RootStackParamList, "FaleConosco">;

interface Props {
    navigation: FaleConoscoNavigationProp;
}

export default function FaleConosco({ navigation }: Props) {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

            {/* Cabeçalho */}
            <View style={style.header}>
                {/* Logo à esquerda */}
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                
                {/* Título centralizado */}
                <Text style={style.title}>Fale Conosco</Text>

                {/* Ícone de voltar à direita */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
                    <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
                </TouchableOpacity>
            </View>

            {/* Opções */}
            <TouchableOpacity style={style.option}>
                <Text style={style.optionText}>Contato</Text>
                <Text style={style.arrow}>{">"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.option}>
                <Text style={style.optionText}>Perguntas Frequentes</Text>
                <Text style={style.arrow}>{">"}</Text>
            </TouchableOpacity>
        </View>
    );
}
