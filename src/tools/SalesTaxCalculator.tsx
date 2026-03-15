import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const SalesTaxCalculator = () => {
  const [price, setPrice] = useState("");
  const [tax, setTax] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState<{ taxAmt: number; total: number } | null>(null);

  const calculate = () => {
    const p = Number(price), t = Number(tax);
    if (isNaN(p) || isNaN(t)) return;
    const taxAmt = p * t / 100;
    setResult({ taxAmt, total: p + taxAmt });
  };

  return (
    <ToolLayout slug="sales-tax-calculator" howTo={["Select currency", "Enter the price before tax.", "Enter the tax rate.", "See the tax amount and total."]} faqs={[{ q: "Can I use this for VAT?", a: "Yes, simply enter your VAT percentage as the tax rate." }]}>
      <div className="space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Price Before Tax</Label><Input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g. 99.99" /></div>
          <div><Label>Tax Rate (%)</Label><Input type="number" value={tax} onChange={e => setTax(e.target.value)} placeholder="e.g. 8.25" /></div>
        </div>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setPrice(""); setTax(""); setResult(null); }}>Reset</Button></div>
        {result && (
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Tax Amount</p><p className="text-2xl font-bold text-primary">{formatCurrency(result.taxAmt, currency)}</p></div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Total Price</p><p className="text-2xl font-bold">{formatCurrency(result.total, currency)}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default SalesTaxCalculator;
