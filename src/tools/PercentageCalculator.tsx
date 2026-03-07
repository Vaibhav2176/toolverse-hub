import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const PercentageCalculator = () => {
  const [val, setVal] = useState("");
  const [pct, setPct] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [mode, setMode] = useState<"of" | "change" | "is">("of");

  const calculate = () => {
    const v = parseFloat(val), p = parseFloat(pct);
    if (isNaN(v) || isNaN(p)) return;
    if (mode === "of") setResult(`${p}% of ${v} = ${(v * p / 100).toFixed(2)}`);
    else if (mode === "change") setResult(`${v} → ${(v * (1 + p / 100)).toFixed(2)} (${p > 0 ? "+" : ""}${p}%)`);
    else setResult(`${v} is ${((v / p) * 100).toFixed(2)}% of ${p}`);
  };

  return (
    <ToolLayout slug="percentage-calculator" howTo={["Enter a number and percentage", "Choose calculation mode", "Click Calculate"]} example="What is 25% of 200? → 50" faqs={[{ q: "How is percentage calculated?", a: "Percentage = (Part / Whole) × 100" }]}>
      <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {(["of", "change", "is"] as const).map(m => (
            <button key={m} onClick={() => setMode(m)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${mode === m ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              {m === "of" ? "% of Number" : m === "change" ? "% Change" : "A is what % of B"}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="number" placeholder={mode === "is" ? "Value A" : "Number"} value={val} onChange={e => setVal(e.target.value)} className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          <input type="number" placeholder={mode === "is" ? "Value B" : "Percentage"} value={pct} onChange={e => setPct(e.target.value)} className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        </div>
        <div className="flex gap-3">
          <button onClick={calculate} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">Calculate</button>
          <button onClick={() => { setVal(""); setPct(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground hover:opacity-90">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};

export default PercentageCalculator;
