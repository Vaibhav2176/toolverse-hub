import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const simpleHash = (str: string, algo: string) => {
  let hash = 0;
  const prime = algo === "djb2" ? 5381 : algo === "sdbm" ? 0 : 2166136261;
  for (let i = 0; i < str.length; i++) {
    if (algo === "djb2") hash = ((hash << 5) + hash) + str.charCodeAt(i);
    else if (algo === "sdbm") hash = str.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
    else hash = (hash ^ str.charCodeAt(i)) * 16777619;
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
};

const HashGenerator = () => {
  const [input, setInput] = useState("");

  return (
    <ToolLayout slug="hash-generator" howTo={["Enter text", "See hash values in multiple algorithms"]} faqs={[{ q: "Are these cryptographic hashes?", a: "These are simple hash functions for demonstration. For cryptographic use, use SHA-256 or similar." }]}>
      <div className="max-w-lg mx-auto space-y-4">
        <textarea rows={4} value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text to hash..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        {input && (
          <div className="space-y-2">
            {["djb2", "sdbm", "fnv1a"].map(algo => (
              <div key={algo} className="flex justify-between items-center bg-secondary rounded-xl px-4 py-3">
                <span className="text-sm font-medium text-muted-foreground uppercase">{algo}</span>
                <span className="font-mono text-sm font-bold text-foreground">{simpleHash(input, algo)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default HashGenerator;
