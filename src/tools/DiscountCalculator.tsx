import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const DiscountCalculator = () => {
  const [price, setPrice] = useState("");
  const [disc, setDisc] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState<{ saved: number; final: number } | null>(null);

  const calc = () => {
    const p = parseFloat(price), d = parseFloat(disc);
    if (isNaN(p) || isNaN(d)) return;
    const saved = p * d / 100;
    setResult({ saved, final: p - saved });
  };

  return (
    <ToolLayout slug="discount-calculator" howTo={["Select currency", "Enter the original price", "Enter discount percentage", "See the final price"]} example="$100 with 20% off = $80 (you save $20)">
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <input type="number" placeholder="Original Price" value={price} onChange={e => setPrice(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input type="number" placeholder="Discount %" value={disc} onChange={e => setDisc(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={() => { setPrice(""); setDisc(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-lg bg-accent/10 p-4 space-y-1">
            <p className="text-lg font-semibold text-accent">Final Price: {formatCurrency(result.final, currency)}</p>
            <p className="text-sm text-muted-foreground">You save: {formatCurrency(result.saved, currency)}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default DiscountCalculator;
