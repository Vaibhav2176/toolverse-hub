import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PythagoreanCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const na = parseFloat(a);
    const nb = parseFloat(b);
    if (isNaN(na) || isNaN(nb) || na <= 0 || nb <= 0) { setResult("Enter positive numbers"); return; }
    const c = Math.sqrt(na * na + nb * nb);
    setResult(`c = √(${na}² + ${nb}²) = √${(na * na + nb * nb).toFixed(2)} = ${c.toFixed(4)}`);
  };

  return (
    <ToolLayout slug="pythagorean-calculator" howTo={["Enter side a and side b", "Click Calculate to find the hypotenuse"]}>
      <div className="space-y-4 max-w-md">
        <div className="grid grid-cols-2 gap-3">
          <div><Label>Side a</Label><Input type="number" placeholder="3" value={a} onChange={e => setA(e.target.value)} /></div>
          <div><Label>Side b</Label><Input type="number" placeholder="4" value={b} onChange={e => setB(e.target.value)} /></div>
        </div>
        <div className="flex gap-3">
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={() => { setA(""); setB(""); setResult(null); }}>Reset</Button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default PythagoreanCalculator;
