import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const units: Record<string, number> = {
  "Joules (J)": 1,
  "Kilojoules (kJ)": 1000,
  "Calories (cal)": 4.184,
  "Kilocalories (kcal)": 4184,
  "Watt-hours (Wh)": 3600,
  "Kilowatt-hours (kWh)": 3600000,
  "BTU": 1055.06,
  "Electronvolts (eV)": 1.602176634e-19,
};

const EnergyConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Kilocalories (kcal)");
  const [results, setResults] = useState<Record<string, string> | null>(null);

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    const joules = v * units[from];
    const r: Record<string, string> = {};
    Object.entries(units).forEach(([name, factor]) => { r[name] = (joules / factor).toPrecision(8); });
    setResults(r);
  };

  return (
    <ToolLayout slug="energy-converter" howTo={["Enter an energy value", "Select the source unit", "Click Convert to see all units"]} faqs={[{ q: "How many calories in a kilocalorie?", a: "1 kilocalorie (food Calorie) = 1000 calories." }]}>
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

export default EnergyConverter;
