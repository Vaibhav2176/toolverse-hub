import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const units: Record<string, number> = {
  "Milliliters (mL)": 1,
  "Liters (L)": 1000,
  "Gallons (US)": 3785.41,
  "Quarts (US)": 946.353,
  "Cups (US)": 236.588,
  "Fluid Oz (US)": 29.5735,
  "Tablespoons": 14.7868,
  "Teaspoons": 4.92892,
  "Cubic Meters": 1e6,
  "Cubic Feet": 28316.8,
};

const VolumeConverter = () => {
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState("Liters (L)");

  const ml = (parseFloat(value) || 0) * units[from];

  return (
    <ToolLayout slug="volume-converter" howTo={["Enter a value", "Select the unit", "See conversions"]} faqs={[{ q: "Which gallon is used?", a: "US gallon (3.785 liters), not Imperial." }]}>
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex gap-3">
          <input type="number" value={value} onChange={e => setValue(e.target.value)} className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
            {Object.keys(units).map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          {Object.entries(units).filter(([u]) => u !== from).map(([unit, factor]) => (
            <div key={unit} className="flex justify-between items-center bg-secondary rounded-xl px-4 py-3">
              <span className="text-sm text-muted-foreground">{unit}</span>
              <span className="font-mono font-bold text-foreground">{(ml / factor).toFixed(4)}</span>
            </div>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};
export default VolumeConverter;
