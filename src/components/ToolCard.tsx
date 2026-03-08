import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ToolMeta, getCategoryMeta } from "@/config/tools";

const ToolCard = ({ tool }: { tool: ToolMeta }) => {
  const cat = getCategoryMeta(tool.category);
  return (
    <Link to={`/tools/${tool.slug}`} className="tool-card group block gradient-border">
      <div className="flex items-center gap-2 mb-3">
        {cat && (
          <div className={`h-8 w-8 rounded-lg ${cat.bgClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
            <cat.icon className={`h-4 w-4 ${cat.colorClass}`} />
          </div>
        )}
        <span className={`category-badge ${cat?.bgClass} ${cat?.colorClass}`}>{cat?.title}</span>
        {tool.isNew && (
          <span className="category-badge bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold ml-auto">
            ✨ New
          </span>
        )}
      </div>
      <h3 className="font-display font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors text-[15px]">{tool.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">{tool.description}</p>
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 mt-3">
        Open Tool <ArrowRight className="h-3 w-3" />
      </span>
    </Link>
  );
};

export default ToolCard;
