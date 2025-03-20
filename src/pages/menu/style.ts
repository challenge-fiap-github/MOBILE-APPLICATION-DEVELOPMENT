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
    paddingTop: 40,
    paddingBottom: 15,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  userIcon: {
    width: 30,
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





  // Depois irei corrigir
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
  },
  modalItem: {
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  modalText: {
    fontSize: 16,
    color: "#ff0000",
    fontWeight: "bold",
  },
});
