import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const CompoundInterestCalculator = () => {
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [t, setT] = useState("");
  const [n, setN] = useState("12");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState<{ amount: number; interest: number } | null>(null);

  const calc = () => {
    const pv = parseFloat(p), rv = parseFloat(r) / 100, tv = parseFloat(t), nv = parseFloat(n);
    if (isNaN(pv) || isNaN(rv) || isNaN(tv) || isNaN(nv)) return;
    const amount = pv * Math.pow(1 + rv / nv, nv * tv);
    setResult({ amount, interest: amount - pv });
  };

  return (
    <ToolLayout slug="compound-interest-calculator" howTo={["Select currency", "Enter principal, rate, time, and compounding frequency", "Click Calculate"]} faqs={[{ q: "What is compound interest?", a: "Interest calculated on principal plus previously accumulated interest." }]}>
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <input type="number" placeholder="Principal" value={p} onChange={e => setP(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input type="number" placeholder="Annual Rate (%)" value={r} onChange={e => setR(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input type="number" placeholder="Time (Years)" value={t} onChange={e => setT(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <select value={n} onChange={e => setN(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
          <option value="1">Annually</option>
          <option value="4">Quarterly</option>
          <option value="12">Monthly</option>
          <option value="365">Daily</option>
        </select>
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={() => { setP(""); setR(""); setT(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-lg bg-accent/10 p-4 space-y-1">
            <p className="text-lg font-semibold text-accent">Amount: {formatCurrency(result.amount, currency)}</p>
            <p className="text-sm text-muted-foreground">Interest: {formatCurrency(result.interest, currency)}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default CompoundInterestCalculator;
