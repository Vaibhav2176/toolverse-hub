import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const RatioCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");

  const solve = () => {
    const na = Number(a), nb = Number(b), nc = Number(c);
    if (a && b && c && !d) setD(((nb * nc) / na).toFixed(4).replace(/\.?0+$/, ""));
    else if (a && b && !c && d) { const nd = Number(d); setC(((na * nd) / nb).toFixed(4).replace(/\.?0+$/, "")); }
  };

  return (
    <ToolLayout slug="ratio-calculator" howTo={["Enter three of the four values in A:B = C:D.", "Leave one field empty.", "Click Solve to find the missing value."]} faqs={[{ q: "Which value can be missing?", a: "Either C or D can be left blank to solve." }]}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="w-24"><Label>A</Label><Input type="number" value={a} onChange={e => setA(e.target.value)} /></div>
          <span className="text-lg font-bold mt-5">:</span>
          <div className="w-24"><Label>B</Label><Input type="number" value={b} onChange={e => setB(e.target.value)} /></div>
          <span className="text-lg font-bold mt-5">=</span>
          <div className="w-24"><Label>C</Label><Input type="number" value={c} onChange={e => setC(e.target.value)} /></div>
          <span className="text-lg font-bold mt-5">:</span>
          <div className="w-24"><Label>D</Label><Input type="number" value={d} onChange={e => setD(e.target.value)} /></div>
        </div>
        <div className="flex gap-3"><Button onClick={solve}>Solve</Button><Button variant="outline" onClick={() => { setA(""); setB(""); setC(""); setD(""); }}>Reset</Button></div>
      </div>
    </ToolLayout>
  );
};
export default RatioCalculator;
