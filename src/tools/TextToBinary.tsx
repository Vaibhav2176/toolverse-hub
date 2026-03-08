import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const TextToBinary = () => {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const convert = () => {
    if (mode === "encode") {
      setBinary(text.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" "));
    } else {
      try {
        setText(binary.trim().split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join(""));
      } catch { /* ignore */ }
    }
  };

  return (
    <ToolLayout slug="text-to-binary" howTo={["Type text to convert to binary, or paste binary to decode.", "Toggle between Encode and Decode modes."]} faqs={[{ q: "What encoding is used?", a: "Standard 8-bit ASCII/UTF-8 character codes." }]}>
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button variant={mode === "encode" ? "default" : "outline"} onClick={() => setMode("encode")}>Text → Binary</Button>
          <Button variant={mode === "decode" ? "default" : "outline"} onClick={() => setMode("decode")}>Binary → Text</Button>
        </div>
        {mode === "encode" ? (
          <div><Label>Text</Label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={text} onChange={e => setText(e.target.value)} placeholder="Hello World" /></div>
        ) : (
          <div><Label>Binary</Label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={binary} onChange={e => setBinary(e.target.value)} placeholder="01001000 01101001" /></div>
        )}
        <div className="flex gap-3"><Button onClick={convert}>Convert</Button><Button variant="outline" onClick={() => { setText(""); setBinary(""); }}>Reset</Button></div>
        {mode === "encode" && binary && <div><Label>Binary</Label><pre className="p-3 rounded-xl bg-secondary/50 text-sm font-mono whitespace-pre-wrap break-all">{binary}</pre></div>}
        {mode === "decode" && text && <div><Label>Text</Label><pre className="p-3 rounded-xl bg-secondary/50 text-sm whitespace-pre-wrap">{text}</pre></div>}
      </div>
    </ToolLayout>
  );
};
export default TextToBinary;
