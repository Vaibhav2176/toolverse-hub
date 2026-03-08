import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const basicMarkdown = (md: string) => {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 list-decimal">$2</li>')
    .replace(/\n/g, '<br/>');
};

const MarkdownPreviewer = () => {
  const [md, setMd] = useState("# Hello World\n\nThis is **bold** and *italic* text.\n\n## Features\n- Item one\n- Item two\n\n`inline code` here.");

  return (
    <ToolLayout slug="markdown-previewer" howTo={["Type or paste Markdown text", "See live HTML preview on the right"]} faqs={[{ q: "What Markdown features are supported?", a: "Headings, bold, italic, inline code, and lists." }]}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Markdown</label>
          <textarea rows={12} value={md} onChange={e => setMd(e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-mono outline-none focus:border-primary resize-y" />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-1 block">Preview</label>
          <div className="rounded-xl border border-input bg-secondary px-4 py-3 text-sm min-h-[300px] prose prose-sm" dangerouslySetInnerHTML={{ __html: basicMarkdown(md) }} />
        </div>
      </div>
    </ToolLayout>
  );
};
export default MarkdownPreviewer;
