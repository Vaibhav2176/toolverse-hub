import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import CurrencySelector from "@/components/CurrencySelector";
import { formatCurrency } from "@/lib/currency";

const BreakEvenCalculator = () => {
  const [fixedCosts, setFixedCosts] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [variableCost, setVariableCost] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ units: number; revenue: number; contribution: number; contributionMargin: number } | null>(null);

  const calc = () => {
    setError("");
    const fc = parseFloat(fixedCosts);
    const price = parseFloat(pricePerUnit);
    const vc = parseFloat(variableCost);
    if (!Number.isFinite(fc) || fc < 0 || !Number.isFinite(price) || price <= 0 || !Number.isFinite(vc) || vc < 0) {
      setError("Enter valid values: fixed costs ≥ 0, price per unit > 0, variable cost ≥ 0.");
      setResult(null);
      return;
    }
    const contribution = price - vc;
    if (contribution <= 0) {
      setError("Price per unit must be greater than variable cost per unit to break even.");
      setResult(null);
      return;
    }
    const units = fc / contribution;
    const revenue = units * price;
    const contributionMargin = (contribution / price) * 100;
    setResult({ units, revenue, contribution, contributionMargin });
  };

  const reset = () => {
    setFixedCosts("");
    setPricePerUnit("");
    setVariableCost("");
    setResult(null);
    setError("");
  };

  return (
    <ToolLayout
      slug="break-even-calculator"
      howTo={[
        "Enter your total fixed costs",
        "Enter the selling price per unit",
        "Enter the variable cost per unit",
        "Click Calculate to find your break-even point",
      ]}
    >
      <div className="space-y-4 max-w-md">
        <CurrencySelector value={currency} onChange={setCurrency} />
        <div>
          <label htmlFor="be-fixed" className="block text-sm font-medium mb-1.5">Fixed costs</label>
          <input id="be-fixed" type="number" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 10000" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="be-price" className="block text-sm font-medium mb-1.5">Price per unit</label>
            <input id="be-price" type="number" value={pricePerUnit} onChange={(e) => setPricePerUnit(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 25" />
          </div>
          <div>
            <label htmlFor="be-variable" className="block text-sm font-medium mb-1.5">Variable cost per unit</label>
            <input id="be-variable" type="number" value={variableCost} onChange={(e) => setVariableCost(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 10" />
          </div>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-sm"><span className="text-muted-foreground">Break-even units: </span><span className="font-semibold">{Math.ceil(result.units).toLocaleString()}</span></p>
            <p className="text-sm"><span className="text-muted-foreground">Break-even revenue: </span><span className="font-semibold">{formatCurrency(result.revenue, currency)}</span></p>
            <p className="text-sm"><span className="text-muted-foreground">Contribution margin per unit: </span><span className="font-semibold">{formatCurrency(result.contribution, currency)}</span></p>
            <p className="text-sm"><span className="text-muted-foreground">Contribution margin %: </span><span className="font-semibold">{result.contributionMargin.toFixed(2)}%</span></p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default BreakEvenCalculator;
