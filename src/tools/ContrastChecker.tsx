import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const luminance = (hex: string) => {
  const rgb = [1, 3, 5].map(i => {
    let c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
};

const ContrastChecker = () => {
  const [fg, setFg] = useState("#000000");
  const [bg, setBg] = useState("#ffffff");

  const ratio = useMemo(() => {
    const l1 = luminance(fg), l2 = luminance(bg);
    const r = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    return +r.toFixed(2);
  }, [fg, bg]);

  const passAA = ratio >= 4.5;
  const passAALarge = ratio >= 3;
  const passAAA = ratio >= 7;

  return (
    <ToolLayout slug="contrast-checker" howTo={["Pick foreground and background colors.", "See the contrast ratio and WCAG results live."]} faqs={[{ q: "What ratio is needed for WCAG AA?", a: "4.5:1 for normal text, 3:1 for large text (18px+ bold or 24px+)." }]}>
      <div className="space-y-4">
        <div className="rounded-xl p-8 text-center border border-border" style={{ backgroundColor: bg, color: fg }}>
          <p className="text-2xl font-bold">Sample Text</p>
          <p className="text-sm mt-1">The quick brown fox jumps over the lazy dog</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Text Color</Label><div className="flex gap-2"><Input type="color" value={fg} onChange={e => setFg(e.target.value)} className="h-10 w-16 p-1" /><Input value={fg} onChange={e => setFg(e.target.value)} className="font-mono" /></div></div>
          <div><Label>Background</Label><div className="flex gap-2"><Input type="color" value={bg} onChange={e => setBg(e.target.value)} className="h-10 w-16 p-1" /><Input value={bg} onChange={e => setBg(e.target.value)} className="font-mono" /></div></div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-secondary/50 text-center"><p className="text-xs text-muted-foreground">Ratio</p><p className="text-xl font-bold">{ratio}:1</p></div>
          <div className={`p-3 rounded-xl text-center ${passAA ? "bg-green-500/10" : "bg-red-500/10"}`}><p className="text-xs text-muted-foreground">AA Normal</p><p className="text-lg font-bold">{passAA ? "✓ Pass" : "✗ Fail"}</p></div>
          <div className={`p-3 rounded-xl text-center ${passAALarge ? "bg-green-500/10" : "bg-red-500/10"}`}><p className="text-xs text-muted-foreground">AA Large</p><p className="text-lg font-bold">{passAALarge ? "✓ Pass" : "✗ Fail"}</p></div>
          <div className={`p-3 rounded-xl text-center ${passAAA ? "bg-green-500/10" : "bg-red-500/10"}`}><p className="text-xs text-muted-foreground">AAA</p><p className="text-lg font-bold">{passAAA ? "✓ Pass" : "✗ Fail"}</p></div>
        </div>
      </div>
    </ToolLayout>
  );
};
export default ContrastChecker;
