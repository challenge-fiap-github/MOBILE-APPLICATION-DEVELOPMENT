import React from "react";
import { Text, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { style } from "./style";

export default function MeuPerfil() {
    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0066FF" />

            {/* Cabeçalho */}
            <View style={style.header}>
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                <Text style={style.title}>Meu Perfil</Text>
                <TouchableOpacity style={style.backButton}>
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
