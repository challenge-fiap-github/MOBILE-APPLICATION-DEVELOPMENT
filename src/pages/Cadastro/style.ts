import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#0066ff",
        width: "100%",
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
    logo: {
        width: 250, // Mantendo o mesmo tamanho da tela de login
        height: 200,
        resizeMode: "contain",
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        color: "#ffffff",
        marginBottom: 20,
        marginTop: -10, // Subindo o título um pouco
    },
    input: {
        width: "100%",
        height: 40,
        borderBottomWidth: 1, // Apenas linha inferior
        borderBottomColor: "#ffffff", // Linha branca
        color: "#ffffff", // Texto branco
        fontSize: 16,
        marginBottom: 15, // Mantendo espaço entre os campos
        paddingHorizontal: 10,
        backgroundColor: "transparent", // Sem fundo branco
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
