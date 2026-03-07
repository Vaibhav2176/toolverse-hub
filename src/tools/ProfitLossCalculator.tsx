import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const ProfitLossCalculator = () => {
  const [cp, setCp] = useState("");
  const [sp, setSp] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calc = () => {
    const c = parseFloat(cp), s = parseFloat(sp);
    if (isNaN(c) || isNaN(s)) return;
    const diff = s - c;
    const pct = ((diff / c) * 100).toFixed(2);
    setResult(diff >= 0 ? `Profit: $${diff.toFixed(2)} (${pct}%)` : `Loss: $${Math.abs(diff).toFixed(2)} (${Math.abs(parseFloat(pct)).toFixed(2)}%)`);
  };

  return (
    <ToolLayout slug="profit-loss-calculator" howTo={["Enter cost price", "Enter selling price", "See profit or loss"]}>
      <div className="space-y-4 max-w-md">
        <input type="number" placeholder="Cost Price" value={cp} onChange={e => setCp(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input type="number" placeholder="Selling Price" value={sp} onChange={e => setSp(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={() => { setCp(""); setSp(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default ProfitLossCalculator;
