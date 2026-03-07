import { useState } from "react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ToolCard from "@/components/ToolCard";
import { tools, categories, getCategoryMeta } from "@/config/tools";
import type { ToolCategory } from "@/config/tools";

const AllTools = () => {
  const [filter, setFilter] = useState<ToolCategory | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = tools.filter(t =>
    (filter === "all" || t.category === filter) &&
    (search.length < 2 || t.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Layout>
      <div className="container py-8 max-w-5xl">
        <Breadcrumb items={[{ label: "All Tools" }]} />
        <h1 className="text-3xl font-bold mb-2">All Tools</h1>
        <p className="text-muted-foreground mb-6">Browse all {tools.length} free online tools</p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input placeholder="Search tools..." value={search} onChange={e => setSearch(e.target.value)} className="flex-1 rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" />
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setFilter("all")} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${filter === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>All</button>
            {categories.map(c => (
              <button key={c.slug} onClick={() => setFilter(c.slug)} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${filter === c.slug ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>{c.title}</button>
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
