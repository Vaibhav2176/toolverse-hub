import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const units: Record<string, number> = {
  "m/s": 1,
  "km/h": 1 / 3.6,
  "mph": 0.44704,
  "ft/s": 0.3048,
  "knots": 0.514444,
};

const SpeedConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("km/h");
  const [results, setResults] = useState<Record<string, string> | null>(null);

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    const ms = v * units[from];
    const r: Record<string, string> = {};
    Object.entries(units).forEach(([name, factor]) => { r[name] = (ms / factor).toFixed(6); });
    setResults(r);
  };

  return (
    <ToolLayout slug="speed-converter" howTo={["Enter a speed value", "Select the source unit", "Click Convert"]} faqs={[{ q: "How to convert km/h to mph?", a: "Multiply by 0.621371. For example, 100 km/h ≈ 62.14 mph." }]}>
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

export default SpeedConverter;
