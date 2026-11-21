import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
export const countSigFigs = (s: string): number => {
  let t = s.trim().replace(/^[-+]/, "").toLowerCase().split("e")[0];
  if (!/^\d*\.?\d*$/.test(t) || !/\d/.test(t)) return NaN;
  const hasDot = t.includes(".");
  t = t.replace(".", "").replace(/^0+/, "");
  if (!hasDot) t = t.replace(/0+$/, "");
  return t.length || 1;
};
const SignificantFiguresCalculator = () => {
  const [v, setV] = useState(""); const [n, setN] = useState("3");
  const count = countSigFigs(v); const num = Number(v); const k = Math.round(Number(n));
  const valid = v.trim() !== "" && Number.isFinite(count) && Number.isFinite(num);
  return (
    <ToolLayout slug="significant-figures-calculator" howTo={["Type the number exactly as written, keeping trailing zeros", "See how many significant figures it has", "Choose N to round it to N significant figures"]}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label htmlFor="sf" className="block text-sm font-medium mb-1.5">Number</label><input id="sf" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" value={v} onChange={e => setV(e.target.value)} placeholder="e.g. 0.004050" /></div>
        <div><label htmlFor="sfn" className="block text-sm font-medium mb-1.5">Round to (sig figs)</label><input id="sfn" type="number" min={1} max={21} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" value={n} onChange={e => setN(e.target.value)} /></div>
      </div>
      {v && !valid && <p className="text-sm text-destructive mt-3">Enter a valid decimal number.</p>}
      {valid && <div className="rounded-xl border border-border bg-secondary/40 p-5 text-sm space-y-1" style={{ marginTop: 16 }}>
        <p>Significant figures: <strong>{count}</strong></p>
        {k >= 1 && k <= 21 ? <p>Rounded to {k}: <strong>{num.toPrecision(k)}</strong></p> : <p className="text-destructive">N must be 1–21.</p>}
      </div>}
      <button className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground" style={{ marginTop: 16 }} onClick={() => { setV(""); setN("3"); }}>Clear</button>
    </ToolLayout>
  );
};
export default SignificantFiguresCalculator;
