import { getToolMeta, getCategoryMeta, type ToolMeta } from "@/config/tools";
import { SITE_URL, SITE_NAME } from "@/components/Seo";

export { SITE_URL, SITE_NAME };

/**
 * Hand-written titles/descriptions for the highest-demand tools.
 * Everything else falls back to a natural, intent-based generator so
 * every tool page still gets a unique title + description.
 */
const overrides: Record<string, { title: string; description: string }> = {
  "basic-calculator": {
    title: "Basic Calculator – Add, Subtract, Multiply & Divide Online",
    description: "A simple online calculator for everyday arithmetic. Add, subtract, multiply and divide with a clean keypad that works on desktop and mobile.",
  },
  "scientific-calculator": {
    title: "Scientific Calculator – Trigonometry, Logs & Powers Online",
    description: "Free online scientific calculator with sin, cos, tan, logarithms, exponents, roots and degree/radian modes. Runs entirely in your browser.",
  },
  "percentage-calculator": {
    title: "Percentage Calculator – Calculate Percentages Online",
    description: "Work out percentage of a number, percentage increase or decrease, and 'A is what % of B' instantly. Includes the percentage formula and examples.",
  },
  "percentage-change-calculator": {
    title: "Percentage Change Calculator – Increase & Decrease Online",
    description: "Calculate percentage increase or decrease between two values, with the formula and worked examples for prices, marks and statistics.",
  },
  "bmi-calculator": {
    title: "BMI Calculator – Calculate Body Mass Index Online",
    description: "Calculate your BMI from height and weight in metric or imperial units, see your BMI category, and understand what the number does and doesn't mean.",
  },
  "age-calculator": {
    title: "Age Calculator – Calculate Your Exact Age Online",
    description: "Find your exact age in years, months and days from your date of birth. Useful for forms, eligibility checks and birthday countdowns.",
  },
  "loan-emi-calculator": {
    title: "Loan EMI Calculator – Monthly Payment & Interest",
    description: "Calculate monthly EMI from loan amount, interest rate and tenure using the reducing-balance formula, and see total interest paid over the loan.",
  },
  "compound-interest-calculator": {
    title: "Compound Interest Calculator – Growth Over Time",
    description: "Calculate compound interest with yearly, quarterly, monthly or daily compounding, and compare final maturity value against simple interest.",
  },
  "simple-interest-calculator": {
    title: "Simple Interest Calculator – Interest on Principal",
    description: "Calculate simple interest and total repayment from principal, rate and time using the SI = P × R × T / 100 formula, with clear examples.",
  },
  "currency-converter": {
    title: "Currency Converter – Convert Between World Currencies",
    description: "Convert amounts between major world currencies with a quick swap button and an all-currency overview. Runs offline with built-in reference rates.",
  },
  "word-counter": {
    title: "Word Counter – Count Words & Characters Online",
    description: "Count words, characters, sentences and paragraphs as you type. Ideal for essays, assignments, meta descriptions and social posts.",
  },
  "character-counter": {
    title: "Character Counter – Count Characters With & Without Spaces",
    description: "Count characters with and without spaces in real time, plus words and lines — useful for form limits, bios and SMS length checks.",
  },
  "json-formatter": {
    title: "JSON Formatter – Format, Validate & Minify JSON Online",
    description: "Beautify, validate and minify JSON in the browser. Spot syntax errors like trailing commas and unquoted keys before shipping your API payload.",
  },
  "password-generator": {
    title: "Password Generator – Create Strong Random Passwords",
    description: "Generate strong random passwords with adjustable length, symbols, numbers and case. Everything is generated locally and never leaves your device.",
  },
  "uuid-generator": {
    title: "UUID Generator – Generate Random UUID v4 Online",
    description: "Generate RFC 4122 version 4 UUIDs one at a time or in bulk, then copy them straight into your database seeds, tests or config files.",
  },
  "gst-calculator": {
    title: "GST Calculator – Add or Remove GST From a Price",
    description: "Add GST to a base price or extract GST from an inclusive price at any rate, with the CGST/SGST split shown for invoicing.",
  },
  "length-converter": {
    title: "Length Converter – Metres, Feet, Inches, Miles & More",
    description: "Convert length and distance between metres, kilometres, centimetres, inches, feet, yards and miles with instant two-way conversion.",
  },
  "temperature-converter": {
    title: "Temperature Converter – Celsius, Fahrenheit & Kelvin",
    description: "Convert temperatures between Celsius, Fahrenheit and Kelvin instantly, with the conversion formulas shown alongside the result.",
  },
  "gpa-calculator": {
    title: "GPA Calculator – Calculate Grade Point Average Online",
    description: "Calculate your GPA from course grades and credit hours, see the weighted total, and work out the grades you need next semester.",
  },
};

const clean = (s: string) => s.replace(/\s+/g, " ").trim();

/** "Calculate percentages, increases and ratios easily." -> "Calculate Percentages" */
const actionPhrase = (tool: ToolMeta) => {
  const first = tool.description.split(/[.,—]/)[0] || "";
  const words = clean(first).split(" ").slice(0, 4).join(" ");
  return words
    .split(" ")
    .map(w => (w.length > 3 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
};

export interface ToolSeo {
  title: string;
  description: string;
  path: string;
}

export const getToolSeo = (slug: string): ToolSeo | undefined => {
  const tool = getToolMeta(slug);
  if (!tool) return undefined;
  const path = `/tools/${slug}`;
  const o = overrides[slug];
  if (o) return { title: `${o.title} | ${SITE_NAME}`, description: o.description, path };

  const title = clean(`${tool.title} – ${actionPhrase(tool)} Online`).slice(0, 58);
  const description = clean(
    `${tool.description} Use it free in your browser — no signup, no downloads, works on mobile and desktop.`
  ).slice(0, 158);
  return { title: `${title} | ${SITE_NAME}`, description, path };
};

/* ---------- structured data helpers ---------- */

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const toolAppSchema = (tool: ToolMeta) => {
  const cat = getCategoryMeta(tool.category);
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    url: `${SITE_URL}/tools/${tool.slug}`,
    description: tool.description,
    applicationCategory: cat?.title ?? "UtilitiesApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
};

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const itemListSchema = (name: string, items: { title: string; slug: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  itemListElement: items.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `${SITE_URL}/tools/${t.slug}`,
  })),
});
