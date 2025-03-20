import React from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";


type BuscarDentistaNavigationProp = StackNavigationProp<RootStackParamList, "BuscarDentista">;

interface Props {
    navigation: BuscarDentistaNavigationProp;
}

export default function BuscarDentista({ navigation }: Props) {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

            {/* Cabeçalho */}
            <View style={style.header}>
                {/* Logo à esquerda */}
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                
                {/* Título centralizado */}
                <Text style={style.title}>Buscar Dentista</Text>

                {/* Ícone de voltar à direita */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
                    <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
                </TouchableOpacity>
            </View>

            {/* Título Pesquisa */}
            <Text style={style.subtitle}>Pesquisa</Text>
        </View>
    );
}
