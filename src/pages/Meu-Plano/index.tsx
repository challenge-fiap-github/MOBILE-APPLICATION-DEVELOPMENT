import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { style } from "./style";

const services = [
    "Cirurgia",
    "Consulta Rotina",
    "Tratamento de Canal",
    "Coroa ou Bloco",
    "Emergência",
    "Clareamento",
    "Exames",
    "Siso",
    "Restauração e Próteses",
    "Teleconsulta",
    "Tratamento Cárie",
    "Tratamento Gengiva",
];

export default function MeuPlano() {
    return (
        <View style={style.container}>
            {/* Topo da tela */}
            <View style={style.header}>
                <Image source={require("../../assets/logo.png")} style={style.logo} resizeMode="contain" />
                <Text style={style.title}>Meu Plano</Text>
                <TouchableOpacity style={style.backButton}>
                    <Image source={require("../../assets/icon_back.png")} style={style.backIcon} />
                </TouchableOpacity>
            </View>

            {/* Título Cobertura */}
            <Text style={style.subtitle}>Cobertura</Text>

            {/* Grid de Serviços */}
            <FlatList
                data={services}
                keyExtractor={(item) => item}
                numColumns={3}
                contentContainerStyle={style.gridContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity style={style.serviceBox}>
                        <Text style={style.serviceText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
