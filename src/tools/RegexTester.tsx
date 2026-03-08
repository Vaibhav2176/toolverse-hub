import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const RegexTester = () => {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");

  const matches = useMemo(() => {
    if (!pattern) return [];
    try {
      const re = new RegExp(pattern, flags);
      const m: { match: string; index: number }[] = [];
      let r;
      if (flags.includes("g")) {
        while ((r = re.exec(text)) !== null) { m.push({ match: r[0], index: r.index }); if (!r[0]) break; }
      } else {
        r = re.exec(text);
        if (r) m.push({ match: r[0], index: r.index });
      }
      return m;
    } catch { return []; }
  }, [pattern, flags, text]);

  return (
    <ToolLayout slug="regex-tester" howTo={["Enter a regular expression pattern.", "Set flags (g, i, m, etc.).", "Type or paste test text to see live matches."]} faqs={[{ q: "What regex engine is used?", a: "JavaScript's built-in RegExp engine." }]}>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-[1fr_100px] gap-3">
          <div><Label>Pattern</Label><Input value={pattern} onChange={e => setPattern(e.target.value)} placeholder="e.g. \\b\\w+\\b" className="font-mono" /></div>
          <div><Label>Flags</Label><Input value={flags} onChange={e => setFlags(e.target.value)} placeholder="gi" className="font-mono" /></div>
        </div>
        <div><Label>Test String</Label><textarea className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={text} onChange={e => setText(e.target.value)} placeholder="Type text to test against..." /></div>
        <Button variant="outline" onClick={() => { setPattern(""); setFlags("g"); setText(""); }}>Reset</Button>
        {matches.length > 0 && (
          <div>
            <Label>{matches.length} match{matches.length > 1 ? "es" : ""} found</Label>
            <div className="mt-2 space-y-1 max-h-60 overflow-y-auto">
              {matches.map((m, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50 text-sm">
                  <span className="text-xs text-muted-foreground">#{i + 1} @{m.index}</span>
                  <code className="font-mono text-primary">{m.match || "(empty)"}</code>
                </div>
              ))}
            </div>
          </div>
        )}
        {pattern && text && matches.length === 0 && <p className="text-sm text-muted-foreground">No matches found.</p>}
      </div>
    </ToolLayout>
  );
};
export default RegexTester;
