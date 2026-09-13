import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

type Field = "a" | "b" | "c" | "d";

const ProportionCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [missing, setMissing] = useState<Field>("d");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const vals: Record<Field, number> = { a: parseFloat(a), b: parseFloat(b), c: parseFloat(c), d: parseFloat(d) };
    const known = (Object.keys(vals) as Field[]).filter(k => k !== missing);
    if (known.some(k => isNaN(vals[k]))) return;
    let answer: number;
    if (missing === "a") answer = (vals.b * vals.c) / vals.d;
    else if (missing === "b") answer = (vals.a * vals.d) / vals.c;
    else if (missing === "c") answer = (vals.a * vals.d) / vals.b;
    else answer = (vals.b * vals.c) / vals.a;
    if (!isFinite(answer)) return;
    const show = { ...vals, [missing]: answer };
    setResult(`${show.a} / ${show.b} = ${show.c} / ${show.d}  →  ${missing.toUpperCase()} = ${answer.toFixed(6).replace(/\.?0+$/, "")}`);
  };

  const fields: { key: Field; label: string; state: string; setter: (v: string) => void }[] = [
    { key: "a", label: "A", state: a, setter: setA },
    { key: "b", label: "B", state: b, setter: setB },
    { key: "c", label: "C", state: c, setter: setC },
    { key: "d", label: "D", state: d, setter: setD },
  ];

  return (
    <ToolLayout
      slug="proportion-calculator"
      howTo={["Enter the three known values of A/B = C/D", "Select which term is unknown", "Click Calculate to solve for the missing term"]}
      faqs={[
        { q: "What is a proportion?", a: "A proportion states that two ratios are equal, written as A/B = C/D. Solving a proportion means finding an unknown term when the other three are known." },
        { q: "How is the missing term calculated?", a: "Using cross-multiplication: A×D = B×C. Rearranging this equation for whichever term is unknown gives the formula used by the calculator." }
      ]}
    >
      <div className="space-y-4 max-w-md">
        <div className="grid grid-cols-4 gap-2 items-center text-center font-mono">
          <input type="number" placeholder="A" value={a} onChange={e => setA(e.target.value)} className="input-field" disabled={missing === "a"} />
          <span>/</span>
          <input type="number" placeholder="B" value={b} onChange={e => setB(e.target.value)} className="input-field" disabled={missing === "b"} />
          <span className="hidden" />
        </div>
        <div className="text-center font-bold">=</div>
        <div className="grid grid-cols-4 gap-2 items-center text-center font-mono">
          <input type="number" placeholder="C" value={c} onChange={e => setC(e.target.value)} className="input-field" disabled={missing === "c"} />
          <span>/</span>
          <input type="number" placeholder="D" value={d} onChange={e => setD(e.target.value)} className="input-field" disabled={missing === "d"} />
          <span className="hidden" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground block mb-1">Solve for</label>
          <select value={missing} onChange={e => setMissing(e.target.value as Field)} className="input-field">
            {fields.map(f => <option key={f.key} value={f.key}>{f.label}</option>)}
          </select>
        </div>
        <div className="flex gap-3">
          <button onClick={calculate} className="btn-primary">Calculate</button>
          <button onClick={() => { setA(""); setB(""); setC(""); setD(""); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
        {result && <div className="rounded-xl bg-accent/10 p-4 text-lg font-semibold text-accent font-mono">{result}</div>}
      </div>
    </ToolLayout>
  );
};

export default ProportionCalculator;
