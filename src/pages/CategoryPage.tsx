import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import ToolCard from "@/components/ToolCard";
import { getCategoryMeta, getToolsByCategory } from "@/config/tools";
import type { ToolCategory } from "@/config/tools";

const CategoryPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "") as ToolCategory;
  const cat = getCategoryMeta(slug);
  const tools = getToolsByCategory(slug);

  if (!cat) return <Layout><div className="container py-12 text-center text-muted-foreground">Category not found.</div></Layout>;

  return (
    <Layout>
      <div className="container py-8 max-w-5xl">
        <Breadcrumb items={[{ label: cat.title }]} />
        <div className="flex items-center gap-3 mb-2">
          <cat.icon className={`h-8 w-8 ${cat.colorClass}`} />
          <h1 className="text-3xl font-bold">{cat.title}</h1>
        </div>
        <p className="text-muted-foreground mb-6">{cat.description} — {tools.length} tools available</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </div>
    </Layout>
  );
};
export default CategoryPage;
