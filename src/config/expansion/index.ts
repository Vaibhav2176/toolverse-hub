import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

/**
 * Auto-discovering expansion registry.
 *
 * Drop a new file in `./batches/` that exports `<name>Tools`, `<name>Seo` and
 * `<name>Routes` and it is picked up automatically — no wiring needed here.
 * This keeps the registry scalable to hundreds of tools.
 */
type BatchModule = Record<string, unknown>;

const modules = import.meta.glob<BatchModule>("./batches/*.ts", { eager: true });

const tools: ToolMeta[] = [];
const seo: Record<string, SeoContent> = {};
const routes: Record<string, React.LazyExoticComponent<React.ComponentType>> = {};

for (const mod of Object.values(modules)) {
  for (const [name, value] of Object.entries(mod)) {
    if (name.endsWith("Tools") && Array.isArray(value)) {
      tools.push(...(value as ToolMeta[]));
    } else if (name.endsWith("Seo") && value && typeof value === "object") {
      Object.assign(seo, value as Record<string, SeoContent>);
    } else if (name.endsWith("Routes") && value && typeof value === "object") {
      Object.assign(routes, value as Record<string, React.LazyExoticComponent<React.ComponentType>>);
    }
  }
}

export const expansionTools = tools;
export const expansionSeo = seo;
export const expansionRoutes = routes;
