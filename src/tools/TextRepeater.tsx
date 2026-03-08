import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const TextRepeater = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState("5");
  const [sep, setSep] = useState("newline");
  const [result, setResult] = useState("");

  const generate = () => {
    const n = parseInt(count) || 1;
    const separator = sep === "newline" ? "\n" : sep === "space" ? " " : sep === "comma" ? ", " : "";
    setResult(Array(Math.min(n, 10000)).fill(text).join(separator));
  };

  return (
    <ToolLayout slug="text-repeater" howTo={["Enter the text to repeat", "Set the number of repetitions", "Choose a separator", "Click Repeat"]} faqs={[{ q: "Is there a limit?", a: "You can repeat up to 10,000 times." }]}>
      <div className="space-y-4 max-w-lg">
        <textarea placeholder="Enter text to repeat" value={text} onChange={e => setText(e.target.value)} rows={2} className="w-full input-field resize-none" />
        <div className="flex gap-3">
          <input type="number" placeholder="Count" value={count} onChange={e => setCount(e.target.value)} className="input-field w-24" />
          <select value={sep} onChange={e => setSep(e.target.value)} className="input-field">
            <option value="newline">New Line</option>
            <option value="space">Space</option>
            <option value="comma">Comma</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="flex gap-3">
          <button onClick={generate} className="btn-primary">Repeat</button>
          <button onClick={() => { setText(""); setResult(""); }} className="btn-secondary">Reset</button>
          {result && <button onClick={() => navigator.clipboard.writeText(result)} className="btn-secondary">Copy</button>}
        </div>
        {result && <textarea readOnly value={result} rows={6} className="w-full input-field resize-none font-mono text-sm" />}
      </div>
    </ToolLayout>
  );
};

export default TextRepeater;
