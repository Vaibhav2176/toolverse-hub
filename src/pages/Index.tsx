import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles, TrendingUp, Clock, Zap, Shield, Globe, CheckCircle } from "lucide-react";
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
      <section className="hero-gradient py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container text-center max-w-3xl relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-1.5 text-sm text-primary-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Free & Open Tools Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-5 leading-tight tracking-tight">
            Online Tools for<br />Everyday Tasks
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-xl mx-auto leading-relaxed">
            Fast, private calculators, converters, text tools, and generators — all running in your browser.
          </p>
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for a tool... (e.g. calculator, converter)"
              className="w-full rounded-2xl bg-card py-4 pl-12 pr-4 text-sm shadow-xl outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {filtered.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-card shadow-xl p-2 z-10 animate-fade-in">
                {filtered.map(t => (
                  <button key={t.slug} onClick={() => { navigate(`/tools/${t.slug}`); setQuery(""); }} className="w-full text-left rounded-lg px-4 py-3 text-sm hover:bg-secondary/60 transition-all">
                    <span className="font-medium text-foreground">{t.title}</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">{t.description.slice(0, 60)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <AdPlaceholder label="Banner Ad Space" />

      {/* Value Props */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Instant Results", desc: "Every tool runs in your browser with zero loading time. No servers, no waiting." },
            { icon: Shield, title: "100% Private", desc: "Your data never leaves your device. No tracking, no cookies, no signup required." },
            { icon: Globe, title: "Works Everywhere", desc: "Fully responsive design that works on phones, tablets, and desktops." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-6">
              <div className="h-12 w-12 rounded-2xl hero-gradient flex items-center justify-center mx-auto mb-4">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container py-8">
        <h2 className="section-title mb-2">Browse by Category</h2>
        <p className="text-muted-foreground mb-8">Find the right tool for your task</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map(c => (
            <Link key={c.slug} to={`/${c.slug}`} className="tool-card text-center group p-6">
              <div className={`h-12 w-12 rounded-2xl ${c.bgClass} flex items-center justify-center mx-auto mb-3`}>
                <c.icon className={`h-6 w-6 ${c.colorClass}`} />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container py-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="section-title">Featured Tools</h2>
          </div>
          <Link to="/tools" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">View all <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getFeaturedTools().map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </section>

      {/* Popular */}
      <section className="container py-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <TrendingUp className="h-5 w-5 text-accent" />
            <h2 className="section-title">Popular Tools</h2>
          </div>
          <Link to="/tools" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">View all <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getPopularTools().map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </section>

      <AdPlaceholder label="Mid-Page Ad Space" />

      {/* New */}
      <section className="container py-10">
        <div className="flex items-center gap-2.5 mb-6">
          <Clock className="h-5 w-5 text-cat-gen" />
          <h2 className="section-title">Recently Added</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getNewTools().map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </section>

      {/* Info Section */}
      <section className="container py-16">
        <div className="bg-card rounded-3xl border border-border p-10 md:p-14">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4 tracking-tight">Why Use Online Tools?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Online tools save you time by providing instant calculations, conversions, and text operations right in your browser. No software to install, no accounts to create — just open and use.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                "No software installation needed",
                "Works on any device with a browser",
                "Your data stays private and local",
                "Always free, no hidden costs",
                "New tools added regularly",
                "Clean, distraction-free interface",
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All tools CTA */}
      <section className="container py-10 text-center">
        <Link to="/tools" className="btn-primary inline-flex items-center gap-2 px-10 py-4 text-base rounded-2xl">
          Browse All Tools <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </Layout>
  );
};

export default Index;
