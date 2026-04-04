import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NumberToWords = () => {
  const [val, setVal] = useState("");

  const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  const convert = (n: number): string => {
    if (n === 0) return "zero";
    if (n < 0) return "negative " + convert(-n);
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? "-" + ones[n % 10] : "");
    if (n < 1000) return ones[Math.floor(n / 100)] + " hundred" + (n % 100 ? " and " + convert(n % 100) : "");
    if (n < 1000000) return convert(Math.floor(n / 1000)) + " thousand" + (n % 1000 ? " " + convert(n % 1000) : "");
    if (n < 1000000000) return convert(Math.floor(n / 1000000)) + " million" + (n % 1000000 ? " " + convert(n % 1000000) : "");
    return convert(Math.floor(n / 1000000000)) + " billion" + (n % 1000000000 ? " " + convert(n % 1000000000) : "");
  };

  const num = parseInt(val);
  const result = !isNaN(num) && Math.abs(num) <= 999999999999 ? convert(num) : "";

  return (
    <ToolLayout slug="number-to-words" howTo={["Enter a number", "See the written form instantly"]}>
      <div className="space-y-4 max-w-md">
        <div><Label>Number</Label><Input type="number" placeholder="12345" value={val} onChange={e => setVal(e.target.value)} /></div>
        {result && (
          <div className="rounded-lg bg-accent/10 p-4">
            <p className="text-lg font-semibold text-accent capitalize">{result}</p>
          </div>
        )}
        <Button variant="outline" onClick={() => setVal("")}>Clear</Button>
      </div>
    </ToolLayout>
  );
};
export default NumberToWords;
