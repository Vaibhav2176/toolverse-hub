import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const WordCounter = () => {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const paragraphs = text.split(/\n\n+/).filter(s => s.trim()).length;

  return (
    <ToolLayout slug="word-counter" howTo={["Paste or type text", "See real-time statistics"]} faqs={[{ q: "How are words counted?", a: "Words are separated by whitespace (spaces, tabs, newlines)." }]}>
      <div className="space-y-4">
        <textarea rows={8} placeholder="Paste or type your text here..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[["Words", words], ["Characters", chars], ["No Spaces", charsNoSpace], ["Sentences", sentences], ["Paragraphs", paragraphs]].map(([label, val]) => (
            <div key={String(label)} className="rounded-lg bg-secondary p-3 text-center">
              <div className="text-2xl font-bold text-primary">{val}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
        <button onClick={() => setText("")} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Clear</button>
      </div>
    </ToolLayout>
  );
};
export default WordCounter;
