import { Calculator, ArrowRightLeft, Type, Sparkles, GraduationCap, Code, Palette } from "lucide-react";

export type ToolCategory = "calculators" | "converters" | "text-tools" | "generators" | "student-tools" | "developer-tools" | "design-tools";

export interface ToolMeta {
  slug: string;
  title: string;
  description: string;
  category: ToolCategory;
  keywords: string[];
  featured?: boolean;
  popular?: boolean;
  isNew?: boolean;
}

export interface CategoryMeta {
  slug: ToolCategory;
  title: string;
  description: string;
  icon: typeof Calculator;
  colorClass: string;
  bgClass: string;
}

export const categories: CategoryMeta[] = [
  { slug: "calculators", title: "Calculators", description: "Math, finance, and everyday calculators", icon: Calculator, colorClass: "text-cat-calc", bgClass: "bg-cat-calc/10" },
  { slug: "converters", title: "Converters", description: "Unit and format converters", icon: ArrowRightLeft, colorClass: "text-cat-convert", bgClass: "bg-cat-convert/10" },
  { slug: "text-tools", title: "Text Tools", description: "Text manipulation and analysis", icon: Type, colorClass: "text-cat-text", bgClass: "bg-cat-text/10" },
  { slug: "generators", title: "Generators", description: "Generate passwords, names, and more", icon: Sparkles, colorClass: "text-cat-gen", bgClass: "bg-cat-gen/10" },
  { slug: "student-tools", title: "Student Tools", description: "Study aids and academic tools", icon: GraduationCap, colorClass: "text-cat-student", bgClass: "bg-cat-student/10" },
  { slug: "developer-tools", title: "Developer Tools", description: "JSON, CSV, UUID, JWT, and regex utilities", icon: Code, colorClass: "text-cat-dev", bgClass: "bg-cat-dev/10" },
  { slug: "design-tools", title: "Design Tools", description: "Gradients, palettes, and color utilities", icon: Palette, colorClass: "text-cat-design", bgClass: "bg-cat-design/10" },
];

export const tools: ToolMeta[] = [
  // Calculators
  { slug: "percentage-calculator", title: "Percentage Calculator", description: "Calculate percentages, increases, decreases, and ratios easily.", category: "calculators", keywords: ["percentage", "percent", "ratio"], featured: true, popular: true },
  { slug: "age-calculator", title: "Age Calculator", description: "Calculate exact age from date of birth in years, months, and days.", category: "calculators", keywords: ["age", "birthday", "dob"], popular: true },
  { slug: "discount-calculator", title: "Discount Calculator", description: "Calculate sale prices after applying discount percentages.", category: "calculators", keywords: ["discount", "sale", "price"], popular: true },
  { slug: "profit-loss-calculator", title: "Profit & Loss Calculator", description: "Calculate profit or loss amount and percentage.", category: "calculators", keywords: ["profit", "loss", "business"] },
  { slug: "loan-emi-calculator", title: "Loan EMI Calculator", description: "Calculate monthly EMI for loans with principal, rate, and tenure.", category: "calculators", keywords: ["loan", "emi", "mortgage"], featured: true },
  { slug: "simple-interest-calculator", title: "Simple Interest Calculator", description: "Calculate simple interest on principal over time.", category: "calculators", keywords: ["interest", "simple", "finance"] },
  { slug: "compound-interest-calculator", title: "Compound Interest Calculator", description: "Calculate compound interest with different compounding periods.", category: "calculators", keywords: ["compound", "interest", "investment"] },
  { slug: "gpa-calculator", title: "GPA Calculator", description: "Calculate your Grade Point Average from course grades and credits.", category: "calculators", keywords: ["gpa", "grades", "college"] },
  { slug: "basic-calculator", title: "Basic Calculator", description: "A simple calculator for addition, subtraction, multiplication, and division.", category: "calculators", keywords: ["basic", "calculator", "math", "arithmetic"], popular: true },
  { slug: "scientific-calculator", title: "Scientific Calculator", description: "Full scientific calculator with trigonometry, logarithms, powers, and roots.", category: "calculators", keywords: ["scientific", "trig", "sin", "cos", "log"], featured: true, popular: true },
  { slug: "logarithm-calculator", title: "Logarithm Calculator", description: "Calculate logarithms with any base including natural log and log base 10.", category: "calculators", keywords: ["log", "logarithm", "ln", "math"], isNew: true },
  { slug: "trigonometry-calculator", title: "Trigonometry Calculator", description: "Calculate sin, cos, tan, and their inverses in degrees or radians.", category: "calculators", keywords: ["trigonometry", "sin", "cos", "tan"], isNew: true },
  { slug: "fraction-calculator", title: "Fraction Calculator", description: "Add, subtract, multiply, and divide fractions with step-by-step results.", category: "calculators", keywords: ["fraction", "math", "divide"] },
  { slug: "bmi-calculator", title: "BMI Calculator", description: "Calculate your Body Mass Index and find your health category.", category: "calculators", keywords: ["bmi", "body", "mass", "health", "weight"], popular: true },
  { slug: "area-calculator", title: "Area Calculator", description: "Calculate the area of rectangles, circles, triangles, and more shapes.", category: "calculators", keywords: ["area", "shape", "geometry", "square"] },
  { slug: "speed-calculator", title: "Speed Calculator", description: "Calculate speed, distance, or time from any two known values.", category: "calculators", keywords: ["speed", "distance", "time", "velocity"] },
  { slug: "average-calculator", title: "Average Calculator", description: "Calculate mean, median, and mode from a set of numbers.", category: "calculators", keywords: ["average", "mean", "median", "mode"] },
  { slug: "tip-calculator", title: "Tip Calculator", description: "Calculate tip amount, total bill, and split between people.", category: "calculators", keywords: ["tip", "bill", "restaurant", "split"], popular: true, isNew: true },
  { slug: "percentage-change-calculator", title: "% Change Calculator", description: "Calculate percentage increase or decrease between two values.", category: "calculators", keywords: ["percentage", "change", "increase", "decrease"], isNew: true },

  // Converters
  { slug: "length-converter", title: "Length Converter", description: "Convert between meters, feet, inches, kilometers, miles, and more.", category: "converters", keywords: ["length", "distance", "meters", "feet"], popular: true },
  { slug: "weight-converter", title: "Weight Converter", description: "Convert between kilograms, pounds, ounces, grams, and more.", category: "converters", keywords: ["weight", "mass", "kg", "pounds"], popular: true },
  { slug: "temperature-converter", title: "Temperature Converter", description: "Convert between Celsius, Fahrenheit, and Kelvin.", category: "converters", keywords: ["temperature", "celsius", "fahrenheit"], featured: true },
  { slug: "time-converter", title: "Time Converter", description: "Convert between seconds, minutes, hours, days, and more.", category: "converters", keywords: ["time", "hours", "minutes"] },
  { slug: "binary-to-decimal", title: "Binary to Decimal Converter", description: "Convert binary numbers to decimal format.", category: "converters", keywords: ["binary", "decimal", "number system"] },
  { slug: "decimal-to-binary", title: "Decimal to Binary Converter", description: "Convert decimal numbers to binary format.", category: "converters", keywords: ["decimal", "binary", "number system"] },
  { slug: "roman-numeral-converter", title: "Roman Numeral Converter", description: "Convert between Roman numerals and decimal numbers.", category: "converters", keywords: ["roman", "numeral", "convert"] },
  { slug: "bytes-converter", title: "Bytes / KB / MB / GB Converter", description: "Convert between bytes, kilobytes, megabytes, gigabytes, and terabytes.", category: "converters", keywords: ["bytes", "kb", "mb", "gb", "storage"] },
  { slug: "angle-converter", title: "Angle Converter", description: "Convert between degrees, radians, gradians, and turns.", category: "converters", keywords: ["angle", "degree", "radian", "gradian"], isNew: true },
  { slug: "speed-converter", title: "Speed Converter", description: "Convert between km/h, mph, m/s, knots, and more speed units.", category: "converters", keywords: ["speed", "kmh", "mph", "velocity"], isNew: true },
  { slug: "energy-converter", title: "Energy Converter", description: "Convert between joules, calories, kilowatt-hours, and BTU.", category: "converters", keywords: ["energy", "joules", "calories", "kwh"], isNew: true },
  { slug: "pressure-converter", title: "Pressure Converter", description: "Convert between Pascal, bar, PSI, atm, and mmHg.", category: "converters", keywords: ["pressure", "pascal", "bar", "psi", "atm"], isNew: true },
  { slug: "volume-converter", title: "Volume Converter", description: "Convert between liters, gallons, cups, milliliters, and more.", category: "converters", keywords: ["volume", "liters", "gallons", "cups"], isNew: true },
  { slug: "number-base-converter", title: "Number Base Converter", description: "Convert numbers between binary, octal, decimal, and hexadecimal.", category: "converters", keywords: ["base", "binary", "hex", "octal"], isNew: true },
  { slug: "color-converter", title: "Color Converter", description: "Convert colors between HEX, RGB, and HSL formats.", category: "converters", keywords: ["color", "hex", "rgb", "hsl"], isNew: true },
  { slug: "currency-formatter", title: "Currency Formatter", description: "Format numbers in multiple currency styles like USD, EUR, GBP.", category: "converters", keywords: ["currency", "format", "money", "dollar"] },

  // Text Tools
  { slug: "word-counter", title: "Word Counter", description: "Count words, characters, sentences, and paragraphs in text.", category: "text-tools", keywords: ["word", "count", "character"], featured: true, popular: true },
  { slug: "character-counter", title: "Character Counter", description: "Count characters with and without spaces in your text.", category: "text-tools", keywords: ["character", "count", "length"] },
  { slug: "text-case-converter", title: "Text Case Converter", description: "Convert text to uppercase, lowercase, title case, and more.", category: "text-tools", keywords: ["uppercase", "lowercase", "case"], popular: true },
  { slug: "remove-extra-spaces", title: "Remove Extra Spaces", description: "Clean up text by removing extra whitespace and blank lines.", category: "text-tools", keywords: ["spaces", "whitespace", "clean"] },
  { slug: "reverse-text", title: "Reverse Text", description: "Reverse any text string character by character.", category: "text-tools", keywords: ["reverse", "backwards", "mirror"] },
  { slug: "sort-text", title: "Sort Text Alphabetically", description: "Sort lines of text in alphabetical or reverse order.", category: "text-tools", keywords: ["sort", "alphabetical", "order"] },
  { slug: "remove-duplicate-lines", title: "Remove Duplicate Lines", description: "Remove duplicate lines from text keeping unique entries.", category: "text-tools", keywords: ["duplicate", "unique", "remove"] },
  { slug: "text-repeater", title: "Text Repeater", description: "Repeat any text multiple times with optional separators.", category: "text-tools", keywords: ["repeat", "text", "duplicate", "copy"], isNew: true },
  { slug: "remove-line-breaks", title: "Remove Line Breaks", description: "Remove line breaks and join text into a single paragraph.", category: "text-tools", keywords: ["line break", "newline", "paragraph", "join"], isNew: true },
  { slug: "text-diff-checker", title: "Text Difference Checker", description: "Compare two texts side by side and highlight the differences.", category: "text-tools", keywords: ["diff", "compare", "difference", "text"], isNew: true },
  { slug: "markdown-previewer", title: "Markdown Previewer", description: "Write Markdown and see a live HTML preview side by side.", category: "text-tools", keywords: ["markdown", "preview", "html", "format"], isNew: true },
  { slug: "text-to-slug", title: "Text to Slug", description: "Convert any text into a URL-friendly slug format.", category: "text-tools", keywords: ["slug", "url", "seo", "permalink"], isNew: true },
  { slug: "reading-time-estimator", title: "Reading Time Estimator", description: "Estimate reading and speaking time for any text.", category: "text-tools", keywords: ["reading", "time", "words", "estimate"], isNew: true },
  { slug: "text-encryptor", title: "Text Encryptor", description: "Encrypt and decrypt text using Caesar cipher substitution.", category: "text-tools", keywords: ["encrypt", "decrypt", "cipher", "caesar"], isNew: true },

  // Generators
  { slug: "password-generator", title: "Password Generator", description: "Generate strong, secure passwords with customizable options.", category: "generators", keywords: ["password", "security", "random"], featured: true, popular: true },
  { slug: "random-number-generator", title: "Random Number Generator", description: "Generate random numbers within a specified range.", category: "generators", keywords: ["random", "number", "dice"] },
  { slug: "random-color-generator", title: "Random Color Generator", description: "Generate random colors in HEX, RGB, and HSL formats.", category: "generators", keywords: ["color", "hex", "rgb"] },
  { slug: "username-generator", title: "Username Generator", description: "Generate creative and unique usernames for any platform.", category: "generators", keywords: ["username", "name", "handle"] },
  { slug: "business-name-generator", title: "Business Name Generator", description: "Generate creative business name ideas for your startup.", category: "generators", keywords: ["business", "name", "startup"] },
  { slug: "lorem-ipsum-generator", title: "Lorem Ipsum Generator", description: "Generate placeholder text in paragraphs, sentences, or words.", category: "generators", keywords: ["lorem", "ipsum", "placeholder", "dummy"], isNew: true },
  { slug: "quotes-generator", title: "Quotes Generator", description: "Get random inspirational and motivational quotes.", category: "generators", keywords: ["quotes", "inspiration", "motivation"], isNew: true },
  { slug: "hash-generator", title: "Hash Generator", description: "Generate hash values for any text using multiple algorithms.", category: "generators", keywords: ["hash", "djb2", "checksum"], isNew: true },

  // Student Tools
  { slug: "pomodoro-timer", title: "Pomodoro Study Timer", description: "Stay focused with the Pomodoro technique – 25 min work, 5 min break.", category: "student-tools", keywords: ["pomodoro", "timer", "study", "focus"], featured: true, popular: true },
  { slug: "random-question-picker", title: "Random Question Picker", description: "Pick random questions from a list for quizzes and study sessions.", category: "student-tools", keywords: ["question", "random", "quiz", "study"] },
  { slug: "unit-circle-helper", title: "Unit Circle Helper", description: "Interactive unit circle reference with angles, radians, and coordinates.", category: "student-tools", keywords: ["unit circle", "trigonometry", "angles", "radians"], isNew: true },
  { slug: "countdown-timer", title: "Countdown Timer", description: "Set a custom countdown timer with hours, minutes, and seconds.", category: "student-tools", keywords: ["countdown", "timer", "alarm"], isNew: true },
  { slug: "stopwatch", title: "Stopwatch", description: "Precise stopwatch with lap tracking and centisecond accuracy.", category: "student-tools", keywords: ["stopwatch", "timer", "lap", "time"], isNew: true },
  { slug: "date-difference-calculator", title: "Date Difference", description: "Calculate the difference between two dates in days, weeks, months.", category: "student-tools", keywords: ["date", "difference", "days", "between"], isNew: true },
  { slug: "cgpa-to-percentage", title: "CGPA to Percentage", description: "Convert CGPA to percentage using standard formulas.", category: "student-tools", keywords: ["cgpa", "percentage", "grades", "college"], isNew: true },
  { slug: "json-formatter", title: "JSON Formatter", description: "Format, beautify, and minify JSON data with syntax validation.", category: "text-tools", keywords: ["json", "format", "beautify", "minify"], featured: true, isNew: true },
  { slug: "base64-encoder-decoder", title: "Base64 Encoder", description: "Encode text to Base64 or decode Base64 back to text.", category: "text-tools", keywords: ["base64", "encode", "decode"], isNew: true },
  { slug: "url-encoder-decoder", title: "URL Encoder", description: "Encode or decode URL components and special characters.", category: "text-tools", keywords: ["url", "encode", "decode", "percent"], isNew: true },

  // Date & Time (Student Tools)
  { slug: "days-until-date", title: "Days Until Date", description: "Calculate how many days remain until a selected future date.", category: "student-tools", keywords: ["days", "until", "countdown", "future"], isNew: true },
  { slug: "business-days-calculator", title: "Business Days Calculator", description: "Calculate business days between two dates excluding weekends.", category: "student-tools", keywords: ["business", "working", "days", "weekends"], isNew: true, popular: true },
  { slug: "workdays-calculator", title: "Workdays Calculator", description: "Calculate total working days between two dates.", category: "student-tools", keywords: ["workdays", "working", "business"], isNew: true },
  { slug: "week-number-calculator", title: "Week Number Calculator", description: "Find the ISO week number for any date.", category: "student-tools", keywords: ["week", "number", "iso", "date"], isNew: true },
  { slug: "unix-timestamp-converter", title: "Unix Timestamp Converter", description: "Convert Unix timestamps to readable dates and vice versa.", category: "student-tools", keywords: ["unix", "timestamp", "epoch", "date"], isNew: true, popular: true },

  // Math Calculators
  { slug: "lcm-calculator", title: "LCM Calculator", description: "Calculate the least common multiple of multiple numbers.", category: "calculators", keywords: ["lcm", "least", "common", "multiple"], isNew: true },
  { slug: "gcd-calculator", title: "GCD Calculator", description: "Calculate the greatest common divisor of multiple numbers.", category: "calculators", keywords: ["gcd", "greatest", "common", "divisor"], isNew: true },
  { slug: "prime-factorization", title: "Prime Factorization", description: "Find the prime factors of any number with step-by-step breakdown.", category: "calculators", keywords: ["prime", "factor", "factorization", "math"], isNew: true },
  { slug: "matrix-calculator", title: "Matrix Calculator", description: "Perform matrix addition, subtraction, and multiplication.", category: "calculators", keywords: ["matrix", "linear", "algebra", "math"], isNew: true },
  { slug: "determinant-calculator", title: "Determinant Calculator", description: "Calculate the determinant of a 2x2 or 3x3 matrix.", category: "calculators", keywords: ["determinant", "matrix", "linear", "algebra"], isNew: true },

  // Finance Calculators
  { slug: "gst-calculator", title: "GST Calculator", description: "Calculate GST amount and final price for any tax rate.", category: "calculators", keywords: ["gst", "tax", "india", "goods"], isNew: true, popular: true },
  { slug: "savings-calculator", title: "Savings Calculator", description: "Calculate future savings based on monthly contributions and interest.", category: "calculators", keywords: ["savings", "monthly", "interest", "future"], isNew: true },
  { slug: "investment-calculator", title: "Investment Calculator", description: "Estimate investment growth with compound interest over time.", category: "calculators", keywords: ["investment", "growth", "compound", "returns"], isNew: true, featured: true },
  { slug: "inflation-calculator", title: "Inflation Calculator", description: "Calculate how inflation affects purchasing power over time.", category: "calculators", keywords: ["inflation", "purchasing", "power", "money"], isNew: true },
  { slug: "sales-tax-calculator", title: "Sales Tax Calculator", description: "Calculate price after applying sales tax percentages.", category: "calculators", keywords: ["sales", "tax", "price", "total"], isNew: true },

  // Developer Tools
  { slug: "json-to-csv", title: "JSON to CSV Converter", description: "Convert JSON data into downloadable CSV format.", category: "developer-tools", keywords: ["json", "csv", "convert", "data"], isNew: true, featured: true },
  { slug: "csv-to-json", title: "CSV to JSON Converter", description: "Convert CSV data into structured JSON format.", category: "developer-tools", keywords: ["csv", "json", "convert", "data"], isNew: true },
  { slug: "uuid-generator", title: "UUID Generator", description: "Generate random UUID v4 identifiers instantly.", category: "developer-tools", keywords: ["uuid", "guid", "unique", "identifier"], isNew: true, popular: true },
  { slug: "jwt-decoder", title: "JWT Decoder", description: "Decode JSON Web Tokens and display header, payload, and signature.", category: "developer-tools", keywords: ["jwt", "token", "decode", "json"], isNew: true, popular: true },
  { slug: "regex-tester", title: "Regex Tester", description: "Test regular expressions with live matching and highlighting.", category: "developer-tools", keywords: ["regex", "regular", "expression", "test"], isNew: true, featured: true },

  // Design Tools
  { slug: "gradient-generator", title: "Gradient Generator", description: "Generate beautiful CSS gradients with live preview and copy code.", category: "design-tools", keywords: ["gradient", "css", "color", "background"], isNew: true, featured: true, popular: true },
  { slug: "color-palette-generator", title: "Color Palette Generator", description: "Generate harmonious color palettes from any base color.", category: "design-tools", keywords: ["palette", "color", "harmony", "scheme"], isNew: true, popular: true },
  { slug: "contrast-checker", title: "Contrast Checker", description: "Check color contrast ratios for WCAG accessibility compliance.", category: "design-tools", keywords: ["contrast", "wcag", "accessibility", "a11y"], isNew: true },
  { slug: "rgb-to-cmyk", title: "RGB to CMYK Converter", description: "Convert RGB color values to CMYK for print design.", category: "design-tools", keywords: ["rgb", "cmyk", "print", "color"], isNew: true },
  { slug: "image-color-picker", title: "Image Color Picker", description: "Pick colors from uploaded images and get HEX, RGB values.", category: "design-tools", keywords: ["image", "color", "picker", "eyedropper"], isNew: true },
];

export const getToolsByCategory = (cat: ToolCategory) => tools.filter(t => t.category === cat);
export const getFeaturedTools = () => tools.filter(t => t.featured);
export const getPopularTools = () => tools.filter(t => t.popular);
export const getNewTools = () => tools.filter(t => t.isNew);
export const getRelatedTools = (slug: string, count = 6) => {
  const tool = tools.find(t => t.slug === slug);
  if (!tool) return [];
  return tools.filter(t => t.slug !== slug && t.category === tool.category).slice(0, count);
};
export const getCategoryMeta = (slug: string) => categories.find(c => c.slug === slug);
export const getToolMeta = (slug: string) => tools.find(t => t.slug === slug);
