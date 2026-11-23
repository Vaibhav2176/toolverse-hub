import { lazy } from "react";
import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

export const financeATools: ToolMeta[] = [
  {
    "slug": "salary-calculator",
    "title": "Salary Calculator",
    "description": "Estimate take-home pay from gross salary, a tax rate and fixed deductions, per year, month and week.",
    "category": "finance",
    "emoji": "💼",
    "keywords": [
      "salary calculator",
      "take home pay calculator",
      "net salary calculator",
      "gross to net pay"
    ],
    "isNew": true,
    "priority": "high",
    "popular": true
  },
  {
    "slug": "hourly-to-salary-calculator",
    "title": "Hourly to Salary Calculator",
    "description": "Convert an hourly wage into daily, weekly, monthly and annual pay based on your hours and working weeks.",
    "category": "finance",
    "emoji": "⏱️",
    "keywords": [
      "hourly to salary",
      "hourly to annual salary",
      "wage to salary calculator",
      "hourly pay to yearly"
    ],
    "isNew": true,
    "priority": "high",
    "popular": true
  },
  {
    "slug": "salary-to-hourly-calculator",
    "title": "Salary to Hourly Calculator",
    "description": "Find the effective hourly rate of an annual salary from your weekly hours and paid weeks per year.",
    "category": "finance",
    "emoji": "🕐",
    "keywords": [
      "salary to hourly",
      "annual salary to hourly rate",
      "yearly to hourly wage",
      "what is my hourly rate"
    ],
    "isNew": true,
    "priority": "high"
  },
  {
    "slug": "overtime-calculator",
    "title": "Overtime Pay Calculator",
    "description": "Calculate overtime pay and total gross pay from your base rate, regular hours, overtime hours and multiplier.",
    "category": "finance",
    "emoji": "⌛",
    "keywords": [
      "overtime calculator",
      "time and a half calculator",
      "overtime pay calculator",
      "double time pay"
    ],
    "isNew": true
  },
  {
    "slug": "commission-calculator",
    "title": "Commission Calculator",
    "description": "Work out sales commission and total earnings from a sale amount, a commission rate and an optional base salary.",
    "category": "finance",
    "emoji": "🤝",
    "keywords": [
      "commission calculator",
      "sales commission calculator",
      "commission percentage",
      "base plus commission"
    ],
    "isNew": true
  }
];

export const financeASeo: Record<string, SeoContent> = {
  "salary-calculator": {
    "whatIs": "A salary calculator turns a gross salary figure into an estimate of what actually reaches your bank account. You enter your gross pay, an overall tax rate and any fixed deductions such as pension contributions, insurance or union fees, and the tool subtracts them to show net pay per year, per month and per week. Because tax systems differ widely between countries and often use progressive bands, this calculator uses a single effective rate you supply, which makes it useful for quick comparisons of job offers, budgeting a raise or sanity-checking a payslip rather than replacing an official payroll calculation.",
    "extraSeo": "Useful as a gross to net salary calculator, a monthly take-home pay estimator or a quick way to compare two job offers side by side.",
    "example": "Gross salary: 60,000 per year\nEffective tax rate: 22%\nOther deductions: 3,000 per year\nTax = 60,000 × 0.22 = 13,200\nNet = 60,000 − 13,200 − 3,000 = 43,800 per year\nMonthly ≈ 3,650 · Weekly ≈ 842",
    "applications": [
      "Comparing job offers with different salaries",
      "Planning a monthly budget around real income",
      "Checking whether a raise is worth a higher tax band",
      "Estimating pay after adding a pension contribution"
    ],
    "faqs": [
      {
        "q": "Is this an exact payslip calculation?",
        "a": "No. It applies a single effective tax rate you choose, so it is an estimate. Use your local tax authority's calculator or payroll for exact figures."
      },
      {
        "q": "What is an effective tax rate?",
        "a": "It is the total tax you pay divided by your gross income. It is usually lower than your top marginal band because lower bands are taxed at lower rates."
      },
      {
        "q": "Should pension contributions go in deductions?",
        "a": "Yes, if they come out of your pay. Enter the yearly amount so the net figure reflects what you actually receive."
      }
    ],
    "formula": "Net pay = Gross − (Gross × tax rate) − fixed deductions\nMonthly = Net ÷ 12 · Weekly = Net ÷ 52"
  },
  "hourly-to-salary-calculator": {
    "whatIs": "An hourly to salary calculator converts a pay rate per hour into the equivalent yearly, monthly, weekly and daily income. It multiplies your hourly rate by the hours you work each week and the number of weeks you are paid per year, so you can see what a contract rate or shift job is really worth across a full year. Adjusting the weeks lets you account for unpaid holidays or seasonal work, which is the main reason a quick ‘rate × 2,080’ rule of thumb can overstate annual earnings for freelancers and part-time workers.",
    "extraSeo": "Also works as an hourly wage to annual salary converter, a part-time salary estimator and a contractor day-rate to yearly income check.",
    "example": "Hourly rate: 25\nHours per week: 37.5\nWeeks per year: 48\nWeekly = 25 × 37.5 = 937.50\nAnnual = 937.50 × 48 = 45,000\nMonthly = 45,000 ÷ 12 = 3,750",
    "applications": [
      "Comparing an hourly job with a salaried offer",
      "Pricing freelance or contract work",
      "Estimating part-time yearly income",
      "Applying for loans that ask for annual income"
    ],
    "faqs": [
      {
        "q": "Why not just multiply by 2,080?",
        "a": "2,080 assumes 40 hours for all 52 weeks. If you take unpaid leave or work fewer hours, adjust the weeks and hours for a realistic figure."
      },
      {
        "q": "Is the result before or after tax?",
        "a": "Before tax. Use the Salary Calculator afterwards to estimate take-home pay."
      },
      {
        "q": "How do I include overtime?",
        "a": "Add your average extra hours to the weekly hours, or use the Overtime Calculator for pay at a higher multiplier."
      }
    ],
    "formula": "Annual = hourly rate × hours per week × weeks per year\nMonthly = Annual ÷ 12 · Daily = Weekly ÷ working days"
  },
  "salary-to-hourly-calculator": {
    "whatIs": "A salary to hourly calculator works backwards from an annual salary to the hourly rate it represents. Divide the yearly figure by the number of hours you actually work in a year and you get a number that is easy to compare with hourly jobs, freelance rates or the minimum wage. It is particularly revealing for salaried roles with long hours: a generous-looking salary spread over 50-hour weeks can work out lower per hour than a modest one with a strict 37.5-hour week.",
    "extraSeo": "Handy as a yearly salary to hourly wage converter or to check your real hourly pay when you regularly work unpaid overtime.",
    "example": "Annual salary: 52,000\nHours per week: 45\nWeeks per year: 47\nHours per year = 45 × 47 = 2,115\nHourly = 52,000 ÷ 2,115 ≈ 24.59",
    "applications": [
      "Comparing salaried and hourly offers fairly",
      "Seeing the real cost of unpaid overtime",
      "Setting a freelance rate from a previous salary",
      "Checking pay against minimum-wage rules"
    ],
    "faqs": [
      {
        "q": "Should I include paid holidays in weeks?",
        "a": "Include weeks you are paid for. If you want the rate per hour actually worked, use only the weeks you work."
      },
      {
        "q": "Why is my hourly rate lower than expected?",
        "a": "Long weekly hours spread the same salary thinner. Enter your real hours, not contract hours, to see it."
      },
      {
        "q": "Does this include benefits?",
        "a": "No, only the cash salary you enter. Benefits such as pension matching add value on top."
      }
    ],
    "formula": "Hourly rate = Annual salary ÷ (hours per week × weeks per year)"
  },
  "overtime-calculator": {
    "whatIs": "An overtime pay calculator works out how much extra you earn for hours beyond your normal schedule. Overtime is usually paid at a multiple of the base hourly rate — commonly 1.5× (time and a half) or 2× (double time) — so the tool multiplies your overtime hours by the boosted rate and adds it to your regular pay. You can also enter a custom multiplier for weekend, holiday or night premiums used by some employers and collective agreements.",
    "extraSeo": "Covers time-and-a-half, double-time and custom premium rates, so it works as a weekly overtime pay estimator or a shift premium calculator.",
    "example": "Base rate: 20 per hour\nRegular hours: 40\nOvertime hours: 6 at 1.5×\nRegular pay = 20 × 40 = 800\nOvertime rate = 20 × 1.5 = 30\nOvertime pay = 30 × 6 = 180\nTotal gross = 980",
    "applications": [
      "Checking a payslip that includes overtime",
      "Deciding whether to accept extra shifts",
      "Estimating holiday or weekend premium pay",
      "Planning payroll costs for a small team"
    ],
    "faqs": [
      {
        "q": "What does time and a half mean?",
        "a": "You are paid 1.5 times your normal hourly rate for each overtime hour."
      },
      {
        "q": "When does overtime start?",
        "a": "It depends on your contract and local law — often after 40 hours a week or 8 hours a day. This tool uses the hours you enter."
      },
      {
        "q": "Is overtime taxed differently?",
        "a": "Usually it is taxed as normal income, but the higher total can push some pay into a higher bracket."
      }
    ],
    "formula": "Overtime pay = base rate × multiplier × overtime hours\nTotal = base rate × regular hours + overtime pay"
  },
  "commission-calculator": {
    "whatIs": "A commission calculator shows how much a salesperson, agent or affiliate earns from a sale. Enter the sale value and the commission percentage to get the commission amount, then optionally add a base salary to see total earnings for the period. It suits real-estate agents, recruiters, retail staff and affiliate marketers who need to estimate pay quickly, compare commission structures, or work out how much they must sell to reach an income goal.",
    "extraSeo": "Use it as a sales commission percentage calculator, a base-plus-commission pay estimator or a real-estate agent commission check.",
    "example": "Sale amount: 250,000\nCommission rate: 3%\nBase salary: 2,000\nCommission = 250,000 × 0.03 = 7,500\nTotal earnings = 2,000 + 7,500 = 9,500",
    "applications": [
      "Estimating monthly pay in a sales role",
      "Comparing commission-only and base-plus offers",
      "Calculating real-estate or recruiter fees",
      "Checking affiliate payouts"
    ],
    "faqs": [
      {
        "q": "How do I find the sales needed for a target income?",
        "a": "Divide the commission you want by the rate. For 5,000 at 4%, you need 125,000 in sales."
      },
      {
        "q": "Does this handle tiered commission?",
        "a": "It uses a single rate. For tiers, calculate each band separately and add the results."
      },
      {
        "q": "Is commission paid on profit or revenue?",
        "a": "It varies by employer. Enter whichever amount your plan uses as the sale amount."
      }
    ],
    "formula": "Commission = sale amount × commission rate ÷ 100\nTotal earnings = base salary + commission"
  }
};

export const financeARoutes = {
  "salary-calculator": lazy(() => import("@/tools/SalaryCalculator")),
  "hourly-to-salary-calculator": lazy(() => import("@/tools/HourlyToSalaryCalculator")),
  "salary-to-hourly-calculator": lazy(() => import("@/tools/SalaryToHourlyCalculator")),
  "overtime-calculator": lazy(() => import("@/tools/OvertimeCalculator")),
  "commission-calculator": lazy(() => import("@/tools/CommissionCalculator")),
};
