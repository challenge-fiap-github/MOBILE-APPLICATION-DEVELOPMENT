import React from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { style } from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";


type AgendamentoNavigationProp = StackNavigationProp<RootStackParamList, "Agenda">;

interface Props {
    navigation: AgendamentoNavigationProp;
}

export default function Agendamento({ navigation }: Props) {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

            {/* Cabeçalho */}
            <View style={style.header}>
                {/* Logo à esquerda */}
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                
                {/* Título centralizado */}
                <Text style={style.title}>Agenda</Text>

                {/* Ícone de voltar à direita */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.backButton}>
                    <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
                </TouchableOpacity>
            </View>

            {/* Título Agendamentos */}
            <Text style={style.subtitle}>Agendamentos</Text>
        </View>
    );
}
