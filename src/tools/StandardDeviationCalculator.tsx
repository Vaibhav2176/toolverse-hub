import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StandardDeviationCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ mean: number; stdDev: number; variance: number } | null>(null);

  const calculate = () => {
    const nums = input.split(",").map(s => parseFloat(s.trim())).filter(n => !isNaN(n));
    if (nums.length < 2) return;
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((sum, n) => sum + Math.pow(n - mean, 2), 0) / nums.length;
    setResult({ mean: parseFloat(mean.toFixed(4)), stdDev: parseFloat(Math.sqrt(variance).toFixed(4)), variance: parseFloat(variance.toFixed(4)) });
  };

  return (
    <ToolLayout slug="standard-deviation-calculator" howTo={["Enter comma-separated numbers", "Click Calculate to see results"]}>
      <div className="space-y-4 max-w-lg">
        <div><Label>Numbers (comma-separated)</Label><Input placeholder="10, 20, 30, 40, 50" value={input} onChange={e => setInput(e.target.value)} /></div>
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={() => { setInput(""); setResult(null); }}>Reset</Button>
        </div>
        {result && (
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-2xl font-bold text-primary">{result.mean}</div><div className="text-xs text-muted-foreground">Mean</div></div>
            <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-2xl font-bold text-primary">{result.stdDev}</div><div className="text-xs text-muted-foreground">Std Deviation</div></div>
            <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-2xl font-bold text-primary">{result.variance}</div><div className="text-xs text-muted-foreground">Variance</div></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default StandardDeviationCalculator;
