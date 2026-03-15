import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const InvestmentCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState<{ fv: number; gain: number } | null>(null);

  const calculate = () => {
    const p = Number(principal), r = Number(rate) / 100, n = Number(years);
    if (!p || !n) return;
    const fv = p * Math.pow(1 + r, n);
    setResult({ fv, gain: fv - p });
  };

  return (
    <ToolLayout slug="investment-calculator" howTo={["Select currency", "Enter initial investment, expected annual return, and time period.", "Click Calculate to estimate growth."]} faqs={[{ q: "Is this guaranteed?", a: "No. This is an estimate based on constant annual returns." }]}>
      <div className="space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-3 gap-4">
          <div><Label>Initial Investment</Label><Input type="number" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 10000" /></div>
          <div><Label>Annual Return (%)</Label><Input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 8" /></div>
          <div><Label>Years</Label><Input type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="e.g. 15" /></div>
        </div>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setPrincipal(""); setRate(""); setYears(""); setResult(null); }}>Reset</Button></div>
        {result && (
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Future Value</p><p className="text-2xl font-bold text-primary">{formatCurrency(result.fv, currency)}</p></div>
            <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Total Gain</p><p className="text-2xl font-bold">{formatCurrency(result.gain, currency)}</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default InvestmentCalculator;
