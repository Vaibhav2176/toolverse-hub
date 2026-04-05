import { Calculator, ArrowRightLeft, Type, Sparkles, GraduationCap, Code, Palette } from "lucide-react";

export type ToolCategory = "calculators" | "converters" | "text-tools" | "generators" | "student-tools" | "developer-tools" | "design-tools";
export type ToolPriority = "high" | "medium" | "normal";

export interface ToolMeta {
  slug: string;
  title: string;
  description: string;
  category: ToolCategory;
  keywords: string[];
  emoji: string;
  priority?: ToolPriority;
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

const priorityOrder: Record<ToolPriority, number> = { high: 0, medium: 1, normal: 2 };

export const tools: ToolMeta[] = [
  // Calculators
  { slug: "basic-calculator", title: "Basic Calculator", description: "A simple calculator for addition, subtraction, multiplication, and division.", category: "calculators", keywords: ["basic", "calculator", "math", "arithmetic"], emoji: "🧮", priority: "high", popular: true },
  { slug: "scientific-calculator", title: "Scientific Calculator", description: "Full scientific calculator with trigonometry, logarithms, powers, and roots.", category: "calculators", keywords: ["scientific", "trig", "sin", "cos", "log"], emoji: "🔬", priority: "high", featured: true, popular: true },
  { slug: "percentage-calculator", title: "Percentage Calculator", description: "Calculate percentages, increases, decreases, and ratios easily.", category: "calculators", keywords: ["percentage", "percent", "ratio"], emoji: "📊", priority: "high", featured: true, popular: true },
  { slug: "loan-emi-calculator", title: "Loan EMI Calculator", description: "Calculate monthly EMI for loans with principal, rate, and tenure.", category: "calculators", keywords: ["loan", "emi", "mortgage"], emoji: "🏦", priority: "high", featured: true },
  { slug: "bmi-calculator", title: "BMI Calculator", description: "Calculate your Body Mass Index and find your health category.", category: "calculators", keywords: ["bmi", "body", "mass", "health", "weight"], emoji: "⚖️", priority: "high", popular: true },
  { slug: "simple-interest-calculator", title: "Simple Interest Calculator", description: "Calculate simple interest on principal over time.", category: "calculators", keywords: ["interest", "simple", "finance"], emoji: "💰", priority: "medium" },
  { slug: "compound-interest-calculator", title: "Compound Interest Calculator", description: "Calculate compound interest with different compounding periods.", category: "calculators", keywords: ["compound", "interest", "investment"], emoji: "📈", priority: "medium" },
  { slug: "logarithm-calculator", title: "Logarithm Calculator", description: "Calculate logarithms with any base including natural log and log base 10.", category: "calculators", keywords: ["log", "logarithm", "ln", "math"], emoji: "📐", priority: "medium" },
  { slug: "trigonometry-calculator", title: "Trigonometry Calculator", description: "Calculate sin, cos, tan, and their inverses in degrees or radians.", category: "calculators", keywords: ["trigonometry", "sin", "cos", "tan"], emoji: "📏", priority: "medium" },
  { slug: "age-calculator", title: "Age Calculator", description: "Calculate exact age from date of birth in years, months, and days.", category: "calculators", keywords: ["age", "birthday", "dob"], emoji: "🎂", popular: true },
  { slug: "discount-calculator", title: "Discount Calculator", description: "Calculate sale prices after applying discount percentages.", category: "calculators", keywords: ["discount", "sale", "price"], emoji: "🏷️", popular: true },
  { slug: "profit-loss-calculator", title: "Profit & Loss Calculator", description: "Calculate profit or loss amount and percentage.", category: "calculators", keywords: ["profit", "loss", "business"], emoji: "💹" },
  { slug: "gpa-calculator", title: "GPA Calculator", description: "Calculate your Grade Point Average from course grades and credits.", category: "calculators", keywords: ["gpa", "grades", "college"], emoji: "🎓" },
  { slug: "fraction-calculator", title: "Fraction Calculator", description: "Add, subtract, multiply, and divide fractions with step-by-step results.", category: "calculators", keywords: ["fraction", "math", "divide"], emoji: "➗" },
  { slug: "area-calculator", title: "Area Calculator", description: "Calculate the area of rectangles, circles, triangles, and more shapes.", category: "calculators", keywords: ["area", "shape", "geometry", "square"], emoji: "📐" },
  { slug: "speed-calculator", title: "Speed Calculator", description: "Calculate speed, distance, or time from any two known values.", category: "calculators", keywords: ["speed", "distance", "time", "velocity"], emoji: "🏎️" },
  { slug: "average-calculator", title: "Average Calculator", description: "Calculate mean, median, and mode from a set of numbers.", category: "calculators", keywords: ["average", "mean", "median", "mode"], emoji: "📉" },
  { slug: "tip-calculator", title: "Tip Calculator", description: "Calculate tip amount, total bill, and split between people.", category: "calculators", keywords: ["tip", "bill", "restaurant", "split"], emoji: "🍽️", popular: true },
  { slug: "percentage-change-calculator", title: "% Change Calculator", description: "Calculate percentage increase or decrease between two values.", category: "calculators", keywords: ["percentage", "change", "increase", "decrease"], emoji: "🔄" },
  { slug: "lcm-calculator", title: "LCM Calculator", description: "Calculate the least common multiple of multiple numbers.", category: "calculators", keywords: ["lcm", "least", "common", "multiple"], emoji: "🔢" },
  { slug: "gcd-calculator", title: "GCD Calculator", description: "Calculate the greatest common divisor of multiple numbers.", category: "calculators", keywords: ["gcd", "greatest", "common", "divisor"], emoji: "🔢" },
  { slug: "prime-factorization", title: "Prime Factorization", description: "Find the prime factors of any number with step-by-step breakdown.", category: "calculators", keywords: ["prime", "factor", "factorization", "math"], emoji: "🧩" },
  { slug: "matrix-calculator", title: "Matrix Calculator", description: "Perform matrix addition, subtraction, and multiplication.", category: "calculators", keywords: ["matrix", "linear", "algebra", "math"], emoji: "🔲" },
  { slug: "determinant-calculator", title: "Determinant Calculator", description: "Calculate the determinant of a 2x2 or 3x3 matrix.", category: "calculators", keywords: ["determinant", "matrix", "linear", "algebra"], emoji: "🔳" },
  { slug: "gst-calculator", title: "GST Calculator", description: "Calculate GST amount and final price for any tax rate.", category: "calculators", keywords: ["gst", "tax", "india", "goods"], emoji: "🧾", popular: true },
  { slug: "savings-calculator", title: "Savings Calculator", description: "Calculate future savings based on monthly contributions and interest.", category: "calculators", keywords: ["savings", "monthly", "interest", "future"], emoji: "🐷" },
  { slug: "investment-calculator", title: "Investment Calculator", description: "Estimate investment growth with compound interest over time.", category: "calculators", keywords: ["investment", "growth", "compound", "returns"], emoji: "📈", featured: true },
  { slug: "inflation-calculator", title: "Inflation Calculator", description: "Calculate how inflation affects purchasing power over time.", category: "calculators", keywords: ["inflation", "purchasing", "power", "money"], emoji: "💸" },
  { slug: "sales-tax-calculator", title: "Sales Tax Calculator", description: "Calculate price after applying sales tax percentages.", category: "calculators", keywords: ["sales", "tax", "price", "total"], emoji: "🏪" },
  { slug: "electricity-cost-calculator", title: "Electricity Cost", description: "Calculate electricity cost based on wattage, usage hours, and rate.", category: "calculators", keywords: ["electricity", "cost", "power", "bill"], emoji: "💡" },
  { slug: "square-root-calculator", title: "Square Root Calculator", description: "Calculate square roots and nth roots of any number.", category: "calculators", keywords: ["square", "root", "math", "sqrt"], emoji: "√" },
  { slug: "exponent-calculator", title: "Exponent Calculator", description: "Calculate powers and exponents of any base number.", category: "calculators", keywords: ["exponent", "power", "math"], emoji: "🔺" },
  { slug: "ratio-calculator", title: "Ratio Calculator", description: "Solve ratios, scale values, and find missing ratio terms.", category: "calculators", keywords: ["ratio", "proportion", "scale"], emoji: "⚖️" },
  { slug: "standard-deviation-calculator", title: "Standard Deviation", description: "Calculate mean, variance, and standard deviation from a dataset.", category: "calculators", keywords: ["standard", "deviation", "variance", "statistics"], emoji: "📊", isNew: true },
  { slug: "pythagorean-calculator", title: "Pythagorean Theorem", description: "Calculate the hypotenuse or side of a right triangle.", category: "calculators", keywords: ["pythagorean", "triangle", "hypotenuse", "geometry"], emoji: "📐", isNew: true },
  { slug: "permutation-calculator", title: "Permutation Calculator", description: "Calculate permutations P(n, r) for arrangements.", category: "calculators", keywords: ["permutation", "arrangement", "nPr", "math"], emoji: "🔢", isNew: true },
  { slug: "combination-calculator", title: "Combination Calculator", description: "Calculate combinations C(n, r) for selections.", category: "calculators", keywords: ["combination", "selection", "nCr", "math"], emoji: "🎯", isNew: true },
  { slug: "percentage-to-fraction", title: "Percentage to Fraction", description: "Convert any percentage to its simplified fraction form.", category: "calculators", keywords: ["percentage", "fraction", "convert", "simplify"], emoji: "🔄", isNew: true },
  { slug: "number-to-words", title: "Number to Words", description: "Convert numbers into their written English word form.", category: "calculators", keywords: ["number", "words", "english", "spell"], emoji: "🔤", isNew: true },

  // Converters
  { slug: "currency-converter", title: "Currency Converter", description: "Convert between 10 major world currencies with static exchange rates.", category: "converters", keywords: ["currency", "exchange", "money", "convert"], emoji: "💱", priority: "high", popular: true },
  { slug: "length-converter", title: "Length Converter", description: "Convert between meters, feet, inches, kilometers, miles, and more.", category: "converters", keywords: ["length", "distance", "meters", "feet"], emoji: "📏", priority: "high", popular: true },
  { slug: "weight-converter", title: "Weight Converter", description: "Convert between kilograms, pounds, ounces, grams, and more.", category: "converters", keywords: ["weight", "mass", "kg", "pounds"], emoji: "⚖️", priority: "high", popular: true },
  { slug: "temperature-converter", title: "Temperature Converter", description: "Convert between Celsius, Fahrenheit, and Kelvin.", category: "converters", keywords: ["temperature", "celsius", "fahrenheit"], emoji: "🌡️", priority: "high", featured: true },
  { slug: "volume-converter", title: "Volume Converter", description: "Convert between liters, gallons, cups, milliliters, and more.", category: "converters", keywords: ["volume", "liters", "gallons", "cups"], emoji: "🧪", priority: "high" },
  { slug: "angle-converter", title: "Angle Converter", description: "Convert between degrees, radians, gradians, and turns.", category: "converters", keywords: ["angle", "degree", "radian", "gradian"], emoji: "🔄", priority: "medium" },
  { slug: "speed-converter", title: "Speed Converter", description: "Convert between km/h, mph, m/s, knots, and more speed units.", category: "converters", keywords: ["speed", "kmh", "mph", "velocity"], emoji: "💨", priority: "medium" },
  { slug: "energy-converter", title: "Energy Converter", description: "Convert between joules, calories, kilowatt-hours, and BTU.", category: "converters", keywords: ["energy", "joules", "calories", "kwh"], emoji: "⚡", priority: "medium" },
  { slug: "pressure-converter", title: "Pressure Converter", description: "Convert between Pascal, bar, PSI, atm, and mmHg.", category: "converters", keywords: ["pressure", "pascal", "bar", "psi", "atm"], emoji: "🔧", priority: "medium" },
  { slug: "time-converter", title: "Time Converter", description: "Convert between seconds, minutes, hours, days, and more.", category: "converters", keywords: ["time", "hours", "minutes"], emoji: "⏱️" },
  { slug: "binary-to-decimal", title: "Binary to Decimal Converter", description: "Convert binary numbers to decimal format.", category: "converters", keywords: ["binary", "decimal", "number system"], emoji: "🔢" },
  { slug: "decimal-to-binary", title: "Decimal to Binary Converter", description: "Convert decimal numbers to binary format.", category: "converters", keywords: ["decimal", "binary", "number system"], emoji: "💻" },
  { slug: "roman-numeral-converter", title: "Roman Numeral Converter", description: "Convert between Roman numerals and decimal numbers.", category: "converters", keywords: ["roman", "numeral", "convert"], emoji: "🏛️" },
  { slug: "bytes-converter", title: "Bytes / KB / MB / GB Converter", description: "Convert between bytes, kilobytes, megabytes, gigabytes, and terabytes.", category: "converters", keywords: ["bytes", "kb", "mb", "gb", "storage"], emoji: "💾" },
  { slug: "number-base-converter", title: "Number Base Converter", description: "Convert numbers between binary, octal, decimal, and hexadecimal.", category: "converters", keywords: ["base", "binary", "hex", "octal"], emoji: "🔣" },
  { slug: "color-converter", title: "Color Converter", description: "Convert colors between HEX, RGB, and HSL formats.", category: "converters", keywords: ["color", "hex", "rgb", "hsl"], emoji: "🎨" },
  { slug: "currency-formatter", title: "Currency Formatter", description: "Format numbers in multiple currency styles like USD, EUR, GBP.", category: "converters", keywords: ["currency", "format", "money", "dollar"], emoji: "💵" },
  { slug: "frequency-converter", title: "Frequency Converter", description: "Convert between Hz, kHz, MHz, GHz, and RPM.", category: "converters", keywords: ["frequency", "hertz", "mhz", "ghz"], emoji: "📡" },
  { slug: "data-transfer-rate-converter", title: "Data Rate Converter", description: "Convert between bps, Kbps, Mbps, Gbps, and bytes per second.", category: "converters", keywords: ["data", "rate", "mbps", "bandwidth"], emoji: "📶" },
  { slug: "area-converter", title: "Area Converter", description: "Convert between sq meters, sq feet, acres, hectares, and sq miles.", category: "converters", keywords: ["area", "square", "feet", "meters", "acres"], emoji: "📐" },
  { slug: "power-converter", title: "Power Converter", description: "Convert between watts, kilowatts, megawatts, horsepower, and BTU/h.", category: "converters", keywords: ["power", "watts", "kilowatts", "horsepower"], emoji: "🔌" },
  { slug: "fuel-efficiency-converter", title: "Fuel Efficiency Converter", description: "Convert between km/L, mpg (US), mpg (UK), and L/100km.", category: "converters", keywords: ["fuel", "mpg", "efficiency", "mileage"], emoji: "⛽" },
  { slug: "density-converter", title: "Density Converter", description: "Convert between kg/m³, g/cm³, lb/ft³, and other density units.", category: "converters", keywords: ["density", "mass", "volume", "kg"], emoji: "🧊" },
  { slug: "illuminance-converter", title: "Illuminance Converter", description: "Convert between lux, foot-candle, phot, and kilolux.", category: "converters", keywords: ["illuminance", "lux", "light", "foot-candle"], emoji: "💡" },
  { slug: "torque-converter", title: "Torque Converter", description: "Convert between N·m, lb·ft, lb·in, kg·cm, and dyn·cm.", category: "converters", keywords: ["torque", "newton", "meter", "pound", "foot"], emoji: "🔧", isNew: true },
  { slug: "force-converter", title: "Force Converter", description: "Convert between Newton, Kilonewton, Dyne, lbf, and kgf.", category: "converters", keywords: ["force", "newton", "dyne", "pound"], emoji: "💪", isNew: true },

  // Text Tools
  { slug: "word-counter", title: "Word Counter", description: "Count words, characters, sentences, and paragraphs in text.", category: "text-tools", keywords: ["word", "count", "character"], emoji: "📝", priority: "high", featured: true, popular: true },
  { slug: "character-counter", title: "Character Counter", description: "Count characters with and without spaces in your text.", category: "text-tools", keywords: ["character", "count", "length"], emoji: "🔤", priority: "high" },
  { slug: "text-case-converter", title: "Text Case Converter", description: "Convert text to uppercase, lowercase, title case, and more.", category: "text-tools", keywords: ["uppercase", "lowercase", "case"], emoji: "🔠", priority: "high", popular: true },
  { slug: "remove-extra-spaces", title: "Remove Extra Spaces", description: "Clean up text by removing extra whitespace and blank lines.", category: "text-tools", keywords: ["spaces", "whitespace", "clean"], emoji: "🧹" },
  { slug: "reverse-text", title: "Reverse Text", description: "Reverse any text string character by character.", category: "text-tools", keywords: ["reverse", "backwards", "mirror"], emoji: "🔃" },
  { slug: "sort-text", title: "Sort Text Alphabetically", description: "Sort lines of text in alphabetical or reverse order.", category: "text-tools", keywords: ["sort", "alphabetical", "order"], emoji: "🔡" },
  { slug: "remove-duplicate-lines", title: "Remove Duplicate Lines", description: "Remove duplicate lines from text keeping unique entries.", category: "text-tools", keywords: ["duplicate", "unique", "remove"], emoji: "✂️" },
  { slug: "text-repeater", title: "Text Repeater", description: "Repeat any text multiple times with optional separators.", category: "text-tools", keywords: ["repeat", "text", "duplicate", "copy"], emoji: "🔁" },
  { slug: "remove-line-breaks", title: "Remove Line Breaks", description: "Remove line breaks and join text into a single paragraph.", category: "text-tools", keywords: ["line break", "newline", "paragraph", "join"], emoji: "↩️" },
  { slug: "text-diff-checker", title: "Text Difference Checker", description: "Compare two texts side by side and highlight the differences.", category: "text-tools", keywords: ["diff", "compare", "difference", "text"], emoji: "🔍" },
  { slug: "markdown-previewer", title: "Markdown Previewer", description: "Write Markdown and see a live HTML preview side by side.", category: "text-tools", keywords: ["markdown", "preview", "html", "format"], emoji: "📋" },
  { slug: "text-to-slug", title: "Text to Slug", description: "Convert any text into a URL-friendly slug format.", category: "text-tools", keywords: ["slug", "url", "seo", "permalink"], emoji: "🔗" },
  { slug: "reading-time-estimator", title: "Reading Time Estimator", description: "Estimate reading and speaking time for any text.", category: "text-tools", keywords: ["reading", "time", "words", "estimate"], emoji: "📖" },
  { slug: "text-encryptor", title: "Text Encryptor", description: "Encrypt and decrypt text using Caesar cipher substitution.", category: "text-tools", keywords: ["encrypt", "decrypt", "cipher", "caesar"], emoji: "🔐" },
  { slug: "json-formatter", title: "JSON Formatter", description: "Format, beautify, and minify JSON data with syntax validation.", category: "text-tools", keywords: ["json", "format", "beautify", "minify"], emoji: "{ }", featured: true },
  { slug: "base64-encoder-decoder", title: "Base64 Encoder", description: "Encode text to Base64 or decode Base64 back to text.", category: "text-tools", keywords: ["base64", "encode", "decode"], emoji: "🔒" },
  { slug: "url-encoder-decoder", title: "URL Encoder", description: "Encode or decode URL components and special characters.", category: "text-tools", keywords: ["url", "encode", "decode", "percent"], emoji: "🌐" },
  { slug: "text-to-binary", title: "Text to Binary", description: "Convert text to binary representation and binary back to text.", category: "text-tools", keywords: ["text", "binary", "ascii", "convert"], emoji: "🔟" },
  { slug: "word-frequency-counter", title: "Word Frequency Counter", description: "Count how often each word appears in your text.", category: "text-tools", keywords: ["word", "frequency", "count", "analysis"], emoji: "📊" },
  { slug: "text-to-morse-code", title: "Morse Code Translator", description: "Convert text to Morse code and Morse code back to text.", category: "text-tools", keywords: ["morse", "code", "translate", "dots"], emoji: "📡" },
  { slug: "text-to-html", title: "Text to HTML", description: "Convert plain text to HTML with paragraph and line break tags.", category: "text-tools", keywords: ["text", "html", "convert", "paragraph"], emoji: "🌐", isNew: true },
  { slug: "find-and-replace", title: "Find and Replace", description: "Find and replace text with case-sensitive matching and counts.", category: "text-tools", keywords: ["find", "replace", "search", "text"], emoji: "🔍", isNew: true },
  { slug: "line-counter", title: "Line Counter", description: "Count total, non-empty, and empty lines in your text.", category: "text-tools", keywords: ["line", "count", "empty", "text"], emoji: "📏", isNew: true },
  { slug: "sentence-counter", title: "Sentence Counter", description: "Count sentences, paragraphs, and words in your text.", category: "text-tools", keywords: ["sentence", "paragraph", "count"], emoji: "📝", isNew: true },

  // Generators
  { slug: "password-generator", title: "Password Generator", description: "Generate strong, secure passwords with customizable options.", category: "generators", keywords: ["password", "security", "random"], emoji: "🔑", priority: "high", featured: true, popular: true },
  { slug: "random-number-generator", title: "Random Number Generator", description: "Generate random numbers within a specified range.", category: "generators", keywords: ["random", "number", "dice"], emoji: "🎲", priority: "high" },
  { slug: "random-color-generator", title: "Random Color Generator", description: "Generate random colors in HEX, RGB, and HSL formats.", category: "generators", keywords: ["color", "hex", "rgb"], emoji: "🌈" },
  { slug: "username-generator", title: "Username Generator", description: "Generate creative and unique usernames for any platform.", category: "generators", keywords: ["username", "name", "handle"], emoji: "👤" },
  { slug: "business-name-generator", title: "Business Name Generator", description: "Generate creative business name ideas for your startup.", category: "generators", keywords: ["business", "name", "startup"], emoji: "🏢" },
  { slug: "lorem-ipsum-generator", title: "Lorem Ipsum Generator", description: "Generate placeholder text in paragraphs, sentences, or words.", category: "generators", keywords: ["lorem", "ipsum", "placeholder", "dummy"], emoji: "📄" },
  { slug: "quotes-generator", title: "Quotes Generator", description: "Get random inspirational and motivational quotes.", category: "generators", keywords: ["quotes", "inspiration", "motivation"], emoji: "💬" },
  { slug: "hash-generator", title: "Hash Generator", description: "Generate hash values for any text using multiple algorithms.", category: "generators", keywords: ["hash", "djb2", "checksum"], emoji: "#️⃣" },
  { slug: "qr-text-generator", title: "QR Code Generator", description: "Generate QR codes from any text or URL using Canvas.", category: "generators", keywords: ["qr", "code", "barcode", "url"], emoji: "📱", popular: true },
  { slug: "password-strength-checker", title: "Password Strength Checker", description: "Check how strong your password is with detailed analysis.", category: "generators", keywords: ["password", "strength", "security", "check"], emoji: "🛡️" },

  // Student Tools
  { slug: "pomodoro-timer", title: "Pomodoro Study Timer", description: "Stay focused with the Pomodoro technique – 25 min work, 5 min break.", category: "student-tools", keywords: ["pomodoro", "timer", "study", "focus"], emoji: "🍅", priority: "high", featured: true, popular: true },
  { slug: "date-difference-calculator", title: "Date Difference", description: "Calculate the difference between two dates in days, weeks, months.", category: "student-tools", keywords: ["date", "difference", "days", "between"], emoji: "📅", priority: "high" },
  { slug: "countdown-timer", title: "Countdown Timer", description: "Set a custom countdown timer with hours, minutes, and seconds.", category: "student-tools", keywords: ["countdown", "timer", "alarm"], emoji: "⏳", priority: "high" },
  { slug: "random-question-picker", title: "Random Question Picker", description: "Pick random questions from a list for quizzes and study sessions.", category: "student-tools", keywords: ["question", "random", "quiz", "study"], emoji: "❓" },
  { slug: "unit-circle-helper", title: "Unit Circle Helper", description: "Interactive unit circle reference with angles, radians, and coordinates.", category: "student-tools", keywords: ["unit circle", "trigonometry", "angles", "radians"], emoji: "⭕" },
  { slug: "stopwatch", title: "Stopwatch", description: "Precise stopwatch with lap tracking and centisecond accuracy.", category: "student-tools", keywords: ["stopwatch", "timer", "lap", "time"], emoji: "⏱️" },
  { slug: "cgpa-to-percentage", title: "CGPA to Percentage", description: "Convert CGPA to percentage using standard formulas.", category: "student-tools", keywords: ["cgpa", "percentage", "grades", "college"], emoji: "🎓" },
  { slug: "days-until-date", title: "Days Until Date", description: "Calculate how many days remain until a selected future date.", category: "student-tools", keywords: ["days", "until", "countdown", "future"], emoji: "📆" },
  { slug: "business-days-calculator", title: "Business Days Calculator", description: "Calculate business days between two dates excluding weekends.", category: "student-tools", keywords: ["business", "working", "days", "weekends"], emoji: "🗓️", popular: true },
  { slug: "workdays-calculator", title: "Workdays Calculator", description: "Calculate total working days between two dates.", category: "student-tools", keywords: ["workdays", "working", "business"], emoji: "💼" },
  { slug: "week-number-calculator", title: "Week Number Calculator", description: "Find the ISO week number for any date.", category: "student-tools", keywords: ["week", "number", "iso", "date"], emoji: "📅" },
  { slug: "unix-timestamp-converter", title: "Unix Timestamp Converter", description: "Convert Unix timestamps to readable dates and vice versa.", category: "student-tools", keywords: ["unix", "timestamp", "epoch", "date"], emoji: "🕐", popular: true },
  { slug: "flashcard-maker", title: "Flashcard Maker", description: "Create and study flashcards with flip-to-reveal answers.", category: "student-tools", keywords: ["flashcard", "study", "quiz", "memorize"], emoji: "🃏", isNew: true },
  { slug: "grade-calculator", title: "Grade Calculator", description: "Calculate overall percentage and grade from subject marks.", category: "student-tools", keywords: ["grade", "marks", "percentage", "result"], emoji: "📝", isNew: true },

  // Developer Tools
  { slug: "json-to-csv", title: "JSON to CSV Converter", description: "Convert JSON data into downloadable CSV format.", category: "developer-tools", keywords: ["json", "csv", "convert", "data"], emoji: "📊", featured: true },
  { slug: "csv-to-json", title: "CSV to JSON Converter", description: "Convert CSV data into structured JSON format.", category: "developer-tools", keywords: ["csv", "json", "convert", "data"], emoji: "📋" },
  { slug: "uuid-generator", title: "UUID Generator", description: "Generate random UUID v4 identifiers instantly.", category: "developer-tools", keywords: ["uuid", "guid", "unique", "identifier"], emoji: "🆔", popular: true },
  { slug: "jwt-decoder", title: "JWT Decoder", description: "Decode JSON Web Tokens and display header, payload, and signature.", category: "developer-tools", keywords: ["jwt", "token", "decode", "json"], emoji: "🎫", popular: true },
  { slug: "regex-tester", title: "Regex Tester", description: "Test regular expressions with live matching and highlighting.", category: "developer-tools", keywords: ["regex", "regular", "expression", "test"], emoji: "🧪", featured: true },
  { slug: "cron-expression-parser", title: "Cron Expression Parser", description: "Parse cron expressions and see next scheduled run times.", category: "developer-tools", keywords: ["cron", "schedule", "job", "expression"], emoji: "⏰" },
  { slug: "chmod-calculator", title: "Chmod Calculator", description: "Calculate Unix file permissions in numeric and symbolic notation.", category: "developer-tools", keywords: ["chmod", "permissions", "unix", "linux"], emoji: "🔐" },
  { slug: "html-entity-encoder", title: "HTML Entity Encoder", description: "Encode and decode HTML entities and special characters.", category: "developer-tools", keywords: ["html", "entity", "encode", "decode"], emoji: "🔣", isNew: true },
  { slug: "ip-address-converter", title: "IP Address Converter", description: "Convert IPv4 addresses to binary, hexadecimal, decimal, and octal.", category: "developer-tools", keywords: ["ip", "address", "binary", "hex"], emoji: "🌐", isNew: true },

  // Design Tools
  { slug: "gradient-generator", title: "Gradient Generator", description: "Generate beautiful CSS gradients with live preview and copy code.", category: "design-tools", keywords: ["gradient", "css", "color", "background"], emoji: "🌈", featured: true, popular: true },
  { slug: "color-palette-generator", title: "Color Palette Generator", description: "Generate harmonious color palettes from any base color.", category: "design-tools", keywords: ["palette", "color", "harmony", "scheme"], emoji: "🎨", popular: true },
  { slug: "contrast-checker", title: "Contrast Checker", description: "Check color contrast ratios for WCAG accessibility compliance.", category: "design-tools", keywords: ["contrast", "wcag", "accessibility", "a11y"], emoji: "👁️" },
  { slug: "rgb-to-cmyk", title: "RGB to CMYK Converter", description: "Convert RGB color values to CMYK for print design.", category: "design-tools", keywords: ["rgb", "cmyk", "print", "color"], emoji: "🖨️" },
  { slug: "image-color-picker", title: "Image Color Picker", description: "Pick colors from uploaded images and get HEX, RGB values.", category: "design-tools", keywords: ["image", "color", "picker", "eyedropper"], emoji: "🔍" },
  { slug: "css-unit-converter", title: "CSS Unit Converter", description: "Convert between px, rem, em, vh, vw, and other CSS units.", category: "design-tools", keywords: ["css", "px", "rem", "em", "unit"], emoji: "📐" },
  { slug: "box-shadow-generator", title: "Box Shadow Generator", description: "Generate CSS box-shadow with live preview and copy code.", category: "design-tools", keywords: ["shadow", "css", "box-shadow", "design"], emoji: "🖼️", popular: true },
  { slug: "color-blender", title: "Color Blender", description: "Blend two colors and generate smooth color gradients between them.", category: "design-tools", keywords: ["color", "blend", "mix", "gradient"], emoji: "🎨", isNew: true },
  { slug: "border-radius-generator", title: "Border Radius Generator", description: "Generate CSS border-radius with visual preview for all corners.", category: "design-tools", keywords: ["border", "radius", "css", "rounded"], emoji: "⬜", isNew: true },
  { slug: "text-shadow-generator", title: "Text Shadow Generator", description: "Generate CSS text-shadow with live preview and copy code.", category: "design-tools", keywords: ["text", "shadow", "css", "effect"], emoji: "✨", isNew: true },
  { slug: "aspect-ratio-calculator", title: "Aspect Ratio Calculator", description: "Calculate and simplify aspect ratios for images and screens.", category: "design-tools", keywords: ["aspect", "ratio", "screen", "image"], emoji: "📺" },
];

export const getToolsByCategory = (cat: ToolCategory) =>
  tools
    .filter(t => t.category === cat)
    .sort((a, b) => priorityOrder[a.priority || "normal"] - priorityOrder[b.priority || "normal"]);

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
