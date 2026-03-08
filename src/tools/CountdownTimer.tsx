import { useState, useEffect, useRef } from "react";
import ToolLayout from "@/components/ToolLayout";

const CountdownTimer = () => {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("5");
  const [seconds, setSeconds] = useState("0");
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => setRemaining(r => r - 1), 1000);
      return () => clearInterval(intervalRef.current);
    }
    if (remaining <= 0 && running) setRunning(false);
  }, [running, remaining]);

  const start = () => {
    const total = (parseInt(hours) || 0) * 3600 + (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);
    if (total > 0) { setRemaining(total); setRunning(true); }
  };

  const h = Math.floor(remaining / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;

  return (
    <ToolLayout slug="countdown-timer" howTo={["Set hours, minutes, and seconds", "Click Start to begin countdown"]} faqs={[{ q: "Does it alert when finished?", a: "The timer stops at 0:00:00. Keep the tab open to watch it." }]}>
      <div className="max-w-sm mx-auto text-center space-y-6">
        {!running ? (
          <div className="flex gap-3 justify-center">
            <div>
              <label className="text-xs text-muted-foreground">Hours</label>
              <input type="number" min="0" value={hours} onChange={e => setHours(e.target.value)} className="w-20 rounded-xl border border-input bg-background px-3 py-3 text-center text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Min</label>
              <input type="number" min="0" max="59" value={minutes} onChange={e => setMinutes(e.target.value)} className="w-20 rounded-xl border border-input bg-background px-3 py-3 text-center text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Sec</label>
              <input type="number" min="0" max="59" value={seconds} onChange={e => setSeconds(e.target.value)} className="w-20 rounded-xl border border-input bg-background px-3 py-3 text-center text-sm outline-none focus:border-primary" />
            </div>
          </div>
        ) : (
          <div className="text-6xl font-mono font-bold text-foreground py-8">
            {String(h).padStart(2, "0")}:{String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
          </div>
        )}
        <div className="flex gap-3 justify-center">
          {!running ? (
            <button onClick={start} className="bg-primary text-primary-foreground px-8 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-all">Start</button>
          ) : (
            <>
              <button onClick={() => setRunning(false)} className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl text-sm font-semibold">Pause</button>
              <button onClick={() => { setRunning(false); setRemaining(0); }} className="bg-destructive text-destructive-foreground px-6 py-3 rounded-xl text-sm font-semibold">Reset</button>
            </>
          )}
        </div>
      </div>
    </ToolLayout>
  );
};
export default CountdownTimer;
