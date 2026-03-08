import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const MORSE: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....", I: "..", J: ".---",
  K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.", S: "...", T: "-",
  U: "..-", V: "...-", W: ".--", X: "-..-", Y: "-.--", Z: "--..",
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", " ": "/"
};
const REVERSE_MORSE = Object.fromEntries(Object.entries(MORSE).map(([k, v]) => [v, k]));

const TextToMorseCode = () => {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const convert = () => {
    if (mode === "encode") {
      setMorse(text.toUpperCase().split("").map(c => MORSE[c] || c).join(" "));
    } else {
      setText(morse.split(" / ").map(word => word.split(" ").map(c => REVERSE_MORSE[c] || c).join("")).join(" "));
    }
  };

  return (
    <ToolLayout slug="text-to-morse-code" howTo={["Type text to convert to Morse code, or paste Morse to decode.", "Use / to separate words in Morse code."]} faqs={[{ q: "What characters are supported?", a: "Letters A-Z, digits 0-9, and common punctuation." }]}>
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button variant={mode === "encode" ? "default" : "outline"} onClick={() => setMode("encode")}>Text → Morse</Button>
          <Button variant={mode === "decode" ? "default" : "outline"} onClick={() => setMode("decode")}>Morse → Text</Button>
        </div>
        {mode === "encode" ? (
          <div><Label>Text</Label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={text} onChange={e => setText(e.target.value)} placeholder="Hello World" /></div>
        ) : (
          <div><Label>Morse Code</Label><textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono" value={morse} onChange={e => setMorse(e.target.value)} placeholder=".... . .-.. .-.. --- / .-- --- .-. .-.. -.." /></div>
        )}
        <div className="flex gap-3"><Button onClick={convert}>Convert</Button><Button variant="outline" onClick={() => { setText(""); setMorse(""); }}>Reset</Button></div>
        {mode === "encode" && morse && <div><Label>Morse Code</Label><pre className="p-3 rounded-xl bg-secondary/50 text-sm font-mono whitespace-pre-wrap">{morse}</pre></div>}
        {mode === "decode" && text && <div><Label>Text</Label><pre className="p-3 rounded-xl bg-secondary/50 text-sm whitespace-pre-wrap">{text}</pre></div>}
      </div>
    </ToolLayout>
  );
};
export default TextToMorseCode;
