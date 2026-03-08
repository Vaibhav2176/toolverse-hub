import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const caesarCipher = (text: string, shift: number, decrypt = false) => {
  const s = decrypt ? 26 - (shift % 26) : shift % 26;
  return text.replace(/[a-zA-Z]/g, c => {
    const base = c >= "a" ? 97 : 65;
    return String.fromCharCode(((c.charCodeAt(0) - base + s) % 26) + base);
  });
};

const TextEncryptor = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState("3");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");

  const result = caesarCipher(text, parseInt(shift) || 0, mode === "decrypt");

  return (
    <ToolLayout slug="text-encryptor" howTo={["Enter text", "Set shift value (1-25)", "Toggle encrypt or decrypt"]} faqs={[{ q: "What cipher is used?", a: "Caesar cipher — a simple letter-shift substitution cipher." }]}>
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("encrypt")} className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${mode === "encrypt" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Encrypt</button>
          <button onClick={() => setMode("decrypt")} className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${mode === "decrypt" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Decrypt</button>
        </div>
        <div>
          <label className="text-sm font-medium text-foreground">Shift (1-25)</label>
          <input type="number" min="1" max="25" value={shift} onChange={e => setShift(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        <textarea rows={4} value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" />
        {text && (
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Result</label>
            <textarea rows={4} readOnly value={result} className="w-full rounded-xl border border-input bg-secondary px-4 py-3 text-sm font-mono" />
            <button onClick={() => navigator.clipboard.writeText(result)} className="mt-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">Copy</button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default TextEncryptor;
