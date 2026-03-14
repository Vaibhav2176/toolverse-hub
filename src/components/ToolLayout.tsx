import { ReactNode } from "react";
import { motion } from "framer-motion";
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
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="container py-8 max-w-5xl">
      <Breadcrumb items={[
        { label: cat?.title || "", to: `/${tool.category}` },
        { label: tool.title },
      ]} />

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-4xl shrink-0" role="img">{tool.emoji}</span>
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight">{tool.title}</h1>
            <p className="text-muted-foreground mt-0.5 leading-relaxed">{tool.description}</p>
          </div>
        </div>
      </div>

      <AdPlaceholder label="In-Content Ad" />

      <div className="glass-card p-6 md:p-8 mb-10">{children}</div>

      {howTo && howTo.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold mb-5">How to <span className="gradient-text">Use</span></h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {howTo.map((s, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground bg-card rounded-xl border border-border p-4 hover:border-primary/20 transition-colors">
                <span className="h-7 w-7 rounded-full hero-gradient text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="pt-0.5">{s}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {example && (
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold mb-4">Example</h2>
          <div className="bg-card rounded-xl p-5 text-sm text-secondary-foreground border border-border leading-relaxed">{example}</div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className="mb-10">
          <h2 className="font-display text-xl font-semibold mb-5">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-border rounded-xl bg-card overflow-hidden hover:border-primary/20 transition-colors">
                <summary className="cursor-pointer px-5 py-4 font-medium text-sm flex items-center justify-between hover:bg-secondary/30 transition-colors">
                  {f.q}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform duration-300">▾</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <AdPlaceholder label="Below Content Ad" />

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="section-title mb-6">Related <span className="gradient-text">Tools</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map(t => <ToolCard key={t.slug} tool={t} />)}
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default ToolLayout;
