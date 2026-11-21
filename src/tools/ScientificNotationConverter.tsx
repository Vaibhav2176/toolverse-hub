import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
const sup = (e: number) => String(e);
const ScientificNotationConverter = () => {
  const [v, setV] = useState("");
  const n = Number(v.replace(/×10\^/, "e"));
  const ok = v.trim() !== "" && Number.isFinite(n);
  const exp = ok && n !== 0 ? Math.floor(Math.log10(Math.abs(n))) : 0;
  const eng = Math.floor(exp / 3) * 3;
  return (
    <ToolLayout slug="scientific-notation-converter" howTo={["Enter a plain number or E-notation like 4.5e-7", "Read scientific, engineering and plain forms", "Click Clear to start again"]}>
      <div className="space-y-4">
        <div><label htmlFor="sn" className="block text-sm font-medium mb-1.5">Number</label><input id="sn" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" value={v} onChange={e => setV(e.target.value)} placeholder="e.g. 0.000452 or 6.02e23" /></div>
        {v && !ok && <p className="text-sm text-destructive">Enter a valid number.</p>}
        {ok && <div className="rounded-xl border border-border bg-secondary/40 p-5 text-sm space-y-1">
          <p>Scientific: <strong>{(n / 10 ** exp).toPrecision(6).replace(/\.?0+$/, "")} × 10^{sup(exp)}</strong></p>
          <p>Engineering: <strong>{(n / 10 ** eng).toPrecision(6).replace(/\.?0+$/, "")} × 10^{eng}</strong></p>
          <p>E-notation: <strong>{n.toExponential()}</strong></p>
          <p>Plain: <strong>{n.toLocaleString("en-US", { maximumFractionDigits: 20 })}</strong></p>
        </div>}
        <button className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground" onClick={() => setV("")}>Clear</button>
      </div>
    </ToolLayout>
  );
};
export default ScientificNotationConverter;
