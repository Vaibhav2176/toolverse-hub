import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const RandomQuestionPicker = () => {
  const [text, setText] = useState("");
  const [picked, setPicked] = useState<string | null>(null);

  const pick = () => {
    const questions = text.split("\n").filter(q => q.trim());
    if (questions.length === 0) return;
    setPicked(questions[Math.floor(Math.random() * questions.length)]);
  };

  return (
    <ToolLayout slug="random-question-picker" howTo={["Enter questions, one per line", "Click Pick Random", "Get a random question"]}>
      <div className="space-y-4">
        <textarea rows={6} placeholder="Enter questions, one per line..." value={text} onChange={e => setText(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        <div className="flex gap-3">
          <button onClick={pick} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">🎲 Pick Random</button>
          <button onClick={() => { setText(""); setPicked(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {picked && (
          <div className="rounded-xl bg-accent/10 border border-accent/20 p-6 text-center">
            <p className="text-xs text-muted-foreground mb-2">Selected Question:</p>
            <p className="text-xl font-semibold text-accent">{picked}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default RandomQuestionPicker;
