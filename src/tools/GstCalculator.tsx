import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const GstCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [inclusive, setInclusive] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [result, setResult] = useState<{ gst: number; total: number; original: number } | null>(null);

  const calculate = () => {
    const a = Number(amount), r = Number(rate);
    if (isNaN(a) || isNaN(r)) return;
    if (inclusive) {
      const original = a / (1 + r / 100);
      setResult({ original, gst: a - original, total: a });
    } else {
      const gst = a * r / 100;
      setResult({ original: a, gst, total: a + gst });
    }
  };

  return (
    <ToolLayout slug="gst-calculator" howTo={["Select currency", "Enter the amount and GST rate.", "Toggle inclusive/exclusive mode.", "Click Calculate."]} faqs={[{ q: "What GST rates are common?", a: "India uses 5%, 12%, 18%, and 28% slabs." }]}>
      <div className="space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Amount</Label><Input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 1000" /></div>
          <div><Label>GST Rate (%)</Label><Input type="number" value={rate} onChange={e => setRate(e.target.value)} /></div>
        </div>
        <label className="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" checked={inclusive} onChange={e => setInclusive(e.target.checked)} className="rounded" /> Amount is GST-inclusive</label>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setAmount(""); setRate("18"); setResult(null); }}>Reset</Button></div>
        {result && (
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Original</p><p className="text-lg font-bold">{formatCurrency(result.original, currency)}</p></div>
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">GST</p><p className="text-lg font-bold text-primary">{formatCurrency(result.gst, currency)}</p></div>
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Total</p><p className="text-lg font-bold">{formatCurrency(result.total, currency)}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default GstCalculator;
