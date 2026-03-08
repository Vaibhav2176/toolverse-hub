import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const CgpaToPercentage = () => {
  const [cgpa, setCgpa] = useState("");
  const [scale, setScale] = useState("10");

  const cgpaNum = parseFloat(cgpa) || 0;
  const scaleNum = parseFloat(scale) || 10;
  const percentage = (cgpaNum / scaleNum) * 100;
  const approx = cgpaNum * 9.5; // common Indian university formula

  return (
    <ToolLayout slug="cgpa-to-percentage" howTo={["Enter your CGPA", "Select grading scale", "See percentage equivalent"]} faqs={[{ q: "What formula is used?", a: "Direct conversion (CGPA/Scale × 100) and the common CGPA × 9.5 formula." }]}>
      <div className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground">CGPA</label>
            <input type="number" step="0.01" value={cgpa} onChange={e => setCgpa(e.target.value)} placeholder="8.5" className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Scale</label>
            <select value={scale} onChange={e => setScale(e.target.value)} className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
              <option value="10">10-point</option>
              <option value="4">4-point</option>
              <option value="5">5-point</option>
            </select>
          </div>
        </div>
        {cgpaNum > 0 && (
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary">{percentage.toFixed(1)}%</div>
              <div className="text-xs text-muted-foreground mt-1">Direct Conversion</div>
            </div>
            {scaleNum === 10 && (
              <div className="bg-accent/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-accent">{approx.toFixed(1)}%</div>
                <div className="text-xs text-muted-foreground mt-1">CGPA × 9.5</div>
              </div>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default CgpaToPercentage;
