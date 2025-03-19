import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0066FF",
        paddingHorizontal: 15,
        paddingTop: 40,
        paddingBottom: 15,
    },
    logo: {
        width: 50,
        height: 30,
        resizeMode: "contain",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        flex: 1,
    },
    backButton: {
        width: 30,
        height: 30,
    },
    backIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 90, // Aumentado para descer "Dados do Beneficiário"
    },
    option: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#CCCCCC",
        marginTop: 20, // Adicionado para separar mais as opções da parte superior
    },
    optionText: {
        fontSize: 16,
        fontWeight: "500",
    },
    arrow: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
