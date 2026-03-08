import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");

  const analysis = useMemo(() => {
    const p = password;
    if (!p) return null;
    let score = 0;
    const checks = {
      length8: p.length >= 8,
      length12: p.length >= 12,
      upper: /[A-Z]/.test(p),
      lower: /[a-z]/.test(p),
      digit: /\d/.test(p),
      special: /[^A-Za-z0-9]/.test(p),
      noRepeat: !/(.)\1{2,}/.test(p),
    };
    Object.values(checks).forEach(v => { if (v) score++; });
    const strength = score <= 2 ? "Weak" : score <= 4 ? "Fair" : score <= 5 ? "Strong" : "Very Strong";
    const color = score <= 2 ? "text-destructive" : score <= 4 ? "text-yellow-500" : "text-green-500";
    return { score, strength, color, checks, percent: Math.round((score / 7) * 100) };
  }, [password]);

  return (
    <ToolLayout slug="password-strength-checker" howTo={["Type a password to check its strength.", "See detailed analysis of security criteria."]} faqs={[{ q: "Is my password stored?", a: "No, everything runs locally in your browser." }]}>
      <div className="space-y-4">
        <div><Label>Password</Label><Input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter a password to check" /></div>
        {analysis && (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${analysis.percent}%` }} /></div>
              <span className={`font-bold text-sm ${analysis.color}`}>{analysis.strength}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                ["8+ characters", analysis.checks.length8],
                ["12+ characters", analysis.checks.length12],
                ["Uppercase letter", analysis.checks.upper],
                ["Lowercase letter", analysis.checks.lower],
                ["Number", analysis.checks.digit],
                ["Special character", analysis.checks.special],
                ["No repeated chars", analysis.checks.noRepeat],
              ].map(([label, pass]) => (
                <div key={label as string} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
                  <span>{pass ? "✅" : "❌"}</span><span className="text-muted-foreground">{label as string}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default PasswordStrengthChecker;
