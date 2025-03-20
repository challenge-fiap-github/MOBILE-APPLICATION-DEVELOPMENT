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
        width: "100%",
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
        justifyContent: "center",
        alignItems: "center",
    },
    backIcon: {
        width: 30, 
        height: 30,
        resizeMode: "contain",
    },
    subtitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 10,
        marginTop: 50,
    },
    gridContainer: {
        alignItems: "center",
        paddingBottom: 20,
        marginTop: 50, 
    },
    serviceBox: {
        width: 100,
        height: 80,
        backgroundColor: "#D3D3D3",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    serviceText: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },
});
