import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const factorial = (n: number): number => n <= 1 ? 1 : n * factorial(n - 1);

const CombinationCalculator = () => {
  const [n, setN] = useState("");
  const [r, setR] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const nn = parseInt(n), nr = parseInt(r);
    if (isNaN(nn) || isNaN(nr) || nn < 0 || nr < 0 || nr > nn) { setResult("Invalid input (n ≥ r ≥ 0)"); return; }
    const val = factorial(nn) / (factorial(nr) * factorial(nn - nr));
    setResult(`C(${nn}, ${nr}) = ${nn}! / (${nr}! × ${nn - nr}!) = ${val}`);
  };

  return (
    <ToolLayout slug="combination-calculator" howTo={["Enter n (total items) and r (items to choose)", "Click Calculate"]}>
      <div className="space-y-4 max-w-md">
        <div className="grid grid-cols-2 gap-3">
          <div><Label>n (total)</Label><Input type="number" placeholder="5" value={n} onChange={e => setN(e.target.value)} /></div>
          <div><Label>r (choose)</Label><Input type="number" placeholder="3" value={r} onChange={e => setR(e.target.value)} /></div>
        </div>
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={() => { setN(""); setR(""); setResult(null); }}>Reset</Button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default CombinationCalculator;
