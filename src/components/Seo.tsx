import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://toolverse-hub.vercel.app";
export const SITE_NAME = "ToolVerse";

interface SeoProps {
  title: string;
  description: string;
  /** Path starting with "/" — used for canonical + og:url */
  path: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  /** One or more JSON-LD objects */
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const Seo = ({ title, description, path, type = "website", image, noindex, schema }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const blocks = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(block)}</script>
      ))}
    </Helmet>
  );
};

export default Seo;
