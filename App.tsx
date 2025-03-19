import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MeuPerfil from "./src/pages/Meu-Perfil";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <MeuPerfil></MeuPerfil>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
