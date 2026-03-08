import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const GradientGenerator = () => {
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#ec4899");
  const [angle, setAngle] = useState("135");
  const [type, setType] = useState<"linear" | "radial">("linear");

  const css = type === "linear"
    ? `background: linear-gradient(${angle}deg, ${color1}, ${color2});`
    : `background: radial-gradient(circle, ${color1}, ${color2});`;

  const style = type === "linear"
    ? { background: `linear-gradient(${angle}deg, ${color1}, ${color2})` }
    : { background: `radial-gradient(circle, ${color1}, ${color2})` };

  return (
    <ToolLayout slug="gradient-generator" howTo={["Pick two colors.", "Adjust the angle or choose radial.", "Copy the CSS code."]} faqs={[{ q: "Can I add more color stops?", a: "Currently supports two-color gradients. You can manually add stops to the CSS." }]}>
      <div className="space-y-4">
        <div className="h-48 rounded-xl border border-border" style={style} />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div><Label>Color 1</Label><Input type="color" value={color1} onChange={e => setColor1(e.target.value)} className="h-10 p-1" /></div>
          <div><Label>Color 2</Label><Input type="color" value={color2} onChange={e => setColor2(e.target.value)} className="h-10 p-1" /></div>
          <div><Label>Angle</Label><Input type="number" value={angle} onChange={e => setAngle(e.target.value)} min="0" max="360" /></div>
          <div><Label>Type</Label>
            <div className="flex gap-1">
              <Button size="sm" variant={type === "linear" ? "default" : "outline"} onClick={() => setType("linear")}>Linear</Button>
              <Button size="sm" variant={type === "radial" ? "default" : "outline"} onClick={() => setType("radial")}>Radial</Button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <code className="flex-1 p-3 rounded-lg bg-secondary/50 text-sm font-mono">{css}</code>
          <Button onClick={() => navigator.clipboard.writeText(css)}>Copy</Button>
        </div>
      </div>
    </ToolLayout>
  );
};
export default GradientGenerator;
