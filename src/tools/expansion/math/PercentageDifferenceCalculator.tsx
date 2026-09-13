import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const PercentageDifferenceCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const x = parseFloat(a), y = parseFloat(b);
    if (isNaN(x) || isNaN(y) || (x === 0 && y === 0)) return;
    const mean = (Math.abs(x) + Math.abs(y)) / 2;
    const diff = (Math.abs(x - y) / mean) * 100;
    setResult(`|${x} − ${y}| / ((${x} + ${y}) / 2) × 100 = ${diff.toFixed(4)}%`);
  };

  return (
    <ToolLayout
      slug="percentage-difference-calculator"
      howTo={["Enter the first value", "Enter the second value", "Click Calculate to see the percentage difference"]}
      faqs={[
        { q: "How is percentage difference different from percentage change?", a: "Percentage difference treats both values symmetrically using their average as the base, while percentage change uses the original value as the base and has a direction (increase/decrease)." },
        { q: "Can the values be negative?", a: "The calculator uses absolute values in the formula, so it works with negative inputs, though percentage difference is most meaningful for comparing magnitudes." }
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="grid grid-cols-2 gap-3">
          <input type="number" placeholder="Value A" value={a} onChange={e => setA(e.target.value)} className="input-field" />
          <input type="number" placeholder="Value B" value={b} onChange={e => setB(e.target.value)} className="input-field" />
        </div>
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setA(""); setB(""); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
        {result && <div className="rounded-xl bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{result}</div>}
      </div>
    </ToolLayout>
  );
};

export default PercentageDifferenceCalculator;
