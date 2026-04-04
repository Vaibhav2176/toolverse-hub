import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const units: Record<string, number> = { "Newton (N)": 1, "Kilonewton (kN)": 1000, "Dyne": 1e-5, "Pound-force (lbf)": 4.44822, "Kilogram-force (kgf)": 9.80665 };

const ForceConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Newton (N)");

  const v = parseFloat(value);
  const inBase = !isNaN(v) ? v * units[from] : null;

  return (
    <ToolLayout slug="force-converter" howTo={["Enter a value", "Select source unit", "See conversions"]}>
      <div className="space-y-4 max-w-md">
        <div><Label>Value</Label><Input type="number" placeholder="100" value={value} onChange={e => setValue(e.target.value)} /></div>
        <div><Label>From</Label>
          <select value={from} onChange={e => setFrom(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
            {Object.keys(units).map(u => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        {inBase !== null && (
          <div className="space-y-2">
            {Object.entries(units).map(([u, factor]) => (
              <div key={u} className="flex justify-between rounded-lg bg-secondary p-3">
                <span className="text-sm font-medium">{u}</span>
                <span className="font-mono text-sm text-primary">{(inBase / factor).toFixed(6)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default ForceConverter;
