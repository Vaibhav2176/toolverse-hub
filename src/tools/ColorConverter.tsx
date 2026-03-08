import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

const ColorConverter = () => {
  const [hex, setHex] = useState("#6366f1");
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  return (
    <ToolLayout slug="color-converter" howTo={["Pick a color or enter HEX code", "See RGB and HSL values instantly"]} faqs={[{ q: "What color formats are supported?", a: "HEX, RGB, and HSL conversions." }]}>
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex items-center gap-4">
          <input type="color" value={hex} onChange={e => setHex(e.target.value)} className="h-14 w-14 rounded-xl cursor-pointer border-0" />
          <input type="text" value={hex} onChange={e => setHex(e.target.value)} className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm font-mono outline-none focus:border-primary" />
        </div>
        <div className="w-full h-24 rounded-xl border border-border" style={{ backgroundColor: hex }} />
        <div className="space-y-2">
          <div className="flex justify-between bg-secondary rounded-xl px-4 py-3">
            <span className="text-sm text-muted-foreground">HEX</span>
            <span className="font-mono font-bold text-foreground">{hex.toUpperCase()}</span>
          </div>
          <div className="flex justify-between bg-secondary rounded-xl px-4 py-3">
            <span className="text-sm text-muted-foreground">RGB</span>
            <span className="font-mono font-bold text-foreground">rgb({rgb.r}, {rgb.g}, {rgb.b})</span>
          </div>
          <div className="flex justify-between bg-secondary rounded-xl px-4 py-3">
            <span className="text-sm text-muted-foreground">HSL</span>
            <span className="font-mono font-bold text-foreground">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</span>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};
export default ColorConverter;
