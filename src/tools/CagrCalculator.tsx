import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const CagrCalculator = () => {
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [years, setYears] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ cagr: number; totalGrowth: number } | null>(null);

  const calc = () => {
    setError("");
    setResult(null);
    const B = Number(begin), E = Number(end), Y = Number(years);
    if (!Number.isFinite(B) || B <= 0 || !Number.isFinite(E) || E < 0 || !Number.isFinite(Y) || Y <= 0) {
      setError("Enter a valid beginning value (greater than 0), ending value, and number of years.");
      return;
    }
    const cagr = (Math.pow(E / B, 1 / Y) - 1) * 100;
    const totalGrowth = ((E - B) / B) * 100;
    setResult({ cagr, totalGrowth });
  };

  const reset = () => { setBegin(""); setEnd(""); setYears(""); setResult(null); setError(""); };

  return (
    <ToolLayout
      slug="cagr-calculator"
      howTo={["Enter the beginning value of your investment.", "Enter the ending value.", "Enter the number of years between the two values.", "Click Calculate to see the compound annual growth rate."]}
    >
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div>
          <label htmlFor="cagr-begin" className="block text-sm font-medium mb-1.5">Beginning Value</label>
          <input id="cagr-begin" type="number" value={begin} onChange={e => setBegin(e.target.value)} placeholder="e.g. 10000" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label htmlFor="cagr-end" className="block text-sm font-medium mb-1.5">Ending Value</label>
          <input id="cagr-end" type="number" value={end} onChange={e => setEnd(e.target.value)} placeholder="e.g. 18000" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div>
          <label htmlFor="cagr-years" className="block text-sm font-medium mb-1.5">Number of Years</label>
          <input id="cagr-years" type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="e.g. 5" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold text-primary">CAGR: {result.cagr.toFixed(2)}% per year</p>
            <p className="text-sm text-muted-foreground">Total growth over the period: {result.totalGrowth.toFixed(2)}%</p>
            <p className="text-sm text-muted-foreground">From {formatCurrency(Number(begin), currency)} to {formatCurrency(Number(end), currency)}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default CagrCalculator;
