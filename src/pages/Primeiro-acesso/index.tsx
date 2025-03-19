import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar } from "react-native";
import { style } from "./style";

export default function PrimeiroAcesso() {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0066ff" />
            
            {/* Header com seta de voltar */}
            <View style={style.header}>
                <TouchableOpacity>
                    <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
                </TouchableOpacity>
            </View>

            {/* Logo */}
            <Image source={require("../../assets/logo.png")} style={style.logo} />

            {/* Texto de introdução */}
            <Text style={style.title}>Primeiro acesso</Text>

            {/* Campo de entrada */}
            <TextInput 
                style={style.input} 
                placeholder="CPF ou Carteirinha" 
                placeholderTextColor="#ccc"
            />

            {/* Botão de cadastro */}
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    );
}
