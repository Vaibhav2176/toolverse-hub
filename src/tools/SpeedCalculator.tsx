import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const SpeedCalculator = () => {
  const [mode, setMode] = useState<"speed" | "distance" | "time">("speed");
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const a = parseFloat(v1), b = parseFloat(v2);
    if (isNaN(a) || isNaN(b) || b === 0) return;
    if (mode === "speed") setResult(`Speed = ${(a / b).toFixed(4)} units/time`);
    else if (mode === "distance") setResult(`Distance = ${(a * b).toFixed(4)} units`);
    else setResult(`Time = ${(a / b).toFixed(4)} time units`);
  };

  const labels: Record<string, [string, string]> = {
    speed: ["Distance", "Time"],
    distance: ["Speed", "Time"],
    time: ["Distance", "Speed"],
  };

  return (
    <ToolLayout slug="speed-calculator" howTo={["Select what to calculate (speed, distance, or time)", "Enter the two known values", "Click Calculate"]} faqs={[{ q: "What is the formula?", a: "Speed = Distance ÷ Time. This calculator rearranges the formula based on your selection." }]}>
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2 flex-wrap">
          {(["speed", "distance", "time"] as const).map(m => (
            <button key={m} onClick={() => { setMode(m); setResult(null); }} className={`px-4 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${mode === m ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Find {m}</button>
          ))}
        </div>
        <input type="number" placeholder={labels[mode][0]} value={v1} onChange={e => setV1(e.target.value)} className="w-full input-field" />
        <input type="number" placeholder={labels[mode][1]} value={v2} onChange={e => setV2(e.target.value)} className="w-full input-field" />
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setV1(""); setV2(""); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
        {result && <div className="rounded-xl bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};

export default SpeedCalculator;
