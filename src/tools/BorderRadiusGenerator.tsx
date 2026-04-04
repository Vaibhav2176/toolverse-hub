import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const BorderRadiusGenerator = () => {
  const [tl, setTl] = useState(10);
  const [tr, setTr] = useState(10);
  const [br, setBr] = useState(10);
  const [bl, setBl] = useState(10);

  const css = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px;`;

  return (
    <ToolLayout slug="border-radius-generator" howTo={["Adjust corner radius sliders", "Preview the shape", "Copy CSS code"]}>
      <div className="space-y-6 max-w-lg">
        <div className="grid grid-cols-2 gap-4">
          <div><Label>Top Left: {tl}px</Label><input type="range" min={0} max={100} value={tl} onChange={e => setTl(Number(e.target.value))} className="w-full" /></div>
          <div><Label>Top Right: {tr}px</Label><input type="range" min={0} max={100} value={tr} onChange={e => setTr(Number(e.target.value))} className="w-full" /></div>
          <div><Label>Bottom Left: {bl}px</Label><input type="range" min={0} max={100} value={bl} onChange={e => setBl(Number(e.target.value))} className="w-full" /></div>
          <div><Label>Bottom Right: {br}px</Label><input type="range" min={0} max={100} value={br} onChange={e => setBr(Number(e.target.value))} className="w-full" /></div>
        </div>
        <div className="flex justify-center">
          <div className="w-48 h-48 bg-primary/80" style={{ borderRadius: `${tl}px ${tr}px ${br}px ${bl}px` }} />
        </div>
        <div className="rounded-lg bg-secondary p-4 font-mono text-sm">{css}</div>
        <Button onClick={() => navigator.clipboard.writeText(css)}>Copy CSS</Button>
      </div>
    </ToolLayout>
  );
};
export default BorderRadiusGenerator;
