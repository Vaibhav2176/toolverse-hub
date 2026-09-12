import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

export const devTools: ToolMeta[] = [];
export const devSeo: Record<string, SeoContent> = {};
export const devRoutes: Record<string, React.LazyExoticComponent<React.ComponentType>> = {};
