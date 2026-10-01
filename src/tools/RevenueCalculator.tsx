import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const RevenueCalculator = () => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [returnsPct, setReturnsPct] = useState("");
  const [discountPct, setDiscountPct] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ gross: number; net: number } | null>(null);

  const calc = () => {
    setError("");
    const p = parseFloat(price);
    const q = parseFloat(quantity);
    const r = returnsPct === "" ? 0 : parseFloat(returnsPct);
    const d = discountPct === "" ? 0 : parseFloat(discountPct);
    if (!Number.isFinite(p) || p < 0 || !Number.isFinite(q) || q < 0) {
      setError("Enter valid, non-negative price and quantity.");
      setResult(null);
      return;
    }
    if (!Number.isFinite(r) || r < 0 || r > 100 || !Number.isFinite(d) || d < 0 || d > 100) {
      setError("Returns and discount must be percentages between 0 and 100.");
      setResult(null);
      return;
    }
    const gross = p * q;
    const afterDiscount = gross * (1 - d / 100);
    const net = afterDiscount * (1 - r / 100);
    setResult({ gross, net });
  };

  const reset = () => {
    setPrice("");
    setQuantity("");
    setReturnsPct("");
    setDiscountPct("");
    setResult(null);
    setError("");
  };

  return (
    <ToolLayout
      slug="revenue-calculator"
      howTo={[
        "Enter the price per unit and quantity sold",
        "Optionally add an expected returns % and discount %",
        "Click Calculate to see gross and net revenue",
      ]}
    >
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="rv-price" className="block text-sm font-medium mb-1.5">Price per unit</label>
            <input id="rv-price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 20" />
          </div>
          <div>
            <label htmlFor="rv-qty" className="block text-sm font-medium mb-1.5">Quantity sold</label>
            <input id="rv-qty" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 500" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="rv-returns" className="block text-sm font-medium mb-1.5">Returns % (optional)</label>
            <input id="rv-returns" type="number" value={returnsPct} onChange={(e) => setReturnsPct(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 5" />
          </div>
          <div>
            <label htmlFor="rv-discount" className="block text-sm font-medium mb-1.5">Discount % (optional)</label>
            <input id="rv-discount" type="number" value={discountPct} onChange={(e) => setDiscountPct(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 10" />
          </div>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-sm"><span className="text-muted-foreground">Gross revenue: </span><span className="font-semibold">{formatCurrency(result.gross, currency)}</span></p>
            <p className="text-sm"><span className="text-muted-foreground">Net revenue: </span><span className="font-semibold">{formatCurrency(result.net, currency)}</span></p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default RevenueCalculator;
