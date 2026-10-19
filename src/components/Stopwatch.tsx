import { StyleSheet, Text, View } from "react-native";

type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

function formatTime(total: number) {
  const mm = String(Math.floor(total / 60)).padStart(2, "0");
  const ss = String(total % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

export default function Stopwatch({ seconds, isRunning }: StopwatchProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.time}>{formatTime(seconds)}</Text>
      {isRunning ? (
        <Text style={styles.status}>Running…</Text>
      ) : (
        <Text style={styles.status}>Paused</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 16,
  },
  time: { fontSize: 40, fontWeight: "bold", color: "#000" },
  status: { fontSize: 16, color: "#333" },
});
