import React from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { style } from "./style";

export default function Agendamento() {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

            {/* Cabeçalho */}
            <View style={style.header}>
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                <Text style={style.title}>Agenda</Text>
                <TouchableOpacity style={style.backButton}>
                    <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
                </TouchableOpacity>
            </View>

            {/* Título Agendamentos */}
            <Text style={style.subtitle}>Agendamentos</Text>
        </View>
    );
}
