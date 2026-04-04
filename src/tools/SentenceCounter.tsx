import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const SentenceCounter = () => {
  const [text, setText] = useState("");

  const sentences = text.trim() ? text.trim().split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;
  const paragraphs = text.trim() ? text.trim().split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0;
  const words = text.trim() ? text.trim().split(/\s+/).filter(w => w.length > 0).length : 0;

  return (
    <ToolLayout slug="sentence-counter" howTo={["Type or paste text", "See sentence, paragraph, and word counts"]}>
      <div className="space-y-4">
        <textarea rows={6} placeholder="Paste your text here..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-3xl font-bold text-primary">{sentences}</div><div className="text-sm text-muted-foreground">Sentences</div></div>
          <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-3xl font-bold text-primary">{paragraphs}</div><div className="text-sm text-muted-foreground">Paragraphs</div></div>
          <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-3xl font-bold text-primary">{words}</div><div className="text-sm text-muted-foreground">Words</div></div>
        </div>
        <button onClick={() => setText("")} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Clear</button>
      </div>
    </ToolLayout>
  );
};
export default SentenceCounter;
