import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const units: Record<string, number> = {
  "Degrees (°)": 1,
  "Radians (rad)": 180 / Math.PI,
  "Gradians (grad)": 0.9,
  "Turns": 360,
  "Minutes (')": 1 / 60,
  "Seconds (\")": 1 / 3600,
};

const AngleConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Degrees (°)");
  const [results, setResults] = useState<Record<string, string> | null>(null);

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    const deg = v * units[from];
    const r: Record<string, string> = {};
    Object.entries(units).forEach(([name, factor]) => {
      r[name] = (deg / factor).toFixed(6);
    });
    setResults(r);
  };

  return (
    <ToolLayout slug="angle-converter" howTo={["Enter a value", "Select the unit to convert from", "Click Convert to see all units"]} faqs={[{ q: "How many radians in a circle?", a: "A full circle is 2π radians, or approximately 6.2832 radians." }]}>
      <div className="space-y-4 max-w-md">
        <input type="number" placeholder="Value" value={value} onChange={e => setValue(e.target.value)} className="w-full input-field" />
        <select value={from} onChange={e => setFrom(e.target.value)} className="w-full input-field">{Object.keys(units).map(u => <option key={u}>{u}</option>)}</select>
        <div className="flex gap-3">
          <button onClick={convert} className="btn-primary">Convert</button>
          <button onClick={() => { setValue(""); setResults(null); }} className="btn-secondary">Reset</button>
        </div>
        {results && (
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(results).map(([k, v]) => (
              <div key={k} className="rounded-xl bg-secondary/50 p-3 border border-border">
                <div className="text-xs text-muted-foreground font-semibold">{k}</div>
                <div className="text-sm font-mono font-bold mt-1">{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default AngleConverter;
