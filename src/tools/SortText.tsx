import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const SortText = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const sortAsc = () => setOutput(text.split("\n").filter(Boolean).sort((a, b) => a.localeCompare(b)).join("\n"));
  const sortDesc = () => setOutput(text.split("\n").filter(Boolean).sort((a, b) => b.localeCompare(a)).join("\n"));

  return (
    <ToolLayout slug="sort-text" howTo={["Enter text with one item per line", "Click Sort A-Z or Z-A"]}>
      <div className="space-y-4">
        <textarea rows={6} placeholder="One item per line..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="flex gap-3">
          <button onClick={sortAsc} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Sort A→Z</button>
          <button onClick={sortDesc} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Sort Z→A</button>
          <button onClick={() => { setText(""); setOutput(""); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {output && <textarea rows={6} readOnly value={output} className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-sm" />}
      </div>
    </ToolLayout>
  );
};
export default SortText;
