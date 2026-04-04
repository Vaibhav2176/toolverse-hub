import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const TextShadowGenerator = () => {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [blur, setBlur] = useState(4);
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("ToolVerse");

  const css = `text-shadow: ${x}px ${y}px ${blur}px ${color};`;

  return (
    <ToolLayout slug="text-shadow-generator" howTo={["Adjust shadow parameters", "Preview the text effect", "Copy CSS code"]}>
      <div className="space-y-6 max-w-lg">
        <div className="grid grid-cols-2 gap-4">
          <div><Label>X Offset: {x}px</Label><input type="range" min={-20} max={20} value={x} onChange={e => setX(Number(e.target.value))} className="w-full" /></div>
          <div><Label>Y Offset: {y}px</Label><input type="range" min={-20} max={20} value={y} onChange={e => setY(Number(e.target.value))} className="w-full" /></div>
          <div><Label>Blur: {blur}px</Label><input type="range" min={0} max={30} value={blur} onChange={e => setBlur(Number(e.target.value))} className="w-full" /></div>
          <div><Label>Color</Label><input type="color" value={color} onChange={e => setColor(e.target.value)} className="h-10 w-full rounded cursor-pointer" /></div>
        </div>
        <div className="flex justify-center rounded-lg bg-secondary p-8">
          <span className="text-4xl font-bold" style={{ textShadow: `${x}px ${y}px ${blur}px ${color}` }}>{text}</span>
        </div>
        <div><Label>Preview Text</Label><input className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" value={text} onChange={e => setText(e.target.value)} /></div>
        <div className="rounded-lg bg-secondary p-4 font-mono text-sm">{css}</div>
        <Button onClick={() => navigator.clipboard.writeText(css)}>Copy CSS</Button>
      </div>
    </ToolLayout>
  );
};
export default TextShadowGenerator;
