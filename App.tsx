import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Menu from "./src/pages/menu/indext";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Menu></Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
