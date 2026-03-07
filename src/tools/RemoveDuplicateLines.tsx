import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const RemoveDuplicateLines = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const remove = () => {
    const lines = text.split("\n");
    const unique = [...new Set(lines)];
    setOutput(unique.join("\n"));
  };

  return (
    <ToolLayout slug="remove-duplicate-lines" howTo={["Paste text with duplicate lines", "Click Remove Duplicates"]}>
      <div className="space-y-4">
        <textarea rows={6} placeholder="Paste text with duplicates..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="flex gap-3">
          <button onClick={remove} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Remove Duplicates</button>
          <button onClick={() => { setText(""); setOutput(""); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {output && <textarea rows={6} readOnly value={output} className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm" />}
      </div>
    </ToolLayout>
  );
};
export default RemoveDuplicateLines;
