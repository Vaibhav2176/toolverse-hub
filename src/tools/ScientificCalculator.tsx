import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const ScientificCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState("");
  const [isDeg, setIsDeg] = useState(true);

  const append = (val: string) => {
    if (display === "0" && val !== ".") setDisplay(val);
    else setDisplay(display + val);
  };

  const clear = () => setDisplay("0");

  const evaluate = () => {
    try {
      let expr = display
        .replace(/sin\(/g, isDeg ? "Math.sin(Math.PI/180*" : "Math.sin(")
        .replace(/cos\(/g, isDeg ? "Math.cos(Math.PI/180*" : "Math.cos(")
        .replace(/tan\(/g, isDeg ? "Math.tan(Math.PI/180*" : "Math.tan(")
        .replace(/asin\(/g, isDeg ? "(180/Math.PI)*Math.asin(" : "Math.asin(")
        .replace(/acos\(/g, isDeg ? "(180/Math.PI)*Math.acos(" : "Math.acos(")
        .replace(/atan\(/g, isDeg ? "(180/Math.PI)*Math.atan(" : "Math.atan(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/√\(/g, "Math.sqrt(")
        .replace(/π/g, "Math.PI")
        .replace(/e(?![xa])/g, "Math.E")
        .replace(/\^/g, "**");
      const result = Function('"use strict"; return (' + expr + ")")();
      setDisplay(String(parseFloat(Number(result).toFixed(12))));
    } catch {
      setDisplay("Error");
    }
  };

  const sciButtons = [
    "sin(", "cos(", "tan(", "π",
    "asin(", "acos(", "atan(", "e",
    "log(", "ln(", "√(", "^",
    "(", ")", "!", "%",
  ];

  const numButtons = [
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
  ];

  const handleNum = (b: string) => {
    if (b === "=") evaluate();
    else if (b === "÷") append("/");
    else if (b === "×") append("*");
    else append(b);
  };

  const handleSci = (b: string) => {
    if (b === "!") {
      try {
        const n = parseInt(display);
        let f = 1; for (let i = 2; i <= n; i++) f *= i;
        setDisplay(String(f));
      } catch { setDisplay("Error"); }
    } else if (b === "%") {
      setDisplay(String(parseFloat(display) / 100));
    } else {
      append(b);
    }
  };

  return (
    <ToolLayout slug="scientific-calculator" howTo={["Enter numbers and operations using the buttons", "Use scientific functions like sin, cos, log", "Toggle between degrees and radians", "Click = to evaluate"]}
      faqs={[
        { q: "Does it support degrees and radians?", a: "Yes, toggle between DEG and RAD mode using the button." },
        { q: "What scientific functions are available?", a: "sin, cos, tan, asin, acos, atan, log, ln, square root, powers, factorial, and constants π and e." },
      ]}>
      <div className="max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => setIsDeg(!isDeg)} className="text-xs font-semibold px-3 py-1 rounded-lg bg-secondary text-secondary-foreground">{isDeg ? "DEG" : "RAD"}</button>
          <button onClick={clear} className="text-xs font-semibold px-3 py-1 rounded-lg bg-destructive/10 text-destructive">Clear</button>
        </div>
        <div className="text-right text-2xl font-mono font-bold p-4 bg-secondary rounded-xl mb-3 overflow-x-auto">{display}</div>
        <div className="grid grid-cols-4 gap-1.5 mb-2">
          {sciButtons.map(b => (
            <button key={b} onClick={() => handleSci(b)} className="py-2.5 rounded-lg text-xs font-semibold bg-muted text-muted-foreground hover:bg-muted/70 transition-all">{b}</button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {numButtons.map(b => (
            <button key={b} onClick={() => handleNum(b)} className={`py-3 rounded-lg text-sm font-semibold transition-all ${["+", "-", "×", "÷", "="].includes(b) ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>{b}</button>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};

export default ScientificCalculator;
