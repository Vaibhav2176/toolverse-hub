import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const TextDiffChecker = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff, setDiff] = useState<{ line: number; t1: string; t2: string; status: "same" | "changed" | "added" | "removed" }[] | null>(null);

  const compare = () => {
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");
    const maxLen = Math.max(lines1.length, lines2.length);
    const result = [];
    for (let i = 0; i < maxLen; i++) {
      const l1 = lines1[i] ?? "";
      const l2 = lines2[i] ?? "";
      let status: "same" | "changed" | "added" | "removed" = "same";
      if (i >= lines1.length) status = "added";
      else if (i >= lines2.length) status = "removed";
      else if (l1 !== l2) status = "changed";
      result.push({ line: i + 1, t1: l1, t2: l2, status });
    }
    setDiff(result);
  };

  const colors = { same: "", changed: "bg-cat-gen/10", added: "bg-accent/10", removed: "bg-destructive/10" };

  return (
    <ToolLayout slug="text-diff-checker" howTo={["Paste the original text on the left", "Paste the modified text on the right", "Click Compare to see differences"]} faqs={[{ q: "How are differences shown?", a: "Changed lines are highlighted in orange, added lines in green, and removed lines in red." }]}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold mb-1 block">Original Text</label>
            <textarea placeholder="Paste original text..." value={text1} onChange={e => setText1(e.target.value)} rows={8} className="w-full input-field resize-none font-mono text-sm" />
          </div>
          <div>
            <label className="text-sm font-semibold mb-1 block">Modified Text</label>
            <textarea placeholder="Paste modified text..." value={text2} onChange={e => setText2(e.target.value)} rows={8} className="w-full input-field resize-none font-mono text-sm" />
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={compare} className="btn-primary">Compare</button>
          <button onClick={() => { setText1(""); setText2(""); setDiff(null); }} className="btn-secondary">Reset</button>
        </div>
        {diff && (
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-[40px_1fr_1fr] text-xs font-semibold bg-secondary/50 px-2 py-2 border-b border-border">
              <span>#</span><span>Original</span><span>Modified</span>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {diff.map(d => (
                <div key={d.line} className={`grid grid-cols-[40px_1fr_1fr] text-xs font-mono px-2 py-1.5 border-b border-border/50 ${colors[d.status]}`}>
                  <span className="text-muted-foreground">{d.line}</span>
                  <span className="pr-2 break-all">{d.t1}</span>
                  <span className="pr-2 break-all">{d.t2}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default TextDiffChecker;
