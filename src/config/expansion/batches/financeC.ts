import { lazy } from "react";
import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

export const financeCTools: ToolMeta[] = [
  {
    slug: "loan-payoff-calculator",
    title: "Loan Payoff Calculator",
    description: "Calculate how many months it takes to pay off a loan balance, the payoff date, and total interest paid.",
    category: "finance",
    emoji: "🏁",
    keywords: ["loan payoff calculator", "debt payoff calculator", "months to pay off loan", "loan payoff date"],
    priority: "high",
    isNew: true,
  },
  {
    slug: "debt-to-income-calculator",
    title: "Debt-to-Income Calculator",
    description: "Calculate your debt-to-income (DTI) ratio from monthly income and debt payments, with lender guidance.",
    category: "finance",
    emoji: "📊",
    keywords: ["debt to income calculator", "dti calculator", "dti ratio mortgage", "debt to income ratio"],
    priority: "medium",
    isNew: true,
  },
  {
    slug: "net-worth-calculator",
    title: "Net Worth Calculator",
    description: "Add up your assets and liabilities to calculate your total net worth.",
    category: "finance",
    emoji: "💼",
    keywords: ["net worth calculator", "calculate net worth", "assets minus liabilities", "personal net worth"],
    priority: "medium",
    isNew: true,
  },
  {
    slug: "savings-goal-calculator",
    title: "Savings Goal Calculator",
    description: "Find the monthly contribution needed to reach a savings goal by a target date, with optional investment growth.",
    category: "finance",
    emoji: "🎯",
    keywords: ["savings goal calculator", "monthly savings needed", "savings target calculator", "how much to save monthly"],
    priority: "medium",
    isNew: true,
  },
  {
    slug: "cagr-calculator",
    title: "CAGR Calculator",
    description: "Calculate the Compound Annual Growth Rate (CAGR) of an investment between a beginning and ending value.",
    category: "finance",
    emoji: "📈",
    keywords: ["cagr calculator", "compound annual growth rate", "investment growth rate calculator", "cagr formula"],
    priority: "medium",
    isNew: true,
  },
];

export const financeCSeo: Record<string, SeoContent> = {
  "loan-payoff-calculator": {
    whatIs: "The Loan Payoff Calculator tells you how long it will take to pay off a loan given your current balance, annual interest rate (APR), and fixed monthly payment. It simulates the loan month by month, applying interest to the remaining balance and reducing it by the principal portion of each payment, until the balance reaches zero. The result shows the total number of months (and years) to payoff, an estimated payoff date, and the total interest you'll pay over the life of the loan at that payment level. This is useful for credit cards, personal loans, auto loans, or any debt with a fixed rate and payment, helping you see the real cost of carrying a balance and how increasing your payment speeds up payoff.",
    extraSeo: "Covers searches like 'loan payoff calculator', 'how long to pay off credit card calculator', 'debt payoff timeline calculator' and 'total interest paid on loan calculator'.",
    example: "Pay off a $15,000 balance at 18.9% APR with $400/month payments:\n\nMonths to payoff: ≈ 50 months (4.2 years)\nTotal interest paid: ≈ $4,900",
    formula: "Each month: Interest = Balance × (APR / 12); Principal paid = Payment − Interest; Balance = Balance − Principal paid; repeat until Balance ≤ 0.",
    applications: [
      "Planning how long it will take to pay off a credit card balance",
      "Comparing payoff timelines at different monthly payment amounts",
      "Estimating total interest cost before committing to a payment plan",
      "Deciding whether to increase payments to pay off debt faster",
      "Projecting a payoff date for budgeting purposes"
    ],
    faqs: [
      { q: "What happens if my payment doesn't cover the interest?", a: "The calculator warns you if your monthly payment is less than or equal to the first month's interest charge, because in that case the balance would never shrink and would instead grow indefinitely." },
      { q: "Does increasing my monthly payment really help that much?", a: "Yes, even small increases in monthly payment can significantly cut both the payoff time and total interest paid, especially on high-interest debt like credit cards." },
      { q: "Does this account for new charges added to the balance?", a: "No, the calculator assumes no new charges are added and that you make the same fixed payment every month until the balance is paid off." },
      { q: "Is the payoff date exact?", a: "The payoff date is an estimate based on today's date plus the calculated number of months, assuming consistent on-time payments." }
    ]
  },
  "debt-to-income-calculator": {
    whatIs: "The Debt-to-Income (DTI) Calculator divides your total monthly debt payments by your monthly gross (pre-tax) income to produce a percentage that lenders use to assess how much of your income is already committed to debt. A lower DTI generally signals more capacity to take on new credit, such as a mortgage or auto loan, while a higher DTI can make approval harder or result in less favorable terms. This calculator not only computes the ratio but also classifies it into bands — healthy, manageable, elevated, or high risk — with a plain-language explanation of what each range typically means to lenders, similar to the benchmarks used in mortgage underwriting.",
    extraSeo: "Matches searches like 'debt to income ratio calculator', 'dti calculator mortgage', 'what is a good debt to income ratio' and 'calculate dti percentage'.",
    example: "Monthly gross income of $5,000 with $1,800 in monthly debt payments:\n\nDTI = 1,800 / 5,000 × 100 = 36%\nThis falls in the 'Manageable' range many mortgage lenders accept.",
    formula: "DTI (%) = (Total Monthly Debt Payments / Monthly Gross Income) × 100",
    applications: [
      "Checking mortgage qualification readiness before applying",
      "Assessing whether you can afford to take on additional debt",
      "Tracking DTI improvement over time as debts are paid down",
      "Comparing your debt load against common lender thresholds",
      "Budgeting to keep debt payments within a healthy share of income"
    ],
    faqs: [
      { q: "What counts as monthly debt in the DTI calculation?", a: "Typically this includes recurring debt obligations such as rent or mortgage payments, car loans, student loans, credit card minimum payments, and other installment loans — not everyday expenses like groceries or utilities." },
      { q: "What DTI ratio do mortgage lenders usually want?", a: "Many conventional lenders prefer a DTI at or below 36%, though some loan programs allow up to 43% or higher with compensating factors like a strong credit score or large down payment." },
      { q: "Does DTI use gross or net income?", a: "DTI is calculated using gross (pre-tax) monthly income, not take-home pay, which is a common point of confusion." },
      { q: "How can I lower my DTI ratio?", a: "You can lower DTI by paying down existing debt balances, avoiding new debt, or increasing your income, all of which reduce the ratio of debt payments to income." }
    ]
  },
  "net-worth-calculator": {
    whatIs: "The Net Worth Calculator lets you list out all your assets — such as cash, savings, investments, retirement accounts, and property — alongside all your liabilities, such as mortgages, loans, and credit card balances. It automatically totals each side and subtracts liabilities from assets to produce your net worth, the single number that best summarizes your overall financial position at a point in time. Unlike income, which measures cash flow, net worth measures accumulated wealth, making it a key metric for tracking long-term financial progress, setting goals, and comparing your financial health year over year.",
    extraSeo: "Covers searches like 'net worth calculator', 'calculate your net worth', 'assets and liabilities calculator' and 'personal net worth tracker'.",
    example: "Assets: Savings $10,000 + Investments $25,000 + Car $8,000 = $43,000\nLiabilities: Car loan $5,000 + Credit card $2,000 = $7,000\nNet Worth = $43,000 − $7,000 = $36,000",
    formula: "Net Worth = Total Assets − Total Liabilities",
    applications: [
      "Tracking personal financial progress year over year",
      "Preparing a financial snapshot before meeting a financial advisor",
      "Setting net worth milestones as a savings and investing goal",
      "Understanding your overall financial position beyond monthly income",
      "Comparing how different assets and debts affect your total wealth"
    ],
    faqs: [
      { q: "What should I include as an asset?", a: "Include anything of monetary value you own, such as cash, bank account balances, investment and retirement accounts, real estate, and vehicles at their current market value." },
      { q: "What counts as a liability?", a: "Liabilities are debts you owe, including mortgages, auto loans, student loans, personal loans, and credit card balances." },
      { q: "Is it normal to have a negative net worth?", a: "Yes, especially early in life or after major debt like student loans or a mortgage; negative net worth simply means liabilities currently exceed assets, and it typically improves as debts are paid down and assets grow." },
      { q: "How often should I recalculate my net worth?", a: "Many people recalculate quarterly or annually to track trends over time, since net worth naturally fluctuates with asset values and debt payments." }
    ]
  },
  "savings-goal-calculator": {
    whatIs: "The Savings Goal Calculator figures out exactly how much you need to save each month to reach a target amount by a specific point in time, taking into account money you've already saved and an optional expected annual rate of return. By modeling monthly compounding growth on your existing balance and contributions, it accounts for the fact that invested savings grow faster than cash sitting idle, so you may need to contribute less per month than a simple division of goal by months would suggest. It's a practical planning tool for named savings goals like an emergency fund, a home down payment, a wedding, or a big purchase.",
    extraSeo: "Matches searches like 'savings goal calculator', 'how much do i need to save each month', 'monthly savings calculator with interest' and 'savings target calculator'.",
    example: "Goal: $20,000 in 24 months, starting with $2,000 saved, 5% annual return:\n\nRequired monthly contribution: ≈ $729\nGrowth from returns reduces the amount you need to contribute yourself.",
    formula: "Future value of current savings: C × (1 + r)^n\nRemaining needed = Target − Future value of current savings\nMonthly contribution = Remaining × r / ((1 + r)^n − 1), where r is the monthly rate",
    applications: [
      "Planning monthly contributions toward a home down payment",
      "Setting a savings plan for a wedding, vacation, or large purchase",
      "Building an emergency fund by a specific deadline",
      "Seeing how expected investment returns reduce required monthly savings",
      "Comparing savings plans with and without an existing head start"
    ],
    faqs: [
      { q: "What if I don't know my expected rate of return?", a: "You can leave the annual return field blank or enter 0, and the calculator will assume your savings grow only from your contributions, with no investment growth." },
      { q: "How does already-saved money affect the required monthly amount?", a: "Your current savings grow on their own at the given rate over the time period, which reduces the amount you still need to contribute monthly to reach your goal." },
      { q: "Can I use this for retirement savings?", a: "Yes, as long as you provide a realistic time horizon in months and an expected annual return, though for very long time horizons a dedicated retirement calculator may offer more detail." },
      { q: "What happens if my current savings already exceed my goal?", a: "The calculator will show that no additional monthly contribution is needed, since your existing balance alone is projected to reach or exceed the target." }
    ]
  },
  "cagr-calculator": {
    whatIs: "The CAGR Calculator computes the Compound Annual Growth Rate of an investment — the smoothed annual rate of return that would take a beginning value to an ending value over a given number of years, assuming growth compounded steadily each year. Unlike a simple average of yearly returns, CAGR accounts for compounding, giving a single, comparable growth rate even when actual year-to-year returns varied widely. This makes it the standard way to compare the performance of investments, business revenue, or any other metric that grows over multiple years, since it strips out volatility and shows the equivalent constant growth rate.",
    extraSeo: "Covers searches like 'cagr calculator', 'compound annual growth rate calculator', 'cagr formula explained' and 'investment growth rate calculator'.",
    example: "Investment grows from $10,000 to $18,000 over 5 years:\n\nCAGR = ((18,000 / 10,000)^(1/5) − 1) × 100 ≈ 12.47% per year\nTotal growth over the period = 80%",
    formula: "CAGR (%) = ((Ending Value / Beginning Value)^(1 / Years) − 1) × 100",
    applications: [
      "Comparing the historical performance of different investments or funds",
      "Evaluating a company's revenue or profit growth rate over several years",
      "Projecting what constant annual return matches actual investment results",
      "Normalizing volatile year-to-year returns into one comparable rate",
      "Setting realistic long-term growth assumptions for financial planning"
    ],
    faqs: [
      { q: "How is CAGR different from average annual return?", a: "A simple average of yearly percentage returns ignores compounding and can overstate growth when returns are volatile; CAGR instead finds the single constant rate that would produce the same overall result through compounding." },
      { q: "Can CAGR be negative?", a: "Yes, if the ending value is lower than the beginning value, CAGR will be negative, reflecting an overall decline in value over the period." },
      { q: "Does CAGR account for volatility or risk?", a: "No, CAGR only describes the smoothed path between the starting and ending values; it does not reflect how much the value fluctuated in between, so two investments with the same CAGR can have very different risk profiles." },
      { q: "What is CAGR commonly used for?", a: "It's widely used to compare the growth of investments, business metrics like revenue or user counts, and any other value that compounds over multiple periods." }
    ]
  },
};

export const financeCRoutes = {
  "loan-payoff-calculator": lazy(() => import("@/tools/LoanPayoffCalculator")),
  "debt-to-income-calculator": lazy(() => import("@/tools/DebtToIncomeCalculator")),
  "net-worth-calculator": lazy(() => import("@/tools/NetWorthCalculator")),
  "savings-goal-calculator": lazy(() => import("@/tools/SavingsGoalCalculator")),
  "cagr-calculator": lazy(() => import("@/tools/CagrCalculator")),
};
