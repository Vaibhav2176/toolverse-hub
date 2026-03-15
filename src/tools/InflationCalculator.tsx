import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const InflationCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState<{ adjusted: number; lost: number } | null>(null);

  const calculate = () => {
    const a = Number(amount), r = Number(rate) / 100, y = Number(years);
    if (!a || !y) return;
    const adjusted = a / Math.pow(1 + r, y);
    setResult({ adjusted, lost: a - adjusted });
  };

  return (
    <ToolLayout slug="inflation-calculator" howTo={["Select currency", "Enter current amount, inflation rate, and years.", "See the future purchasing power."]} faqs={[{ q: "What is a typical inflation rate?", a: "Historically around 2-3% in developed economies." }]}>
      <div className="space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-3 gap-4">
          <div><Label>Current Amount</Label><Input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 10000" /></div>
          <div><Label>Inflation Rate (%)</Label><Input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 3" /></div>
          <div><Label>Years</Label><Input type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="e.g. 10" /></div>
        </div>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setAmount(""); setRate(""); setYears(""); setResult(null); }}>Reset</Button></div>
        {result && (
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Future Purchasing Power</p><p className="text-2xl font-bold text-primary">{formatCurrency(result.adjusted, currency)}</p></div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Value Lost to Inflation</p><p className="text-2xl font-bold text-destructive">{formatCurrency(result.lost, currency)}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default InflationCalculator;
