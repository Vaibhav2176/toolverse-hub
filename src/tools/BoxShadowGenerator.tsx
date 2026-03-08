import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const BoxShadowGenerator = () => {
  const [x, setX] = useState("4");
  const [y, setY] = useState("4");
  const [blur, setBlur] = useState("10");
  const [spread, setSpread] = useState("0");
  const [color, setColor] = useState("#6366f1");
  const [opacity, setOpacity] = useState("40");
  const [inset, setInset] = useState(false);

  const hexToRgba = (hex: string, op: number) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${op / 100})`;
  };

  const shadow = `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${hexToRgba(color, Number(opacity))}`;
  const css = `box-shadow: ${shadow};`;

  return (
    <ToolLayout slug="box-shadow-generator" howTo={["Adjust the shadow parameters using the controls.", "See a live preview of the shadow.", "Copy the CSS code."]} faqs={[{ q: "Can I use multiple shadows?", a: "This generates a single shadow. You can comma-separate multiple in CSS." }]}>
      <div className="space-y-4">
        <div className="flex justify-center py-8">
          <div className="h-32 w-32 rounded-2xl bg-card border border-border" style={{ boxShadow: shadow }} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div><Label>X Offset</Label><Input type="number" value={x} onChange={e => setX(e.target.value)} /></div>
          <div><Label>Y Offset</Label><Input type="number" value={y} onChange={e => setY(e.target.value)} /></div>
          <div><Label>Blur</Label><Input type="number" value={blur} onChange={e => setBlur(e.target.value)} min="0" /></div>
          <div><Label>Spread</Label><Input type="number" value={spread} onChange={e => setSpread(e.target.value)} /></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 items-end">
          <div><Label>Color</Label><Input type="color" value={color} onChange={e => setColor(e.target.value)} className="h-10 p-1" /></div>
          <div><Label>Opacity (%)</Label><Input type="number" value={opacity} onChange={e => setOpacity(e.target.value)} min="0" max="100" /></div>
          <label className="flex items-center gap-2 text-sm cursor-pointer h-10"><input type="checkbox" checked={inset} onChange={e => setInset(e.target.checked)} className="rounded" /> Inset</label>
        </div>
        <div className="flex items-center gap-2">
          <code className="flex-1 p-3 rounded-lg bg-secondary/50 text-sm font-mono">{css}</code>
          <Button onClick={() => navigator.clipboard.writeText(css)}>Copy</Button>
        </div>
      </div>
    </ToolLayout>
  );
};
export default BoxShadowGenerator;
