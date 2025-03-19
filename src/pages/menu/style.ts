import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0066ff",
    paddingHorizontal: 15,
    paddingTop: 40, // Aumentado para descer os ícones
    paddingBottom: 15, // Mantém um espaçamento equilibrado
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  userIcon: {
    width: 30, // Ajustado para um tamanho maior
    height: 30,
    resizeMode: "contain",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 20,
    color: "#000",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuText: {
    fontSize: 16,
    color: "#000",
  },
  arrow: {
    fontSize: 18,
    color: "#000",
  },
});
