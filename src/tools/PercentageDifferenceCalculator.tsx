import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const PercentageDifferenceCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ diff: number; mean: number } | null>(null);

  const calculate = () => {
    setError("");
    setResult(null);
    const x = Number(a);
    const y = Number(b);
    if (!a || !b || !Number.isFinite(x) || !Number.isFinite(y)) {
      setError("Please enter two valid numbers.");
      return;
    }
    if (x === 0 && y === 0) {
      setError("Both values cannot be zero.");
      return;
    }
    const mean = (Math.abs(x) + Math.abs(y)) / 2;
    const diff = (Math.abs(x - y) / mean) * 100;
    setResult({ diff, mean });
  };

  const reset = () => {
    setA("");
    setB("");
    setResult(null);
    setError("");
  };

  return (
    <ToolLayout
      slug="percentage-difference-calculator"
      howTo={[
        "Enter the first value",
        "Enter the second value",
        "Click Calculate to see the percentage difference",
      ]}
      faqs={[
        {
          q: "How is percentage difference different from percentage change?",
          a: "Percentage difference compares two values symmetrically using their average as the base, with no concept of 'before' or 'after'. Percentage change uses one specific value (the original) as the base, so it is directional and depends on which number came first.",
        },
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pd-a" className="block text-sm font-medium mb-1.5">Value A</label>
            <input id="pd-a" type="number" value={a} onChange={(e) => setA(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 40" />
          </div>
          <div>
            <label htmlFor="pd-b" className="block text-sm font-medium mb-1.5">Value B</label>
            <input id="pd-b" type="number" value={b} onChange={(e) => setB(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" placeholder="e.g. 50" />
          </div>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={calculate} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold">Percentage difference: {result.diff.toLocaleString(undefined, { maximumFractionDigits: 4 })}%</p>
            <p className="text-sm text-muted-foreground">Mean of the two values: {result.mean.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default PercentageDifferenceCalculator;
