import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const RemoveExtraSpaces = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const clean = () => setOutput(text.replace(/[^\S\n]+/g, " ").replace(/\n{3,}/g, "\n\n").trim());

  return (
    <ToolLayout slug="remove-extra-spaces" howTo={["Paste text with extra spaces", "Click Clean", "Copy result"]}>
      <div className="space-y-4">
        <textarea rows={5} placeholder="Paste messy text..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="flex gap-3">
          <button onClick={clean} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Clean</button>
          <button onClick={() => { setText(""); setOutput(""); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {output && <textarea rows={5} readOnly value={output} className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm" />}
      </div>
    </ToolLayout>
  );
};
export default RemoveExtraSpaces;
