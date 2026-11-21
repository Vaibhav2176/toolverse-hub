import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
const fact = (n: number) => { let r = 1n; for (let i = 2n; i <= BigInt(n); i++) r *= i; return r; };
const FactorialCalculator = () => {
  const [v, setV] = useState("");
  const n = Number(v); const ok = v !== "" && Number.isInteger(n) && n >= 0 && n <= 5000;
  const r = ok ? fact(n).toString() : "";
  return (
    <ToolLayout slug="factorial-calculator" howTo={["Enter a whole number from 0 to 5000", "Read the exact factorial and its digit count", "Copy the result if needed"]}>
      <div className="space-y-4">
        <div><label htmlFor="fc" className="block text-sm font-medium mb-1.5">n</label><input id="fc" type="number" min={0} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" value={v} onChange={e => setV(e.target.value)} placeholder="e.g. 20" /></div>
        {v && !ok && <p className="text-sm text-destructive">Enter a whole number between 0 and 5000.</p>}
        {ok && <div className="rounded-xl border border-border bg-secondary/40 p-5 text-sm space-y-1"><p>{n}! has <strong>{r.length.toLocaleString()}</strong> digits</p><p className="break-all font-mono">{r}</p></div>}
        <div className="flex gap-2">{ok && <button className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground" onClick={() => navigator.clipboard.writeText(r)}>Copy</button>}<button className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground" onClick={() => setV("")}>Clear</button></div>
      </div>
    </ToolLayout>
  );
};
export default FactorialCalculator;
