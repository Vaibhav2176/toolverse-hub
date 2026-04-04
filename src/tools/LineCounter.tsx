import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const LineCounter = () => {
  const [text, setText] = useState("");

  const lines = text ? text.split("\n") : [];
  const total = lines.length;
  const nonEmpty = lines.filter(l => l.trim().length > 0).length;
  const empty = total - nonEmpty;

  return (
    <ToolLayout slug="line-counter" howTo={["Type or paste text", "See line counts instantly"]}>
      <div className="space-y-4">
        <textarea rows={6} placeholder="Paste your text here..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-3xl font-bold text-primary">{text ? total : 0}</div><div className="text-sm text-muted-foreground">Total Lines</div></div>
          <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-3xl font-bold text-primary">{nonEmpty}</div><div className="text-sm text-muted-foreground">Non-empty</div></div>
          <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-3xl font-bold text-primary">{empty}</div><div className="text-sm text-muted-foreground">Empty</div></div>
        </div>
        <button onClick={() => setText("")} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Clear</button>
      </div>
    </ToolLayout>
  );
};
export default LineCounter;
