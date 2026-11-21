import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
const RatioSimplifier = () => {
  const [a, setA] = useState(""); const [b, setB] = useState("");
  const x = Number(a), y = Number(b);
  const ok = a !== "" && b !== "" && Number.isFinite(x) && Number.isFinite(y) && x > 0 && y > 0;
  let p = 0, q = 0;
  if (ok) { const sc = 10 ** Math.max((a.split(".")[1] || "").length, (b.split(".")[1] || "").length); const X = Math.round(x * sc), Y = Math.round(y * sc); const g = gcd(X, Y); p = X / g; q = Y / g; }
  return (
    <ToolLayout slug="ratio-simplifier" howTo={["Enter both parts of the ratio", "Read the simplified ratio", "See decimal and percentage shares"]}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label htmlFor="ra" className="block text-sm font-medium mb-1.5">First term</label><input id="ra" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" value={a} onChange={e => setA(e.target.value)} placeholder="e.g. 24" /></div>
        <div><label htmlFor="rb" className="block text-sm font-medium mb-1.5">Second term</label><input id="rb" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" value={b} onChange={e => setB(e.target.value)} placeholder="e.g. 36" /></div>
      </div>
      {(a || b) && !ok && <p className="text-sm text-destructive mt-3">Enter two positive numbers.</p>}
      {ok && <div className="rounded-xl border border-border bg-secondary/40 p-5 text-sm space-y-1" style={{ marginTop: 16 }}>
        <p>Simplified: <strong>{p}:{q}</strong></p>
        <p>As decimal: <strong>{(x / y).toLocaleString("en-US", { maximumFractionDigits: 6 })}</strong></p>
        <p>Shares: <strong>{(100 * x / (x + y)).toFixed(2)}% / {(100 * y / (x + y)).toFixed(2)}%</strong></p>
      </div>}
      <button className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground" style={{ marginTop: 16 }} onClick={() => { setA(""); setB(""); }}>Clear</button>
    </ToolLayout>
  );
};
export default RatioSimplifier;
