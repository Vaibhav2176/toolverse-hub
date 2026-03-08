import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);

const FractionCalculator = () => {
  const [n1, setN1] = useState("");
  const [d1, setD1] = useState("");
  const [n2, setN2] = useState("");
  const [d2, setD2] = useState("");
  const [op, setOp] = useState("+");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const a = parseInt(n1), b = parseInt(d1), c = parseInt(n2), d = parseInt(d2);
    if ([a, b, c, d].some(isNaN) || b === 0 || d === 0) return;
    let rn: number, rd: number;
    if (op === "+") { rn = a * d + c * b; rd = b * d; }
    else if (op === "-") { rn = a * d - c * b; rd = b * d; }
    else if (op === "×") { rn = a * c; rd = b * d; }
    else { if (c === 0) return; rn = a * d; rd = b * c; }
    const g = gcd(Math.abs(rn), Math.abs(rd));
    rn /= g; rd /= g;
    if (rd < 0) { rn = -rn; rd = -rd; }
    setResult(`${a}/${b} ${op} ${c}/${d} = ${rn}/${rd}${rd !== 1 ? ` ≈ ${(rn / rd).toFixed(4)}` : ""}`);
  };

  return (
    <ToolLayout slug="fraction-calculator" howTo={["Enter numerator and denominator for each fraction", "Select operation", "Click Calculate"]} faqs={[{ q: "Does it simplify fractions?", a: "Yes, results are automatically reduced to their simplest form." }]}>
      <div className="space-y-4 max-w-md">
        <div className="grid grid-cols-5 gap-2 items-center">
          <div className="col-span-2 space-y-1">
            <input type="number" placeholder="Numerator" value={n1} onChange={e => setN1(e.target.value)} className="w-full input-field" />
            <div className="border-t border-foreground mx-2" />
            <input type="number" placeholder="Denominator" value={d1} onChange={e => setD1(e.target.value)} className="w-full input-field" />
          </div>
          <div className="flex justify-center">
            <select value={op} onChange={e => setOp(e.target.value)} className="input-field text-center font-bold text-lg w-14">
              <option>+</option><option>-</option><option>×</option><option>÷</option>
            </select>
          </div>
          <div className="col-span-2 space-y-1">
            <input type="number" placeholder="Numerator" value={n2} onChange={e => setN2(e.target.value)} className="w-full input-field" />
            <div className="border-t border-foreground mx-2" />
            <input type="number" placeholder="Denominator" value={d2} onChange={e => setD2(e.target.value)} className="w-full input-field" />
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setN1(""); setD1(""); setN2(""); setD2(""); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
        {result && <div className="rounded-xl bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{result}</div>}
      </div>
    </ToolLayout>
  );
};

export default FractionCalculator;
