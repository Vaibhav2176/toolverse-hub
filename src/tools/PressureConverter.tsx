import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const units: Record<string, number> = {
  "Pascal (Pa)": 1,
  "Kilopascal (kPa)": 1000,
  "Bar": 100000,
  "PSI": 6894.76,
  "Atmosphere (atm)": 101325,
  "mmHg (Torr)": 133.322,
};

const PressureConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Bar");
  const [results, setResults] = useState<Record<string, string> | null>(null);

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    const pa = v * units[from];
    const r: Record<string, string> = {};
    Object.entries(units).forEach(([name, factor]) => { r[name] = (pa / factor).toPrecision(8); });
    setResults(r);
  };

  return (
    <ToolLayout slug="pressure-converter" howTo={["Enter a pressure value", "Select the source unit", "Click Convert"]} faqs={[{ q: "What is standard atmospheric pressure?", a: "1 atm = 101,325 Pa = 1.01325 bar = 14.696 PSI = 760 mmHg." }]}>
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

export default PressureConverter;
