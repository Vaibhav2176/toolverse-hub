import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const words = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

const genSentence = () => {
  const len = 8 + Math.floor(Math.random() * 12);
  const s = Array.from({ length: len }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
  return s.charAt(0).toUpperCase() + s.slice(1) + ".";
};

const genParagraph = () => Array.from({ length: 4 + Math.floor(Math.random() * 4) }, genSentence).join(" ");

const LoremIpsumGenerator = () => {
  const [count, setCount] = useState("3");
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");

  const generate = () => {
    const n = parseInt(count) || 1;
    if (type === "paragraphs") return Array.from({ length: n }, genParagraph).join("\n\n");
    if (type === "sentences") return Array.from({ length: n }, genSentence).join(" ");
    return Array.from({ length: n }, () => words[Math.floor(Math.random() * words.length)]).join(" ");
  };

  const [output, setOutput] = useState(generate());

  return (
    <ToolLayout slug="lorem-ipsum-generator" howTo={["Choose paragraphs, sentences, or words", "Set count and click Generate"]} faqs={[{ q: "What is Lorem Ipsum?", a: "It's placeholder text used in design and publishing since the 1500s." }]}>
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex gap-3">
          <input type="number" min="1" max="50" value={count} onChange={e => setCount(e.target.value)} className="w-24 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          <select value={type} onChange={e => setType(e.target.value as any)} className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
          <button onClick={() => setOutput(generate())} className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-all">Generate</button>
        </div>
        <textarea rows={8} readOnly value={output} className="w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm" />
        <button onClick={() => navigator.clipboard.writeText(output)} className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">Copy</button>
      </div>
    </ToolLayout>
  );
};
export default LoremIpsumGenerator;
