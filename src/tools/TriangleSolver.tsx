import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

type Mode = "SSS" | "SAS";

const toDeg = (rad: number) => (rad * 180) / Math.PI;

const TriangleSolver = () => {
  const [mode, setMode] = useState<Mode>("SSS");
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ sides: number[]; angles: number[]; perimeter: number; area: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const set = (k: string, v: string) => setInputs({ ...inputs, [k]: v });
  const g = (k: string) => parseFloat(inputs[k] || "0");

  const calculate = () => {
    setError(null);
    let a: number, b: number, c: number;
    if (mode === "SSS") {
      a = g("a"); b = g("b"); c = g("c");
      if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        setError("These side lengths don't form a valid triangle.");
        setResult(null);
        return;
      }
    } else {
      a = g("sa"); b = g("sb");
      const C = (g("angleC") * Math.PI) / 180;
      if (a <= 0 || b <= 0 || C <= 0 || C >= Math.PI) {
        setError("Please enter two positive sides and an included angle between 0 and 180°.");
        setResult(null);
        return;
      }
      c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C));
    }

    const angleA = Math.acos((b * b + c * c - a * a) / (2 * b * c));
    const angleB = Math.acos((a * a + c * c - b * b) / (2 * a * c));
    const angleC = Math.PI - angleA - angleB;
    const perimeter = a + b + c;
    const s = perimeter / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    setResult({ sides: [a, b, c], angles: [toDeg(angleA), toDeg(angleB), toDeg(angleC)], perimeter, area });
  };

  return (
    <ToolLayout
      slug="triangle-solver"
      howTo={["Choose SSS (three sides) or SAS (two sides and the included angle)", "Enter the known values", "Click Solve to get all sides, angles, perimeter and area"]}
      faqs={[
        { q: "What is SSS vs SAS?", a: "SSS means you know all three side lengths. SAS means you know two sides and the angle between them. Both uniquely determine a triangle." },
        { q: "How is the area calculated?", a: "For SSS the tool uses Heron's formula; for SAS it first finds the third side with the Law of Cosines, then applies Heron's formula." },
        { q: "What if my sides don't form a valid triangle?", a: "The tool checks the triangle inequality (sum of any two sides must exceed the third) and shows an error if it fails." },
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2">
          {(["SSS", "SAS"] as Mode[]).map(m => (
            <button key={m} onClick={() => { setMode(m); setInputs({}); setResult(null); setError(null); }} className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${mode === m ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{m}</button>
          ))}
        </div>
        {mode === "SSS" ? (
          <div className="grid grid-cols-3 gap-3">
            <input type="number" placeholder="Side a" value={inputs.a || ""} onChange={e => set("a", e.target.value)} className="input-field" />
            <input type="number" placeholder="Side b" value={inputs.b || ""} onChange={e => set("b", e.target.value)} className="input-field" />
            <input type="number" placeholder="Side c" value={inputs.c || ""} onChange={e => set("c", e.target.value)} className="input-field" />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            <input type="number" placeholder="Side a" value={inputs.sa || ""} onChange={e => set("sa", e.target.value)} className="input-field" />
            <input type="number" placeholder="Side b" value={inputs.sb || ""} onChange={e => set("sb", e.target.value)} className="input-field" />
            <input type="number" placeholder="Angle C (°)" value={inputs.angleC || ""} onChange={e => set("angleC", e.target.value)} className="input-field" />
          </div>
        )}
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Solve</button>
          <button onClick={() => { setInputs({}); setResult(null); setError(null); }} className="btn-secondary">Reset</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        {result && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              {result.sides.map((s, i) => (
                <div key={i} className="rounded-xl bg-secondary/50 p-3 border border-border"><div className="text-xs text-muted-foreground font-semibold">Side {String.fromCharCode(97 + i)}</div><div className="text-sm font-mono font-bold mt-1">{s.toFixed(4)}</div></div>
              ))}
              {result.angles.map((a, i) => (
                <div key={i} className="rounded-xl bg-secondary/50 p-3 border border-border"><div className="text-xs text-muted-foreground font-semibold">Angle {String.fromCharCode(65 + i)}</div><div className="text-sm font-mono font-bold mt-1">{a.toFixed(2)}°</div></div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-accent/10 p-4"><div className="text-xs text-muted-foreground font-semibold">Perimeter</div><div className="text-lg font-bold text-accent mt-1">{result.perimeter.toFixed(4)}</div></div>
              <div className="rounded-xl bg-accent/10 p-4"><div className="text-xs text-muted-foreground font-semibold">Area</div><div className="text-lg font-bold text-accent mt-1">{result.area.toFixed(4)}</div></div>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default TriangleSolver;
