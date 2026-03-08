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
      <div className="container py-8 max-w-5xl animate-fade-in">
        <Breadcrumb items={[{ label: cat.title }]} />
        <div className="flex items-center gap-4 mb-2">
          <div className={`h-12 w-12 rounded-2xl ${cat.bgClass} flex items-center justify-center`}>
            <cat.icon className={`h-6 w-6 ${cat.colorClass}`} />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold tracking-tight">{cat.title}</h1>
            <p className="text-muted-foreground">{cat.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {tools.map(t => <ToolCard key={t.slug} tool={t} />)}
        </div>
      </div>
    </Layout>
  );
};
export default CategoryPage;
