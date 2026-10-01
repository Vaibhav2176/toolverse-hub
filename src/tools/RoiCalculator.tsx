import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const RoiCalculator = () => {
  const [investment, setInvestment] = useState("");
  const [returnAmount, setReturnAmount] = useState("");
  const [years, setYears] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ roi: number; netGain: number; annualized: number | null } | null>(null);

  const calc = () => {
    setError("");
    const inv = parseFloat(investment);
    const ret = parseFloat(returnAmount);
    if (!Number.isFinite(inv) || inv <= 0 || !Number.isFinite(ret) || ret < 0) {
      setError("Enter a positive investment cost and a valid, non-negative return.");
      setResult(null);
      return;
    }
    const netGain = ret - inv;
    const roi = (netGain / inv) * 100;
    let annualized: number | null = null;
    const y = parseFloat(years);
    if (Number.isFinite(y) && y > 0) {
      annualized = (Math.pow(ret / inv, 1 / y) - 1) * 100;
    }
    setResult({ roi, netGain, annualized });
  };

  const reset = () => {
    setInvestment("");
    setReturnAmount("");
    setYears("");
    setResult(null);
    setError("");
  };

  return (
    <ToolLayout
      slug="roi-calculator"
      howTo={[
        "Enter your total investment cost",
        "Enter the total amount returned",
        "Optionally enter the number of years to see annualised ROI",
        "Click Calculate to see your ROI and net gain",
      ]}
    >
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="roi-inv" className="block text-sm font-medium mb-1.5">Investment cost</label>
            <input id="roi-inv" type="number" value={investment} onChange={(e) => setInvestment(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 10000" />
          </div>
          <div>
            <label htmlFor="roi-ret" className="block text-sm font-medium mb-1.5">Return amount</label>
            <input id="roi-ret" type="number" value={returnAmount} onChange={(e) => setReturnAmount(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 14000" />
          </div>
        </div>
        <div>
          <label htmlFor="roi-years" className="block text-sm font-medium mb-1.5">Years held (optional)</label>
          <input id="roi-years" type="number" value={years} onChange={(e) => setYears(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 3" />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-sm"><span className="text-muted-foreground">ROI: </span><span className="font-semibold">{result.roi.toFixed(2)}%</span></p>
            <p className="text-sm"><span className="text-muted-foreground">Net gain: </span><span className="font-semibold">{formatCurrency(result.netGain, currency)}</span></p>
            {result.annualized !== null && (
              <p className="text-sm"><span className="text-muted-foreground">Annualised ROI: </span><span className="font-semibold">{result.annualized.toFixed(2)}%</span></p>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default RoiCalculator;
