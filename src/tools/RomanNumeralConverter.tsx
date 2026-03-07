import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const romanMap: [number, string][] = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];

const toRoman = (n: number): string => {
  let s = "";
  for (const [v, r] of romanMap) { while (n >= v) { s += r; n -= v; } }
  return s;
};

const fromRoman = (s: string): number => {
  const map: Record<string, number> = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = map[s[i]], next = map[s[i + 1]];
    total += (next && cur < next) ? -cur : cur;
  }
  return total;
};

const RomanNumeralConverter = () => {
  const [val, setVal] = useState("");
  const [mode, setMode] = useState<"toRoman" | "fromRoman">("toRoman");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    if (mode === "toRoman") {
      const n = parseInt(val);
      if (isNaN(n) || n < 1 || n > 3999) { setResult("Enter 1–3999"); return; }
      setResult(`${n} = ${toRoman(n)}`);
    } else {
      const upper = val.toUpperCase();
      if (!/^[IVXLCDM]+$/.test(upper)) { setResult("Invalid Roman numeral"); return; }
      setResult(`${upper} = ${fromRoman(upper)}`);
    }
  };

  return (
    <ToolLayout slug="roman-numeral-converter" howTo={["Choose conversion direction", "Enter the value", "Click Convert"]}>
      <div className="space-y-4 max-w-md">
        <div className="flex gap-2">
          <button onClick={() => setMode("toRoman")} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "toRoman" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Number → Roman</button>
          <button onClick={() => setMode("fromRoman")} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "fromRoman" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>Roman → Number</button>
        </div>
        <input placeholder={mode === "toRoman" ? "e.g. 2024" : "e.g. MMXXIV"} value={val} onChange={e => setVal(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
        <div className="flex gap-3">
          <button onClick={convert} className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Convert</button>
          <button onClick={() => { setVal(""); setResult(null); }} className="rounded-lg bg-secondary px-6 py-2.5 text-sm font-medium text-secondary-foreground">Reset</button>
        </div>
        {result && <div className="rounded-lg bg-accent/10 p-4 text-lg font-semibold text-accent">{result}</div>}
      </div>
    </ToolLayout>
  );
};
export default RomanNumeralConverter;
