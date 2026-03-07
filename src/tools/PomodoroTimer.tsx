import { useState, useEffect, useCallback, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

const PomodoroTimer = () => {
  const [mode, setMode] = useState<"work" | "break">("work");
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [workMin, setWorkMin] = useState(25);
  const [breakMin, setBreakMin] = useState(5);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const tick = useCallback(() => {
    setSeconds(prev => {
      if (prev <= 1) {
        setRunning(false);
        setMode(m => {
          const next = m === "work" ? "break" : "work";
          return next;
        });
        return mode === "work" ? breakMin * 60 : workMin * 60;
      }
      return prev - 1;
    });
  }, [mode, workMin, breakMin]);

  useEffect(() => {
    if (running) intervalRef.current = setInterval(tick, 1000);
    else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [running, tick]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  const reset = () => { setRunning(false); setMode("work"); setSeconds(workMin * 60); };

  return (
    <ToolLayout slug="pomodoro-timer" howTo={["Set work and break durations", "Click Start to begin", "Timer auto-switches between work and break"]}>
      <div className="text-center space-y-6 max-w-sm mx-auto">
        <div className={`text-sm font-semibold uppercase tracking-wider ${mode === "work" ? "text-primary" : "text-accent"}`}>{mode === "work" ? "🎯 Focus Time" : "☕ Break Time"}</div>
        <div className="text-7xl font-bold font-mono text-foreground">{mm}:{ss}</div>
        <div className="flex justify-center gap-3">
          <button onClick={() => setRunning(!running)} className="rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">{running ? "Pause" : "Start"}</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-8 py-3 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div>
            <label className="text-xs text-muted-foreground">Work (min)</label>
            <input type="number" value={workMin} onChange={e => { setWorkMin(Number(e.target.value)); if (!running) setSeconds(Number(e.target.value) * 60); }} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-center outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Break (min)</label>
            <input type="number" value={breakMin} onChange={e => setBreakMin(Number(e.target.value))} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-center outline-none focus:border-primary" />
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};
export default PomodoroTimer;
