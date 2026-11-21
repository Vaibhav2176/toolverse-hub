import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
type Mode = "half-up" | "half-even" | "up" | "down";
export const roundTo = (x: number, step: number, mode: Mode) => {
  const q = x / step;
  let r: number;
  if (mode === "up") r = Math.ceil(q); else if (mode === "down") r = Math.floor(q);
  else if (mode === "half-even") { const f = Math.floor(q); const d = q - f; r = Math.abs(d - 0.5) < 1e-12 ? (f % 2 === 0 ? f : f + 1) : Math.round(q); }
  else r = Math.sign(q) * Math.round(Math.abs(q));
  return Number((r * step).toPrecision(15));
};
const RoundingCalculator = () => {
  const [v, setV] = useState(""); const [step, setStep] = useState("0.01"); const [mode, setMode] = useState<Mode>("half-up");
  const x = Number(v); const ok = v.trim() !== "" && Number.isFinite(x);
  return (
    <ToolLayout slug="rounding-calculator" howTo={["Enter the number", "Pick what to round to", "Choose a rounding mode"]}>
      <div className="grid sm:grid-cols-3 gap-4">
        <div><label htmlFor="rn" className="block text-sm font-medium mb-1.5">Number</label><input id="rn" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" value={v} onChange={e => setV(e.target.value)} placeholder="e.g. 2.675" /></div>
        <div><label htmlFor="rs" className="block text-sm font-medium mb-1.5">Round to</label><select id="rs" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" value={step} onChange={e => setStep(e.target.value)}>{["0.0001","0.001","0.01","0.1","1","10","100","1000"].map(s => <option key={s} value={s}>{Number(s) < 1 ? s.split(".")[1].length + " decimal places" : "nearest " + s}</option>)}</select></div>
        <div><label htmlFor="rm" className="block text-sm font-medium mb-1.5">Mode</label><select id="rm" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" value={mode} onChange={e => setMode(e.target.value as Mode)}><option value="half-up">Half up</option><option value="half-even">Half even (banker's)</option><option value="up">Always up</option><option value="down">Always down</option></select></div>
      </div>
      {v && !ok && <p className="text-sm text-destructive mt-3">Enter a valid number.</p>}
      {ok && <div className="rounded-xl border border-border bg-secondary/40 p-5 text-sm space-y-1" style={{ marginTop: 16 }}><p>Result: <strong>{roundTo(x, Number(step), mode).toLocaleString("en-US", { maximumFractionDigits: 6 })}</strong></p></div>}
      <button className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground" style={{ marginTop: 16 }} onClick={() => setV("")}>Clear</button>
    </ToolLayout>
  );
};
export default RoundingCalculator;
