import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ExponentCalculator = () => {
  const [base, setBase] = useState("");
  const [exp, setExp] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const b = Number(base), e = Number(exp);
    if (isNaN(b) || isNaN(e)) return;
    setResult(Math.pow(b, e).toString());
  };

  return (
    <ToolLayout slug="exponent-calculator" howTo={["Enter a base number and exponent.", "Click Calculate to see the result."]} example="2^10 = 1024" faqs={[{ q: "Can I use negative exponents?", a: "Yes. e.g. 2^-3 = 0.125" }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Base</Label><Input type="number" value={base} onChange={e => setBase(e.target.value)} placeholder="e.g. 2" /></div>
          <div><Label>Exponent</Label><Input type="number" value={exp} onChange={e => setExp(e.target.value)} placeholder="e.g. 10" /></div>
        </div>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setBase(""); setExp(""); setResult(null); }}>Reset</Button></div>
        {result !== null && <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-sm text-muted-foreground">{base}^{exp} =</p><p className="text-3xl font-bold text-primary">{result}</p></div>}
      </div>
    </ToolLayout>
  );
};
export default ExponentCalculator;
