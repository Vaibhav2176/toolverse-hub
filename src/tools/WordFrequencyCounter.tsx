import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const WordFrequencyCounter = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState<{ word: string; count: number }[]>([]);

  const analyze = () => {
    const words = text.toLowerCase().match(/\b[a-z']+\b/g) || [];
    const freq: Record<string, number> = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    setResults(Object.entries(freq).map(([word, count]) => ({ word, count })).sort((a, b) => b.count - a.count));
  };

  return (
    <ToolLayout slug="word-frequency-counter" howTo={["Paste or type your text.", "Click Analyze to see word frequencies sorted by count."]} faqs={[{ q: "Is it case-sensitive?", a: "No, all words are converted to lowercase." }]}>
      <div className="space-y-4">
        <div><Label>Text</Label><textarea className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={text} onChange={e => setText(e.target.value)} placeholder="Paste your text here..." /></div>
        <div className="flex gap-3"><Button onClick={analyze}>Analyze</Button><Button variant="outline" onClick={() => { setText(""); setResults([]); }}>Reset</Button></div>
        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto space-y-1">
            {results.slice(0, 50).map((r, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 text-sm">
                <span className="font-mono">{r.word}</span>
                <span className="font-bold text-primary">{r.count}</span>
              </div>
            ))}
            {results.length > 50 && <p className="text-xs text-muted-foreground text-center">Showing top 50 of {results.length} unique words</p>}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default WordFrequencyCounter;
