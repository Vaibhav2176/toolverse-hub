import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const DecimalToBinary = () => {
  const [val, setVal] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    const n = parseInt(val);
    if (isNaN(n) || n < 0) { setResult("Enter a positive integer"); return; }
    setResult(`${n} (decimal) = ${n.toString(2)} (binary)`);
  };

  return (
    <ToolLayout slug="decimal-to-binary" howTo={["Enter a decimal number", "Click Convert"]}>
      <div className="space-y-4 max-w-md">
        <input type="number" placeholder="Decimal (e.g. 42)" value={val} onChange={e => setVal(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm font-mono outline-none focus:border-primary" />
        <div className="flex gap-3">
          <button onClick={convert} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Convert</button>
          <button onClick={() => { setVal(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default DecimalToBinary;
