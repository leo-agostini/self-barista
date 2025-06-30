import { StyleSheet } from "react-native";
import { AllProviders } from "./providers/AllProviders";
import { Navigation } from "./routes";

export default function App() {
  return (
    <AllProviders>
      <Navigation />
    </AllProviders>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
