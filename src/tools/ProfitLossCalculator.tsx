import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const ProfitLossCalculator = () => {
  const [cp, setCp] = useState("");
  const [sp, setSp] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState<{ diff: number; pct: number } | null>(null);

  const calc = () => {
    const c = parseFloat(cp), s = parseFloat(sp);
    if (isNaN(c) || isNaN(s)) return;
    const diff = s - c;
    const pct = (diff / c) * 100;
    setResult({ diff, pct });
  };

  return (
    <ToolLayout slug="profit-loss-calculator" howTo={["Select currency", "Enter cost price", "Enter selling price", "See profit or loss"]}>
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <input type="number" placeholder="Cost Price" value={cp} onChange={e => setCp(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input type="number" placeholder="Selling Price" value={sp} onChange={e => setSp(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={() => { setCp(""); setSp(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">
            {result.diff >= 0
              ? `Profit: ${formatCurrency(result.diff, currency)} (${result.pct.toFixed(2)}%)`
              : `Loss: ${formatCurrency(Math.abs(result.diff), currency)} (${Math.abs(result.pct).toFixed(2)}%)`}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default ProfitLossCalculator;
