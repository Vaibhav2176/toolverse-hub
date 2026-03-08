import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const JsonFormatter = () => {
  const [input, setInput] = useState('{"name":"John","age":30,"city":"New York","hobbies":["reading","coding"]}');
  const [indent, setIndent] = useState("2");
  const [error, setError] = useState("");

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, parseInt(indent)));
      setError("");
    } catch (e: any) {
      setError(e.message);
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed));
      setError("");
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <ToolLayout slug="json-formatter" howTo={["Paste JSON text", "Click Format or Minify", "Copy the result"]} faqs={[{ q: "What if my JSON is invalid?", a: "An error message will show what's wrong with your JSON." }]}>
      <div className="max-w-2xl mx-auto space-y-4">
        <textarea rows={12} value={input} onChange={e => { setInput(e.target.value); setError(""); }} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-mono outline-none focus:border-primary resize-y" />
        {error && <p className="text-destructive text-sm">{error}</p>}
        <div className="flex gap-3 items-center">
          <button onClick={format} className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-all">Format</button>
          <button onClick={minify} className="bg-secondary text-secondary-foreground px-6 py-3 rounded-xl text-sm font-semibold">Minify</button>
          <select value={indent} onChange={e => setIndent(e.target.value)} className="rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none">
            <option value="2">2 spaces</option>
            <option value="4">4 spaces</option>
            <option value="1">1 tab</option>
          </select>
          <button onClick={() => navigator.clipboard.writeText(input)} className="ml-auto bg-accent text-accent-foreground px-4 py-3 rounded-xl text-sm font-medium hover:opacity-90">Copy</button>
        </div>
      </div>
    </ToolLayout>
  );
};
export default JsonFormatter;
