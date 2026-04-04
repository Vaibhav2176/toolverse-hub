import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const TextToHtml = () => {
  const [input, setInput] = useState("");

  const escaped = input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>");

  const html = input ? `<p>${escaped}</p>` : "";

  return (
    <ToolLayout slug="text-to-html" howTo={["Paste plain text", "See converted HTML output"]}>
      <div className="space-y-4">
        <div><Label>Plain Text</Label><textarea rows={5} className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder="Type your plain text here..." /></div>
        <div><Label>HTML Output</Label><textarea rows={5} className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={html} readOnly /></div>
        <div className="flex gap-3">
          <Button onClick={() => navigator.clipboard.writeText(html)}>Copy HTML</Button>
          <Button variant="outline" onClick={() => setInput("")}>Clear</Button>
        </div>
      </div>
    </ToolLayout>
  );
};
export default TextToHtml;
