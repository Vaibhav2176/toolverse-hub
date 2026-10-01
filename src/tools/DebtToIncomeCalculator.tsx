import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const DebtToIncomeCalculator = () => {
  const [income, setIncome] = useState("");
  const [debt, setDebt] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [dti, setDti] = useState<number | null>(null);

  const calc = () => {
    setError("");
    setDti(null);
    const I = Number(income), D = Number(debt);
    if (!Number.isFinite(I) || I <= 0 || !Number.isFinite(D) || D < 0) {
      setError("Enter a valid monthly gross income and monthly debt payments.");
      return;
    }
    setDti((D / I) * 100);
  };

  const reset = () => { setIncome(""); setDebt(""); setDti(null); setError(""); };

  const band = (v: number) => {
    if (v <= 35) return { label: "Healthy", note: "Most lenders view this as a strong ratio with comfortable borrowing capacity.", color: "text-primary" };
    if (v <= 43) return { label: "Manageable", note: "Many mortgage lenders accept up to 43%, but less debt improves your approval odds and rate.", color: "text-foreground" };
    if (v <= 50) return { label: "Elevated", note: "This is above typical qualified-mortgage limits; lenders may require compensating factors.", color: "text-destructive" };
    return { label: "High risk", note: "Most lenders will consider this too high for new credit approval. Paying down debt is recommended.", color: "text-destructive" };
  };

  return (
    <ToolLayout
      slug="debt-to-income-calculator"
      howTo={["Enter your total monthly gross (pre-tax) income.", "Enter your total monthly debt payments (loans, credit cards, rent/mortgage).", "Click Calculate to see your DTI ratio and what lenders think of it."]}
    >
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div>
          <label htmlFor="dti-income" className="block text-sm font-medium mb-1.5">Monthly Gross Income</label>
          <input id="dti-income" type="number" value={income} onChange={e => setIncome(e.target.value)} placeholder="e.g. 5000" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label htmlFor="dti-debt" className="block text-sm font-medium mb-1.5">Total Monthly Debt Payments</label>
          <input id="dti-debt" type="number" value={debt} onChange={e => setDebt(e.target.value)} placeholder="e.g. 1800" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {dti !== null && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className={`text-lg font-semibold ${band(dti).color}`}>DTI: {dti.toFixed(1)}% — {band(dti).label}</p>
            <p className="text-sm text-muted-foreground">{band(dti).note}</p>
            <p className="text-sm text-muted-foreground">Income: {formatCurrency(Number(income), currency)} · Debt: {formatCurrency(Number(debt), currency)}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default DebtToIncomeCalculator;
