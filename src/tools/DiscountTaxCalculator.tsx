import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const DiscountTaxCalculator = () => {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ saved: number; taxPaid: number; final: number } | null>(null);

  const calculate = () => {
    const p = Number(price), d = Number(discount), t = Number(tax);
    if (!Number.isFinite(p) || p <= 0 || !Number.isFinite(d) || d < 0 || d > 100 || !Number.isFinite(t) || t < 0) {
      setError("Enter a valid price, a discount between 0-100%, and a valid tax rate.");
      setResult(null);
      return;
    }
    setError("");
    const saved = p * d / 100;
    const afterDiscount = p - saved;
    const taxPaid = afterDiscount * t / 100;
    setResult({ saved, taxPaid, final: afterDiscount + taxPaid });
  };

  const reset = () => { setPrice(""); setDiscount(""); setTax(""); setResult(null); setError(""); };

  return (
    <ToolLayout
      slug="discount-tax-calculator"
      howTo={[
        "Enter the original price of the item.",
        "Enter the discount percentage and the sales tax percentage.",
        "Click Calculate to see the amount saved, tax paid and final price.",
      ]}
    >
      <div className="space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="dt-price">Original Price</Label>
            <Input id="dt-price" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g. 200" />
          </div>
          <div>
            <Label htmlFor="dt-discount">Discount (%)</Label>
            <Input id="dt-discount" type="number" value={discount} onChange={e => setDiscount(e.target.value)} placeholder="e.g. 20" />
          </div>
          <div>
            <Label htmlFor="dt-tax">Tax (%)</Label>
            <Input id="dt-tax" type="number" value={tax} onChange={e => setTax(e.target.value)} placeholder="e.g. 8" />
          </div>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={reset}>Reset</Button>
        </div>
        {result && (
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">You Saved</p><p className="text-lg font-bold text-primary">{formatCurrency(result.saved, currency)}</p></div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">Tax Paid</p><p className="text-lg font-bold">{formatCurrency(result.taxPaid, currency)}</p></div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">Final Price</p><p className="text-lg font-bold">{formatCurrency(result.final, currency)}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default DiscountTaxCalculator;
