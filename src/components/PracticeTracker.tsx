import { Button, StyleSheet, Text, View } from "react-native";

type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.count}>{`Solved: ${solved}`}</Text>
      <Button title="Solve +1" onPress={onSolve} />
      <Button title="Reset" onPress={onReset} />
      {solved >= 5 && <Text style={styles.great}>Great job! Keep it up!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 16,
  },
  count: { fontSize: 24, fontWeight: "bold", color: "#000", marginBottom: 8 },
  great: { fontSize: 18, color: "#28a745", marginTop: 8 },
});
