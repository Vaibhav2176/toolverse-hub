import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const prefixes = ["Nova","Apex","Vibe","Flux","Zeno","Aura","Echo","Lyra","Neon","Omni","Pixel","Zenith","Vertex","Prism","Helix"];
const suffixes = ["Labs","Hub","Studio","Works","Forge","Tech","Co","Group","HQ","Digital","Media","Solutions","Creative","Cloud","Space"];

const BusinessNameGenerator = () => {
  const [keyword, setKeyword] = useState("");
  const [names, setNames] = useState<string[]>([]);

  const generate = () => {
    const results: string[] = [];
    for (let i = 0; i < 12; i++) {
      const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
      if (keyword && i < 6) results.push(`${keyword}${suf}`);
      else results.push(`${pre} ${suf}`);
    }
    setNames(results);
  };

  return (
    <ToolLayout slug="business-name-generator" howTo={["Optionally enter a keyword", "Click Generate", "Browse name ideas"]}>
      <div className="space-y-4 max-w-lg">
        <input placeholder="Keyword (optional)" value={keyword} onChange={e => setKeyword(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <button onClick={generate} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Generate Names</button>
        {names.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {names.map((n, i) => (
              <button key={i} onClick={() => navigator.clipboard.writeText(n)} className="rounded-lg bg-secondary p-3 text-sm font-medium hover:bg-primary/10 transition-colors">{n}</button>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default BusinessNameGenerator;
