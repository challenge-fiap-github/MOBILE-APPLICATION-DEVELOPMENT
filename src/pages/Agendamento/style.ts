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
        marginTop: 50,
    },
});
