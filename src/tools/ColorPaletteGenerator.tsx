import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const hexToHsl = (hex: string) => {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
};

const hslToHex = (h: number, s: number, l: number) => {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => { const k = (n + h / 30) % 12; return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1); };
  return `#${[f(0), f(8), f(4)].map(x => Math.round(x * 255).toString(16).padStart(2, "0")).join("")}`;
};

const ColorPaletteGenerator = () => {
  const [base, setBase] = useState("#6366f1");
  const [palette, setPalette] = useState<string[]>([]);

  const generate = () => {
    const { h, s, l } = hexToHsl(base);
    const colors = [
      hslToHex(h, s, Math.max(l - 30, 10)),
      hslToHex(h, s, Math.max(l - 15, 10)),
      base,
      hslToHex((h + 30) % 360, s, l),
      hslToHex((h + 180) % 360, s, l),
    ];
    setPalette(colors);
  };

  return (
    <ToolLayout slug="color-palette-generator" howTo={["Pick a base color.", "Click Generate to create a harmonious palette.", "Click any swatch to copy its hex value."]} faqs={[{ q: "What harmony is used?", a: "A mix of shades plus analogous and complementary colors." }]}>
      <div className="space-y-4">
        <div className="flex gap-3 items-end">
          <div><Label>Base Color</Label><Input type="color" value={base} onChange={e => setBase(e.target.value)} className="h-10 w-20 p-1" /></div>
          <Button onClick={generate}>Generate Palette</Button>
          <Button variant="outline" onClick={() => setPalette([])}>Reset</Button>
        </div>
        {palette.length > 0 && (
          <div className="grid grid-cols-5 gap-3">
            {palette.map((c, i) => (
              <button key={i} onClick={() => navigator.clipboard.writeText(c)} className="group flex flex-col items-center gap-2">
                <div className="w-full aspect-square rounded-xl border border-border group-hover:scale-105 transition-transform" style={{ backgroundColor: c }} />
                <code className="text-xs font-mono">{c}</code>
              </button>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default ColorPaletteGenerator;
