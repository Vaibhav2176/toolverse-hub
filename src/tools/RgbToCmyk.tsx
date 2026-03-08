import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const RgbToCmyk = () => {
  const [r, setR] = useState("100");
  const [g, setG] = useState("149");
  const [b, setB] = useState("237");
  const [result, setResult] = useState<{ c: number; m: number; y: number; k: number } | null>(null);

  const convert = () => {
    const rr = Number(r) / 255, gg = Number(g) / 255, bb = Number(b) / 255;
    const k = 1 - Math.max(rr, gg, bb);
    if (k === 1) { setResult({ c: 0, m: 0, y: 0, k: 100 }); return; }
    setResult({
      c: +((1 - rr - k) / (1 - k) * 100).toFixed(1),
      m: +((1 - gg - k) / (1 - k) * 100).toFixed(1),
      y: +((1 - bb - k) / (1 - k) * 100).toFixed(1),
      k: +(k * 100).toFixed(1),
    });
  };

  const hex = `#${[r, g, b].map(v => Math.min(255, Math.max(0, Number(v) || 0)).toString(16).padStart(2, "0")).join("")}`;

  return (
    <ToolLayout slug="rgb-to-cmyk" howTo={["Enter RGB values (0-255).", "Click Convert to see CMYK values."]} faqs={[{ q: "When do I need CMYK?", a: "CMYK is used for print design (physical printing)." }]}>
      <div className="space-y-4">
        <div className="flex gap-3 items-end">
          <div className="h-16 w-16 rounded-xl border border-border shrink-0" style={{ backgroundColor: hex }} />
          <div className="flex-1 grid grid-cols-3 gap-3">
            <div><Label>R</Label><Input type="number" value={r} onChange={e => setR(e.target.value)} min="0" max="255" /></div>
            <div><Label>G</Label><Input type="number" value={g} onChange={e => setG(e.target.value)} min="0" max="255" /></div>
            <div><Label>B</Label><Input type="number" value={b} onChange={e => setB(e.target.value)} min="0" max="255" /></div>
          </div>
        </div>
        <div className="flex gap-3"><Button onClick={convert}>Convert</Button><Button variant="outline" onClick={() => { setR("100"); setG("149"); setB("237"); setResult(null); }}>Reset</Button></div>
        {result && (
          <div className="grid grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">C</p><p className="text-xl font-bold">{result.c}%</p></div>
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">M</p><p className="text-xl font-bold">{result.m}%</p></div>
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Y</p><p className="text-xl font-bold">{result.y}%</p></div>
            <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">K</p><p className="text-xl font-bold">{result.k}%</p></div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default RgbToCmyk;
