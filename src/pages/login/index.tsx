import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { style } from "./style";

export default function Login() {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                {/* Logo */}
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                
                {/* Campos de entrada */}
                <TextInput
                    style={style.input}
                    placeholder="CPF ou Carteirinha"
                    placeholderTextColor="#B0B0B0"
                    value={cpf}
                    onChangeText={setCpf}
                    keyboardType="numeric"
                />
                <TextInput
                    style={style.input}
                    placeholder="Senha"
                    placeholderTextColor="#B0B0B0"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                {/* Esqueci minha senha */}
                <TouchableOpacity style={style.forgotPassword}>
                    <Text style={style.forgotPasswordText}>Esqueci minha senha</Text>
                </TouchableOpacity>

                {/* Botão de Acesso */}
                <TouchableOpacity style={style.loginButton}>
                    <Text style={style.loginButtonText}>Acessar</Text>
                </TouchableOpacity>

                {/* Botão de Primeiro Acesso */}
                <TouchableOpacity style={style.registerButton}>
                    <Text style={style.registerButtonText}>Primeiro Acesso</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}