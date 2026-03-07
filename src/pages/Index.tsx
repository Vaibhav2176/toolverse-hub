import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles, TrendingUp, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { tools, categories, getFeaturedTools, getPopularTools, getNewTools } from "@/config/tools";

const Index = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const filtered = query.length > 1 ? tools.filter(t => t.title.toLowerCase().includes(query.toLowerCase())).slice(0, 6) : [];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 px-4">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Free Online Tools for Everyone</h1>
          <p className="text-lg text-primary-foreground/80 mb-8">30+ browser-based calculators, converters, text tools, and generators. No signup. No ads. No tracking.</p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tools... (e.g. percentage, password)"
              className="w-full rounded-xl bg-card py-3.5 pl-12 pr-4 text-sm shadow-lg outline-none focus:ring-2 focus:ring-primary/50"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {filtered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-card shadow-lg p-1 z-10">
                {filtered.map(t => (
                  <button key={t.slug} onClick={() => { navigate(`/tools/${t.slug}`); setQuery(""); }} className="w-full text-left rounded-lg px-4 py-2.5 text-sm hover:bg-secondary transition-colors">
                    <span className="font-medium">{t.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <AdPlaceholder label="Banner Ad Below Hero" />

      {/* Categories */}
      <section className="container py-12">
        <h2 className="section-title mb-6">Tool Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map(c => (
            <Link key={c.slug} to={`/${c.slug}`} className="tool-card text-center group">
              <c.icon className={`h-8 w-8 mx-auto mb-2 ${c.colorClass}`} />
              <h3 className="font-semibold text-sm">{c.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="section-title">Featured Tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getFeaturedTools().map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </section>

      {/* Popular */}
      <section className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-accent" />
          <h2 className="section-title">Popular Tools</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getPopularTools().map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </section>

      {/* New */}
      <section className="container py-8">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="h-5 w-5 text-cat-gen" />
          <h2 className="section-title">Recently Added</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getNewTools().map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </section>

      {/* All tools CTA */}
      <section className="container py-8 text-center">
        <Link to="/tools" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Browse All {tools.length} Tools <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </Layout>
  );
};

export default Index;
