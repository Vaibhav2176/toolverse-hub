import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Store everything as km/L internally
const units = [
  { label: "km/L", name: "Kilometers per Liter" },
  { label: "mpg (US)", name: "Miles per Gallon (US)" },
  { label: "mpg (UK)", name: "Miles per Gallon (UK)" },
  { label: "L/100km", name: "Liters per 100 km" },
];

const toKmPerL = (v: number, unit: string): number => {
  switch (unit) {
    case "km/L": return v;
    case "mpg (US)": return v * 0.425144;
    case "mpg (UK)": return v * 0.354006;
    case "L/100km": return v === 0 ? 0 : 100 / v;
    default: return v;
  }
};

const fromKmPerL = (kml: number, unit: string): number => {
  switch (unit) {
    case "km/L": return kml;
    case "mpg (US)": return kml / 0.425144;
    case "mpg (UK)": return kml / 0.354006;
    case "L/100km": return kml === 0 ? 0 : 100 / kml;
    default: return kml;
  }
};

const FuelEfficiencyConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("mpg (US)");
  const [results, setResults] = useState<{ label: string; name: string; value: string }[]>([]);

  const convert = () => {
    const v = Number(value);
    if (isNaN(v) || v <= 0) return;
    const kml = toKmPerL(v, from);
    setResults(units.map(u => ({ label: u.label, name: u.name, value: fromKmPerL(kml, u.label).toFixed(4).replace(/\.?0+$/, "") })));
  };

  return (
    <ToolLayout slug="fuel-efficiency-converter" howTo={["Enter a fuel efficiency value.", "Select the source unit.", "Click Convert."]} faqs={[{ q: "What's better, high mpg or low L/100km?", a: "High mpg and low L/100km both mean better fuel efficiency." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Value</Label><Input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="e.g. 30" /></div>
          <div><Label>From</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={from} onChange={e => setFrom(e.target.value)}>
              {units.map(u => <option key={u.label} value={u.label}>{u.name} ({u.label})</option>)}
            </select>
          </div>
        </div>
        <div className="flex gap-3"><Button onClick={convert}>Convert</Button><Button variant="outline" onClick={() => { setValue(""); setResults([]); }}>Reset</Button></div>
        {results.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {results.map(r => (
              <div key={r.label} className="p-3 rounded-xl bg-secondary/50 text-center">
                <p className="text-xs text-muted-foreground">{r.name}</p>
                <p className="text-sm font-bold font-mono">{r.value} {r.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default FuelEfficiencyConverter;
