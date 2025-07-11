import { Card, Divider, Icon, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { Extraction } from "../types/Extraction";

interface ExtractionCardProps {
  extraction: Extraction;
}

export default function ExtractionCard({ extraction }: ExtractionCardProps) {
  return (
    <Card status="primary">
      <View style={[styles.cardHeader]}>
        <Text status="basic" category="h6">
          Hario V60
        </Text>
        <View style={[styles.row]}>
          <Text category="label" style={{ fontSize: 16 }}>
            15g
          </Text>
          <Icon name="arrow-forward" style={{ width: 22, height: 22 }} />
          <Text category="label" style={{ fontSize: 16 }}>
            275ml
          </Text>
        </View>
      </View>
      <Divider style={{ marginTop: 4 }} />
      <View style={[styles.content]}>
        <Text category="label" style={{ fontSize: 14 }}>
          Proporção: 1:18
        </Text>
        <Text category="label" style={{ fontSize: 14 }}>
          Extração: 26s
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  content: {
    marginTop: 8,
    gap: 4,
  },
});
