import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const det2 = (m: number[][]) => m[0][0] * m[1][1] - m[0][1] * m[1][0];
const det3 = (m: number[][]) =>
  m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
  m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
  m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);

const DeterminantCalculator = () => {
  const [input, setInput] = useState("1 2\n3 4");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    setError("");
    const m = input.trim().split("\n").map(r => r.split(/[,\s]+/).map(Number));
    if (m.length === 2 && m[0].length === 2) setResult(det2(m));
    else if (m.length === 3 && m[0].length === 3) setResult(det3(m));
    else { setError("Only 2×2 and 3×3 matrices supported."); setResult(null); }
  };

  return (
    <ToolLayout slug="determinant-calculator" howTo={["Enter a 2×2 or 3×3 matrix (one row per line).", "Click Calculate."]} faqs={[{ q: "What sizes are supported?", a: "2×2 and 3×3 matrices." }]}>
      <div className="space-y-4">
        <div><Label>Matrix (rows on new lines, values separated by spaces)</Label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={input} onChange={e => setInput(e.target.value)} /></div>
        <div className="flex gap-3"><Button onClick={calculate}>Calculate</Button><Button variant="outline" onClick={() => { setInput("1 2\n3 4"); setResult(null); setError(""); }}>Reset</Button></div>
        {error && <p className="text-destructive text-sm">{error}</p>}
        {result !== null && <div className="p-4 rounded-xl bg-secondary/50 text-center"><p className="text-sm text-muted-foreground">Determinant</p><p className="text-3xl font-bold text-primary">{result}</p></div>}
      </div>
    </ToolLayout>
  );
};
export default DeterminantCalculator;
