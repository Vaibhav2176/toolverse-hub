import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const HtmlEntityEncoder = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const encode = (s: string) => s.replace(/[\u00A0-\u9999<>&'"]/g, c => `&#${c.charCodeAt(0)};`);
  const decode = (s: string) => {
    const el = document.createElement("textarea");
    el.innerHTML = s;
    return el.value;
  };

  const output = mode === "encode" ? encode(input) : decode(input);

  return (
    <ToolLayout slug="html-entity-encoder" howTo={["Paste text or HTML entities", "Toggle encode/decode mode", "Copy result"]}>
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button variant={mode === "encode" ? "default" : "outline"} onClick={() => setMode("encode")}>Encode</Button>
          <Button variant={mode === "decode" ? "default" : "outline"} onClick={() => setMode("decode")}>Decode</Button>
        </div>
        <div><Label>Input</Label><textarea rows={4} className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={input} onChange={e => setInput(e.target.value)} placeholder={mode === "encode" ? '<p>Hello "World"</p>' : "&#60;p&#62;Hello&#60;/p&#62;"} /></div>
        <div><Label>Output</Label><textarea rows={4} className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={output} readOnly /></div>
        <div className="flex gap-3">
          <Button onClick={() => navigator.clipboard.writeText(output)}>Copy</Button>
          <Button variant="outline" onClick={() => setInput("")}>Clear</Button>
        </div>
      </div>
    </ToolLayout>
  );
};
export default HtmlEntityEncoder;
