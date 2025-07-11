import { StyleSheet, View } from "react-native";
import ExtractionCard from "./components/ExtractionCard";

export default function RecentExtractions() {
  return (
    <View style={[styles.container]}>
      <ExtractionCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
