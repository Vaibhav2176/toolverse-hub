import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const MarginCalculator = () => {
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [targetMargin, setTargetMargin] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ profit: number; margin: number; targetPrice: number | null } | null>(null);

  const calc = () => {
    setError("");
    const c = parseFloat(cost);
    const p = parseFloat(price);
    if (!Number.isFinite(c) || c < 0 || !Number.isFinite(p) || p < 0) {
      setError("Enter valid, non-negative cost and price values.");
      setResult(null);
      return;
    }
    const profit = p - c;
    const margin = p === 0 ? 0 : (profit / p) * 100;
    let targetPrice: number | null = null;
    const tm = parseFloat(targetMargin);
    if (Number.isFinite(tm) && tm < 100) {
      targetPrice = c / (1 - tm / 100);
    }
    setResult({ profit, margin, targetPrice });
  };

  const reset = () => {
    setCost("");
    setPrice("");
    setTargetMargin("");
    setResult(null);
    setError("");
  };

  return (
    <ToolLayout
      slug="margin-calculator"
      howTo={[
        "Select your currency",
        "Enter the cost and selling price",
        "Optionally enter a target margin % to find the required price",
        "Click Calculate to see gross profit and margin",
      ]}
    >
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="mg-cost" className="block text-sm font-medium mb-1.5">Cost</label>
            <input id="mg-cost" type="number" value={cost} onChange={(e) => setCost(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 40" />
          </div>
          <div>
            <label htmlFor="mg-price" className="block text-sm font-medium mb-1.5">Selling price</label>
            <input id="mg-price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 60" />
          </div>
        </div>
        <div>
          <label htmlFor="mg-target" className="block text-sm font-medium mb-1.5">Target margin % (optional)</label>
          <input id="mg-target" type="number" value={targetMargin} onChange={(e) => setTargetMargin(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 50" />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-sm"><span className="text-muted-foreground">Gross profit: </span><span className="font-semibold">{formatCurrency(result.profit, currency)}</span></p>
            <p className="text-sm"><span className="text-muted-foreground">Margin: </span><span className="font-semibold">{result.margin.toFixed(2)}%</span></p>
            {result.targetPrice !== null && (
              <p className="text-sm"><span className="text-muted-foreground">Price needed for target margin: </span><span className="font-semibold">{formatCurrency(result.targetPrice, currency)}</span></p>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default MarginCalculator;
