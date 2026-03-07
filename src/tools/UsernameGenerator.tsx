import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const adj = ["Swift","Brave","Cool","Dark","Epic","Fast","Gold","Iron","Jade","Keen","Lone","Nova","Onyx","Pale","Ruby","Star","True","Vast","Wild","Zen"];
const nouns = ["Wolf","Bear","Hawk","Lion","Fox","Sage","Rune","Bolt","Dash","Edge","Flux","Glow","Maze","Peak","Reef","Tide","Vibe","Wave","Zest","Core"];

const UsernameGenerator = () => {
  const [names, setNames] = useState<string[]>([]);
  const [style, setStyle] = useState<"simple" | "numbers" | "underscores">("simple");

  const generate = () => {
    const results: string[] = [];
    for (let i = 0; i < 10; i++) {
      const a = adj[Math.floor(Math.random() * adj.length)];
      const n = nouns[Math.floor(Math.random() * nouns.length)];
      const num = Math.floor(Math.random() * 999);
      if (style === "simple") results.push(a + n);
      else if (style === "numbers") results.push(a + n + num);
      else results.push(a.toLowerCase() + "_" + n.toLowerCase() + "_" + num);
    }
    setNames(results);
  };

  return (
    <ToolLayout slug="username-generator" howTo={["Select a style", "Click Generate", "Copy your favorite"]}>
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2">
          {(["simple", "numbers", "underscores"] as const).map(s => (
            <button key={s} onClick={() => setStyle(s)} className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${style === s ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{s}</button>
          ))}
        </div>
        <button onClick={generate} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Generate</button>
        {names.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {names.map((n, i) => (
              <button key={i} onClick={() => navigator.clipboard.writeText(n)} className="rounded-lg bg-secondary p-2.5 text-sm font-mono hover:bg-primary/10 transition-colors text-left">{n}</button>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default UsernameGenerator;
