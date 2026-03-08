import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const RemoveLineBreaks = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [sep, setSep] = useState("space");

  const process = () => {
    const separator = sep === "space" ? " " : sep === "comma" ? ", " : "";
    setResult(input.split(/\r?\n/).filter(l => l.trim()).join(separator));
  };

  return (
    <ToolLayout slug="remove-line-breaks" howTo={["Paste your text with line breaks", "Choose replacement separator", "Click Remove Line Breaks"]} faqs={[{ q: "Does it remove empty lines?", a: "Yes, empty lines are automatically removed." }]}>
      <div className="space-y-4 max-w-lg">
        <textarea placeholder="Paste text with line breaks..." value={input} onChange={e => setInput(e.target.value)} rows={5} className="w-full input-field resize-none" />
        <div className="flex gap-3 items-center">
          <span className="text-sm text-muted-foreground">Replace with:</span>
          <select value={sep} onChange={e => setSep(e.target.value)} className="input-field">
            <option value="space">Space</option>
            <option value="comma">Comma</option>
            <option value="none">Nothing</option>
          </select>
        </div>
        <div className="flex gap-3">
          <button onClick={process} className="btn-primary">Remove Line Breaks</button>
          <button onClick={() => { setInput(""); setResult(""); }} className="btn-secondary">Reset</button>
          {result && <button onClick={() => navigator.clipboard.writeText(result)} className="btn-secondary">Copy</button>}
        </div>
        {result && <textarea readOnly value={result} rows={4} className="w-full input-field resize-none font-mono text-sm" />}
      </div>
    </ToolLayout>
  );
};

export default RemoveLineBreaks;
