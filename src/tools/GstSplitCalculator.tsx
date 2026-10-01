import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const GstSplitCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("18");
  const [type, setType] = useState<"intra" | "inter">("intra");
  const [currency, setCurrency] = useState("INR");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ cgst: number; sgst: number; igst: number; total: number } | null>(null);

  const calculate = () => {
    const a = Number(amount), r = Number(rate);
    if (!Number.isFinite(a) || a <= 0 || !Number.isFinite(r) || r < 0) {
      setError("Enter a valid taxable amount and GST rate.");
      setResult(null);
      return;
    }
    setError("");
    const gst = a * r / 100;
    if (type === "intra") {
      setResult({ cgst: gst / 2, sgst: gst / 2, igst: 0, total: gst });
    } else {
      setResult({ cgst: 0, sgst: 0, igst: gst, total: gst });
    }
  };

  const reset = () => { setAmount(""); setRate("18"); setResult(null); setError(""); };

  return (
    <ToolLayout
      slug="gst-split-calculator"
      howTo={[
        "Enter the taxable amount and applicable GST rate.",
        "Choose whether the supply is intra-state (CGST+SGST) or inter-state (IGST).",
        "Click Calculate to see the split tax breakdown.",
      ]}
    >
      <div className="space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="gst-split-amount">Taxable Amount</Label>
            <Input id="gst-split-amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 10000" />
          </div>
          <div>
            <Label htmlFor="gst-split-rate">GST Rate (%)</Label>
            <Input id="gst-split-rate" type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
        </div>
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={type === "intra"} onChange={() => setType("intra")} /> Intra-state (CGST + SGST)
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={type === "inter"} onChange={() => setType("inter")} /> Inter-state (IGST)
          </label>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={reset}>Reset</Button>
        </div>
        {result && (
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">CGST</p><p className="text-lg font-bold">{formatCurrency(result.cgst, currency)}</p></div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">SGST</p><p className="text-lg font-bold">{formatCurrency(result.sgst, currency)}</p></div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">IGST</p><p className="text-lg font-bold text-primary">{formatCurrency(result.igst, currency)}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default GstSplitCalculator;
