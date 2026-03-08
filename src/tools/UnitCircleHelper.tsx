import ToolLayout from "@/components/ToolLayout";

const angles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];

const data: Record<number, { rad: string; sin: string; cos: string; tan: string }> = {
  0: { rad: "0", sin: "0", cos: "1", tan: "0" },
  30: { rad: "π/6", sin: "1/2", cos: "√3/2", tan: "1/√3" },
  45: { rad: "π/4", sin: "√2/2", cos: "√2/2", tan: "1" },
  60: { rad: "π/3", sin: "√3/2", cos: "1/2", tan: "√3" },
  90: { rad: "π/2", sin: "1", cos: "0", tan: "∞" },
  120: { rad: "2π/3", sin: "√3/2", cos: "-1/2", tan: "-√3" },
  135: { rad: "3π/4", sin: "√2/2", cos: "-√2/2", tan: "-1" },
  150: { rad: "5π/6", sin: "1/2", cos: "-√3/2", tan: "-1/√3" },
  180: { rad: "π", sin: "0", cos: "-1", tan: "0" },
  210: { rad: "7π/6", sin: "-1/2", cos: "-√3/2", tan: "1/√3" },
  225: { rad: "5π/4", sin: "-√2/2", cos: "-√2/2", tan: "1" },
  240: { rad: "4π/3", sin: "-√3/2", cos: "-1/2", tan: "√3" },
  270: { rad: "3π/2", sin: "-1", cos: "0", tan: "∞" },
  300: { rad: "5π/3", sin: "-√3/2", cos: "1/2", tan: "-√3" },
  315: { rad: "7π/4", sin: "-√2/2", cos: "√2/2", tan: "-1" },
  330: { rad: "11π/6", sin: "-1/2", cos: "√3/2", tan: "-1/√3" },
};

const UnitCircleHelper = () => (
  <ToolLayout slug="unit-circle-helper" howTo={["Browse the table to find common angle values", "Reference sin, cos, and tan for any standard angle"]}
    faqs={[
      { q: "What is the unit circle?", a: "The unit circle is a circle with radius 1 centered at the origin, used to define trigonometric functions." },
      { q: "Why is tan(90°) undefined?", a: "Because cos(90°) = 0, and tan = sin/cos, so division by zero is undefined." },
    ]}>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-3 font-semibold text-muted-foreground">Degrees</th>
            <th className="text-left py-3 px-3 font-semibold text-muted-foreground">Radians</th>
            <th className="text-left py-3 px-3 font-semibold text-muted-foreground">sin</th>
            <th className="text-left py-3 px-3 font-semibold text-muted-foreground">cos</th>
            <th className="text-left py-3 px-3 font-semibold text-muted-foreground">tan</th>
          </tr>
        </thead>
        <tbody>
          {angles.map(a => (
            <tr key={a} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
              <td className="py-2.5 px-3 font-mono font-semibold">{a}°</td>
              <td className="py-2.5 px-3 font-mono">{data[a].rad}</td>
              <td className="py-2.5 px-3 font-mono">{data[a].sin}</td>
              <td className="py-2.5 px-3 font-mono">{data[a].cos}</td>
              <td className="py-2.5 px-3 font-mono">{data[a].tan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </ToolLayout>
);

export default UnitCircleHelper;
