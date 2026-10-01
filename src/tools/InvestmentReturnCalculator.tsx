import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const InvestmentReturnCalculator = () => {
  const [initial, setInitial] = useState("");
  const [final, setFinal] = useState("");
  const [years, setYears] = useState("");
  const [contributions, setContributions] = useState("0");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ profit: number; returnPct: number; annualized: number } | null>(null);

  const calculate = () => {
    const i = Number(initial), f = Number(final), y = Number(years), c = Number(contributions) || 0;
    if (!Number.isFinite(i) || i <= 0 || !Number.isFinite(f) || f < 0 || !Number.isFinite(y) || y <= 0 || c < 0) {
      setError("Enter a valid initial value, final value and a positive number of years.");
      setResult(null);
      return;
    }
    setError("");
    const totalInvested = i + c;
    const profit = f - totalInvested;
    const returnPct = (profit / totalInvested) * 100;
    const annualized = (Math.pow(f / totalInvested, 1 / y) - 1) * 100;
    setResult({ profit, returnPct, annualized });
  };

  const reset = () => { setInitial(""); setFinal(""); setYears(""); setContributions("0"); setResult(null); setError(""); };

  return (
    <ToolLayout
      slug="investment-return-calculator"
      howTo={[
        "Enter your initial investment value and its current (final) value.",
        "Enter the number of years held and any additional contributions made.",
        "Click Calculate to see total return, profit and annualised return.",
      ]}
    >
      <div className="space-y-4">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="inv-initial">Initial Value</Label>
            <Input id="inv-initial" type="number" value={initial} onChange={e => setInitial(e.target.value)} placeholder="e.g. 10000" />
          </div>
          <div>
            <Label htmlFor="inv-final">Final Value</Label>
            <Input id="inv-final" type="number" value={final} onChange={e => setFinal(e.target.value)} placeholder="e.g. 15000" />
          </div>
          <div>
            <Label htmlFor="inv-years">Years Held</Label>
            <Input id="inv-years" type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="e.g. 3" />
          </div>
          <div>
            <Label htmlFor="inv-contrib">Additional Contributions (optional)</Label>
            <Input id="inv-contrib" type="number" value={contributions} onChange={e => setContributions(e.target.value)} placeholder="e.g. 1000" />
          </div>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={reset}>Reset</Button>
        </div>
        {result && (
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">Total Return</p><p className="text-lg font-bold text-primary">{result.returnPct.toLocaleString(undefined, { maximumFractionDigits: 2 })}%</p></div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">Profit</p><p className="text-lg font-bold">{formatCurrency(result.profit, currency)}</p></div>
            <div className="rounded-xl border border-border bg-secondary/40 p-3 text-center"><p className="text-xs text-muted-foreground">Annualised Return</p><p className="text-lg font-bold">{result.annualized.toLocaleString(undefined, { maximumFractionDigits: 2 })}%</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default InvestmentReturnCalculator;
