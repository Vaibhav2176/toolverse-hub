import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const units = [
  { label: "Hz", factor: 1 },
  { label: "kHz", factor: 1e3 },
  { label: "MHz", factor: 1e6 },
  { label: "GHz", factor: 1e9 },
  { label: "RPM", factor: 1 / 60 },
];

const FrequencyConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Hz");
  const [results, setResults] = useState<{ label: string; value: string }[]>([]);

  const convert = () => {
    const v = Number(value);
    if (isNaN(v)) return;
    const hz = v * (units.find(u => u.label === from)?.factor || 1);
    setResults(units.map(u => ({ label: u.label, value: (hz / u.factor).toExponential(4) })));
  };

  return (
    <ToolLayout slug="frequency-converter" howTo={["Enter a value and select the unit.", "Click Convert to see all units."]} faqs={[{ q: "What is RPM?", a: "Revolutions Per Minute — 1 RPM = 1/60 Hz." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Value</Label><Input type="number" value={value} onChange={e => setValue(e.target.value)} /></div>
          <div><Label>From</Label>
            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={from} onChange={e => setFrom(e.target.value)}>
              {units.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
            </select>
          </div>
        </div>
        <div className="flex gap-3"><Button onClick={convert}>Convert</Button><Button variant="outline" onClick={() => { setValue(""); setResults([]); }}>Reset</Button></div>
        {results.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {results.map(r => (
              <div key={r.label} className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">{r.label}</p><p className="text-sm font-bold font-mono">{r.value}</p></div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default FrequencyConverter;
