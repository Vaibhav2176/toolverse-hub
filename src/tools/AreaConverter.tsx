import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const units = [
  { label: "m²", name: "Square Meters", factor: 1 },
  { label: "km²", name: "Square Kilometers", factor: 1e6 },
  { label: "ft²", name: "Square Feet", factor: 0.092903 },
  { label: "in²", name: "Square Inches", factor: 0.00064516 },
  { label: "acres", name: "Acres", factor: 4046.86 },
  { label: "ha", name: "Hectares", factor: 10000 },
  { label: "mi²", name: "Square Miles", factor: 2.59e6 },
];

const AreaConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("m²");
  const [results, setResults] = useState<{ label: string; name: string; value: string }[]>([]);

  const convert = () => {
    const v = Number(value);
    if (isNaN(v)) return;
    const sqm = v * (units.find(u => u.label === from)?.factor || 1);
    setResults(units.map(u => ({ label: u.label, name: u.name, value: (sqm / u.factor).toPrecision(8).replace(/\.?0+$/, "") })));
  };

  return (
    <ToolLayout slug="area-converter" howTo={["Enter an area value.", "Select the source unit.", "Click Convert to see all area units."]} faqs={[{ q: "How many square feet in an acre?", a: "1 acre = 43,560 square feet." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Value</Label><Input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="e.g. 100" /></div>
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
                <p className="text-sm font-bold font-mono">{r.value} {r.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default AreaConverter;
