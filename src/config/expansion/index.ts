import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";
import { financeTools, financeSeo, financeRoutes } from "./finance";
import { datetimeTools, datetimeSeo, datetimeRoutes } from "./datetime";
import { mathTools, mathSeo, mathRoutes } from "./math";
import { productivityTools, productivitySeo, productivityRoutes } from "./productivity";
import { writingTools, writingSeo, writingRoutes } from "./writing";
import { devTools, devSeo, devRoutes } from "./dev";

/** All tools added by the expansion batches. Add a new batch file and register it here. */
export const expansionTools: ToolMeta[] = [
  ...financeTools,
  ...datetimeTools,
  ...mathTools,
  ...productivityTools,
  ...writingTools,
  ...devTools,
];

export const expansionSeo: Record<string, SeoContent> = {
  ...financeSeo,
  ...datetimeSeo,
  ...mathSeo,
  ...productivitySeo,
  ...writingSeo,
  ...devSeo,
};

export const expansionRoutes: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  ...financeRoutes,
  ...datetimeRoutes,
  ...mathRoutes,
  ...productivityRoutes,
  ...writingRoutes,
  ...devRoutes,
};
