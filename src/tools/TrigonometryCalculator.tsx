import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const TrigonometryCalculator = () => {
  const [angle, setAngle] = useState("");
  const [unit, setUnit] = useState<"deg" | "rad">("deg");
  const [results, setResults] = useState<Record<string, string> | null>(null);

  const calculate = () => {
    const a = parseFloat(angle);
    if (isNaN(a)) return;
    const rad = unit === "deg" ? (a * Math.PI) / 180 : a;
    setResults({
      "sin": Math.sin(rad).toFixed(8),
      "cos": Math.cos(rad).toFixed(8),
      "tan": Math.abs(Math.cos(rad)) < 1e-10 ? "undefined" : Math.tan(rad).toFixed(8),
      "csc": Math.abs(Math.sin(rad)) < 1e-10 ? "undefined" : (1 / Math.sin(rad)).toFixed(8),
      "sec": Math.abs(Math.cos(rad)) < 1e-10 ? "undefined" : (1 / Math.cos(rad)).toFixed(8),
      "cot": Math.abs(Math.sin(rad)) < 1e-10 ? "undefined" : (Math.cos(rad) / Math.sin(rad)).toFixed(8),
    });
  };

  return (
    <ToolLayout slug="trigonometry-calculator" howTo={["Enter an angle value", "Select degrees or radians", "Click Calculate to see all trig functions"]} faqs={[{ q: "What is the difference between degrees and radians?", a: "Degrees divide a circle into 360 parts, while radians use the ratio of arc length to radius. π radians = 180°." }]}>
      <div className="space-y-4 max-w-md">
        <div className="flex gap-3">
          <input type="number" placeholder="Angle" value={angle} onChange={e => setAngle(e.target.value)} className="flex-1 input-field" />
          <div className="flex gap-2">
            {(["deg", "rad"] as const).map(u => (
              <button key={u} onClick={() => setUnit(u)} className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${unit === u ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{u.toUpperCase()}</button>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setAngle(""); setResults(null); }} className="btn-secondary">Reset</button>
        </div>
        {results && (
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(results).map(([fn, val]) => (
              <div key={fn} className="rounded-xl bg-secondary/50 p-4 border border-border">
                <div className="text-xs text-muted-foreground font-semibold uppercase">{fn}</div>
                <div className="text-lg font-mono font-bold mt-1">{val}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default TrigonometryCalculator;
