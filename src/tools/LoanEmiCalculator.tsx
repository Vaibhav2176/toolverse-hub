import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const LoanEmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<{ emi: string; total: string; interest: string } | null>(null);

  const calc = () => {
    const P = parseFloat(principal), r = parseFloat(rate) / 12 / 100, n = parseFloat(tenure) * 12;
    if (isNaN(P) || isNaN(r) || isNaN(n) || r === 0) return;
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    setResult({ emi: emi.toFixed(2), total: total.toFixed(2), interest: (total - P).toFixed(2) });
  };

  return (
    <ToolLayout slug="loan-emi-calculator" howTo={["Enter loan amount", "Enter annual interest rate", "Enter tenure in years", "See monthly EMI"]} faqs={[{ q: "What is EMI?", a: "EMI (Equated Monthly Installment) is a fixed payment made to a lender each month." }]}>
      <div className="space-y-4 max-w-md">
        <input type="number" placeholder="Loan Amount" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input type="number" placeholder="Annual Interest Rate (%)" value={rate} onChange={e => setRate(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input type="number" placeholder="Tenure (Years)" value={tenure} onChange={e => setTenure(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={() => { setPrincipal(""); setRate(""); setTenure(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-lg bg-accent/10 p-4 space-y-1">
            <p className="text-lg font-semibold text-accent">Monthly EMI: ${result.emi}</p>
            <p className="text-sm text-muted-foreground">Total Payment: ${result.total}</p>
            <p className="text-sm text-muted-foreground">Total Interest: ${result.interest}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default LoanEmiCalculator;
