import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ToolMeta, getCategoryMeta } from "@/config/tools";

const ToolCard = ({ tool }: { tool: ToolMeta }) => {
  const cat = getCategoryMeta(tool.category);
  return (
    <Link to={`/tools/${tool.slug}`} className="tool-card group block">
      <div className="flex items-start justify-between mb-2">
        <span className={`category-badge ${cat?.bgClass} ${cat?.colorClass}`}>{cat?.title}</span>
        {tool.isNew && <span className="category-badge bg-accent/10 text-accent">New</span>}
      </div>
      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{tool.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{tool.description}</p>
      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Use Tool <ArrowRight className="h-3 w-3" />
      </span>
    </Link>
  );
};

export default ToolCard;
