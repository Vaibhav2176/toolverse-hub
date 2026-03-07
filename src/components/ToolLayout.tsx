import { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import AdPlaceholder from "./AdPlaceholder";
import ToolCard from "./ToolCard";
import { getRelatedTools, getToolMeta, getCategoryMeta } from "@/config/tools";

interface FAQ { q: string; a: string; }

interface ToolLayoutProps {
  slug: string;
  children: ReactNode;
  howTo?: string[];
  example?: string;
  faqs?: FAQ[];
}

const ToolLayout = ({ slug, children, howTo, example, faqs }: ToolLayoutProps) => {
  const tool = getToolMeta(slug);
  const cat = tool ? getCategoryMeta(tool.category) : null;
  const related = getRelatedTools(slug);

  if (!tool) return <div className="container py-12">Tool not found.</div>;

  return (
    <div className="container py-8 max-w-5xl">
      <Breadcrumb items={[
        { label: cat?.title || "", to: `/${tool.category}` },
        { label: tool.title },
      ]} />

      <h1 className="text-3xl font-bold mb-2">{tool.title}</h1>
      <p className="text-muted-foreground mb-6">{tool.description}</p>

      <AdPlaceholder label="In-Content Ad" />

      <div className="bg-card border border-border rounded-xl p-6 mb-8">{children}</div>

      {howTo && howTo.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">How to Use</h2>
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm">
            {howTo.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
        </section>
      )}

      {example && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Example</h2>
          <div className="bg-secondary rounded-lg p-4 text-sm text-secondary-foreground">{example}</div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-border rounded-lg">
                <summary className="cursor-pointer px-4 py-3 font-medium text-sm">{f.q}</summary>
                <p className="px-4 pb-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <AdPlaceholder label="Below Content Ad" />

      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="section-title mb-4">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map(t => <ToolCard key={t.slug} tool={t} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default ToolLayout;
