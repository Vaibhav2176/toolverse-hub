import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const units = [
  { label: "W", name: "Watts", factor: 1 },
  { label: "kW", name: "Kilowatts", factor: 1000 },
  { label: "MW", name: "Megawatts", factor: 1e6 },
  { label: "HP", name: "Horsepower", factor: 745.7 },
  { label: "BTU/h", name: "BTU/hour", factor: 3.412 },
  { label: "ft·lbf/s", name: "Foot-pounds/sec", factor: 1.35582 },
];

const PowerConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("kW");
  const [results, setResults] = useState<{ label: string; name: string; value: string }[]>([]);

  const convert = () => {
    const v = Number(value);
    if (isNaN(v)) return;
    const watts = v * (units.find(u => u.label === from)?.factor || 1);
    setResults(units.map(u => ({ label: u.label, name: u.name, value: (watts / u.factor).toPrecision(8).replace(/\.?0+$/, "") })));
  };

  return (
    <ToolLayout slug="power-converter" howTo={["Enter a power value.", "Select the source unit.", "Click Convert to see all units."]} faqs={[{ q: "How many watts in a horsepower?", a: "1 HP ≈ 745.7 watts." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Value</Label><Input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="e.g. 5" /></div>
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
export default PowerConverter;
