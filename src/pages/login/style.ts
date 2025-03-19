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
    boxTop: {
        alignItems: "center",
        width: "100%",
    },
    logo: {
        width: 250,
        height: 200,
        marginBottom: 50,
    },
    input: {
        width: "100%",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        color: "white",
        fontSize: 16,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginBottom: 20,
    },
    forgotPasswordText: {
        color: "white",
        fontSize: 14,
    },
    loginButton: {
        width: "100%",
        height: 50,
        backgroundColor: "#0056b3",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 40,
    },
    loginButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    registerButton: {
        width: "100%",
        height: 50,
        borderWidth: 2,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
    },
    registerButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
