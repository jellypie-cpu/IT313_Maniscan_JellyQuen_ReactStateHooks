# IT 313_Maniscan_JellyQuen_ReactStateHooks

## Problem

The lab instructor needs a small screen that students can use during laboratory sessions to track how many pratcice problem they have solved and how long how they been working. This project is an Expo app called _Lab Timer & Practice Tracker_.

The screen has:

- A counter showing "Solved: N" with **Solve +1** and **Reset** buttons
- A "Great job!" message once the counter reaches 5
- A stopwatch showing the elapsed time (mm:ss) with **Start** and **Stop** buttons
- A "Running…" or "Paused" label that matches the stopwatch state

## My Approach

The app is split into small pieces, each with one job.

| File                                 | Purpose                                                                                                                                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/hooks/useStopwatch.ts`          | Custom hook. Keeps `seconds` in state and uses `useEffect` with `setInterval` to add 1 every second while `isRunning` is true. Its cleanup function calls `clearInterval` when the timer stops or the component unmounts. |
| `src/components/Stopwatch.tsx`       | Displays the formatted time. Uses conditional rendering to show "Running…" or "Paused".                                                                                                                                   |
| `src/components/PracticeTracker.tsx` | Displays the solved count and the Solve +1 / Reset buttons. Uses conditional rendering to show "Great job!" when `solved` reaches 5.                                                                                      |
| `src/components/LabScreen.tsx`       | Parent component. Owns the `solved` and `isRunning` state, calls `useStopwatch`, and passes data and handlers down as props.                                                                                              |
| `src/app/index.tsx`                  | Entry point that renders `LabScreen`.                                                                                                                                                                                     |

**Concepts used:**

- **useState** for `solved`, `isRunning`, and `seconds`.
- **Functional update** `setSolved(s => s + 1)` so the update always uses the latest value.
- **useEffect with a dependency array** `[isRunning]` so the timer effect only re-runs when `isRunning` changes.
- **Cleanup function** that clears the interval so timers do not pile up.
- **Conditional rendering** with `&&` and a ternary.
- **Lifting state up:** `PracticeTracker` and `Stopwatch` are siblings that stay in sync through their shared parent, `LabScreen`.
- **Custom hook** `useStopwatch` to keep timer logic separate and reusable.
- **Event handlers** are passed as function references (for example `onPress={handleSolve}`), never called directly in the JSX.

## How to Run the App in Expo Go

1. Install [Node.js](https://nodejs.org/).
2. Install **Expo Go** on your phone from the App Store or Google Play.
3. Open a terminal in the project folder and run:

```bash
   npm install
   npx expo start
```

4. Scan the QR code shown in the terminal:
   - **iPhone:** use the Camera app.
   - **Android:** use the scanner inside Expo Go.
5. Make sure your phone and computer are on the **same Wi-Fi network**.

## Expected Behavior

- On load: "Solved: 0", "00:00", "Paused", and all four buttons are visible.
- Pressing Solve +1 five times shows "Great job!". Reset sets the counter to 0 and does not affect the timer.
- Start begins counting up and shows "Running…". Stop freezes the timer and shows "Paused".
