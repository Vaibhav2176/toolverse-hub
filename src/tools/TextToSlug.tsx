import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const TextToSlug = () => {
  const [text, setText] = useState("");

  const slug = text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return (
    <ToolLayout slug="text-to-slug" howTo={["Enter any text", "Get a URL-friendly slug instantly"]} faqs={[{ q: "What is a slug?", a: "A slug is a URL-friendly version of a string, using only lowercase letters, numbers, and hyphens." }]}>
      <div className="max-w-lg mx-auto space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground">Input Text</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="My Blog Post Title!" className="w-full mt-1 rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
        </div>
        {text && (
          <div>
            <label className="text-sm font-medium text-foreground">Slug</label>
            <div className="flex gap-2 mt-1">
              <input type="text" readOnly value={slug} className="flex-1 rounded-xl border border-input bg-secondary px-4 py-3 text-sm font-mono" />
              <button onClick={() => navigator.clipboard.writeText(slug)} className="bg-accent text-accent-foreground px-4 py-3 rounded-xl text-sm font-medium hover:opacity-90 shrink-0">Copy</button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};
export default TextToSlug;
