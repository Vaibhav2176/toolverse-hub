import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const units = [
  { label: "kg/m³", name: "Kilograms per Cubic Meter", factor: 1 },
  { label: "g/cm³", name: "Grams per Cubic Centimeter", factor: 1000 },
  { label: "lb/ft³", name: "Pounds per Cubic Foot", factor: 16.0185 },
  { label: "g/mL", name: "Grams per Milliliter", factor: 1000 },
  { label: "kg/L", name: "Kilograms per Liter", factor: 1000 },
  { label: "oz/in³", name: "Ounces per Cubic Inch", factor: 1729.99 },
];

const DensityConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("kg/m³");
  const [results, setResults] = useState<{ label: string; name: string; value: string }[]>([]);

  const convert = () => {
    const v = Number(value);
    if (isNaN(v)) return;
    const base = v * (units.find(u => u.label === from)?.factor || 1);
    setResults(units.map(u => ({ label: u.label, name: u.name, value: (base / u.factor).toPrecision(8).replace(/\.?0+$/, "") })));
  };

  return (
    <ToolLayout slug="density-converter" howTo={["Enter a density value.", "Select the source unit.", "Click Convert."]} faqs={[{ q: "What is the density of water?", a: "Water has a density of 1 g/cm³ or 1000 kg/m³." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Value</Label><Input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="e.g. 1000" /></div>
          <div><Label>From</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={from} onChange={e => setFrom(e.target.value)}>
              {units.map(u => <option key={u.label} value={u.label}>{u.name} ({u.label})</option>)}
            </select>
          </div>
        </div>
        <div className="flex gap-3"><Button onClick={convert}>Convert</Button><Button variant="outline" onClick={() => { setValue(""); setResults([]); }}>Reset</Button></div>
        {results.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {results.map(r => (
              <div key={r.label} className="p-3 rounded-xl bg-secondary/50 text-center">
                <p className="text-xs text-muted-foreground">{r.name}</p>
                <p className="text-sm font-bold font-mono">{r.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default DensityConverter;
