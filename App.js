import StartGameScreen from "./screens/StartGameScreen";
import { View, StyleSheet } from "react-native";
export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
});
