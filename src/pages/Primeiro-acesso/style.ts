import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0066ff",
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    header: {
        position: "absolute",
        top: 40,
        left: 15,
    },
    backIcon: {
        width: 25,
        height: 25,
        tintColor: "#ffffff",
    },
    boxTop: {
        alignItems: "center",
        width: "100%",
    },
    logo: {
        width: 250, // Mantendo o mesmo tamanho da tela de login
        height: 200,
        resizeMode: "contain",
        marginBottom: 50,
    },
    title: {
        fontSize: 20,
        color: "#ffffff",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderBottomWidth: 1, // Adiciona apenas a linha inferior
        borderBottomColor: "#ffffff", // Linha branca como na imagem
        color: "#ffffff", // Texto branco
        fontSize: 16,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: "transparent", // Remove o fundo branco
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#0056b3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
