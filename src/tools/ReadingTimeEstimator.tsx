import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const ReadingTimeEstimator = () => {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length;
  const readingMin = Math.ceil(words / 200);
  const speakingMin = Math.ceil(words / 150);

  return (
    <ToolLayout slug="reading-time-estimator" howTo={["Paste your article or text", "See estimated reading and speaking time"]} faqs={[{ q: "What reading speed is used?", a: "200 words/min for reading, 150 words/min for speaking (average adult rates)." }]}>
      <div className="max-w-lg mx-auto space-y-4">
        <textarea rows={8} value={text} onChange={e => setText(e.target.value)} placeholder="Paste your text here..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-secondary rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{words}</div>
            <div className="text-xs text-muted-foreground">Words</div>
          </div>
          <div className="bg-secondary rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{chars}</div>
            <div className="text-xs text-muted-foreground">Characters</div>
          </div>
          <div className="bg-primary/10 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-primary">{readingMin} min</div>
            <div className="text-xs text-muted-foreground">Reading</div>
          </div>
          <div className="bg-accent/10 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-accent">{speakingMin} min</div>
            <div className="text-xs text-muted-foreground">Speaking</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground text-center">{sentences} sentences</div>
      </div>
    </ToolLayout>
  );
};
export default ReadingTimeEstimator;
