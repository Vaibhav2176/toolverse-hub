import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const BasicCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");

  const handleInput = (val: string) => {
    if (display === "0" && val !== ".") setDisplay(val);
    else setDisplay(display + val);
  };

  const handleOperator = (op: string) => {
    setExpression(display + " " + op + " ");
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const full = expression + display;
      const result = Function('"use strict"; return (' + full.replace(/×/g, "*").replace(/÷/g, "/") + ")")();
      setDisplay(String(parseFloat(result.toFixed(10))));
      setExpression("");
    } catch { setDisplay("Error"); }
  };

  const clear = () => { setDisplay("0"); setExpression(""); };

  const buttons = ["7","8","9","÷","4","5","6","×","1","2","3","-","0",".","=","+"];

  return (
    <ToolLayout slug="basic-calculator" howTo={["Click number buttons to enter values", "Click an operator (+, -, ×, ÷)", "Click = to see the result"]} faqs={[{ q: "Does this support order of operations?", a: "This is a simple sequential calculator. For advanced math, use the Scientific Calculator." }]}>
      <div className="max-w-xs mx-auto">
        <div className="text-right text-xs text-muted-foreground h-5 mb-1">{expression}</div>
        <div className="text-right text-3xl font-mono font-bold mb-4 p-3 bg-secondary rounded-xl">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={clear} className="col-span-2 btn-secondary py-3 text-sm">Clear</button>
          <button onClick={() => setDisplay(display.slice(0, -1) || "0")} className="col-span-2 btn-secondary py-3 text-sm">⌫</button>
          {buttons.map(b => (
            <button key={b} onClick={() => b === "=" ? calculate() : ["+","-","×","÷"].includes(b) ? handleOperator(b) : handleInput(b)}
              className={`py-3 rounded-xl text-sm font-semibold transition-all ${["+","-","×","÷","="].includes(b) ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
              {b}
            </button>
          ))}
        </div>
      </div>
    </ToolLayout>
  );
};

export default BasicCalculator;
