import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useStopwatch } from "../hooks/useStopwatch";
import PracticeTracker from "./PracticeTracker";
import Stopwatch from "./Stopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

  const handleSolve = () => setSolved((prev) => prev + 1);
  const handleReset = () => setSolved(0);
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <View style={styles.container}>
      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />
      <Stopwatch seconds={seconds} isRunning={isRunning} />
      <View style={styles.row}>
        <Button title="Start" onPress={handleStart} disabled={isRunning} />
        <Button title="Stop" onPress={handleStop} disabled={!isRunning} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  row: { flexDirection: "row", justifyContent: "space-between", marginTop: 16 },
});
