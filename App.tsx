import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./src/pages/login/";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: "#007bff", // Define o fundo azul como o da tela de login
  },
});
