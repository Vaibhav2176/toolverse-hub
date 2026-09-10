import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import ToolCard from "@/components/ToolCard";
import { categories, getPopularTools } from "@/config/tools";

const NotFound = () => {
  const location = useLocation();
  const popular = getPopularTools().slice(0, 6);

  useEffect(() => {
    console.error("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Seo
        title="Page Not Found (404) | ToolVerse"
        description="That page doesn't exist. Browse ToolVerse's free online calculators, converters, text tools, generators and developer tools instead."
        path="/404"
        noindex
      />
      <div className="container py-14 max-w-4xl">
        <p className="text-sm font-medium text-primary mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-3">This page doesn't exist</h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          The link may be outdated or mistyped. Everything on ToolVerse is still one click away — start with all tools,
          pick a category, or jump straight into one of the most-used tools below.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <Link to="/" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">Go to homepage</Link>
          <Link to="/tools" className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:opacity-90 transition-opacity">Browse all tools</Link>
          <Link to="/blog" className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors">Read the blog</Link>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold mb-4">Tool categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <Link key={c.slug} to={`/${c.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-primary/40 hover:text-primary transition-colors">
                {c.title}
              </Link>
            ))}
          </div>
        </section>

        {popular.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-xl font-semibold mb-4">Popular tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {popular.map(t => <ToolCard key={t.slug} tool={t} />)}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default NotFound;
