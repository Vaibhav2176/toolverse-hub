import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CssUnitConverter = () => {
  const [value, setValue] = useState("");
  const [baseFontSize, setBaseFontSize] = useState("16");
  const [viewportW, setViewportW] = useState("1920");

  const v = Number(value), base = Number(baseFontSize), vw = Number(viewportW);
  const px = v;
  const results = value && !isNaN(v) ? [
    { label: "px", value: px.toFixed(2) },
    { label: "rem", value: (px / base).toFixed(4) },
    { label: "em", value: (px / base).toFixed(4) },
    { label: "vw", value: ((px / vw) * 100).toFixed(4) },
    { label: "pt", value: (px * 0.75).toFixed(2) },
    { label: "%", value: ((px / base) * 100).toFixed(2) },
  ] : [];

  return (
    <ToolLayout slug="css-unit-converter" howTo={["Enter a pixel value.", "Optionally adjust base font size and viewport width.", "See conversions to rem, em, vw, pt, and %."]} faqs={[{ q: "What is the default rem base?", a: "16px, the browser default root font size." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-3 gap-4">
          <div><Label>Value (px)</Label><Input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="e.g. 24" /></div>
          <div><Label>Base Font Size (px)</Label><Input type="number" value={baseFontSize} onChange={e => setBaseFontSize(e.target.value)} /></div>
          <div><Label>Viewport Width (px)</Label><Input type="number" value={viewportW} onChange={e => setViewportW(e.target.value)} /></div>
        </div>
        {results.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {results.map(r => (
              <button key={r.label} onClick={() => navigator.clipboard.writeText(r.value + r.label)} className="p-3 rounded-xl bg-secondary/50 text-center hover:bg-secondary/70 transition-colors">
                <p className="text-xs text-muted-foreground">{r.label}</p>
                <p className="text-lg font-bold font-mono">{r.value}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default CssUnitConverter;
