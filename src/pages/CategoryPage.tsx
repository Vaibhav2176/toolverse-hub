import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import Seo from "@/components/Seo";
import ToolCard from "@/components/ToolCard";
import { getCategoryMeta, getToolsByCategory, categories } from "@/config/tools";
import type { ToolCategory } from "@/config/tools";
import { categorySeo } from "@/config/categorySeo";
import { breadcrumbSchema, itemListSchema, faqSchema } from "@/config/toolSeo";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const CategoryPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "") as ToolCategory;
  const cat = getCategoryMeta(slug);
  const tools = getToolsByCategory(slug);
  const seo = categorySeo[slug];

  if (!cat) return <Layout><div className="container py-12 text-center text-muted-foreground">Category not found.</div></Layout>;

  const others = categories.filter(c => c.slug !== slug);

  return (
    <Layout>
      {seo && (
        <Seo
          title={`${seo.title} | ToolVerse`}
          description={seo.description}
          path={`/${slug}`}
          schema={[
            breadcrumbSchema([{ name: cat.title, path: `/${slug}` }]),
            itemListSchema(cat.title, tools),
            faqSchema(seo.faqs),
          ]}
        />
      )}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="container py-8 max-w-5xl">
        <Breadcrumb items={[{ label: cat.title }]} />
        <div className="flex items-center gap-4 mb-2">
          <div className={`h-14 w-14 rounded-2xl ${cat.bgClass} flex items-center justify-center`}>
            <cat.icon className={`h-7 w-7 ${cat.colorClass}`} aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight">{cat.title}</h1>
            <p className="text-muted-foreground">{cat.description}</p>
          </div>
        </div>

        {seo && (
          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">{seo.intro}</p>
            <ul className="mt-4 space-y-2">
              {seo.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="text-primary font-bold shrink-0">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <h2 className="sr-only">All {cat.title.toLowerCase()}</h2>
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {tools.map(t => (
            <motion.div key={t.slug} variants={scaleIn}>
              <ToolCard tool={t} />
            </motion.div>
          ))}
        </motion.div>

        {seo && (
          <section className="mt-14">
            <h2 className="font-display text-xl font-semibold mb-5">{cat.title} — Frequently Asked Questions</h2>
            <div className="space-y-3">
              {seo.faqs.map((f, i) => (
                <details key={i} open={i === 0} className="group border border-border rounded-xl bg-card overflow-hidden">
                  <summary className="cursor-pointer px-5 py-4 font-medium text-sm flex items-center justify-between hover:bg-secondary/30 transition-colors">
                    {f.q}
                    <span className="text-muted-foreground group-open:rotate-180 transition-transform duration-300" aria-hidden="true">▾</span>
                  </summary>
                  <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold mb-4">Browse other categories</h2>
          <div className="flex flex-wrap gap-2">
            {others.map(c => (
              <Link key={c.slug} to={`/${c.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary/40 hover:text-primary transition-colors">
                {c.title}
              </Link>
            ))}
            <Link to="/tools" className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary/40 hover:text-primary transition-colors">
              All Tools
            </Link>
          </div>
        </section>
      </motion.div>
    </Layout>
  );
};
export default CategoryPage;
