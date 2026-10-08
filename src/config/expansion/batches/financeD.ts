import { lazy } from "react";
import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

export const financeDTools: ToolMeta[] = [
  {
    slug: "vat-calculator",
    title: "VAT Calculator",
    description: "Add or extract VAT from a price using preset rates for the UK, Germany, France, Ireland and Spain.",
    category: "finance",
    emoji: "🧾",
    keywords: ["vat calculator", "add vat", "extract vat", "reverse vat calculator", "uk vat calculator"],
    priority: "high",
    popular: true,
  },
  {
    slug: "gst-split-calculator",
    title: "GST Split Calculator",
    description: "Split GST into CGST, SGST or IGST for intra-state and inter-state supplies.",
    category: "finance",
    emoji: "🧮",
    keywords: ["gst split calculator", "cgst sgst calculator", "igst calculator", "gst calculator india"],
    priority: "medium",
  },
  {
    slug: "invoice-calculator",
    title: "Invoice Calculator",
    description: "Build an invoice with multiple line items, a discount and tax, and get the grand total automatically.",
    category: "finance",
    emoji: "📄",
    keywords: ["invoice calculator", "invoice total calculator", "line item invoice", "invoice with tax and discount"],
    priority: "medium",
  },
  {
    slug: "discount-tax-calculator",
    title: "Discount & Tax Calculator",
    description: "Calculate the final price after applying a discount percentage followed by sales tax.",
    category: "finance",
    emoji: "🏷️",
    keywords: ["discount and tax calculator", "sale price with tax", "discount then tax calculator", "final price calculator"],
    priority: "medium",
  },
  {
    slug: "investment-return-calculator",
    title: "Investment Return Calculator",
    description: "Calculate total return, profit and annualised return on an investment, including extra contributions.",
    category: "finance",
    emoji: "📈",
    keywords: ["investment return calculator", "roi calculator", "annualized return calculator", "total return on investment"],
    priority: "medium",
  },
];

export const financeDSeo: Record<string, SeoContent> = {
  "vat-calculator": {
    whatIs: "The VAT Calculator adds Value Added Tax to a net price or extracts it from a gross price, so you can quickly see the net amount, the VAT amount, and the gross total side by side. It includes preset rates for common jurisdictions — UK standard (20%) and reduced (5%), Germany (19%), France (20%), Ireland (23%) and Spain (21%) — or you can enter any custom rate. Choose 'Add VAT' when you have a net price and need to find out what the customer pays including tax, or 'Extract VAT' when you have a VAT-inclusive price and need to work out how much of it is tax. Results are shown in your chosen currency, making this useful for invoicing, pricing products, and checking receipts across different countries.",
    extraSeo: "Covers searches like 'vat calculator uk', 'reverse vat calculator', 'add vat to price' and 'how to calculate vat from gross amount'.",
    example: "Add 20% VAT to a net price of £150:\n\nVAT = £150 × 20% = £30\nGross price = £150 + £30 = £180\n\nExtract VAT from a gross price of £180 at 20%:\nNet = £180 ÷ 1.20 = £150\nVAT = £180 − £150 = £30",
    formula: "Add VAT: Gross = Net × (1 + rate/100)\nExtract VAT: Net = Gross ÷ (1 + rate/100), VAT = Gross − Net",
    applications: [
      "Pricing products and services with VAT-inclusive and VAT-exclusive prices",
      "Checking how much VAT is included in a receipt or invoice",
      "Preparing invoices for customers in different VAT jurisdictions",
      "Verifying VAT figures on supplier invoices for bookkeeping",
      "Comparing net versus gross pricing across European countries"
    ],
    faqs: [
      { q: "What is the difference between adding and extracting VAT?", a: "Adding VAT starts from a net (tax-exclusive) price and calculates the tax to arrive at a gross total. Extracting VAT starts from a gross (tax-inclusive) price and works backward to find the net amount and the VAT portion within it." },
      { q: "Why isn't extracted VAT simply gross × rate?", a: "Because the gross price already includes VAT, you must first divide by (1 + rate/100) to find the net amount, then subtract that from the gross to get the correct VAT amount. Multiplying gross by the rate directly would overstate the VAT." },
      { q: "Can I use this for GST or sales tax instead of VAT?", a: "Yes, the maths is identical for any flat-rate consumption tax; simply enter the applicable rate even if it's called GST or sales tax in your country." },
      { q: "Which preset rate should I use?", a: "Pick the preset matching your country and product type — for example, the UK has a 20% standard rate and a 5% reduced rate for certain goods and services, while other countries list their own standard VAT rates." }
    ]
  },
  "gst-split-calculator": {
    whatIs: "The GST Split Calculator breaks down Goods and Services Tax into its component parts based on whether a supply is intra-state or inter-state, as used under India's GST system. For intra-state supplies, GST is split equally between CGST (Central GST) and SGST (State GST), while inter-state supplies attract IGST (Integrated GST) as a single combined tax. Enter the taxable amount and the applicable GST rate, choose the supply type, and the calculator shows the exact CGST, SGST and IGST amounts along with the total tax. This is useful for businesses preparing GST-compliant invoices and anyone needing to verify the tax breakdown on a bill.",
    extraSeo: "Matches searches like 'cgst sgst calculator', 'gst split calculator india', 'igst calculator' and 'how is gst divided between cgst and sgst'.",
    example: "Calculate GST on an intra-state sale of ₹10,000 at 18% GST:\n\nTotal GST = ₹10,000 × 18% = ₹1,800\nCGST = ₹900, SGST = ₹900\n\nFor the same sale as inter-state:\nIGST = ₹1,800 (no CGST/SGST split)",
    formula: "Total GST = Taxable Amount × Rate / 100\nIntra-state: CGST = GST / 2, SGST = GST / 2\nInter-state: IGST = GST (full amount)",
    applications: [
      "Preparing GST-compliant invoices for intra-state and inter-state sales",
      "Verifying the CGST and SGST breakdown on a purchase bill",
      "Checking IGST charged on inter-state business transactions",
      "Teaching the structure of India's dual GST system",
      "Reconciling GST amounts during bookkeeping and tax filing"
    ],
    faqs: [
      { q: "What determines whether a supply is intra-state or inter-state?", a: "A supply is intra-state when the supplier and the place of supply are in the same state or union territory, attracting CGST and SGST. It is inter-state when they are in different states, attracting IGST instead." },
      { q: "Why is intra-state GST split equally into CGST and SGST?", a: "The total GST rate is divided evenly so that both the central and the state government receive their share of the tax, each collecting half under their respective GST laws." },
      { q: "Does the total tax amount differ between intra-state and inter-state supplies?", a: "No, the total tax collected is the same either way; only how it is labeled and distributed between CGST/SGST or IGST changes based on the type of supply." },
      { q: "Can I use this calculator for any GST rate?", a: "Yes, enter any GST rate such as 5%, 12%, 18% or 28%, and the calculator will split it correctly according to the supply type you select." }
    ]
  },
  "invoice-calculator": {
    whatIs: "The Invoice Calculator lets you build a simple invoice by adding multiple line items, each with a description, quantity and unit price, then automatically totals them into a subtotal. You can apply a discount percentage and a tax percentage, and the tool shows the exact amounts deducted and added at each step, finishing with a clear grand total. It's designed for freelancers, small businesses, and anyone who needs to quickly work out what to charge a client without opening spreadsheet software, with support for adding or removing line items as needed and displaying all figures in your chosen currency.",
    extraSeo: "Covers searches like 'invoice total calculator', 'invoice calculator with discount and tax', 'line item invoice generator' and 'how to calculate invoice total'.",
    example: "Invoice with two line items — 3 hours at $50 and 1 item at $100 — a 10% discount and 8% tax:\n\nSubtotal = (3 × $50) + (1 × $100) = $250\nDiscount = $250 × 10% = $25\nAfter discount = $225\nTax = $225 × 8% = $18\nGrand total = $225 + $18 = $243",
    formula: "Subtotal = Σ (quantity × unit price)\nAfter Discount = Subtotal − (Subtotal × discount%)\nGrand Total = After Discount + (After Discount × tax%)",
    applications: [
      "Creating quick quotes and invoices for freelance or contract work",
      "Totaling multi-item orders before applying discounts and sales tax",
      "Checking a supplier's invoice math for accuracy",
      "Estimating project costs with multiple billable line items",
      "Preparing small business billing without spreadsheet software"
    ],
    faqs: [
      { q: "In what order are discount and tax applied?", a: "The discount is applied first to the subtotal to get the discounted amount, and tax is then calculated on that discounted amount, which matches how most retail and service invoices are structured." },
      { q: "Can I add as many line items as I need?", a: "Yes, you can add additional line items one at a time and remove any item you no longer need, as long as at least one row remains." },
      { q: "What happens if I leave the discount or tax fields at zero?", a: "The calculator simply skips that step — with 0% discount, the after-discount amount equals the subtotal, and with 0% tax, the grand total equals the after-discount amount." },
      { q: "Does the calculator check for invalid entries?", a: "Yes, if a line item has a description but a missing or negative quantity or price, or if the discount or tax fields contain invalid values, the calculator flags the issue instead of showing an incorrect total." }
    ]
  },
  "discount-tax-calculator": {
    whatIs: "The Discount & Tax Calculator shows you exactly how much you save and how much tax you pay when a discount is applied to a price before sales tax is charged on the reduced amount. Enter the original price, the discount percentage, and the tax rate, and the tool calculates the amount saved from the discount, the tax paid on the discounted price, and the final amount you actually pay. This mirrors how most retail transactions work — tax is charged on the post-discount price, not the original sticker price — making it useful for shoppers checking receipts and for anyone estimating the true cost of a purchase.",
    extraSeo: "Matches searches like 'discount and tax calculator', 'sale price with tax calculator', 'final price after discount and tax' and 'how much do I pay after discount and sales tax'.",
    example: "Price $200 with a 20% discount and 8% sales tax:\n\nAmount saved = $200 × 20% = $40\nPrice after discount = $200 − $40 = $160\nTax paid = $160 × 8% = $12.80\nFinal price = $160 + $12.80 = $172.80",
    formula: "Discount Amount = Price × Discount%\nPrice After Discount = Price − Discount Amount\nTax Paid = Price After Discount × Tax%\nFinal Price = Price After Discount + Tax Paid",
    applications: [
      "Checking the real cost of a sale item after discount and tax",
      "Verifying that a retail receipt applied discount before tax correctly",
      "Budgeting for a purchase that includes both a promotional discount and sales tax",
      "Comparing final prices across stores with different discount and tax rates",
      "Teaching how discounts and taxes combine on a single transaction"
    ],
    faqs: [
      { q: "Is tax calculated on the original price or the discounted price?", a: "This calculator applies tax to the price after the discount has been subtracted, which is standard practice at most retailers — tax is owed only on what you actually pay, not the pre-discount sticker price." },
      { q: "What if the discount is 0%?", a: "With a 0% discount, the price after discount equals the original price, so tax is calculated on the full original amount and the final price reflects price plus tax only." },
      { q: "Can the discount percentage be more than 100%?", a: "No, a discount above 100% would mean a negative price, so the calculator restricts the discount to a value between 0 and 100%." },
      { q: "Does this work for calculating savings on any currency?", a: "Yes, you can select your preferred currency and the saved amount, tax paid, and final price will all display in that currency." }
    ]
  },
  "investment-return-calculator": {
    whatIs: "The Investment Return Calculator measures how well an investment has performed by comparing its initial value to its final value over a given holding period, optionally accounting for extra contributions made along the way. It reports three key figures: total profit in currency terms, total return as a percentage, and the annualized (compound annual) return rate, which lets you fairly compare investments held for different lengths of time. This is useful for tracking the performance of stocks, funds, property, or any asset where you know the starting amount, the ending value, and how long you held it.",
    extraSeo: "Covers searches like 'investment return calculator', 'annualized return calculator', 'roi calculator with contributions' and 'how to calculate total return on investment'.",
    example: "Invest $10,000, add $1,000 in contributions, and the investment grows to $15,000 after 3 years:\n\nTotal invested = $10,000 + $1,000 = $11,000\nProfit = $15,000 − $11,000 = $4,000\nTotal return = $4,000 / $11,000 × 100 = 36.36%\nAnnualized return = ((15,000 / 11,000)^(1/3) − 1) × 100 ≈ 10.88% per year",
    formula: "Total Invested = Initial Value + Contributions\nProfit = Final Value − Total Invested\nTotal Return % = Profit / Total Invested × 100\nAnnualized Return % = ((Final Value / Total Invested)^(1/years) − 1) × 100",
    applications: [
      "Tracking the performance of a stock or fund portfolio over time",
      "Comparing investments held for different numbers of years on equal footing",
      "Evaluating real estate or business investment returns including added capital",
      "Checking whether an investment outperformed a target annual return",
      "Reporting investment performance for personal finance tracking"
    ],
    faqs: [
      { q: "What is the difference between total return and annualized return?", a: "Total return shows the overall percentage gain over the entire holding period, while annualized return converts that into an equivalent constant yearly growth rate, which makes it possible to fairly compare investments held for different lengths of time." },
      { q: "Why do I need to enter additional contributions?", a: "If you added money to the investment after the initial purchase, that extra capital is not part of the original investment's growth, so including contributions gives a more accurate picture of actual profit and return." },
      { q: "What if I didn't make any additional contributions?", a: "Simply leave the contributions field at zero or blank, and the calculation will be based solely on the initial and final values." },
      { q: "Can annualized return be negative?", a: "Yes, if the final value is lower than the total amount invested, both total return and annualized return will show as negative, reflecting a loss on the investment." }
    ]
  },
};

export const financeDRoutes = {
  "vat-calculator": lazy(() => import("@/tools/VatCalculator")),
  "gst-split-calculator": lazy(() => import("@/tools/GstSplitCalculator")),
  "invoice-calculator": lazy(() => import("@/tools/InvoiceCalculator")),
  "discount-tax-calculator": lazy(() => import("@/tools/DiscountTaxCalculator")),
  "investment-return-calculator": lazy(() => import("@/tools/InvestmentReturnCalculator")),
};
