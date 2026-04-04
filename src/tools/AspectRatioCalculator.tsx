import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);

const AspectRatioCalculator = () => {
  const [w, setW] = useState("1920");
  const [h, setH] = useState("1080");

  const width = parseInt(w) || 0, height = parseInt(h) || 0;
  const g = width && height ? gcd(width, height) : 1;
  const ratioW = width / g, ratioH = height / g;

  const common = [
    { label: "16:9", w: 1920, h: 1080 },
    { label: "4:3", w: 1024, h: 768 },
    { label: "1:1", w: 1080, h: 1080 },
    { label: "21:9", w: 2560, h: 1080 },
    { label: "9:16", w: 1080, h: 1920 },
  ];

  return (
    <ToolLayout slug="aspect-ratio-calculator" howTo={["Enter width and height", "See the simplified aspect ratio"]}>
      <div className="space-y-4 max-w-md">
        <div className="grid grid-cols-2 gap-3">
          <div><Label>Width (px)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} /></div>
          <div><Label>Height (px)</Label><Input type="number" value={h} onChange={e => setH(e.target.value)} /></div>
        </div>
        {width > 0 && height > 0 && (
          <div className="rounded-lg bg-accent/10 p-4 text-center">
            <div className="text-3xl font-bold text-primary">{ratioW}:{ratioH}</div>
            <div className="text-sm text-muted-foreground">{width} × {height} pixels</div>
          </div>
        )}
        <div><Label>Common Ratios</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {common.map(r => (
              <Button key={r.label} variant="outline" size="sm" onClick={() => { setW(String(r.w)); setH(String(r.h)); }}>{r.label}</Button>
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};
export default AspectRatioCalculator;
