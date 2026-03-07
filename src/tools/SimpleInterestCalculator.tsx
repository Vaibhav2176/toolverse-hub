import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const SimpleInterestCalculator = () => {
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [t, setT] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calc = () => {
    const pv = parseFloat(p), rv = parseFloat(r), tv = parseFloat(t);
    if (isNaN(pv) || isNaN(rv) || isNaN(tv)) return;
    const si = (pv * rv * tv) / 100;
    setResult(`Interest: $${si.toFixed(2)} | Total: $${(pv + si).toFixed(2)}`);
  };

  return (
    <ToolLayout slug="simple-interest-calculator" howTo={["Enter principal amount", "Enter rate of interest", "Enter time in years"]} example="$1000 at 5% for 3 years = $150 interest">
      <div className="space-y-4 max-w-md">
        <input type="number" placeholder="Principal ($)" value={p} onChange={e => setP(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input type="number" placeholder="Rate (%)" value={r} onChange={e => setR(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <input type="number" placeholder="Time (Years)" value={t} onChange={e => setT(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <div className="flex gap-3">
          <button onClick={calc} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Calculate</button>
          <button onClick={() => { setP(""); setR(""); setT(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default SimpleInterestCalculator;
