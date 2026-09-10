import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem { label: string; to?: string; }

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => (
  <nav aria-label="Breadcrumb" className="mb-4">
    <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
      <li>
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
      </li>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          {item.to
            ? <Link to={item.to} className="hover:text-foreground transition-colors">{item.label}</Link>
            : <span className="text-foreground font-medium" aria-current="page">{item.label}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;
