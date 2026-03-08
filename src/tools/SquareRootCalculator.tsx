import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SquareRootCalculator = () => {
  const [num, setNum] = useState("");
  const [nth, setNth] = useState("2");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const n = Number(num), root = Number(nth);
    if (isNaN(n) || !root) return;
    const r = Math.pow(Math.abs(n), 1 / root) * (n < 0 && root % 2 !== 0 ? -1 : 1);
    setResult(n < 0 && root % 2 === 0 ? "Not a real number" : r.toFixed(8).replace(/\.?0+$/, ""));
  };

  return (
    <ToolLayout slug="square-root-calculator" howTo={["Enter a number.", "Choose root (2 for square root, 3 for cube root, etc.).", "Click Calculate."]} faqs={[{ q: "Can I find cube roots?", a: "Yes, set the root to 3." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Number</Label><Input type="number" value={num} onChange={e => setNum(e.target.value)} placeholder="e.g. 144" /></div>
          <div><Label>Root (nth)</Label><Input type="number" value={nth} onChange={e => setNth(e.target.value)} min="2" placeholder="2" /></div>
        </div>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setNum(""); setNth("2"); setResult(null); }}>Reset</Button></div>
        {result !== null && <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-3xl font-bold text-primary">{result}</p></div>}
      </div>
    </ToolLayout>
  );
};
export default SquareRootCalculator;
