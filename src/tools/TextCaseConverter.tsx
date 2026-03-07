import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const TextCaseConverter = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const apply = (fn: (s: string) => string) => setOutput(fn(text));

  return (
    <ToolLayout slug="text-case-converter" howTo={["Enter text", "Click a case button", "Copy the result"]}>
      <div className="space-y-4">
        <textarea rows={4} placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="flex flex-wrap gap-2">
          {[
            ["UPPERCASE", (s: string) => s.toUpperCase()],
            ["lowercase", (s: string) => s.toLowerCase()],
            ["Title Case", (s: string) => s.replace(/\w\S*/g, t => t[0].toUpperCase() + t.slice(1).toLowerCase())],
            ["Sentence case", (s: string) => s.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase())],
            ["tOGGLE", (s: string) => s.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("")],
          ].map(([label, fn]) => (
            <button key={String(label)} onClick={() => apply(fn as (s: string) => string)} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">{String(label)}</button>
          ))}
        </div>
        {output && (
          <div className="space-y-2">
            <textarea rows={4} readOnly value={output} className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm" />
            <button onClick={() => navigator.clipboard.writeText(output)} className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90">Copy</button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default TextCaseConverter;
