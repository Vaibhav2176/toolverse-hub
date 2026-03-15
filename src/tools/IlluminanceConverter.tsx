import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const units = [
  { label: "lux", name: "Lux", factor: 1 },
  { label: "fc", name: "Foot-candle", factor: 10.7639 },
  { label: "phot", name: "Phot", factor: 10000 },
  { label: "nox", name: "Nox", factor: 0.001 },
  { label: "klux", name: "Kilolux", factor: 1000 },
];

const IlluminanceConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("lux");
  const [results, setResults] = useState<{ label: string; name: string; value: string }[]>([]);

  const convert = () => {
    const v = Number(value);
    if (isNaN(v)) return;
    const lux = v * (units.find(u => u.label === from)?.factor || 1);
    setResults(units.map(u => ({ label: u.label, name: u.name, value: (lux / u.factor).toPrecision(8).replace(/\.?0+$/, "") })));
  };

  return (
    <ToolLayout slug="illuminance-converter" howTo={["Enter an illuminance value.", "Select the source unit.", "Click Convert."]} faqs={[{ q: "What is a foot-candle?", a: "A foot-candle equals about 10.764 lux. It's commonly used in the US." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Value</Label><Input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="e.g. 500" /></div>
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
export default IlluminanceConverter;
