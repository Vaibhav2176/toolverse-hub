import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const PRESETS = [
  { label: "UK Standard (20%)", rate: 20 },
  { label: "UK Reduced (5%)", rate: 5 },
  { label: "Germany (19%)", rate: 19 },
  { label: "France (20%)", rate: 20 },
  { label: "Ireland (23%)", rate: 23 },
  { label: "Spain (21%)", rate: 21 },
];

const VatCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("20");
  const [mode, setMode] = useState<"add" | "extract">("add");
  const [currency, setCurrency] = useState("GBP");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ net: number; vat: number; gross: number } | null>(null);

  const calculate = () => {
    const a = Number(amount), r = Number(rate);
    if (!Number.isFinite(a) || a < 0 || !Number.isFinite(r) || r < 0) {
      setError("Enter a valid amount and VAT rate.");
      setResult(null);
      return;
    }
    setError("");
    if (mode === "add") {
      const vat = a * r / 100;
      setResult({ net: a, vat, gross: a + vat });
    } else {
      const net = a / (1 + r / 100);
      setResult({ net, vat: a - net, gross: a });
    }
  };

  const reset = () => { setAmount(""); setRate("20"); setResult(null); setError(""); };

  return (
    <ToolLayout
      slug="vat-calculator"
      howTo={[
        "Choose a currency and your VAT rate (or pick a preset).",
        "Choose whether you want to add VAT to a net price or extract VAT from a gross price.",
        "Enter the amount and click Calculate.",
      ]}
    >
      <div className="space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div>
          <Label>Preset rates</Label>
          <div className="flex flex-wrap gap-2 mt-1">
            {PRESETS.map(p => (
              <button key={p.label} type="button" onClick={() => setRate(String(p.rate))}
                className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground hover:opacity-80">
                {p.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="vat-amount">{mode === "add" ? "Net amount (excl. VAT)" : "Gross amount (incl. VAT)"}</Label>
            <Input id="vat-amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 100" />
          </div>
          <div>
            <Label htmlFor="vat-rate">VAT Rate (%)</Label>
            <Input id="vat-rate" type="number" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
        </div>
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={mode === "add"} onChange={() => setMode("add")} /> Add VAT
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={mode === "extract"} onChange={() => setMode("extract")} /> Extract VAT
          </label>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={reset}>Reset</Button>
        </div>
        {result && (
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">Net</p><p className="text-lg font-bold">{formatCurrency(result.net, currency)}</p></div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">VAT</p><p className="text-lg font-bold text-primary">{formatCurrency(result.vat, currency)}</p></div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">Gross</p><p className="text-lg font-bold">{formatCurrency(result.gross, currency)}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default VatCalculator;
