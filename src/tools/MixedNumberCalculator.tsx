import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const toImproper = (w: number, n: number, d: number, neg: boolean) => {
  const sign = neg ? -1 : 1;
  return { num: sign * (Math.abs(w) * d + n), den: d };
};

const MixedNumberCalculator = () => {
  const [w1, setW1] = useState("0");
  const [n1, setN1] = useState("");
  const [d1, setD1] = useState("");
  const [w2, setW2] = useState("0");
  const [n2, setN2] = useState("");
  const [d2, setD2] = useState("");
  const [op, setOp] = useState("+");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{ mixed: string; improper: string; decimal: number } | null>(null);

  const calculate = () => {
    setError("");
    setResult(null);
    const W1 = Number(w1) || 0, N1 = Number(n1) || 0, D1 = Number(d1);
    const W2 = Number(w2) || 0, N2 = Number(n2) || 0, D2 = Number(d2);
    if (!d1 || !d2 || !Number.isFinite(D1) || !Number.isFinite(D2) || D1 === 0 || D2 === 0) {
      setError("Please enter valid, non-zero denominators.");
      return;
    }
    const f1 = toImproper(W1, N1, D1, w1.trim().startsWith("-"));
    const f2 = toImproper(W2, N2, D2, w2.trim().startsWith("-"));
    let rn: number, rd: number;
    if (op === "+") { rn = f1.num * f2.den + f2.num * f1.den; rd = f1.den * f2.den; }
    else if (op === "-") { rn = f1.num * f2.den - f2.num * f1.den; rd = f1.den * f2.den; }
    else if (op === "×") { rn = f1.num * f2.num; rd = f1.den * f2.den; }
    else {
      if (f2.num === 0) { setError("Cannot divide by zero."); return; }
      rn = f1.num * f2.den; rd = f1.den * f2.num;
    }
    if (rd < 0) { rn = -rn; rd = -rd; }
    const g = gcd(Math.abs(rn), Math.abs(rd)) || 1;
    rn /= g; rd /= g;
    const sign = rn < 0 ? -1 : 1;
    const absN = Math.abs(rn);
    const whole = Math.floor(absN / rd);
    const rem = absN % rd;
    const mixed = rem === 0 ? `${sign * whole}` : whole === 0 ? `${sign < 0 ? "-" : ""}${rem}/${rd}` : `${sign < 0 ? "-" : ""}${whole} ${rem}/${rd}`;
    setResult({ mixed, improper: `${rn}/${rd}`, decimal: rn / rd });
  };

  const reset = () => {
    setW1("0"); setN1(""); setD1(""); setW2("0"); setN2(""); setD2(""); setResult(null); setError("");
  };

  return (
    <ToolLayout
      slug="mixed-number-calculator"
      howTo={[
        "Enter the whole number, numerator and denominator for each mixed number",
        "Choose the operation",
        "Click Calculate to get the simplified mixed number, improper fraction, and decimal result",
      ]}
      faqs={[
        {
          q: "How are negative mixed numbers handled?",
          a: "Enter a negative whole number part (e.g. -2) to indicate the entire mixed number is negative. The calculator converts it to a negative improper fraction before computing.",
        },
      ]}
    >
      <div className="space-y-4 max-w-lg">
        <div className="grid grid-cols-7 gap-2 items-end">
          <div className="col-span-3 grid grid-cols-3 gap-1">
            <div>
              <label htmlFor="mn-w1" className="block text-sm font-medium mb-1.5">Whole</label>
              <input id="mn-w1" type="number" value={w1} onChange={(e) => setW1(e.target.value)} className="w-full rounded-lg border border-input bg-background px-2 py-2.5 text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label htmlFor="mn-n1" className="block text-sm font-medium mb-1.5">Num</label>
              <input id="mn-n1" type="number" value={n1} onChange={(e) => setN1(e.target.value)} className="w-full rounded-lg border border-input bg-background px-2 py-2.5 text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label htmlFor="mn-d1" className="block text-sm font-medium mb-1.5">Den</label>
              <input id="mn-d1" type="number" value={d1} onChange={(e) => setD1(e.target.value)} className="w-full rounded-lg border border-input bg-background px-2 py-2.5 text-sm outline-none focus:border-primary" />
            </div>
          </div>
          <div>
            <label htmlFor="mn-op" className="block text-sm font-medium mb-1.5 text-center">Op</label>
            <select id="mn-op" value={op} onChange={(e) => setOp(e.target.value)} className="w-full rounded-lg border border-input bg-background px-2 py-2.5 text-sm outline-none focus:border-primary text-center">
              <option>+</option><option>-</option><option>×</option><option>÷</option>
            </select>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-1">
            <div>
              <label htmlFor="mn-w2" className="block text-sm font-medium mb-1.5">Whole</label>
              <input id="mn-w2" type="number" value={w2} onChange={(e) => setW2(e.target.value)} className="w-full rounded-lg border border-input bg-background px-2 py-2.5 text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label htmlFor="mn-n2" className="block text-sm font-medium mb-1.5">Num</label>
              <input id="mn-n2" type="number" value={n2} onChange={(e) => setN2(e.target.value)} className="w-full rounded-lg border border-input bg-background px-2 py-2.5 text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label htmlFor="mn-d2" className="block text-sm font-medium mb-1.5">Den</label>
              <input id="mn-d2" type="number" value={d2} onChange={(e) => setD2(e.target.value)} className="w-full rounded-lg border border-input bg-background px-2 py-2.5 text-sm outline-none focus:border-primary" />
            </div>
          </div>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex gap-3">
          <button onClick={calculate} className="rounded-lg hero-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={reset} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && (
          <div className="rounded-xl border border-border bg-secondary/40 p-5 space-y-1">
            <p className="text-lg font-semibold">Mixed number: {result.mixed}</p>
            <p className="text-sm text-muted-foreground">Improper fraction: {result.improper}</p>
            <p className="text-sm text-muted-foreground">Decimal: {result.decimal.toLocaleString(undefined, { maximumFractionDigits: 6 })}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default MixedNumberCalculator;
