import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const PercentageChangeCalc = () => {
  const [oldVal, setOldVal] = useState("");
  const [newVal, setNewVal] = useState("");

  const o = parseFloat(oldVal);
  const n = parseFloat(newVal);
  const change = o !== 0 ? ((n - o) / Math.abs(o)) * 100 : 0;
  const valid = !isNaN(o) && !isNaN(n) && oldVal && newVal;

  return (
    <ToolLayout slug="percentage-change-calculator" howTo={["Enter original value", "Enter new value", "See percentage change"]} faqs={[{ q: "What's the formula?", a: "((New - Old) / |Old|) × 100" }]}>
      <div className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground">Original Value</label>
            <input type="number" value={oldVal} onChange={e => setOldVal(e.target.value)} placeholder="100" className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">New Value</label>
            <input type="number" value={newVal} onChange={e => setNewVal(e.target.value)} placeholder="125" className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        {valid && (
          <div className={`rounded-xl p-6 text-center ${change >= 0 ? "bg-cat-convert/10" : "bg-destructive/10"}`}>
            <div className={`text-4xl font-bold ${change >= 0 ? "text-cat-convert" : "text-destructive"}`}>
              {change >= 0 ? "+" : ""}{change.toFixed(2)}%
            </div>
            <div className="text-sm text-muted-foreground mt-1">{change >= 0 ? "Increase" : "Decrease"}</div>
            <div className="text-sm text-muted-foreground mt-2">Difference: {(n - o).toFixed(2)}</div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default PercentageChangeCalc;
