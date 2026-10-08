import { lazy } from "react";
import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

export const mathATools: ToolMeta[] = [
  {
    slug: "percentage-difference-calculator",
    title: "Percentage Difference Calculator",
    description: "Calculate the symmetric percentage difference between two values using their average as the base.",
    category: "math-tools",
    emoji: "📐",
    keywords: ["percentage difference calculator", "percent difference formula", "compare two values percentage", "relative difference calculator"],
    priority: "high",
    popular: true,
    isNew: true,
  },
  {
    slug: "proportion-calculator",
    title: "Proportion Calculator",
    description: "Solve for a missing term in a proportion a/b = c/d using cross multiplication.",
    category: "math-tools",
    emoji: "⚖️",
    keywords: ["proportion calculator", "solve proportion", "cross multiplication calculator", "ratio proportion solver"],
    priority: "medium",
    isNew: true,
  },
  {
    slug: "mixed-number-calculator",
    title: "Mixed Number Calculator",
    description: "Add, subtract, multiply or divide mixed numbers and get the result as a mixed number, improper fraction, and decimal.",
    category: "math-tools",
    emoji: "🔢",
    keywords: ["mixed number calculator", "mixed fraction calculator", "add mixed numbers", "mixed number to improper fraction"],
    priority: "medium",
    isNew: true,
  },
  {
    slug: "decimal-to-fraction-converter",
    title: "Decimal to Fraction Converter",
    description: "Convert a decimal, including repeating decimals, into a simplified fraction and mixed number.",
    category: "math-tools",
    emoji: "🧮",
    keywords: ["decimal to fraction converter", "convert decimal to fraction", "repeating decimal to fraction", "decimal to simplest fraction"],
    priority: "high",
    popular: true,
    isNew: true,
  },
  {
    slug: "fraction-to-decimal-converter",
    title: "Fraction to Decimal Converter",
    description: "Convert a fraction to its decimal value, rounded to your chosen precision, and see whether it terminates or repeats.",
    category: "math-tools",
    emoji: "➗",
    keywords: ["fraction to decimal converter", "convert fraction to decimal", "fraction to decimal calculator", "repeating decimal checker"],
    priority: "medium",
    isNew: true,
  },
];

export const mathASeo: Record<string, SeoContent> = {
  "percentage-difference-calculator": {
    whatIs: "The Percentage Difference Calculator measures how far apart two values are, expressed as a percentage of their average. Unlike percentage change, which treats one number as the original and the other as the new value, percentage difference is symmetric — it doesn't matter which value you enter first, since the calculation uses the mean of both numbers as its base. This makes it the right tool when comparing two independent measurements, such as two lab results or two price quotes, where neither one is inherently the 'before' value.",
    extraSeo: "Covers searches like 'percentage difference calculator', 'percent difference formula', 'compare two numbers percentage' and 'relative difference calculator'.",
    example: "Compare 40 and 50:\n\nMean = (40 + 50) / 2 = 45\nDifference = |40 − 50| = 10\nPercentage difference = (10 / 45) × 100 = 22.22%",
    formula: "Percentage difference = |A − B| / ((A + B) / 2) × 100%",
    applications: [
      "Comparing two independent lab or experimental measurements",
      "Evaluating the spread between two competing price quotes",
      "Checking consistency between two survey results",
      "Comparing performance metrics from two different sources",
      "Teaching the distinction between percentage difference and percentage change"
    ],
    faqs: [
      { q: "How is percentage difference different from percentage change?", a: "Percentage difference compares two values symmetrically using their average as the base, with no concept of 'before' or 'after'. Percentage change uses one specific value (the original) as the base, so it is directional and depends on which number came first." },
      { q: "Can percentage difference be negative?", a: "No, because the formula uses an absolute value in the numerator, the result is always zero or positive." },
      { q: "What happens if both values are zero?", a: "The calculation is undefined because the average would be zero, causing division by zero, so the calculator shows an error in that case." },
      { q: "When should I use this instead of percentage change?", a: "Use percentage difference when comparing two values that are both measurements of the same kind with no clear starting point, such as two different sensors' readings." }
    ]
  },
  "proportion-calculator": {
    whatIs: "The Proportion Calculator solves for an unknown term in a proportion, an equation stating that two ratios are equal: a/b = c/d. Enter any three of the four values and choose which one is missing, and the calculator applies cross multiplication to find it instantly. Proportions come up constantly in everyday math — scaling a recipe, converting units, calculating map distances, or solving similar-triangle problems — and this tool removes the manual algebra of rearranging the cross-multiplied equation.",
    extraSeo: "Matches searches like 'proportion calculator', 'solve for x proportion', 'cross multiplication calculator' and 'ratio proportion solver'.",
    example: "Solve 3/4 = x/20:\n\nCross multiply: 3 × 20 = 4 × x\n60 = 4x\nx = 15",
    formula: "a/b = c/d  ⟺  a × d = b × c\nSolve for the missing term by rearranging this cross-multiplied equation.",
    applications: [
      "Scaling recipe ingredient quantities up or down",
      "Solving similar-triangle and geometry proportion problems",
      "Converting between units using known conversion ratios",
      "Calculating map distances from a given scale",
      "Checking algebra homework involving proportions"
    ],
    faqs: [
      { q: "What is cross multiplication?", a: "In a proportion a/b = c/d, cross multiplication means a × d = b × c. Rearranging this equation lets you solve for any single unknown term when the other three values are known." },
      { q: "Can any of the four terms be the unknown?", a: "Yes, you can choose to solve for a, b, c, or d; the calculator rearranges the cross-multiplication formula accordingly." },
      { q: "What if one of the known values is zero?", a: "If a zero value would require dividing by zero to find the answer, the calculator shows an error instead of an invalid result." },
      { q: "Can proportions include decimal or negative numbers?", a: "Yes, the calculator accepts decimals and negative numbers for the three known terms." }
    ]
  },
  "mixed-number-calculator": {
    whatIs: "The Mixed Number Calculator performs addition, subtraction, multiplication, and division on mixed numbers — values written as a whole number plus a fraction, like 2 3/4. It converts each mixed number to an improper fraction, performs the arithmetic using exact integer math, simplifies the result with the greatest common divisor, and converts back to a mixed number for the final answer. You also get the simplified improper fraction and the decimal equivalent, so you can cross-check your work in whichever form is most useful.",
    extraSeo: "Handles searches like 'mixed number calculator', 'mixed fraction calculator', 'add mixed numbers calculator' and 'mixed number to improper fraction'.",
    example: "Add 2 1/3 + 1 1/2:\n\nConvert to improper fractions: 7/3 + 3/2\nCommon denominator: 14/6 + 9/6 = 23/6\nSimplified mixed number: 3 5/6",
    formula: "Mixed number W N/D converts to improper fraction (W×D + N)/D.\nArithmetic is performed on the improper fractions, then simplified using GCD and converted back to mixed number form.",
    applications: [
      "Adding or subtracting mixed-number measurements in cooking and carpentry",
      "Checking homework involving mixed number arithmetic",
      "Multiplying or dividing recipe quantities given as mixed numbers",
      "Converting calculation results between mixed, improper, and decimal forms",
      "Working with imperial measurements that use fractional inches"
    ],
    faqs: [
      { q: "How are negative mixed numbers handled?", a: "Enter a negative whole number part (e.g. -2) to indicate the entire mixed number is negative. The calculator converts it to a negative improper fraction before computing." },
      { q: "Does the result get automatically simplified?", a: "Yes, the resulting fraction is reduced to lowest terms using the greatest common divisor before being converted back into a mixed number." },
      { q: "What if the numerator is left blank?", a: "A blank numerator is treated as zero, which is useful when one of your numbers is a whole number with no fractional part." },
      { q: "Can I divide by a mixed number that equals zero?", a: "No, division requires the second mixed number's improper fraction to be nonzero, and the calculator will show an error if it is zero." }
    ]
  },
  "decimal-to-fraction-converter": {
    whatIs: "The Decimal to Fraction Converter turns a decimal number into its simplified fraction and mixed-number form. It handles both terminating decimals, like 0.75, and repeating decimals entered with parentheses around the repeating digits, like 0.3(3) for 0.333... or 0.1(6) for 0.1666.... For repeating decimals, the converter uses exact algebra — setting up and solving the standard equation for converting repeating decimals to fractions — rather than approximating, so results like 0.3(3) = 1/3 come out exact.",
    extraSeo: "Covers searches like 'decimal to fraction converter', 'convert decimal to fraction', 'repeating decimal to fraction calculator' and 'decimal to simplest form fraction'.",
    example: "Convert 0.1(6) to a fraction:\n\n0.1(6) = 0.16666...\nUsing the repeating decimal formula: (16 − 1)/90 = 15/90 = 1/6",
    formula: "Terminating decimal: fraction = decimal digits / 10^(number of decimal places), then simplify with GCD.\nRepeating decimal a.b(c): fraction = (abc − ab) / (10^(len(b)+len(c)) − 10^len(b))",
    applications: [
      "Converting measurement decimals to fractions for woodworking or sewing",
      "Checking math homework answers for decimal-to-fraction conversion",
      "Finding the exact fraction behind a repeating decimal result",
      "Simplifying calculator output into a cleaner fractional form",
      "Teaching the algebraic method for converting repeating decimals"
    ],
    faqs: [
      { q: "How do I enter a repeating decimal?", a: "Wrap the repeating digits in parentheses after the decimal point, such as 0.1(6) for 0.1666... (which equals 1/6). The converter uses exact algebra to find the fraction rather than rounding." },
      { q: "Is the fraction always fully simplified?", a: "Yes, the numerator and denominator are divided by their greatest common divisor so the result is always in lowest terms." },
      { q: "Can I convert negative decimals?", a: "Yes, negative decimals are supported and the sign is preserved on the resulting fraction." },
      { q: "What if my decimal doesn't repeat but is very long?", a: "Terminating decimals of any length are converted directly using the number of decimal places as the denominator's power of ten, then simplified." }
    ]
  },
  "fraction-to-decimal-converter": {
    whatIs: "The Fraction to Decimal Converter divides a numerator by a denominator to produce a decimal value rounded to the number of decimal places you choose, and also tells you whether that fraction's decimal expansion terminates exactly or repeats forever. It determines this by simplifying the fraction and checking whether the denominator's only prime factors are 2 and 5 — if so, the decimal terminates; otherwise it repeats, like 1/3 = 0.333.... This is a quick way to convert fractions for calculations while understanding the nature of the resulting decimal.",
    extraSeo: "Matches searches like 'fraction to decimal converter', 'convert fraction to decimal calculator', 'does this fraction repeat' and 'fraction to decimal calculator with rounding'.",
    example: "Convert 5/8 to a decimal:\n\n5 ÷ 8 = 0.625\nDenominator 8 = 2^3, only factors of 2, so the decimal terminates exactly.",
    formula: "Decimal value = numerator ÷ denominator\nA fraction's decimal terminates if and only if, after simplifying, the denominator's only prime factors are 2 and/or 5.",
    applications: [
      "Converting fractions to decimals for spreadsheet or calculator use",
      "Checking whether a fraction has a terminating or repeating decimal",
      "Rounding fraction results to a specific number of decimal places",
      "Verifying fraction-to-decimal homework answers",
      "Converting measurement fractions, such as inches, into decimal form"
    ],
    faqs: [
      { q: "How do I know if a fraction's decimal repeats?", a: "After simplifying the fraction, if the denominator's only prime factors are 2 and 5, the decimal terminates. Otherwise, it repeats forever, such as 1/3 = 0.333..." },
      { q: "How many decimal places can I round to?", a: "You can choose any number of decimal places from 0 to 15 for the displayed result." },
      { q: "What happens if I enter zero as the denominator?", a: "Division by zero is undefined, so the calculator shows an error asking for a non-zero denominator." },
      { q: "Does the calculator simplify the fraction first?", a: "Yes, it simplifies the fraction internally to determine whether the decimal terminates, though the decimal value itself is computed directly from your original numerator and denominator." }
    ]
  },
};

export const mathARoutes = {
  "percentage-difference-calculator": lazy(() => import("@/tools/PercentageDifferenceCalculator")),
  "proportion-calculator": lazy(() => import("@/tools/ProportionCalculator")),
  "mixed-number-calculator": lazy(() => import("@/tools/MixedNumberCalculator")),
  "decimal-to-fraction-converter": lazy(() => import("@/tools/DecimalToFractionConverter")),
  "fraction-to-decimal-converter": lazy(() => import("@/tools/FractionToDecimalConverter")),
};
