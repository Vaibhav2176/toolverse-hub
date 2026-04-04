import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const hexToRgb = (hex: string) => {
  const m = hex.replace("#", "").match(/.{2}/g);
  return m ? m.map(c => parseInt(c, 16)) : [0, 0, 0];
};
const rgbToHex = (r: number, g: number, b: number) => "#" + [r, g, b].map(c => Math.round(c).toString(16).padStart(2, "0")).join("");

const ColorBlender = () => {
  const [color1, setColor1] = useState("#ff0000");
  const [color2, setColor2] = useState("#0000ff");
  const [steps, setSteps] = useState(5);

  const rgb1 = hexToRgb(color1), rgb2 = hexToRgb(color2);
  const blended = Array.from({ length: steps }, (_, i) => {
    const t = i / (steps - 1);
    return rgbToHex(rgb1[0] + (rgb2[0] - rgb1[0]) * t, rgb1[1] + (rgb2[1] - rgb1[1]) * t, rgb1[2] + (rgb2[2] - rgb1[2]) * t);
  });

  return (
    <ToolLayout slug="color-blender" howTo={["Pick two colors", "Set number of steps", "See blended palette"]}>
      <div className="space-y-4 max-w-lg">
        <div className="grid grid-cols-2 gap-3">
          <div><Label>Color 1</Label><div className="flex gap-2"><input type="color" value={color1} onChange={e => setColor1(e.target.value)} className="h-10 w-14 rounded cursor-pointer" /><Input value={color1} onChange={e => setColor1(e.target.value)} className="font-mono" /></div></div>
          <div><Label>Color 2</Label><div className="flex gap-2"><input type="color" value={color2} onChange={e => setColor2(e.target.value)} className="h-10 w-14 rounded cursor-pointer" /><Input value={color2} onChange={e => setColor2(e.target.value)} className="font-mono" /></div></div>
        </div>
        <div><Label>Steps: {steps}</Label><input type="range" min={3} max={15} value={steps} onChange={e => setSteps(Number(e.target.value))} className="w-full" /></div>
        <div className="flex rounded-lg overflow-hidden h-16">
          {blended.map((c, i) => <div key={i} className="flex-1" style={{ backgroundColor: c }} />)}
        </div>
        <div className="flex flex-wrap gap-2">
          {blended.map((c, i) => (
            <Button key={i} variant="outline" size="sm" className="font-mono text-xs" onClick={() => navigator.clipboard.writeText(c)}>{c}</Button>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};
export default ColorBlender;
