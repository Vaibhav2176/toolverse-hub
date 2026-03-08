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
    <div className="container py-8 max-w-5xl animate-fade-in">
      <Breadcrumb items={[
        { label: cat?.title || "", to: `/${tool.category}` },
        { label: tool.title },
      ]} />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          {cat && (
            <div className={`h-10 w-10 rounded-xl ${cat.bgClass} flex items-center justify-center`}>
              <cat.icon className={`h-5 w-5 ${cat.colorClass}`} />
            </div>
          )}
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight">{tool.title}</h1>
          </div>
        </div>
        <p className="text-muted-foreground mt-2 leading-relaxed">{tool.description}</p>
      </div>

      <AdPlaceholder label="In-Content Ad" />

      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-10 shadow-sm">{children}</div>

      {howTo && howTo.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold mb-4">How to Use</h2>
          <ol className="space-y-2">
            {howTo.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </section>
      )}

      {example && (
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold mb-4">Example</h2>
          <div className="bg-secondary/50 rounded-xl p-5 text-sm text-secondary-foreground border border-border">{example}</div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-border rounded-xl bg-card">
                <summary className="cursor-pointer px-5 py-4 font-medium text-sm flex items-center justify-between">
                  {f.q}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <AdPlaceholder label="Below Content Ad" />

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="section-title mb-6">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map(t => <ToolCard key={t.slug} tool={t} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default ToolLayout;
