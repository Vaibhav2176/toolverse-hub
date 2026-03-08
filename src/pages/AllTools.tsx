import { useState } from "react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ToolCard from "@/components/ToolCard";
import { tools, categories } from "@/config/tools";
import type { ToolCategory } from "@/config/tools";
import { Search } from "lucide-react";

const AllTools = () => {
  const [filter, setFilter] = useState<ToolCategory | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = tools.filter(t =>
    (filter === "all" || t.category === filter) &&
    (search.length < 2 || t.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Layout>
      <div className="container py-8 max-w-5xl animate-fade-in">
        <Breadcrumb items={[{ label: "All Tools" }]} />
        <h1 className="text-3xl font-display font-bold mb-2 tracking-tight">All Tools</h1>
        <p className="text-muted-foreground mb-8">Browse our growing collection of free online tools</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input placeholder="Search tools..." value={search} onChange={e => setSearch(e.target.value)} className="w-full input-field pl-10" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setFilter("all")} className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${filter === "all" ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>All</button>
            {categories.map(c => (
              <button key={c.slug} onClick={() => setFilter(c.slug)} className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${filter === c.slug ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>{c.title}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
        {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No tools found.</p>}
      </div>
    </Layout>
  );
};
export default AllTools;
