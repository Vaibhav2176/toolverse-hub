import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const LoanPayoffCalculator = () => {
  const [balance, setBalance] = useState("");
  const [apr, setApr] = useState("");
  const [payment, setPayment] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ months: number; totalInterest: number; payoffDate: string } | null>(null);

  const calc = () => {
    setError("");
    setResult(null);
    const B = Number(balance), r = Number(apr) / 100 / 12, P = Number(payment);
    if (!Number.isFinite(B) || B <= 0 || !Number.isFinite(r) || r < 0 || !Number.isFinite(P) || P <= 0) {
      setError("Enter a valid balance, APR, and monthly payment.");
      return;
    }
    const firstInterest = B * r;
    if (P <= firstInterest) {
      setError(`This payment never covers the interest. Your first month's interest alone is ${formatCurrency(firstInterest, currency)}, so the balance will never shrink. Increase the monthly payment.`);
      return;
    }
    let bal = B;
    let months = 0;
    let totalInterest = 0;
    while (bal > 0 && months < 1200) {
      const interest = bal * r;
      let principalPaid = P - interest;
      if (principalPaid > bal) principalPaid = bal;
      bal -= principalPaid;
      totalInterest += interest;
      months++;
    }
    const payoffDate = new Date();
    payoffDate.setMonth(payoffDate.getMonth() + months);
    setResult({ months, totalInterest, payoffDate: payoffDate.toLocaleDateString(undefined, { year: "numeric", month: "long" }) });
  };

  const reset = () => { setBalance(""); setApr(""); setPayment(""); setResult(null); setError(""); };

  return (
    <ToolLayout
      slug="loan-payoff-calculator"
      howTo={["Enter your remaining loan balance.", "Enter the annual interest rate (APR).", "Enter your fixed monthly payment amount.", "Click Calculate to see months to payoff, payoff date, and total interest."]}
    >
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div>
          <label htmlFor="lp-balance" className="block text-sm font-medium mb-1.5">Current Balance</label>
          <input id="lp-balance" type="number" value={balance} onChange={e => setBalance(e.target.value)} placeholder="e.g. 15000" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label htmlFor="lp-apr" className="block text-sm font-medium mb-1.5">Annual Interest Rate (APR %)</label>
          <input id="lp-apr" type="number" value={apr} onChange={e => setApr(e.target.value)} placeholder="e.g. 18.9" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label htmlFor="lp-payment" className="block text-sm font-medium mb-1.5">Monthly Payment</label>
          <input id="lp-payment" type="number" value={payment} onChange={e => setPayment(e.target.value)} placeholder="e.g. 400" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold text-primary">{result.months} months to payoff ({(result.months / 12).toFixed(1)} years)</p>
            <p className="text-sm text-muted-foreground">Estimated payoff date: {result.payoffDate}</p>
            <p className="text-sm text-muted-foreground">Total interest paid: {formatCurrency(result.totalInterest, currency)}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default LoanPayoffCalculator;
