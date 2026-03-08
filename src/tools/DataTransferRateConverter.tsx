import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const units = [
  { label: "bps", factor: 1 },
  { label: "Kbps", factor: 1e3 },
  { label: "Mbps", factor: 1e6 },
  { label: "Gbps", factor: 1e9 },
  { label: "KB/s", factor: 8e3 },
  { label: "MB/s", factor: 8e6 },
];

const DataTransferRateConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Mbps");
  const [results, setResults] = useState<{ label: string; value: string }[]>([]);

  const convert = () => {
    const v = Number(value);
    if (isNaN(v)) return;
    const bps = v * (units.find(u => u.label === from)?.factor || 1);
    setResults(units.map(u => ({ label: u.label, value: (bps / u.factor).toFixed(4).replace(/\.?0+$/, "") })));
  };

  return (
    <ToolLayout slug="data-transfer-rate-converter" howTo={["Enter a value and select the unit.", "Click Convert to see all data rate units."]} faqs={[{ q: "What's the difference between Mbps and MB/s?", a: "1 MB/s = 8 Mbps. Mbps uses bits, MB/s uses bytes." }]}>
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
export default DataTransferRateConverter;
