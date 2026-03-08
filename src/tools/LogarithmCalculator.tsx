import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const LogarithmCalculator = () => {
  const [value, setValue] = useState("");
  const [base, setBase] = useState("10");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const v = parseFloat(value), b = parseFloat(base);
    if (isNaN(v) || v <= 0) return;
    if (b === 10) setResult(`log₁₀(${v}) = ${Math.log10(v).toFixed(8)}`);
    else if (b === Math.E) setResult(`ln(${v}) = ${Math.log(v).toFixed(8)}`);
    else if (isNaN(b) || b <= 0 || b === 1) return;
    else setResult(`log₍${b}₎(${v}) = ${(Math.log(v) / Math.log(b)).toFixed(8)}`);
  };

  return (
    <ToolLayout slug="logarithm-calculator" howTo={["Enter the number", "Choose the base (10, e, or custom)", "Click Calculate"]} faqs={[{ q: "What is a logarithm?", a: "A logarithm answers the question: to what power must the base be raised to produce a given number?" }]}>
      <div className="space-y-4 max-w-md">
        <input type="number" placeholder="Number (must be > 0)" value={value} onChange={e => setValue(e.target.value)} className="w-full input-field" />
        <div className="flex gap-2 flex-wrap">
          {["10", String(Math.E), "2"].map(b => (
            <button key={b} onClick={() => setBase(b)} className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${base === b ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              {b === String(Math.E) ? "e (ln)" : `Base ${b}`}
            </button>
          ))}
          <input type="number" placeholder="Custom base" value={![String(Math.E), "10", "2"].includes(base) ? base : ""} onChange={e => setBase(e.target.value)} className="input-field w-32" />
        </div>
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setValue(""); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
        {result && <div className="rounded-xl bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{result}</div>}
      </div>
    </ToolLayout>
  );
};

export default LogarithmCalculator;
