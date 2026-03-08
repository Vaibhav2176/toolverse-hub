import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Matrix = number[][];
const parse = (s: string): Matrix => s.trim().split("\n").map(r => r.split(/[,\s]+/).map(Number));
const fmt = (m: Matrix) => m.map(r => r.join("\t")).join("\n");

const MatrixCalculator = () => {
  const [a, setA] = useState("1 2\n3 4");
  const [b, setB] = useState("5 6\n7 8");
  const [result, setResult] = useState("");
  const [op, setOp] = useState<"add" | "sub" | "mul">("add");

  const calculate = () => {
    const ma = parse(a), mb = parse(b);
    if (op === "mul") {
      if (ma[0].length !== mb.length) { setResult("Error: columns of A must equal rows of B"); return; }
      const res: Matrix = ma.map((_, i) => mb[0].map((_, j) => ma[i].reduce((s, _, k) => s + ma[i][k] * mb[k][j], 0)));
      setResult(fmt(res));
    } else {
      if (ma.length !== mb.length || ma[0].length !== mb[0].length) { setResult("Error: matrices must be same size"); return; }
      const res = ma.map((r, i) => r.map((v, j) => op === "add" ? v + mb[i][j] : v - mb[i][j]));
      setResult(fmt(res));
    }
  };

  return (
    <ToolLayout slug="matrix-calculator" howTo={["Enter Matrix A (one row per line, values separated by spaces).", "Enter Matrix B the same way.", "Select operation and click Calculate."]} faqs={[{ q: "What sizes are supported?", a: "Any size. For multiplication, columns of A must equal rows of B." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Matrix A (rows on new lines)</Label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={a} onChange={e => setA(e.target.value)} /></div>
          <div><Label>Matrix B</Label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={b} onChange={e => setB(e.target.value)} /></div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {(["add", "sub", "mul"] as const).map(o => (
            <Button key={o} variant={op === o ? "default" : "outline"} onClick={() => setOp(o)}>{o === "add" ? "A + B" : o === "sub" ? "A − B" : "A × B"}</Button>
          ))}
          <Button onClick={calculate}>Calculate</Button>
          <Button variant="outline" onClick={() => setResult("")}>Reset</Button>
        </div>
        {result && <pre className="p-4 rounded-xl bg-secondary/50 text-sm font-mono whitespace-pre">{result}</pre>}
      </div>
    </ToolLayout>
  );
};
export default MatrixCalculator;
