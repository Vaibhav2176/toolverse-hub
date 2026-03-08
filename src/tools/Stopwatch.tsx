import { useState, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

const Stopwatch = () => {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const startRef = useRef(0);

  const start = () => {
    startRef.current = Date.now() - elapsed;
    intervalRef.current = setInterval(() => setElapsed(Date.now() - startRef.current), 10);
    setRunning(true);
  };

  const stop = () => { clearInterval(intervalRef.current); setRunning(false); };
  const reset = () => { clearInterval(intervalRef.current); setRunning(false); setElapsed(0); setLaps([]); };
  const lap = () => setLaps(prev => [elapsed, ...prev]);

  const fmt = (ms: number) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const cs = Math.floor((ms % 1000) / 10);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(cs).padStart(2, "0")}`;
  };

  return (
    <ToolLayout slug="stopwatch" howTo={["Click Start to begin", "Use Lap to record split times", "Reset to clear"]} faqs={[{ q: "How accurate is it?", a: "It updates every 10ms for centisecond precision." }]}>
      <div className="max-w-sm mx-auto text-center space-y-6">
        <div className="text-6xl font-mono font-bold text-foreground py-6">{fmt(elapsed)}</div>
        <div className="flex gap-3 justify-center">
          {!running ? (
            <button onClick={start} className="bg-primary text-primary-foreground px-8 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-all">Start</button>
          ) : (
            <>
              <button onClick={stop} className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl text-sm font-semibold">Stop</button>
              <button onClick={lap} className="bg-accent text-accent-foreground px-6 py-3 rounded-xl text-sm font-semibold">Lap</button>
            </>
          )}
          <button onClick={reset} className="bg-destructive text-destructive-foreground px-6 py-3 rounded-xl text-sm font-semibold">Reset</button>
        </div>
        {laps.length > 0 && (
          <div className="space-y-1">
            {laps.map((l, i) => (
              <div key={i} className="flex justify-between bg-secondary rounded-lg px-4 py-2 text-sm">
                <span className="text-muted-foreground">Lap {laps.length - i}</span>
                <span className="font-mono font-bold text-foreground">{fmt(l)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default Stopwatch;
