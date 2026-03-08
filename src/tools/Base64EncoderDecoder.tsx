import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const Base64EncoderDecoder = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const process = () => {
    try {
      setError("");
      if (mode === "encode") setOutput(btoa(input));
      else setOutput(atob(input));
    } catch {
      setError("Invalid input for " + mode + " operation.");
    }
  };

  return (
    <ToolLayout slug="base64-encoder-decoder" howTo={["Enter text to encode or Base64 to decode", "Select mode and click Convert"]} faqs={[{ q: "What is Base64?", a: "Base64 is an encoding scheme that represents binary data in ASCII text format." }]}>
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("encode")} className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${mode === "encode" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Encode</button>
          <button onClick={() => setMode("decode")} className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${mode === "decode" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Decode</button>
        </div>
        <textarea rows={4} value={input} onChange={e => setInput(e.target.value)} placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-mono outline-none focus:border-primary resize-y" />
        <button onClick={process} className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-all w-full">Convert</button>
        {error && <p className="text-destructive text-sm">{error}</p>}
        {output && (
          <div>
            <textarea rows={4} readOnly value={output} className="w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm font-mono" />
            <button onClick={() => navigator.clipboard.writeText(output)} className="mt-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">Copy</button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default Base64EncoderDecoder;
