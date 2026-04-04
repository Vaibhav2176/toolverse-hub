import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const units: Record<string, number> = { "N·m": 1, "lb·ft": 1.35582, "lb·in": 0.112985, "kg·cm": 0.0980665, "dyn·cm": 1e-7 };

const TorqueConverter = () => {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("N·m");

  const v = parseFloat(value);
  const inBase = !isNaN(v) ? v * units[from] : null;

  return (
    <ToolLayout slug="torque-converter" howTo={["Enter a value", "Select source unit", "See all conversions"]}>
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
export default TorqueConverter;
