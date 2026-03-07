import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

const PasswordGenerator = () => {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generate = useCallback(() => {
    let chars = "";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    if (!chars) return;
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    setPassword(Array.from(arr, v => chars[v % chars.length]).join(""));
  }, [length, upper, lower, numbers, symbols]);

  return (
    <ToolLayout slug="password-generator" howTo={["Set password length and options", "Click Generate", "Copy your password"]} faqs={[{ q: "Are passwords secure?", a: "Yes, generated using crypto.getRandomValues() in your browser." }]}>
      <div className="space-y-4 max-w-md">
        <div>
          <label className="text-sm font-medium">Length: {length}</label>
          <input type="range" min={4} max={64} value={length} onChange={e => setLength(Number(e.target.value))} className="w-full" />
        </div>
        <div className="flex flex-wrap gap-4">
          {[["Uppercase", upper, setUpper], ["Lowercase", lower, setLower], ["Numbers", numbers, setNumbers], ["Symbols", symbols, setSymbols]].map(([label, val, setter]) => (
            <label key={String(label)} className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={val as boolean} onChange={e => (setter as (v: boolean) => void)(e.target.checked)} className="rounded" />
              {String(label)}
            </label>
          ))}
        </div>
        <button onClick={generate} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Generate</button>
        {password && (
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded-lg bg-secondary p-3 text-sm font-mono break-all">{password}</code>
            <button onClick={() => navigator.clipboard.writeText(password)} className="rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 shrink-0">Copy</button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default PasswordGenerator;
