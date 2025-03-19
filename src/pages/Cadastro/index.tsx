import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from "react-native";
import { style } from "./style";

export default function Cadastro() {
    return (
        <ScrollView contentContainerStyle={style.scrollContainer}>
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

                {/* Campos de entrada */}
                <TextInput style={style.input} placeholder="Data de nascimento *" placeholderTextColor="#ccc" />
                <TextInput style={style.input} placeholder="E-mail *" placeholderTextColor="#ccc" keyboardType="email-address" />
                <TextInput style={style.input} placeholder="Confirme seu e-mail *" placeholderTextColor="#ccc" keyboardType="email-address" />
                <TextInput style={style.input} placeholder="Celular *" placeholderTextColor="#ccc" keyboardType="phone-pad" />
                <TextInput style={style.input} placeholder="Defina sua senha *" placeholderTextColor="#ccc" secureTextEntry />
                <TextInput style={style.input} placeholder="Confirme sua senha *" placeholderTextColor="#ccc" secureTextEntry />

                {/* Botão de cadastro */}
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
