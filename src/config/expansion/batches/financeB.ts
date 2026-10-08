import { lazy } from "react";
import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

export const financeBTools: ToolMeta[] = [
  {
    slug: "markup-calculator",
    title: "Markup Calculator",
    description: "Calculate the selling price from cost and markup percentage, or find the markup percentage from cost and price.",
    category: "finance",
    emoji: "🏷️",
    keywords: ["markup calculator", "cost plus markup", "markup percentage calculator", "selling price calculator"],
    priority: "high",
    popular: true,
  },
  {
    slug: "margin-calculator",
    title: "Margin Calculator",
    description: "Find gross profit and profit margin from cost and selling price, plus the price needed to hit a target margin.",
    category: "finance",
    emoji: "📊",
    keywords: ["margin calculator", "gross margin calculator", "profit margin calculator", "target margin price"],
    priority: "high",
    popular: true,
  },
  {
    slug: "break-even-calculator",
    title: "Break-Even Calculator",
    description: "Work out how many units you need to sell to cover fixed and variable costs and reach break-even.",
    category: "finance",
    emoji: "⚖️",
    keywords: ["break even calculator", "break even point", "break even analysis", "contribution margin calculator"],
  },
  {
    slug: "revenue-calculator",
    title: "Revenue Calculator",
    description: "Calculate gross and net revenue from price, quantity sold, returns, and discounts.",
    category: "finance",
    emoji: "💵",
    keywords: ["revenue calculator", "gross revenue calculator", "net revenue calculator", "sales revenue calculator"],
  },
  {
    slug: "roi-calculator",
    title: "ROI Calculator",
    description: "Calculate return on investment, net gain, and annualized ROI from your investment and return amounts.",
    category: "finance",
    emoji: "📈",
    keywords: ["roi calculator", "return on investment calculator", "annualized roi", "investment return calculator"],
    priority: "high",
    popular: true,
  },
];

export const financeBSeo: Record<string, SeoContent> = {
  "markup-calculator": {
    whatIs: "The Markup Calculator helps you price products by working from a known cost. Enter the cost price and a markup percentage to instantly see the selling price and profit per unit, or flip the calculator around and enter the cost and selling price to find out what markup percentage you're actually applying. Markup is calculated on top of cost (not on the selling price, which is how margin works), so a 50% markup on a $100 item produces a $150 selling price. This distinction trips up a lot of business owners, which is exactly why having a dedicated calculator — separate from a margin calculator — matters when setting prices or auditing past pricing decisions.",
    extraSeo: "Covers searches like 'markup calculator', 'cost plus markup pricing', 'how to calculate markup percentage' and 'markup to selling price calculator'.",
    example: "A product costs $50 and you apply a 40% markup:\n\nSelling price = 50 × (1 + 40/100) = $70\nProfit per unit = 70 − 50 = $20",
    formula: "Selling price = Cost × (1 + Markup% / 100)\nMarkup% = ((Selling price − Cost) / Cost) × 100",
    applications: [
      "Setting retail prices from wholesale or manufacturing cost",
      "Checking what markup percentage is being applied to existing prices",
      "Pricing menu items in restaurants based on ingredient cost",
      "Comparing markup strategies across product lines",
      "Reverse-engineering markup from competitor pricing"
    ],
    faqs: [
      { q: "What's the difference between markup and margin?", a: "Markup is profit expressed as a percentage of cost, while margin is profit expressed as a percentage of the selling price. A 50% markup on a $100 cost gives a $150 price, which is only a 33.3% margin." },
      { q: "How do I find the markup percentage from cost and price?", a: "Switch the calculator to 'Cost + Price → Markup %' mode, enter both values, and it computes ((price − cost) / cost) × 100 for you." },
      { q: "Can markup percentage be negative?", a: "Yes — if the selling price is lower than the cost, the calculated markup percentage will be negative, indicating the item is being sold at a loss." },
      { q: "Does the calculator support different currencies?", a: "Yes, you can choose your currency and all selling price and profit figures will be formatted accordingly." }
    ]
  },
  "margin-calculator": {
    whatIs: "The Margin Calculator shows the gross profit and gross margin percentage on a sale, calculated from the cost and selling price you enter. Unlike markup, margin expresses profit as a percentage of the selling price rather than the cost, which is the metric most commonly used in financial statements and business dashboards. The calculator also lets you enter a target margin percentage and will tell you exactly what price you need to charge for a given cost to hit that target — useful when you know your desired margin and need to work backward to a price.",
    extraSeo: "Matches searches like 'margin calculator', 'gross profit margin calculator', 'how to calculate profit margin' and 'price for target margin calculator'.",
    example: "A product costs $40 and sells for $60:\n\nGross profit = 60 − 40 = $20\nMargin = (20 / 60) × 100 = 33.33%\n\nFor a 50% target margin: price needed = 40 / (1 − 0.50) = $80",
    formula: "Gross profit = Price − Cost\nMargin% = (Gross profit / Price) × 100\nPrice for target margin = Cost / (1 − Target margin / 100)",
    applications: [
      "Checking the gross margin on individual products or services",
      "Setting prices to hit a specific target profit margin",
      "Comparing margins across a product catalog",
      "Preparing financial summaries for investors or lenders",
      "Evaluating whether a discount still leaves an acceptable margin"
    ],
    faqs: [
      { q: "Why is my margin lower than my markup percentage?", a: "Margin is calculated on the selling price while markup is calculated on cost, and the selling price is always larger than the cost when there's a profit, so the margin percentage will always be smaller than the equivalent markup percentage." },
      { q: "What happens if I enter a target margin of 100% or more?", a: "A margin of 100% or higher is mathematically impossible since it would require infinite or negative cost, so the calculator won't compute a target price for those values." },
      { q: "Can I use this for service businesses, not just products?", a: "Yes, simply treat your cost as the direct cost of delivering the service (labor, materials, subcontractors) and the price as what you charge the client." },
      { q: "Does the calculator account for taxes or overhead?", a: "No, it calculates gross profit and margin from cost and price only; it doesn't factor in taxes, rent, or other overhead costs." }
    ]
  },
  "break-even-calculator": {
    whatIs: "The Break-Even Calculator tells you exactly how many units you need to sell before your business starts turning a profit, based on your fixed costs, price per unit, and variable cost per unit. It also reports the contribution margin — the amount each unit sale contributes toward covering fixed costs after variable costs are subtracted — both as a dollar amount and a percentage. This is one of the most fundamental calculations in business planning, used to validate pricing, assess the viability of a new product, or figure out how a change in costs or price shifts your break-even point.",
    extraSeo: "Covers searches like 'break even calculator', 'break even point calculator', 'contribution margin calculator' and 'how many units to break even'.",
    example: "Fixed costs of $10,000, price per unit of $25, and variable cost per unit of $10:\n\nContribution margin = 25 − 10 = $15 per unit\nBreak-even units = 10,000 / 15 = 667 units\nBreak-even revenue = 667 × 25 = $16,675",
    formula: "Contribution margin = Price per unit − Variable cost per unit\nBreak-even units = Fixed costs / Contribution margin\nBreak-even revenue = Break-even units × Price per unit\nContribution margin % = (Contribution margin / Price per unit) × 100",
    applications: [
      "Deciding whether a new product line can be profitable",
      "Setting minimum sales targets for a business plan",
      "Evaluating how a price change affects the break-even point",
      "Assessing the impact of rising supplier costs on profitability",
      "Presenting break-even analysis in investor pitch decks"
    ],
    faqs: [
      { q: "What happens if variable cost is higher than price?", a: "If the variable cost per unit exceeds the selling price, the contribution margin is negative or zero, meaning you lose money on every unit sold and can never break even regardless of volume." },
      { q: "What counts as a fixed cost versus a variable cost?", a: "Fixed costs stay the same regardless of sales volume, like rent and salaries, while variable costs scale directly with each unit produced or sold, like materials and shipping." },
      { q: "Is break-even revenue the same as break-even units times price?", a: "Yes, once you know the break-even number of units, multiplying by the price per unit gives you the total revenue needed to exactly cover all costs." },
      { q: "How does contribution margin percentage help with decision making?", a: "A higher contribution margin percentage means each sale contributes more toward fixed costs and profit, so businesses often use it to compare the profitability of different products." }
    ]
  },
  "revenue-calculator": {
    whatIs: "The Revenue Calculator computes gross and net revenue from the price per unit and quantity sold, with optional adjustments for returns and discounts. Gross revenue is simply price multiplied by quantity, but real-world revenue rarely stops there — discounts reduce the effective price and returned items eat into actual sales. By letting you layer in a discount percentage and a returns percentage, this tool gives a more realistic net revenue figure that mirrors how revenue is actually recognized in retail and e-commerce accounting.",
    extraSeo: "Handles searches like 'revenue calculator', 'gross revenue calculator', 'net revenue after returns and discounts' and 'sales revenue calculator'.",
    example: "Selling 500 units at $20 each, with a 10% discount and 5% returns:\n\nGross revenue = 500 × 20 = $10,000\nAfter discount = 10,000 × (1 − 0.10) = $9,000\nNet revenue = 9,000 × (1 − 0.05) = $8,550",
    formula: "Gross revenue = Price per unit × Quantity sold\nAfter discount = Gross revenue × (1 − Discount% / 100)\nNet revenue = After discount × (1 − Returns% / 100)",
    applications: [
      "Forecasting revenue for a product launch",
      "Estimating net revenue after planned promotional discounts",
      "Accounting for expected return rates in e-commerce sales",
      "Comparing gross versus net revenue across sales channels",
      "Preparing revenue projections for budgets or investor updates"
    ],
    faqs: [
      { q: "In what order are discount and returns applied?", a: "The calculator applies the discount percentage first to get the discounted revenue, then applies the returns percentage to that discounted amount to arrive at net revenue." },
      { q: "Can I leave returns or discount blank?", a: "Yes, both fields are optional; if left blank they're treated as 0%, and the calculator will simply return gross revenue equal to net revenue." },
      { q: "Does this calculator account for taxes?", a: "No, it focuses on gross and net sales revenue only and does not include sales tax, VAT, or other deductions." },
      { q: "What's the difference between gross and net revenue here?", a: "Gross revenue is total sales before any adjustments, while net revenue reflects what you actually keep after discounts and returns are factored in." }
    ]
  },
  "roi-calculator": {
    whatIs: "The ROI Calculator measures how profitable an investment was by comparing your total investment cost against the amount you got back, expressing the result as a return on investment percentage along with the net dollar gain. If you also enter the number of years the investment was held, it calculates the annualized ROI — the compound annual growth rate equivalent — which makes it possible to fairly compare investments held for different lengths of time. This is a core calculation for evaluating business projects, stock investments, real estate, or any scenario where money goes in and a different amount comes back out later.",
    extraSeo: "Matches searches like 'roi calculator', 'return on investment calculator', 'annualized roi calculator' and 'investment return percentage calculator'.",
    example: "You invest $10,000 and it grows to $14,000 over 3 years:\n\nNet gain = 14,000 − 10,000 = $4,000\nROI = (4,000 / 10,000) × 100 = 40%\nAnnualized ROI = ((14,000 / 10,000)^(1/3) − 1) × 100 ≈ 11.87%",
    formula: "Net gain = Return amount − Investment cost\nROI% = (Net gain / Investment cost) × 100\nAnnualized ROI% = ((Return / Investment)^(1/Years) − 1) × 100",
    applications: [
      "Evaluating the profitability of a business project or purchase",
      "Comparing stock, real estate, or business investments with different holding periods",
      "Assessing the return on a marketing campaign's spend",
      "Reporting investment performance to stakeholders or partners",
      "Deciding between two investment opportunities using annualized returns"
    ],
    faqs: [
      { q: "Why do I need annualized ROI if I already have total ROI?", a: "Total ROI doesn't account for how long the money was invested, so a 40% return over 10 years looks the same as a 40% return over 1 year. Annualized ROI converts both to a yearly rate so you can compare them fairly." },
      { q: "What does a negative ROI mean?", a: "A negative ROI means the return amount was less than the investment cost, indicating a loss on the investment." },
      { q: "Is the years field required?", a: "No, it's optional. Leave it blank to see just the total ROI and net gain; fill it in to also see the annualized ROI." },
      { q: "Does ROI account for inflation?", a: "No, this calculator computes nominal ROI based on the raw dollar amounts entered; it does not adjust for inflation or the time value of money beyond annualizing the percentage." }
    ]
  },
};

export const financeBRoutes = {
  "markup-calculator": lazy(() => import("@/tools/MarkupCalculator")),
  "margin-calculator": lazy(() => import("@/tools/MarginCalculator")),
  "break-even-calculator": lazy(() => import("@/tools/BreakEvenCalculator")),
  "revenue-calculator": lazy(() => import("@/tools/RevenueCalculator")),
  "roi-calculator": lazy(() => import("@/tools/RoiCalculator")),
};
