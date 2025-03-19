import React from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { style } from "./style";

export default function BuscarDentista() {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

            {/* Cabeçalho */}
            <View style={style.header}>
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                <Text style={style.title}>Buscar Dentista</Text>
                <TouchableOpacity style={style.backButton}>
                    <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
                </TouchableOpacity>
            </View>

            {/* Título Pesquisa */}
            <Text style={style.subtitle}>Pesquisa</Text>
        </View>
    );
}
