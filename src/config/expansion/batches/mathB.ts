import { lazy } from "react";
import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

export const mathBTools: ToolMeta[] = [
  {
    slug: "scientific-notation-converter",
    title: "Scientific Notation Converter",
    description: "Convert plain numbers to scientific and engineering notation, with E-notation output.",
    category: "math-tools",
    emoji: "🔬",
    keywords: ["scientific notation converter", "e notation calculator", "engineering notation", "standard form converter"],
    priority: "medium",
    isNew: true,
  },
  {
    slug: "significant-figures-calculator",
    title: "Significant Figures Calculator",
    description: "Count significant figures in a number and round to N sig figs with an explanation of the rules used.",
    category: "math-tools",
    emoji: "🔢",
    keywords: ["significant figures calculator", "sig fig counter", "round to sig figs", "significant digits"],
    priority: "medium",
    isNew: true,
  },
  {
    slug: "factorial-calculator",
    title: "Factorial Calculator",
    description: "Calculate n! exactly for large numbers using BigInt, with digit count.",
    category: "math-tools",
    emoji: "❗",
    keywords: ["factorial calculator", "n factorial", "big factorial calculator", "permutations factorial"],
    priority: "medium",
    isNew: true,
  },
  {
    slug: "rounding-calculator",
    title: "Rounding Calculator",
    description: "Round numbers to decimal places or the nearest 10, 100, or 1000 using different rounding modes.",
    category: "math-tools",
    emoji: "➗",
    keywords: ["rounding calculator", "round to nearest 10", "round decimal places", "round half up"],
    priority: "medium",
    isNew: true,
  },
  {
    slug: "ratio-simplifier",
    title: "Ratio Simplifier",
    description: "Simplify a ratio to its lowest terms and convert it to decimal, percentage and parts-of-total form.",
    category: "math-tools",
    emoji: "⚖️",
    keywords: ["ratio simplifier", "simplify ratio calculator", "ratio to lowest terms", "ratio to percentage"],
    priority: "medium",
    isNew: true,
  },
];

export const mathBSeo: Record<string, SeoContent> = {
  "scientific-notation-converter": {
    whatIs: "The Scientific Notation Converter changes an ordinary decimal number into scientific notation (a × 10^n) and engineering notation (exponent restricted to multiples of three), plus a compact E-notation string such as 1.23E+7. It works in both directions: paste in a plain number like 0.000045 or a notation string like 4.5e-5 and it normalizes the value instantly. This is useful for physics and chemistry coursework, calculator cross-checks, and formatting very large or very small measurements for reports. The converter keeps your chosen number of significant digits in the mantissa so results stay precise and readable.",
    extraSeo: "Searches like 'convert to scientific notation calculator', 'engineering notation converter' and 'e notation to decimal' are all covered by this one tool.",
    example: "Convert 48,200,000 to scientific notation:\n\n48,200,000 = 4.82 × 10^7\nEngineering notation: 48.2 × 10^6\nE-notation: 4.82E+7",
    formula: "Scientific notation: a × 10^n, where 1 ≤ |a| < 10\nEngineering notation: exponent n is a multiple of 3",
    applications: [
      "Formatting lab measurements for physics or chemistry reports",
      "Converting calculator E-notation output back to plain numbers",
      "Preparing engineering values with exponents in multiples of three",
      "Checking homework answers that require standard form",
      "Simplifying very large or very small numbers for presentations"
    ],
    faqs: [
      { q: "What is the difference between scientific and engineering notation?", a: "Scientific notation keeps the mantissa between 1 and 10, while engineering notation restricts the exponent to multiples of three so it aligns with metric prefixes like kilo, mega and micro." },
      { q: "Can I enter a number already in E-notation?", a: "Yes, the converter accepts inputs like 6.02e23 or 1.5E-4 and will normalize them into scientific, engineering and plain decimal forms." },
      { q: "How many significant digits does the mantissa keep?", a: "You can choose the number of digits to keep; the tool rounds the mantissa to that precision while adjusting the exponent accordingly." },
      { q: "Does it handle negative numbers?", a: "Yes, negative numbers are converted the same way, with the sign preserved on the mantissa." }
    ]
  },
  "significant-figures-calculator": {
    whatIs: "The Significant Figures Calculator analyzes a number and tells you exactly how many significant figures it contains, explaining which digits count and why according to standard rules — leading zeros never count, trailing zeros after a decimal point do count, and zeros between nonzero digits always count. It can also round your number to a specified number of significant figures, showing the rounded result alongside a short explanation of which digits were kept or dropped. This is widely used in chemistry and physics coursework where precision reporting matters as much as the final numeric answer.",
    extraSeo: "Covers queries like 'how many sig figs calculator', 'round to 3 significant figures' and 'significant figures rules explained'.",
    example: "Count significant figures in 0.004060:\n\n0.004060 has 4 significant figures: 4, 0, 6, 0\n(leading zeros before the 4 do not count, but trailing zero after the decimal does)",
    formula: "Rules: nonzero digits always count; zeros between nonzero digits count; leading zeros never count; trailing zeros count only if a decimal point is present.",
    applications: [
      "Reporting experimental results in chemistry and physics labs",
      "Checking homework for correct significant figure rounding",
      "Verifying precision claims in scientific measurements",
      "Teaching students the rules for counting significant digits",
      "Rounding calculated results to match measurement precision"
    ],
    faqs: [
      { q: "Do trailing zeros always count as significant?", a: "Only when the number includes a decimal point. For example, 1500 has 2 significant figures, but 1500.0 has 5, because the decimal point signals those zeros were measured." },
      { q: "How does rounding to N sig figs work?", a: "The calculator finds the Nth significant digit, looks at the next digit to decide rounding direction, and rewrites the number keeping only the requested number of significant digits." },
      { q: "Does it work with very small numbers?", a: "Yes, numbers like 0.00012 are handled correctly; leading zeros are ignored when counting significant figures." },
      { q: "Can I use this for scientific notation input?", a: "Yes, you can enter values like 3.40e-5 and the calculator will determine significant figures from the mantissa." }
    ]
  },
  "factorial-calculator": {
    whatIs: "The Factorial Calculator computes n! — the product of all positive integers up to n — using JavaScript's BigInt type so results remain exact even for large values where ordinary floating-point math loses precision. Factorials grow extremely fast: 20! already exceeds 2 quintillion, and 50! has 65 digits. This tool shows the full exact integer result along with its digit count, making it useful for combinatorics, probability problems, and anyone curious how enormous these numbers become. Because BigInt arithmetic has no rounding error, every digit shown is guaranteed correct.",
    extraSeo: "Handles searches like 'factorial calculator large numbers', 'n factorial exact value' and 'how many digits in 100 factorial'.",
    example: "Calculate 10!:\n\n10! = 10 × 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 3,628,800",
    formula: "n! = n × (n−1) × (n−2) × ... × 2 × 1, with 0! = 1",
    applications: [
      "Calculating permutations and combinations in probability problems",
      "Verifying combinatorics homework answers exactly",
      "Exploring how quickly factorial values grow",
      "Computing exact large factorials without floating-point rounding errors",
      "Checking the digit count of n! for a given n"
    ],
    faqs: [
      { q: "Why use BigInt instead of regular numbers?", a: "Regular JavaScript numbers lose precision beyond about 15-17 digits, but factorials grow past that very quickly. BigInt performs exact integer arithmetic so every digit of the result is correct." },
      { q: "What is 0 factorial?", a: "By definition 0! = 1, which this calculator applies automatically." },
      { q: "How large a number can I calculate?", a: "You can compute factorials of very large integers; the tool will show the exact value and its digit count, though extremely large inputs produce very long results." },
      { q: "Does it accept negative numbers?", a: "No, factorial is only defined for non-negative integers, so negative or non-integer input shows an error message." }
    ]
  },
  "rounding-calculator": {
    whatIs: "The Rounding Calculator rounds a number to a chosen number of decimal places or to the nearest 10, 100, or 1000, using the rounding mode you select: standard half-up, half-even (banker's rounding), round down (floor), or round up (ceiling). Different fields use different conventions — accounting often uses half-even to reduce bias, while everyday rounding uses half-up — so being able to pick the mode matters for getting a result that matches what's expected. The tool shows the rounded result immediately alongside the rule that was applied.",
    extraSeo: "Covers searches like 'round to nearest 100 calculator', 'round half to even calculator' and 'rounding decimal places online'.",
    example: "Round 2,847.6 to the nearest hundred using half-up mode:\n\n2,847.6 → nearest hundred → 2,800",
    formula: "Half-up: round 0.5 away from zero upward\nHalf-even: round 0.5 to the nearest even digit\nFloor: always round down\nCeiling: always round up",
    applications: [
      "Rounding monetary totals for invoices and budgets",
      "Preparing banker's rounding for accounting calculations",
      "Rounding measurements to a sensible number of decimal places",
      "Estimating totals by rounding to the nearest 10, 100 or 1000",
      "Teaching students different rounding conventions"
    ],
    faqs: [
      { q: "What is half-even (banker's) rounding?", a: "Half-even rounding rounds a value exactly halfway between two numbers to whichever neighbor is even, which reduces cumulative rounding bias in large datasets and is commonly used in accounting and statistics." },
      { q: "What's the difference between rounding and flooring?", a: "Rounding picks the nearest value using a rule for ties, while flooring always moves toward negative infinity regardless of how close the number is to the next value up." },
      { q: "Can I round to negative decimal places?", a: "Yes, choosing 'nearest 10, 100 or 1000' is equivalent to rounding to -1, -2 or -3 decimal places." },
      { q: "Does it handle negative numbers correctly?", a: "Yes, each rounding mode correctly accounts for sign, so ceiling on -2.5 gives -2, not -3." }
    ]
  },
  "ratio-simplifier": {
    whatIs: "The Ratio Simplifier reduces any ratio, such as 24:36, down to its lowest whole-number terms using the greatest common divisor, then shows the equivalent decimal value, percentage split, and each part's share of the total. It is the counterpart to a ratio-solving calculator: instead of finding a missing term in a proportion, this tool focuses purely on simplifying and reinterpreting a given ratio in multiple formats. It's handy for recipe scaling, mixing ratios, financial splits, and any situation where you need the cleanest possible form of a ratio plus its percentage breakdown.",
    extraSeo: "Matches searches like 'simplify ratio calculator', 'ratio to percentage calculator' and 'reduce ratio to lowest terms'.",
    example: "Simplify the ratio 24:36:\n\nGCD(24, 36) = 12\n24 ÷ 12 : 36 ÷ 12 = 2:3\nDecimal: 0.667, Percentage split: 40% to 60%",
    formula: "Simplified ratio = a ÷ GCD(a,b) : b ÷ GCD(a,b)\nPart of total = part ÷ (a + b) × 100%",
    applications: [
      "Simplifying mixing ratios for paint, concrete or recipes",
      "Reducing financial split ratios like profit-sharing agreements",
      "Converting a ratio into a percentage breakdown for reports",
      "Checking homework answers for ratio simplification",
      "Comparing two ratios by reducing both to lowest terms"
    ],
    faqs: [
      { q: "How is a ratio simplified to lowest terms?", a: "Both numbers in the ratio are divided by their greatest common divisor (GCD), producing the smallest whole numbers that preserve the same proportion." },
      { q: "How does this differ from a ratio calculator that solves proportions?", a: "A proportion solver finds a missing value given a known ratio, such as solving for x in 3:4 = x:20. This tool instead takes a complete ratio and simplifies it, converting it to decimal and percentage form." },
      { q: "Can I simplify a ratio with three or more terms?", a: "This tool is designed for two-term ratios; for three-part ratios, simplify each pair against the overall GCD of all terms." },
      { q: "What does the percentage split represent?", a: "It shows what share of the total each part of the ratio represents, which is useful when dividing a shared amount such as profit or ingredients." }
    ]
  },
};

export const mathBRoutes = {
  "scientific-notation-converter": lazy(() => import("@/tools/ScientificNotationConverter")),
  "significant-figures-calculator": lazy(() => import("@/tools/SignificantFiguresCalculator")),
  "factorial-calculator": lazy(() => import("@/tools/FactorialCalculator")),
  "rounding-calculator": lazy(() => import("@/tools/RoundingCalculator")),
  "ratio-simplifier": lazy(() => import("@/tools/RatioSimplifier")),
};
