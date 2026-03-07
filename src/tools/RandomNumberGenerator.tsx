import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const RandomNumberGenerator = () => {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [results, setResults] = useState<number[]>([]);

  const generate = () => {
    const lo = parseInt(min), hi = parseInt(max), c = parseInt(count);
    if (isNaN(lo) || isNaN(hi) || isNaN(c) || lo >= hi) return;
    setResults(Array.from({ length: Math.min(c, 100) }, () => Math.floor(Math.random() * (hi - lo + 1)) + lo));
  };

  return (
    <ToolLayout slug="random-number-generator" howTo={["Set min and max values", "Set how many numbers", "Click Generate"]}>
      <div className="space-y-4 max-w-md">
        <div className="grid grid-cols-3 gap-3">
          <div><label className="text-xs text-muted-foreground">Min</label><input type="number" value={min} onChange={e => setMin(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" /></div>
          <div><label className="text-xs text-muted-foreground">Max</label><input type="number" value={max} onChange={e => setMax(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" /></div>
          <div><label className="text-xs text-muted-foreground">Count</label><input type="number" value={count} onChange={e => setCount(e.target.value)} className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" /></div>
        </div>
        <button onClick={generate} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Generate</button>
        {results.length > 0 && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{results.join(", ")}</div>}
      </div>
    </ToolLayout>
  );
};
export default RandomNumberGenerator;
