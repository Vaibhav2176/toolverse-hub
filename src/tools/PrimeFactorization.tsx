import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const PrimeFactorization = () => {
  const [input, setInput] = useState("");
  const [factors, setFactors] = useState<number[]>([]);

  const calculate = () => {
    let n = Math.abs(Math.floor(Number(input)));
    if (isNaN(n) || n < 2) return;
    const f: number[] = [];
    for (let d = 2; d * d <= n; d++) {
      while (n % d === 0) { f.push(d); n /= d; }
    }
    if (n > 1) f.push(n);
    setFactors(f);
  };

  return (
    <ToolLayout slug="prime-factorization" howTo={["Enter a positive integer.", "Click Factorize to see prime factors."]} example="60 = 2 × 2 × 3 × 5" faqs={[{ q: "What are prime factors?", a: "Prime factors are prime numbers that multiply together to give the original number." }]}>
      <div className="space-y-4">
        <div><Label>Number</Label><Input type="number" placeholder="e.g. 60" value={input} onChange={e => setInput(e.target.value)} /></div>
        <div className="flex gap-3"><Button onClick={calculate}>Factorize</Button><Button variant="outline" onClick={() => { setInput(""); setFactors([]); }}>Reset</Button></div>
        {factors.length > 0 && (
          <div className="p-4 rounded-xl bg-secondary/50 text-center">
            <p className="text-sm text-muted-foreground mb-1">{input} =</p>
            <p className="text-2xl font-bold text-primary">{factors.join(" × ")}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default PrimeFactorization;
