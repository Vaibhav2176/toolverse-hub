import type { ToolCategory } from "@/config/tools";

export interface CategorySeo {
  title: string;
  description: string;
  intro: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
}

export const categorySeo: Record<ToolCategory, CategorySeo> = {
  calculators: {
    title: "Free Online Calculators – Math, Finance & Health",
    description:
      "Free online calculators for percentages, loans, interest, BMI, GPA, geometry and statistics. Each one runs in your browser with the formula explained.",
    intro:
      "Calculators are the fastest way to get a reliable number without setting up a spreadsheet. This collection covers everyday maths (percentages, averages, ratios), money (EMI, interest, tax, savings) and health or study figures such as BMI and GPA. Every calculator shows the formula it uses so you can check the working, and nothing you type is sent to a server.",
    highlights: [
      "Money: loan EMI, simple and compound interest, GST, sales tax, savings and inflation",
      "Everyday maths: percentages, averages, ratios, fractions, square roots and exponents",
      "Health and study: BMI, GPA, grade and CGPA calculations",
    ],
    faqs: [
      { q: "Are these calculators free to use?", a: "Yes. Every calculator on ToolVerse is free, needs no account, and has no usage limits." },
      { q: "Do the calculations happen on your servers?", a: "No. All maths runs locally in your browser, so the numbers you enter never leave your device." },
      { q: "Can I use them on a phone?", a: "Yes. Every calculator is responsive and designed to work with touch keyboards on mobile and tablet." },
    ],
  },
  converters: {
    title: "Free Unit Converters – Length, Weight, Temperature & More",
    description:
      "Convert length, weight, temperature, time, area, volume, speed, energy, currency and data units instantly with free browser-based converters.",
    intro:
      "Unit converters remove the guesswork from metric and imperial conversions. This section covers physical units (length, weight, temperature, area, volume, pressure, energy, power), digital units (bytes, data transfer rates, number bases) and everyday conversions such as currency and time. Conversions update as you type, in both directions.",
    highlights: [
      "Metric ↔ imperial for length, weight, area, volume and speed",
      "Science and engineering units: pressure, energy, power, torque, force and density",
      "Digital units: bytes, data transfer rate, binary, hex and other number bases",
    ],
    faqs: [
      { q: "How accurate are the conversions?", a: "Conversions use standard SI conversion factors and full floating-point precision, rounding only for display." },
      { q: "Can I convert in both directions?", a: "Yes. Change either side of the conversion and the other updates immediately." },
      { q: "Do the currency rates update live?", a: "The currency tools use built-in reference rates so they work offline; check a bank or market source before a real transaction." },
    ],
  },
  "text-tools": {
    title: "Free Online Text Tools – Count, Clean & Convert Text",
    description:
      "Count words and characters, change case, remove duplicate lines or extra spaces, compare text, and convert text to slugs, HTML, binary or Morse code.",
    intro:
      "Text tools handle the small editing jobs that are tedious by hand: counting words for an assignment, cleaning up pasted text, changing case across a whole document or comparing two drafts. Paste your text, get the result immediately, and copy it back out — the text is processed in your browser and never uploaded.",
    highlights: [
      "Counting: words, characters, sentences, lines and word frequency",
      "Cleaning: extra spaces, line breaks, duplicate lines, find and replace, sorting",
      "Transforming: case conversion, slugs, HTML, binary, Morse code and reading time",
    ],
    faqs: [
      { q: "Is my text stored anywhere?", a: "No. Text is processed entirely in your browser and is never sent to or saved on a server." },
      { q: "Is there a length limit?", a: "There is no fixed limit; very large documents are only limited by your device's memory." },
      { q: "Which tool should I use for essay word limits?", a: "Use the Word Counter for live word, sentence and paragraph counts, or the Character Counter when a limit is given in characters." },
    ],
  },
  generators: {
    title: "Free Online Generators – Passwords, UUIDs, Colors & Text",
    description:
      "Generate strong passwords, UUIDs, random numbers, colors, usernames, business names, lorem ipsum, hashes and QR text — free and instantly in your browser.",
    intro:
      "Generators produce useful random or structured data on demand: a strong password for a new account, a UUID for a database row, placeholder copy for a mockup, or a color to build a palette around. Randomness comes from your browser's built-in cryptographic and random APIs, so nothing is generated on a remote server.",
    highlights: [
      "Security: password generator, password strength checker and hash generator",
      "Development: UUIDs, random numbers, QR text and lorem ipsum placeholder copy",
      "Creative: usernames, business names, random colors and quotes",
    ],
    faqs: [
      { q: "Are generated passwords safe to use?", a: "Yes. They are created locally with your browser's crypto API and are never transmitted or logged." },
      { q: "Can I generate items in bulk?", a: "Several generators, including the UUID generator, let you produce multiple values at once and copy them together." },
      { q: "Is the randomness good enough for production?", a: "For passwords and UUIDs the tools use cryptographically secure randomness; the creative generators use ordinary randomness intended for ideas, not security." },
    ],
  },
  "student-tools": {
    title: "Free Student Tools – GPA, Grades, Timers & Study Helpers",
    description:
      "Free study tools for students: GPA and grade calculators, CGPA to percentage, flashcards, Pomodoro timer, date difference and unit circle helper.",
    intro:
      "These tools cover the recurring jobs of student life: working out where your grades stand, converting between grading systems, revising with flashcards and keeping focus with a timer. They are quick to open between classes and work on a phone as well as a laptop.",
    highlights: [
      "Grades: GPA, grade and CGPA-to-percentage calculations",
      "Study sessions: Pomodoro timer, countdown timer, stopwatch and flashcards",
      "Reference: unit circle helper, date difference and days-until-date",
    ],
    faqs: [
      { q: "Which grading scales are supported?", a: "The GPA and CGPA tools support the common 4.0, 10-point and percentage scales used by most schools and universities." },
      { q: "Do flashcards save between visits?", a: "Flashcards live in your browser session, so export or note anything you want to keep long term." },
      { q: "Are these tools free for classroom use?", a: "Yes. They are free to use and share with classmates; no account or install is needed." },
    ],
  },
  "developer-tools": {
    title: "Free Developer Tools – JSON, Base64, JWT, Regex & More",
    description:
      "Free browser-based developer tools: JSON formatter, Base64 and URL encoders, JWT decoder, regex tester, cron parser, chmod calculator and CSV converters.",
    intro:
      "Small developer utilities you would otherwise paste into a random website. These run entirely client-side, which matters when the payload you are inspecting is a token, a config file or customer data. Format a response, decode a JWT to check its claims, test a regex, or translate a cron expression into plain English.",
    highlights: [
      "Data: JSON formatter, JSON ↔ CSV conversion and HTML entity encoding",
      "Encoding: Base64, URL encoding, hashes, UUIDs and IP address conversion",
      "Ops and debugging: JWT decoder, regex tester, cron parser and chmod calculator",
    ],
    faqs: [
      { q: "Is it safe to paste a token or private payload?", a: "Yes. Every developer tool runs in your browser with no network request, so pasted data never leaves your machine." },
      { q: "Does the JWT decoder verify signatures?", a: "No. It decodes and displays the header and claims for inspection; signature verification needs the secret or public key on your server." },
      { q: "Can I use these offline?", a: "Once the page has loaded, the tools keep working without a network connection." },
    ],
  },
  "design-tools": {
    title: "Free Design Tools – Colors, Gradients, Shadows & Contrast",
    description:
      "Free design utilities: gradient generator, color palette builder, contrast checker, RGB to CMYK, box shadow, border radius and CSS unit converters.",
    intro:
      "Design tools for the CSS-level decisions that come up while building an interface: picking a palette, checking that text passes contrast requirements, tuning a shadow or gradient, and copying the resulting CSS straight into your stylesheet. Previews update live so you can judge the result before you commit to it.",
    highlights: [
      "Color: palette generator, color converter, blender, picker and RGB to CMYK",
      "CSS: gradients, box shadow, text shadow, border radius and unit conversion",
      "Accessibility: WCAG contrast checker for text and background pairs",
    ],
    faqs: [
      { q: "What contrast ratio do I need?", a: "WCAG AA requires at least 4.5:1 for normal text and 3:1 for large text; AA A requires 7:1 for normal text." },
      { q: "Can I copy the generated CSS?", a: "Yes. Each generator outputs ready-to-paste CSS you can copy with one click." },
      { q: "Is RGB to CMYK conversion print-accurate?", a: "It gives a close approximation; exact print output depends on your printer's color profile and paper." },
    ],
  },
  finance: {
    title: "Finance & Business Calculators – Salary, Margin, ROI & Tax",
    description:
      "Free finance and business calculators for salary, hourly pay, overtime, markup, margin, break-even, ROI, VAT, GST and invoices. Formulas explained, no signup.",
    intro:
      "These calculators answer the money questions that come up at work: what a job offer is worth per hour, what to charge to hit a target margin, how many units cover fixed costs, and what an invoice totals once discount and tax are applied. Enter your own figures — nothing is sent anywhere — and the formula behind each result is shown so you can check the maths yourself.",
    highlights: [
      "Pay: salary, hourly-to-salary, salary-to-hourly, overtime and commission",
      "Pricing and profit: markup, margin, break-even, revenue and ROI",
      "Tax and billing: VAT, GST split, invoice totals and discount-plus-tax pricing",
    ],
    faqs: [
      { q: "Do these calculators account for my country's tax rules?", a: "They use the rates you enter rather than any built-in tax table, so they work anywhere — but they are estimates, not tax advice." },
      { q: "What is the difference between markup and margin?", a: "Markup is profit as a percentage of cost; margin is profit as a percentage of the selling price. The same money gives a higher markup figure than margin." },
      { q: "Is anything I type saved?", a: "No. Every figure stays in your browser and is discarded when you close the page." },
    ],
  },
  "date-time": {
    title: "Date & Time Calculators – Duration, Time Zones & Weekdays",
    description:
      "Free date and time tools: add or subtract days from a date, measure the gap between two dates, convert time zones, find weekdays, leap years and days in a month.",
    intro:
      "Dates are easy to get wrong by hand — months differ in length, leap years shift things, and deadlines skip weekends. These tools do the counting for you: project a due date forward, measure an exact duration, check which weekday a date falls on, or line up a meeting across time zones using your browser's own time zone database.",
    highlights: [
      "Arithmetic: add or subtract days, weeks, months and years, and count business days",
      "Durations: exact gap between two dates, age in days and day of the year",
      "Reference: weekday lookup, leap years, days in a month and time zone conversion",
    ],
    faqs: [
      { q: "How are months added when the target month is shorter?", a: "Adding one month to 31 January lands on the last day of February, since that month has no 31st. The tools state the resulting date so there is no ambiguity." },
      { q: "Do the business-day tools know about public holidays?", a: "No. They exclude Saturdays and Sundays only, so subtract any local public holidays yourself." },
      { q: "Where does time zone data come from?", a: "From your browser's built-in IANA time zone database, which includes current daylight-saving rules." },
    ],
  },
  "math-tools": {
    title: "Math & Engineering Calculators – Algebra, Geometry & Stats",
    description:
      "Free math tools: quadratic and linear equation solvers, fractions, scientific notation, significant figures, variance, z-scores, triangles, circles and 3D shapes.",
    intro:
      "Step-by-step maths help for homework, lab reports and engineering work. Solve an equation and see the discriminant, convert a decimal to its simplest fraction, round to the right number of significant figures, or get the volume and surface area of a shape with the formula written out. Each tool shows how the answer was reached rather than just the number.",
    highlights: [
      "Algebra: quadratic and linear solvers, proportions, factorials and rounding",
      "Numbers: fractions, mixed numbers, scientific notation and significant figures",
      "Geometry and statistics: triangles, circles, volume, surface area, variance and z-scores",
    ],
    faqs: [
      { q: "Do the solvers show working?", a: "Yes. The equation solvers show the substituted formula and intermediate values, not only the final roots." },
      { q: "What happens with complex roots?", a: "When a quadratic has a negative discriminant the solver reports the complex roots in a + bi form instead of failing." },
      { q: "How precise are the results?", a: "Calculations use double-precision floating point, which is accurate to about 15 significant digits — far beyond most coursework needs." },
    ],
  },
  productivity: {
    title: "Productivity Tools – Time Duration, Work Hours & Decisions",
    description:
      "Free productivity tools: work hours and time duration calculators, sleep and wake-up timing, focus sessions, countdowns, team splitters, dice and random pickers.",
    intro:
      "Small tools for planning a day and settling small decisions: how many hours a shift adds up to once breaks are deducted, when to go to bed for a 6:30 alarm, how long until an event, or who goes first. They open fast, need no account, and work the same on a phone during a meeting as on a desktop.",
    highlights: [
      "Time planning: duration, work hours, meeting end times and focus sessions",
      "Countdowns: birthdays, custom events and habit streaks",
      "Random picks: decisions, teams, names, dice and coin flips",
    ],
    faqs: [
      { q: "Are the sleep tools medical advice?", a: "No. They estimate timing from average 90-minute sleep cycles and are a planning aid, not clinical guidance." },
      { q: "Is the randomness fair?", a: "The pickers and dice use your browser's random number generator, which gives an even spread across the options." },
      { q: "Do countdowns keep running if I close the tab?", a: "No. They recalculate from the target date each time you open the page, so the remaining time is always current." },
    ],
  },
  "writing-tools": {
    title: "Writing & Content Tools – Readability, Keywords & Text Stats",
    description:
      "Free writing tools: Flesch reading ease and readability checkers, keyword density, text statistics, paragraph counting, and extractors for emails, URLs and numbers.",
    intro:
      "Tools for people who write for a living or for a deadline: check whether a draft reads at the level your audience expects, see which words you lean on too heavily, count paragraphs against a brief, or pull every email address and link out of a messy block of text. Everything is analysed locally, so unpublished drafts stay private.",
    highlights: [
      "Readability: Flesch reading ease, grade-level estimates and text statistics",
      "SEO copy: keyword density, meta description and title length checks",
      "Cleanup and extraction: punctuation, numbers, emails, URLs and CSV conversion",
    ],
    faqs: [
      { q: "What is a good Flesch reading ease score?", a: "Around 60-70 suits a general audience; scores below 30 read like academic prose and above 80 like conversational writing." },
      { q: "How is keyword density judged?", a: "It is the share of total words a term accounts for. Roughly 0.5-2% reads naturally; forcing it higher looks like stuffing to both readers and search engines." },
      { q: "Is my draft uploaded anywhere?", a: "No. All text analysis happens in your browser and nothing is transmitted or stored." },
    ],
  },
};
