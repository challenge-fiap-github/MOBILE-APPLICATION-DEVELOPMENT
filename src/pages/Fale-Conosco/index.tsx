import React from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { style } from "./style";

export default function FaleConosco() {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

            {/* Cabeçalho */}
            <View style={style.header}>
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                <Text style={style.title}>Fale Conosco</Text>
                <TouchableOpacity style={style.backButton}>
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
