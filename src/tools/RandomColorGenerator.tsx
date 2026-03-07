import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const RandomColorGenerator = () => {
  const [color, setColor] = useState("#3498db");
  const generate = () => {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setColor(hex);
  };
  const r = parseInt(color.slice(1, 3), 16), g = parseInt(color.slice(3, 5), 16), b = parseInt(color.slice(5, 7), 16);

  return (
    <ToolLayout slug="random-color-generator" howTo={["Click Generate to get a random color", "Copy the color value"]}>
      <div className="space-y-4 max-w-md text-center">
        <div className="w-full h-40 rounded-xl border border-border" style={{ backgroundColor: color }} />
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="rounded-lg bg-secondary p-3"><span className="text-muted-foreground">HEX</span><br /><span className="font-mono font-bold">{color}</span></div>
          <div className="rounded-lg bg-secondary p-3"><span className="text-muted-foreground">RGB</span><br /><span className="font-mono font-bold">{r}, {g}, {b}</span></div>
          <div className="rounded-lg bg-secondary p-3"><span className="text-muted-foreground">HSL</span><br /><span className="font-mono font-bold text-xs">—</span></div>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={generate} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Generate</button>
          <button onClick={() => navigator.clipboard.writeText(color)} className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90">Copy HEX</button>
        </div>
      </div>
    </ToolLayout>
  );
};
export default RandomColorGenerator;
