import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

type Shape = "cube" | "cuboid" | "sphere" | "cylinder" | "cone" | "pyramid";

const fields: Record<Shape, { key: string; label: string }[]> = {
  cube: [{ key: "s", label: "Side length" }],
  cuboid: [{ key: "l", label: "Length" }, { key: "w", label: "Width" }, { key: "h", label: "Height" }],
  sphere: [{ key: "r", label: "Radius" }],
  cylinder: [{ key: "r", label: "Radius" }, { key: "h", label: "Height" }],
  cone: [{ key: "r", label: "Radius" }, { key: "h", label: "Height" }],
  pyramid: [{ key: "base", label: "Base area" }, { key: "h", label: "Height" }],
};

const VolumeShapeCalculator = () => {
  const [shape, setShape] = useState<Shape>("cube");
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);

  const set = (k: string, v: string) => setInputs({ ...inputs, [k]: v });
  const g = (k: string) => parseFloat(inputs[k] || "0");

  const calculate = () => {
    let v: number;
    if (shape === "cube") v = g("s") ** 3;
    else if (shape === "cuboid") v = g("l") * g("w") * g("h");
    else if (shape === "sphere") v = (4 / 3) * Math.PI * g("r") ** 3;
    else if (shape === "cylinder") v = Math.PI * g("r") ** 2 * g("h");
    else if (shape === "cone") v = (1 / 3) * Math.PI * g("r") ** 2 * g("h");
    else v = (1 / 3) * g("base") * g("h");
    setResult(v);
  };

  return (
    <ToolLayout
      slug="volume-shape-calculator"
      howTo={["Select a 3D shape", "Enter its dimensions", "Click Calculate to get the volume"]}
      faqs={[
        { q: "What shapes are supported?", a: "Cube, cuboid (rectangular box), sphere, cylinder, cone, and pyramid." },
        { q: "What units should I use?", a: "Any consistent linear unit works; the result will be in that unit cubed, e.g. cm³ or m³." },
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2 flex-wrap">
          {(Object.keys(fields) as Shape[]).map(s => (
            <button key={s} onClick={() => { setShape(s); setInputs({}); setResult(null); }} className={`px-4 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all ${shape === s ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{s}</button>
          ))}
        </div>
        {fields[shape].map(f => (
          <input key={f.key} type="number" placeholder={f.label} value={inputs[f.key] || ""} onChange={e => set(f.key, e.target.value)} className="w-full input-field" />
        ))}
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setInputs({}); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
        {result !== null && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">Volume = {result.toFixed(4)}</div>}
      </div>
    </ToolLayout>
  );
};
export default VolumeShapeCalculator;
