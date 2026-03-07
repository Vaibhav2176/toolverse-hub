import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const CharacterCounter = () => {
  const [text, setText] = useState("");
  return (
    <ToolLayout slug="character-counter" howTo={["Type or paste text", "See character counts instantly"]}>
      <div className="space-y-4">
        <textarea rows={6} placeholder="Type your text..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-3xl font-bold text-primary">{text.length}</div><div className="text-sm text-muted-foreground">With spaces</div></div>
          <div className="rounded-lg bg-secondary p-4 text-center"><div className="text-3xl font-bold text-primary">{text.replace(/\s/g, "").length}</div><div className="text-sm text-muted-foreground">Without spaces</div></div>
        </div>
        <button onClick={() => setText("")} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Clear</button>
      </div>
    </ToolLayout>
  );
};
export default CharacterCounter;
