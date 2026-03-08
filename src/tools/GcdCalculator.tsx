import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const GcdCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const nums = input.split(/[,\s]+/).map(Number).filter(n => !isNaN(n) && n > 0);
    if (nums.length < 2) return;
    setResult(nums.reduce((a, b) => gcd(a, b)));
  };

  return (
    <ToolLayout slug="gcd-calculator" howTo={["Enter numbers separated by commas.", "Click Calculate to find the GCD."]} example="GCD of 12, 18, 24 = 6" faqs={[{ q: "What is GCD?", a: "The Greatest Common Divisor is the largest number that divides all given numbers." }]}>
      <div className="space-y-4">
        <div><Label>Numbers (comma or space separated)</Label><Input placeholder="e.g. 12, 18, 24" value={input} onChange={e => setInput(e.target.value)} /></div>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setInput(""); setResult(null); }}>Reset</Button></div>
        {result !== null && <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-sm text-muted-foreground">GCD</p><p className="text-3xl font-bold text-primary">{result}</p></div>}
      </div>
    </ToolLayout>
  );
};
export default GcdCalculator;
