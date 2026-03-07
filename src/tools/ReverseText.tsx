import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const ReverseText = () => {
  const [text, setText] = useState("");
  const reversed = text.split("").reverse().join("");

  return (
    <ToolLayout slug="reverse-text" howTo={["Type or paste text", "See reversed text instantly"]}>
      <div className="space-y-4">
        <textarea rows={4} placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        {text && (
          <div className="space-y-2">
            <textarea rows={4} readOnly value={reversed} className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm" />
            <button onClick={() => navigator.clipboard.writeText(reversed)} className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90">Copy</button>
          </div>
        )}
        <button onClick={() => setText("")} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Clear</button>
      </div>
    </ToolLayout>
  );
};
export default ReverseText;
