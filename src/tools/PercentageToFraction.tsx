import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);

const PercentageToFraction = () => {
  const [val, setVal] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) { setResult("Enter a valid number"); return; }
    let num = n, den = 100;
    while (num !== Math.floor(num)) { num *= 10; den *= 10; }
    const g = gcd(Math.abs(num), den);
    setResult(`${n}% = ${num / g}/${den / g}`);
  };

  return (
    <ToolLayout slug="percentage-to-fraction" howTo={["Enter a percentage value", "Click Convert to see the fraction"]}>
      <div className="space-y-4 max-w-md">
        <div><Label>Percentage (%)</Label><Input type="number" placeholder="75" value={val} onChange={e => setVal(e.target.value)} /></div>
        <div className="flex gap-3">
          <Button onClick={convert}>Convert</Button>
          <Button variant="outline" onClick={() => { setVal(""); setResult(null); }}>Reset</Button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default PercentageToFraction;
