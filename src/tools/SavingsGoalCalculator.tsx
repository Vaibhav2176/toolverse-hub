import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const SavingsGoalCalculator = () => {
  const [target, setTarget] = useState("");
  const [current, setCurrent] = useState("");
  const [months, setMonths] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ monthly: number; totalContributed: number; totalGrowth: number } | null>(null);

  const calc = () => {
    setError("");
    setResult(null);
    const T = Number(target), C = Number(current) || 0, n = Number(months), r = (Number(annualReturn) || 0) / 100 / 12;
    if (!Number.isFinite(T) || T <= 0 || !Number.isFinite(n) || n <= 0) {
      setError("Enter a valid target amount and number of months.");
      return;
    }
    const remaining = T - C * Math.pow(1 + r, n);
    if (remaining <= 0) {
      setResult({ monthly: 0, totalContributed: 0, totalGrowth: T - C });
      return;
    }
    let monthly: number;
    if (r > 0) {
      monthly = remaining * r / (Math.pow(1 + r, n) - 1);
    } else {
      monthly = remaining / n;
    }
    const totalContributed = monthly * n;
    const totalGrowth = T - C - totalContributed;
    setResult({ monthly, totalContributed, totalGrowth });
  };

  const reset = () => { setTarget(""); setCurrent(""); setMonths(""); setAnnualReturn(""); setResult(null); setError(""); };

  return (
    <ToolLayout
      slug="savings-goal-calculator"
      howTo={["Enter your savings target amount.", "Enter how much you've already saved.", "Enter the number of months to reach your goal.", "Optionally enter an expected annual return rate.", "Click Calculate to see the required monthly contribution."]}
    >
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sg-target" className="block text-sm font-medium mb-1.5">Target Amount</label>
            <input id="sg-target" type="number" value={target} onChange={e => setTarget(e.target.value)} placeholder="e.g. 20000" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="sg-current" className="block text-sm font-medium mb-1.5">Current Savings</label>
            <input id="sg-current" type="number" value={current} onChange={e => setCurrent(e.target.value)} placeholder="e.g. 2000" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="sg-months" className="block text-sm font-medium mb-1.5">Months to Goal</label>
            <input id="sg-months" type="number" value={months} onChange={e => setMonths(e.target.value)} placeholder="e.g. 24" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="sg-return" className="block text-sm font-medium mb-1.5">Annual Return % (optional)</label>
            <input id="sg-return" type="number" value={annualReturn} onChange={e => setAnnualReturn(e.target.value)} placeholder="e.g. 5" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold text-primary">Required monthly contribution: {formatCurrency(result.monthly, currency)}</p>
            <p className="text-sm text-muted-foreground">Total you'll contribute: {formatCurrency(result.totalContributed, currency)}</p>
            <p className="text-sm text-muted-foreground">Growth from returns: {formatCurrency(result.totalGrowth, currency)}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default SavingsGoalCalculator;
