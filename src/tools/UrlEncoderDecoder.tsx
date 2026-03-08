import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const UrlEncoderDecoder = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const output = (() => {
    try {
      return mode === "encode" ? encodeURIComponent(input) : decodeURIComponent(input);
    } catch { return "Invalid input"; }
  })();

  return (
    <ToolLayout slug="url-encoder-decoder" howTo={["Enter text or URL-encoded string", "Toggle between encode and decode"]} faqs={[{ q: "When should I URL encode?", a: "When passing special characters in URLs as query parameters." }]}>
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("encode")} className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${mode === "encode" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Encode</button>
          <button onClick={() => setMode("decode")} className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${mode === "decode" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Decode</button>
        </div>
        <textarea rows={4} value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-mono outline-none focus:border-primary resize-y" />
        {input && (
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Result</label>
            <textarea rows={4} readOnly value={output} className="w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm font-mono" />
            <button onClick={() => navigator.clipboard.writeText(output)} className="mt-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">Copy</button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default UrlEncoderDecoder;
