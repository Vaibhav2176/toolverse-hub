export interface SeoContent {
  whatIs: string;
  extraSeo?: string;
  example?: string;
  formula?: string;
  applications: string[];
  faqs: { q: string; a: string }[];
}

const seo: Record<string, SeoContent> = {
  "basic-calculator": {
    whatIs: "The Basic Calculator is a simple yet powerful online arithmetic tool that performs addition, subtraction, multiplication, and division instantly in your browser. Whether you are a student solving homework problems, a professional handling quick financial estimates, or anyone needing fast math, this calculator provides accurate results without the hassle of finding a physical device. It supports chained operations, decimal numbers, and follows standard mathematical order. Perfect for day-to-day calculations, this free tool replaces your desk calculator with a clean, responsive interface available on any device.",
    extraSeo: "This tool is commonly used by students, office workers, and anyone who needs quick arithmetic results without searching for a physical calculator. It runs entirely in your browser with zero downloads required.",
    example: "For example, to calculate 245 + 378 × 2:\n\n245 + 378 × 2 = 245 + 756 = 1,001\n\nThe calculator follows BODMAS order automatically.",
    formula: "Basic operations:\nAddition: a + b\nSubtraction: a − b\nMultiplication: a × b\nDivision: a ÷ b",
    applications: [
      "Quick everyday arithmetic like grocery bills and splitting expenses",
      "Student homework and exam preparation",
      "Business calculations such as invoicing and budgeting",
      "Verifying manual calculations for accuracy",
      "Teaching basic math concepts to young learners"
    ],
    faqs: [
      { q: "Does this calculator follow BODMAS/PEMDAS order?", a: "Yes, the calculator respects standard mathematical order of operations. Multiplication and division are evaluated before addition and subtraction, ensuring accurate results every time." },
      { q: "Can I use decimal numbers?", a: "Absolutely. You can enter decimal values for all operations. The calculator handles floating-point arithmetic and displays results with appropriate precision." },
      { q: "Is there a limit to how large the numbers can be?", a: "The calculator supports numbers within JavaScript's safe integer range, which is up to approximately 9 quadrillion. For most everyday calculations, you will never hit this limit." },
      { q: "Can I use keyboard input?", a: "Yes, you can type numbers and operators directly using your keyboard for faster input. The numpad keys, arithmetic symbols, and Enter key are all supported." }
    ]
  },
  "scientific-calculator": {
    whatIs: "The Scientific Calculator is an advanced online tool designed for students, engineers, and scientists who need to perform complex mathematical operations. It supports trigonometric functions like sine, cosine, and tangent, logarithmic calculations, exponentiation, square roots, and factorial computations. Unlike basic calculators, this tool handles parentheses and nested expressions with ease. Whether you are solving physics equations, engineering formulas, or advanced algebra problems, this browser-based scientific calculator offers the same functionality as expensive handheld models — completely free.",
    extraSeo: "Ideal for students preparing for competitive exams, engineers working on complex formulas, and researchers who need quick trigonometric or logarithmic computations — all without installing any software.",
    example: "To calculate sin(30°) + log(100):\n\nsin(30°) = 0.5\nlog(100) = 2\nResult = 0.5 + 2 = 2.5",
    formula: "Common formulas:\nsin²θ + cos²θ = 1\nlog(a×b) = log(a) + log(b)\nn! = n × (n-1) × ... × 1",
    applications: [
      "Solving trigonometry and calculus problems in school or university",
      "Engineering computations involving powers and logarithms",
      "Physics formulas requiring scientific notation",
      "Financial modeling with exponential growth calculations",
      "Competitive exam preparation for math-heavy tests"
    ],
    faqs: [
      { q: "What trigonometric functions are supported?", a: "The calculator supports sin, cos, tan, and their inverse functions (asin, acos, atan). You can switch between degrees and radians depending on your needs." },
      { q: "Can I calculate factorials?", a: "Yes, the calculator supports factorial calculations using the ! operator. It works for positive integers and is useful for combinatorics and probability problems." },
      { q: "Does it support logarithms with different bases?", a: "Yes, the calculator supports both natural logarithm (ln) and common logarithm (log base 10). For custom bases, you can use the change-of-base formula." },
      { q: "How accurate are the results?", a: "The calculator uses JavaScript's 64-bit floating-point arithmetic, providing up to 15-17 significant digits of precision — more than sufficient for virtually all scientific and engineering calculations." }
    ]
  },
  "percentage-calculator": {
    whatIs: "The Percentage Calculator is an essential online tool for computing percentages quickly and accurately. It helps you find what percentage one number is of another, calculate percentage increases or decreases, and determine values after applying a percentage. Used extensively in finance, shopping, academics, and business reporting, percentages are one of the most common mathematical operations in daily life. This tool removes the guesswork and manual calculation, giving you instant, precise results for discounts, tax rates, grade calculations, and statistical analysis.",
    extraSeo: "Whether you're calculating exam scores, shopping discounts, or business margins, this percentage calculator delivers instant and accurate results for students, shoppers, and professionals.",
    example: "If you want to find 20% of 500:\n\n20% of 500 = (20/100) × 500 = 100",
    formula: "Percentage = (Value / Total) × 100\nValue = (Percentage / 100) × Total\n% Change = ((New − Old) / Old) × 100",
    applications: [
      "Calculating discounts during shopping and sales",
      "Determining tax amounts on purchases",
      "Computing grade percentages for exams and coursework",
      "Analyzing financial returns and growth rates",
      "Business reports and profit margin calculations"
    ],
    faqs: [
      { q: "How do I calculate what percentage A is of B?", a: "Simply divide A by B and multiply by 100. For example, 25 is 50% of 50 because (25 ÷ 50) × 100 = 50%. Our tool does this instantly for any pair of numbers." },
      { q: "What is the difference between percentage increase and decrease?", a: "A percentage increase calculates how much a value has grown relative to the original, while a percentage decrease calculates how much it has shrunk. The formula uses the absolute value of the original number as the base." },
      { q: "Can I calculate reverse percentages?", a: "Yes, if you know the final price after a discount, you can calculate the original price. For example, if an item costs $80 after a 20% discount, the original was $80 ÷ 0.8 = $100." },
      { q: "Is this tool useful for students?", a: "Absolutely. Students frequently need to calculate exam scores as percentages, determine GPA values, or solve percentage-based word problems. This tool makes all of those tasks instant and error-free." }
    ]
  },
  "loan-emi-calculator": {
    whatIs: "The Loan EMI Calculator helps you estimate your Equated Monthly Installment for any loan — home, car, personal, or education. By entering the loan principal, annual interest rate, and tenure, you get an instant breakdown of your monthly payment, total interest payable, and total amount. Understanding EMI before taking a loan is crucial for financial planning. Banks and financial institutions use this same formula (reducing balance method) to compute loan repayments. This free tool empowers borrowers to compare loan offers and budget their monthly expenses wisely.",
    extraSeo: "Before applying for a home loan, car loan, or personal loan, use this EMI calculator to understand your monthly financial commitment. Trusted by borrowers and financial advisors to compare loan offers.",
    example: "For a loan of ₹1,00,000 at 10% annual interest for 12 months:\n\nMonthly EMI ≈ ₹8,791\nTotal Interest ≈ ₹5,496\nTotal Payment ≈ ₹1,05,496",
    formula: "EMI = P × r × (1+r)^n / ((1+r)^n − 1)\n\nWhere P = Principal, r = Monthly interest rate, n = Total months",
    applications: [
      "Planning monthly budgets before taking a home or car loan",
      "Comparing different loan offers from banks and lenders",
      "Understanding total interest cost over the loan tenure",
      "Education loan planning for students and parents",
      "Real estate investment analysis and mortgage calculations"
    ],
    faqs: [
      { q: "What is EMI?", a: "EMI stands for Equated Monthly Installment. It is the fixed amount you pay to the bank every month until the loan is fully repaid. Each EMI payment includes both principal repayment and interest charges." },
      { q: "How is EMI calculated?", a: "EMI is calculated using the formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1), where P is principal, r is monthly interest rate, and n is total number of months. This tool applies this formula automatically." },
      { q: "Does a longer tenure reduce EMI?", a: "Yes, extending the loan tenure reduces the monthly EMI amount. However, you end up paying significantly more total interest over the life of the loan. It is a trade-off between monthly affordability and total cost." },
      { q: "Can I use this for any type of loan?", a: "Yes, this calculator works for home loans, car loans, personal loans, education loans, and any other loan that uses the standard reducing balance EMI formula." }
    ]
  },
  "bmi-calculator": {
    whatIs: "The Body Mass Index (BMI) Calculator is a health assessment tool that evaluates whether a person has a healthy body weight relative to their height. Widely used by doctors, nutritionists, fitness trainers, and individuals worldwide, BMI provides a quick screening metric to categorize weight status as underweight, normal weight, overweight, or obese. While BMI does not directly measure body fat, it serves as a useful indicator for identifying potential weight-related health risks. This tool calculates BMI instantly using your height and weight in metric or imperial units.",
    extraSeo: "Widely used by health-conscious individuals, fitness trainers, and medical professionals for quick body weight assessments. Provides instant BMI classification without requiring any registration.",
    example: "If a person weighs 70 kg and is 170 cm tall:\n\nBMI = 70 / (1.7 × 1.7) = 70 / 2.89 = 24.22\n\nThis falls within the 'Normal weight' category (18.5–24.9).",
    formula: "BMI = Weight (kg) / Height² (m²)\n\nCategories: Underweight < 18.5 | Normal 18.5–24.9 | Overweight 25–29.9 | Obese ≥ 30",
    applications: [
      "Personal health and fitness tracking",
      "Medical assessments and clinical screenings",
      "Gym and diet planning for weight management",
      "Insurance health evaluations",
      "Public health research and population studies"
    ],
    faqs: [
      { q: "What is a healthy BMI range?", a: "A healthy BMI range for most adults is between 18.5 and 24.9. Values below 18.5 indicate underweight, 25-29.9 suggest overweight, and 30 or above is classified as obese. These ranges may vary slightly by age and ethnicity." },
      { q: "How is BMI calculated?", a: "BMI is calculated by dividing your weight in kilograms by the square of your height in meters: BMI = weight(kg) / height(m)². For example, a person weighing 70kg and 1.75m tall has a BMI of 70 / (1.75 × 1.75) = 22.86." },
      { q: "Is BMI accurate for athletes?", a: "BMI may overestimate body fat in athletes and muscular individuals because it does not distinguish between muscle mass and fat mass. Athletes often have high BMI values despite being very fit and healthy." },
      { q: "Should children use the same BMI scale?", a: "No, BMI for children and teenagers is age and sex-specific. Pediatric BMI uses percentile charts that account for normal growth patterns. Consult a pediatrician for accurate child BMI assessment." }
    ]
  },
  "simple-interest-calculator": {
    whatIs: "The Simple Interest Calculator computes interest earned or owed on a principal amount over a specific period at a fixed rate. Unlike compound interest, simple interest is calculated only on the original principal, making it straightforward and predictable. It is commonly used for short-term loans, car financing, treasury bills, and basic savings products. Understanding simple interest helps you evaluate loan costs, compare investment options, and make informed financial decisions. This tool instantly shows you the interest amount and total value for any combination of principal, rate, and time.",
    extraSeo: "Essential for students learning finance basics and individuals calculating returns on fixed deposits, savings accounts, or short-term loans.",
    example: "Principal = ₹10,000, Rate = 8%/year, Time = 3 years:\n\nSI = (10000 × 8 × 3) / 100 = ₹2,400\nTotal Amount = ₹12,400",
    formula: "SI = (P × R × T) / 100\n\nWhere P = Principal, R = Rate of interest per year, T = Time in years",
    applications: [
      "Calculating interest on short-term personal loans",
      "Estimating returns on fixed deposits and savings",
      "Auto loan interest estimation",
      "Student finance and education loan planning",
      "Teaching fundamental finance concepts in classrooms"
    ],
    faqs: [
      { q: "What is the simple interest formula?", a: "Simple Interest = (Principal × Rate × Time) / 100. For example, $1,000 at 5% for 3 years yields $150 in interest. The total amount you receive back would be $1,150." },
      { q: "How is simple interest different from compound interest?", a: "Simple interest is calculated only on the original principal throughout the period. Compound interest is calculated on the principal plus any previously earned interest, resulting in exponentially higher returns over time." },
      { q: "When is simple interest used in real life?", a: "Simple interest is commonly applied to car loans, short-term personal loans, treasury bills, and some savings accounts. It is preferred when the lending period is short and calculations need to be straightforward." },
      { q: "Can I use this for monthly interest calculations?", a: "Yes, you can enter the time period in fractions of a year. For example, 6 months would be 0.5 years. The calculator handles decimal time values for precise monthly or weekly interest computation." }
    ]
  },
  "compound-interest-calculator": {
    whatIs: "The Compound Interest Calculator shows how your money grows when interest is earned on both the principal and previously accumulated interest. This powerful financial concept, often called the 'eighth wonder of the world,' is the foundation of long-term wealth building. Banks, investment firms, and retirement planners all rely on compound interest calculations. This tool lets you specify the principal, annual rate, compounding frequency (monthly, quarterly, yearly), and time period to see exactly how your investment grows over time — helping you make smarter saving and investing decisions.",
    extraSeo: "Perfect for investors, savers, and financial planners who want to understand how their money grows over time with the power of compounding.",
    example: "Principal = $5,000, Rate = 6%, Time = 5 years (annually):\n\nA = 5000 × (1 + 0.06)^5 = $6,691.13\nCompound Interest = $1,691.13",
    formula: "A = P × (1 + r/n)^(n×t)\n\nWhere P = Principal, r = Annual rate, n = Compounding frequency, t = Years",
    applications: [
      "Retirement planning and long-term savings projections",
      "Comparing investment options with different compounding frequencies",
      "Understanding credit card debt growth over time",
      "Fixed deposit and recurring deposit return calculations",
      "Teaching the power of compounding in financial literacy courses"
    ],
    faqs: [
      { q: "What is compound interest?", a: "Compound interest is interest calculated on the initial principal and also on the accumulated interest from previous periods. This creates a snowball effect where your money grows faster over time compared to simple interest." },
      { q: "How does compounding frequency affect returns?", a: "More frequent compounding (monthly vs. annually) results in slightly higher returns because interest is calculated and added to the principal more often. Daily compounding yields the most, but the difference narrows at higher frequencies." },
      { q: "What is the Rule of 72?", a: "The Rule of 72 is a quick way to estimate how long it takes to double your money. Divide 72 by the annual interest rate. For example, at 8% interest, your money doubles in approximately 72 ÷ 8 = 9 years." },
      { q: "Can I include regular deposits?", a: "This calculator focuses on lump-sum compound interest. For calculations with regular monthly contributions, try our Savings Calculator or Investment Calculator which support periodic deposits." }
    ]
  },
  "logarithm-calculator": {
    whatIs: "The Logarithm Calculator helps you compute logarithmic values for any positive number with any base. Logarithms are the inverse of exponentiation and are fundamental in mathematics, science, and engineering. They are used to solve exponential equations, analyze signal strength in decibels, measure earthquake intensity on the Richter scale, and calculate pH levels in chemistry. This tool supports common log (base 10), natural log (base e), binary log (base 2), and custom bases — making it invaluable for students, scientists, and engineers.",
    extraSeo: "Useful for math students, scientists, and engineers who work with exponential scales, sound levels (decibels), pH values, and Richter scale calculations.",
    example: "Calculate log₁₀(1000):\n\nlog₁₀(1000) = 3 (because 10³ = 1000)\n\nCalculate ln(e²) = 2",
    formula: "log_b(x) = y means b^y = x\n\nlog(a×b) = log(a) + log(b)\nlog(a/b) = log(a) − log(b)\nlog(a^n) = n × log(a)",
    applications: [
      "Solving exponential equations in algebra and calculus",
      "Signal processing and decibel calculations in electronics",
      "pH and chemical concentration calculations",
      "Computer science algorithms involving logarithmic complexity",
      "Earthquake magnitude and sound intensity measurements"
    ],
    faqs: [
      { q: "What is a logarithm?", a: "A logarithm answers the question: to what power must the base be raised to produce a given number? For example, log₁₀(1000) = 3 because 10³ = 1000. It is the inverse operation of exponentiation." },
      { q: "What is the difference between log and ln?", a: "Log (common logarithm) uses base 10, while ln (natural logarithm) uses base e (≈ 2.71828). Natural logarithms are used extensively in calculus, physics, and exponential growth/decay models." },
      { q: "Can I calculate logarithms with any base?", a: "Yes, this tool supports any positive base except 1. You can use the preset options for base 10, e, or 2, or enter any custom base value for your specific calculation needs." },
      { q: "Why can't I take the log of a negative number?", a: "In real number mathematics, logarithms are only defined for positive numbers. The logarithm of zero or negative numbers does not exist in the real number system, though complex logarithms do exist in advanced mathematics." }
    ]
  },
  "trigonometry-calculator": {
    whatIs: "The Trigonometry Calculator computes sine, cosine, tangent, and their inverse functions for any angle in degrees or radians. Trigonometric functions are essential in mathematics, physics, engineering, architecture, and computer graphics. Whether you are calculating the height of a building using angles of elevation, designing structural supports, or working with wave equations, this tool delivers instant, precise results. It eliminates the need for trig tables and simplifies complex angular calculations for students and professionals alike.",
    extraSeo: "A must-have for high school and college students studying trigonometry, as well as engineers and architects working with angles and measurements.",
    example: "sin(45°) = √2/2 ≈ 0.7071\ntan(60°) = √3 ≈ 1.7321",
    formula: "sin(θ) = Opposite / Hypotenuse\ncos(θ) = Adjacent / Hypotenuse\ntan(θ) = Opposite / Adjacent\nsin²θ + cos²θ = 1",
    applications: [
      "Solving triangle problems in geometry and surveying",
      "Physics calculations involving waves, forces, and projectile motion",
      "Engineering and architectural design with angular measurements",
      "Navigation and GPS coordinate calculations",
      "Computer graphics and game development for rotation and movement"
    ],
    faqs: [
      { q: "What is the difference between degrees and radians?", a: "Degrees divide a full circle into 360 parts, while radians use the ratio of arc length to radius. A full circle is 2π radians. To convert, multiply degrees by π/180. Most scientific contexts use radians." },
      { q: "What are inverse trigonometric functions?", a: "Inverse functions like arcsin, arccos, and arctan find the angle when you know the ratio. For example, if sin(x) = 0.5, then arcsin(0.5) = 30° or π/6 radians." },
      { q: "Why do I get different results in degrees vs radians?", a: "The underlying math is the same, but the input interpretation differs. sin(90) in degrees equals 1, while sin(90) in radians is approximately 0.894. Always confirm which unit your problem requires." },
      { q: "How is trigonometry used in real life?", a: "Trigonometry is used in construction, navigation, astronomy, music theory, medical imaging, and computer animation. Any field involving angles, waves, or periodic patterns relies on trigonometric functions." }
    ]
  },
  "age-calculator": {
    whatIs: "The Age Calculator determines your exact age from your date of birth in years, months, and days. It accounts for leap years and varying month lengths to give precise results. This tool is useful for filling out official forms, verifying age eligibility for programs, calculating retirement timelines, and satisfying personal curiosity. Whether you need to know your age for a visa application, insurance policy, or birthday countdown, this calculator provides an instant and accurate answer down to the day.",
    extraSeo: "Commonly used for filling official forms, calculating insurance eligibility, determining retirement dates, or simply finding your exact age down to the day.",
    example: "Date of birth: January 15, 1995 | Today: April 2, 2026\n\nAge = 31 years, 2 months, and 18 days",
    applications: [
      "Official document filling and age verification",
      "Insurance and retirement age calculations",
      "Birthday countdown and milestone tracking",
      "Age eligibility checks for programs and competitions",
      "Historical date and timeline analysis"
    ],
    faqs: [
      { q: "Does it account for leap years?", a: "Yes, the calculator properly handles leap years, ensuring that February 29 birthdays and varying month lengths are calculated correctly for precise age determination." },
      { q: "Can I calculate age between two custom dates?", a: "This tool calculates age from a birth date to today. For the difference between any two arbitrary dates, use our Date Difference Calculator tool instead." },
      { q: "How is age calculated in months?", a: "The calculator counts complete months since your birth date. Partial months are expressed as remaining days. This gives you an exact breakdown like 25 years, 3 months, and 17 days." },
      { q: "Is the calculation timezone-dependent?", a: "The calculator uses your browser's local date settings. The result is based on your current local time, so it may differ by a day depending on your timezone relative to UTC." }
    ]
  },
  "discount-calculator": {
    whatIs: "The Discount Calculator helps you quickly find the final price of a product after applying a percentage discount. Shopping during sales, comparing promotional offers, or budgeting purchases becomes effortless with this tool. Enter the original price and discount percentage to instantly see the discount amount and final price in your preferred currency. It is widely used by shoppers, retailers, and accountants to verify pricing, calculate markdowns, and ensure billing accuracy. Never overpay again — check every deal before you buy.",
    extraSeo: "Perfect for bargain hunters, retail shoppers, and business owners who need to quickly determine sale prices and savings on any purchase.",
    example: "Original price = $200, Discount = 25%:\n\nDiscount Amount = $50\nFinal Price = $150",
    formula: "Discount = Original Price × (Discount % / 100)\nFinal Price = Original Price − Discount Amount",
    applications: [
      "Shopping during sales and promotional events",
      "Retail pricing and markdown calculations",
      "Coupon and voucher value estimation",
      "Budget planning for large purchases",
      "Comparing discount offers from different stores"
    ],
    faqs: [
      { q: "How do I calculate a discount?", a: "Multiply the original price by the discount percentage divided by 100 to get the discount amount. Subtract it from the original price for the final price. For example, 20% off $100 = $100 - $20 = $80." },
      { q: "Can I apply multiple discounts?", a: "Sequential discounts are not the same as adding them. A 20% then 10% discount on $100 gives $72, not $70. For multiple discounts, apply each one sequentially to the reduced price." },
      { q: "What currency formats are supported?", a: "The calculator supports multiple currencies including USD, EUR, GBP, INR, JPY, and more. Select your preferred currency from the dropdown to see properly formatted prices." },
      { q: "Is the discount calculated on the marked price or cost price?", a: "This calculator applies the discount to the price you enter, which is typically the marked/listed price. It shows you the final price you would pay after the discount is applied." }
    ]
  },
  "profit-loss-calculator": {
    whatIs: "The Profit & Loss Calculator determines whether a transaction resulted in profit or loss by comparing the cost price and selling price. It calculates the absolute difference and the percentage gain or loss, formatted in your chosen currency. Essential for business owners, traders, freelancers, and students studying commerce, this tool simplifies financial analysis. Understanding profit margins helps with pricing strategies, inventory management, and business viability assessment. Get instant clarity on any buy-sell transaction with accurate results.",
    extraSeo: "Used by business owners, traders, and students to quickly determine profit or loss on transactions with clear percentage breakdowns.",
    example: "Cost Price = ₹800, Selling Price = ₹1,000:\n\nProfit = ₹200\nProfit % = (200/800) × 100 = 25%",
    formula: "Profit = SP − CP\nLoss = CP − SP\nProfit % = (Profit / CP) × 100\nLoss % = (Loss / CP) × 100",
    applications: [
      "Small business transaction analysis",
      "Stock and investment return calculations",
      "Freelance project profitability assessment",
      "Commerce and accounting coursework",
      "Retail pricing strategy evaluation"
    ],
    faqs: [
      { q: "How is profit percentage calculated?", a: "Profit percentage = ((Selling Price - Cost Price) / Cost Price) × 100. If you bought something for $80 and sold it for $100, your profit percentage is ((100-80)/80) × 100 = 25%." },
      { q: "What if the selling price is lower than cost price?", a: "When the selling price is less than the cost price, you have a loss. The calculator automatically detects this and shows the loss amount and percentage in a different color for clarity." },
      { q: "Does it include taxes and fees?", a: "This calculator computes raw profit or loss between cost and selling prices. For a complete picture, include taxes and fees in your cost price before calculation." },
      { q: "Can I use this for stock market trades?", a: "Yes, enter your purchase price as cost price and sale price as selling price to see your profit or loss. Remember to factor in brokerage fees for accurate stock trading analysis." }
    ]
  },
  "gpa-calculator": {
    whatIs: "The GPA Calculator computes your Grade Point Average by taking course grades and credit hours. It supports standard 4.0 scale grading and helps students track academic performance across semesters. Whether you are applying for scholarships, graduate school, or simply monitoring your academic standing, knowing your exact GPA is essential. This tool handles multiple courses simultaneously, weighs grades by credit hours, and delivers an accurate cumulative GPA instantly. Save time and reduce calculation errors with this free, easy-to-use academic tool.",
    extraSeo: "Trusted by college students and academic advisors for calculating cumulative GPA across semesters with credit-weighted calculations.",
    example: "Math (A, 4 credits), English (B+, 3 credits), Science (A-, 3 credits):\n\nGPA = (4.0×4 + 3.3×3 + 3.7×3) / 10 = 3.70",
    formula: "GPA = Σ(Grade Points × Credit Hours) / Σ(Credit Hours)",
    applications: [
      "Tracking semester and cumulative academic performance",
      "Graduate school and scholarship application preparation",
      "Academic probation and honors eligibility verification",
      "Course planning and grade goal setting",
      "Comparing academic performance across institutions"
    ],
    faqs: [
      { q: "How is GPA calculated?", a: "GPA is the weighted average of grade points. Multiply each course's grade point by its credit hours, sum all values, then divide by total credit hours. For example, an A (4.0) in a 3-credit course and a B (3.0) in a 4-credit course gives (12+12)/7 = 3.43 GPA." },
      { q: "What is a good GPA?", a: "Generally, a GPA above 3.5 is considered excellent, 3.0-3.5 is good, 2.5-3.0 is average, and below 2.0 may indicate academic difficulty. Requirements vary by institution and program." },
      { q: "Does this support different grading scales?", a: "This calculator uses the standard US 4.0 grading scale. Letter grades are converted to standard point values (A=4.0, B=3.0, C=2.0, etc.) with plus/minus variations supported." },
      { q: "Can I calculate cumulative GPA across multiple semesters?", a: "You can add all courses from multiple semesters into a single calculation. Enter every course with its credit hours and grade to get your overall cumulative GPA." }
    ]
  },
  "fraction-calculator": {
    whatIs: "The Fraction Calculator performs addition, subtraction, multiplication, and division on fractions with ease. It handles proper fractions, improper fractions, and mixed numbers, displaying results in simplified form. Fractions are fundamental in mathematics, cooking, construction, and everyday measurements. This tool eliminates the tedious process of finding common denominators and simplifying results manually. Whether you are a student learning fractions or a professional working with measurements, this calculator ensures fast and accurate results every time.",
    extraSeo: "Helps students and professionals work with fractions effortlessly with step-by-step solutions and automatic simplification.",
    example: "Calculate 3/4 + 2/5:\n\nLCD = 20\n15/20 + 8/20 = 23/20 = 1 3/20",
    formula: "a/b + c/d = (a×d + c×b) / (b×d)\na/b × c/d = (a×c) / (b×d)\na/b ÷ c/d = (a×d) / (b×c)",
    applications: [
      "Math homework and exam preparation",
      "Cooking and recipe scaling with fractional measurements",
      "Construction and woodworking measurements",
      "Financial calculations involving fractional shares",
      "Teaching and learning fraction arithmetic in classrooms"
    ],
    faqs: [
      { q: "How do I add fractions with different denominators?", a: "To add fractions with different denominators, find the least common denominator (LCD), convert each fraction, then add the numerators. For example, 1/3 + 1/4 = 4/12 + 3/12 = 7/12. This tool handles all of this automatically." },
      { q: "What is a simplified fraction?", a: "A simplified (or reduced) fraction is one where the numerator and denominator share no common factors other than 1. For example, 6/8 simplifies to 3/4. The calculator always returns the simplest form." },
      { q: "Can it handle improper fractions?", a: "Yes, the calculator works with both proper fractions (numerator < denominator) and improper fractions (numerator ≥ denominator). Results can be displayed as improper fractions or converted to mixed numbers." },
      { q: "How do I multiply fractions?", a: "Multiply the numerators together and the denominators together. For example, 2/3 × 3/4 = 6/12 = 1/2. Unlike addition, you do not need a common denominator for multiplication." }
    ]
  },
  "area-calculator": {
    whatIs: "The Area Calculator computes the area of common geometric shapes including rectangles, circles, triangles, trapezoids, and more. Area measurement is essential in real estate, construction, landscaping, interior design, and mathematics. Whether you need to calculate floor space for tiles, garden area for planting, or surface area for painting, this tool gives instant results with the appropriate formulas. Simply select the shape, enter the dimensions, and get the area calculated with full precision.",
    extraSeo: "Essential for students studying geometry, architects planning spaces, and homeowners calculating room sizes or garden areas.",
    example: "Rectangle: 10m × 5m = 50 m²\nCircle: radius 7m → A = π × 49 = 153.94 m²",
    formula: "Rectangle: A = l × w\nTriangle: A = ½ × b × h\nCircle: A = π × r²\nTrapezoid: A = ½ × (a+b) × h",
    applications: [
      "Real estate and property area measurement",
      "Construction planning for flooring, painting, and roofing",
      "Landscaping and garden design",
      "Mathematics homework and geometry practice",
      "Interior design and furniture arrangement planning"
    ],
    faqs: [
      { q: "What shapes are supported?", a: "The calculator supports rectangles, squares, circles, triangles, trapezoids, parallelograms, and ellipses. Each shape has its specific input fields tailored to the required dimensions." },
      { q: "What units does the calculator use?", a: "The calculator works with whatever units you provide. If you enter dimensions in meters, the result is in square meters. For feet, the result is in square feet. Just be consistent with your unit choice." },
      { q: "How is the area of a circle calculated?", a: "Circle area is calculated using the formula A = π × r², where r is the radius. For a circle with radius 5 meters, the area would be π × 25 ≈ 78.54 square meters." },
      { q: "Can I calculate irregular shapes?", a: "For irregular shapes, try breaking them into regular shapes, calculate each area separately, then add them together. This calculator handles standard geometric shapes individually." }
    ]
  },
  "speed-calculator": {
    whatIs: "The Speed Calculator helps you determine speed, distance, or time when you know any two of the three values. Based on the fundamental formula Speed = Distance / Time, this tool is invaluable for travel planning, physics problems, fitness tracking, and logistics. Whether you are calculating your running pace, estimating travel time for a road trip, or solving physics homework, this calculator delivers instant and accurate results. It supports multiple units and makes distance-rate-time problems effortless.",
    extraSeo: "Useful for physics students, drivers calculating travel times, and athletes tracking performance metrics.",
    example: "Distance = 150 km, Time = 2.5 hours:\n\nSpeed = 150 / 2.5 = 60 km/h",
    formula: "Speed = Distance / Time\nDistance = Speed × Time\nTime = Distance / Speed",
    applications: [
      "Road trip and travel time estimation",
      "Physics homework on motion and velocity",
      "Running and cycling pace calculations",
      "Logistics and shipping time planning",
      "Aviation and nautical speed calculations"
    ],
    faqs: [
      { q: "What is the speed formula?", a: "Speed = Distance ÷ Time. If you drove 150 km in 2 hours, your average speed was 75 km/h. This tool also rearranges the formula to find distance or time when the other two values are known." },
      { q: "Is this average speed or instantaneous speed?", a: "This calculator computes average speed over the given distance and time. Instantaneous speed (speed at a specific moment) requires real-time measurement and differs from the average." },
      { q: "Can I convert between speed units?", a: "This tool calculates speed in the units you provide. For unit conversion between km/h, mph, m/s, and knots, use our Speed Converter tool for comprehensive conversions." },
      { q: "How do I calculate time from speed and distance?", a: "Time = Distance ÷ Speed. If you need to travel 300 km at 60 km/h, it will take 300 ÷ 60 = 5 hours. Enter speed and distance in the calculator to get the time automatically." }
    ]
  },
  "average-calculator": {
    whatIs: "The Average Calculator computes mean, median, and mode from any set of numbers. These statistical measures are fundamental in data analysis, academic grading, financial reporting, and scientific research. The arithmetic mean gives the central tendency, the median provides the middle value unaffected by outliers, and the mode identifies the most frequent value. This tool handles large datasets efficiently and is perfect for students, researchers, teachers, and anyone working with numerical data who needs quick statistical summaries.",
    extraSeo: "A versatile statistics tool for grade calculations, data analysis, and quick central tendency measures from any dataset.",
    example: "Numbers: 10, 15, 20, 25, 30\n\nMean = 20\nMedian = 20\nMode = No mode",
    formula: "Mean = Σx / n\nMedian = Middle value when sorted\nMode = Most frequent value",
    applications: [
      "Academic grade averaging and performance analysis",
      "Statistical research and data analysis",
      "Financial performance metrics and reporting",
      "Sports statistics and player performance tracking",
      "Quality control and manufacturing analysis"
    ],
    faqs: [
      { q: "What is the difference between mean, median, and mode?", a: "Mean is the sum divided by count (arithmetic average). Median is the middle value when sorted. Mode is the most frequently occurring value. Each measure describes data differently and is useful in different contexts." },
      { q: "When should I use median instead of mean?", a: "Use median when your data has extreme outliers. For example, in income data where a few very high earners skew the mean, the median gives a better picture of what a typical person earns." },
      { q: "Can I enter decimal numbers?", a: "Yes, the calculator accepts both whole numbers and decimal values. Enter your numbers separated by commas or spaces and the tool will compute all three statistical measures accurately." },
      { q: "Is there a limit to how many numbers I can enter?", a: "There is no practical limit for most use cases. The calculator efficiently handles hundreds of numbers, making it suitable for both small classroom exercises and larger data analysis tasks." }
    ]
  },
  "tip-calculator": {
    whatIs: "The Tip Calculator helps you quickly determine how much to tip at restaurants, salons, and other service establishments. Enter your bill amount, select a tip percentage, and optionally split the bill between multiple people. It displays the tip amount, total bill, and per-person share in your preferred currency format. Tipping customs vary worldwide, but this tool makes the math effortless whether you are at a casual diner or a fine-dining restaurant. Never feel awkward calculating tips at the table again.",
    extraSeo: "An everyday essential for dining out — quickly calculate the right tip, see your total bill, and split it evenly among friends.",
    example: "Bill = $85, Tip = 18%, Split 3 ways:\n\nTip = $15.30\nTotal = $100.30\nPer Person = $33.43",
    formula: "Tip = Bill × (Tip % / 100)\nTotal = Bill + Tip\nPer Person = Total / People",
    applications: [
      "Restaurant dining with friends or family",
      "Hair salon and spa service tipping",
      "Food delivery and rideshare tipping",
      "Travel and hotel service gratuity",
      "Group dinner bill splitting"
    ],
    faqs: [
      { q: "What is a standard tip percentage?", a: "In the United States, 15-20% is standard for restaurant service. 15% for adequate service, 18% for good service, and 20%+ for exceptional service. Other countries have different customs — some include service charges automatically." },
      { q: "Can I split the bill among multiple people?", a: "Yes, enter the number of people sharing the bill and the calculator will show each person's individual share including their portion of the tip. This makes group dining simple." },
      { q: "Should I tip on the pre-tax or post-tax amount?", a: "Etiquette varies, but tipping on the pre-tax subtotal is generally considered standard. Some people tip on the total including tax for simplicity. The difference is usually small." },
      { q: "Does this support different currencies?", a: "Yes, use the currency selector to choose from USD, EUR, GBP, INR, and other major currencies. All amounts will be formatted with the appropriate symbol and locale conventions." }
    ]
  },
  "percentage-change-calculator": {
    whatIs: "The Percentage Change Calculator determines the percentage increase or decrease between two values. This is essential for tracking price changes, stock performance, population growth, sales trends, and academic scores over time. Simply enter the original and new values to instantly see the percentage change and absolute difference. The tool clearly indicates whether the change is an increase (positive) or decrease (negative), making trend analysis intuitive and straightforward for business analysts, students, and everyday users.",
    extraSeo: "Widely used in business reporting, financial analysis, and academic research to measure growth or decline between two values.",
    example: "Old = 200, New = 250:\n\n% Change = ((250−200) / 200) × 100 = 25% increase",
    formula: "% Change = ((New − Old) / |Old|) × 100",
    applications: [
      "Stock price and investment performance tracking",
      "Sales and revenue growth analysis",
      "Price comparison and inflation measurement",
      "Academic score improvement tracking",
      "Population and demographic change analysis"
    ],
    faqs: [
      { q: "What is the percentage change formula?", a: "Percentage Change = ((New Value - Old Value) / |Old Value|) × 100. A positive result indicates an increase, while a negative result indicates a decrease. The absolute value of the original is used as the base." },
      { q: "Can the percentage change exceed 100%?", a: "Yes, absolutely. If a value doubles, the percentage change is 100%. If it triples, it is 200%. There is no upper limit to percentage increase, though percentage decrease is capped at 100%." },
      { q: "What if the original value is zero?", a: "Percentage change from zero is mathematically undefined because you cannot divide by zero. In such cases, you should use absolute change instead of percentage change to measure the difference." },
      { q: "How is this different from percentage difference?", a: "Percentage change measures the change from an original value to a new value (directional). Percentage difference compares two values without designating one as the original — it uses the average of both as the base." }
    ]
  },
  "lcm-calculator": {
    whatIs: "The LCM (Least Common Multiple) Calculator finds the smallest positive number that is evenly divisible by all given numbers. LCM is essential in fraction arithmetic, scheduling problems, and number theory. Whether you are finding common denominators for adding fractions, determining when periodic events coincide, or solving mathematical puzzles, this tool handles multiple numbers simultaneously and delivers instant results. It uses the efficient GCD-based algorithm to compute LCM accurately for any set of positive integers.",
    extraSeo: "Helpful for math students solving problems involving multiples, scheduling recurring events, or finding common denominators for fractions.",
    example: "LCM of 12 and 18:\n\n12 = 2² × 3, 18 = 2 × 3²\nLCM = 2² × 3² = 36",
    formula: "LCM(a, b) = |a × b| / GCD(a, b)",
    applications: [
      "Finding common denominators for fraction addition",
      "Scheduling recurring events that need to synchronize",
      "Gear ratio and mechanical timing calculations",
      "Music theory for rhythm and beat synchronization",
      "Number theory and mathematical problem solving"
    ],
    faqs: [
      { q: "What is LCM?", a: "The Least Common Multiple is the smallest positive number that is divisible by all given numbers. For example, the LCM of 4 and 6 is 12, because 12 is the smallest number divisible by both 4 and 6." },
      { q: "How is LCM calculated?", a: "LCM can be calculated using the relationship LCM(a,b) = |a × b| / GCD(a,b). For multiple numbers, the LCM is computed iteratively: LCM(a,b,c) = LCM(LCM(a,b), c). This tool uses this efficient method." },
      { q: "Can I find the LCM of more than two numbers?", a: "Yes, enter as many numbers as you need, separated by commas or spaces. The calculator computes the LCM of the entire set, not just pairs." },
      { q: "What is the difference between LCM and GCD?", a: "LCM is the smallest number divisible by all given numbers, while GCD (Greatest Common Divisor) is the largest number that divides all given numbers evenly. They are mathematically related: LCM × GCD = product of the two numbers." }
    ]
  },
  "gcd-calculator": {
    whatIs: "The GCD (Greatest Common Divisor) Calculator finds the largest positive integer that divides all given numbers without a remainder. Also known as the Greatest Common Factor (GCF) or Highest Common Factor (HCF), this concept is fundamental in simplifying fractions, solving Diophantine equations, and cryptography. The tool uses the efficient Euclidean algorithm to compute GCD instantly for any set of numbers. Whether you are simplifying fractions in math class or working with modular arithmetic in programming, this calculator has you covered.",
    extraSeo: "Essential for simplifying fractions, solving number theory problems, and understanding fundamental mathematical concepts.",
    example: "GCD of 48 and 36:\n\n48 = 36×1 + 12\n36 = 12×3 + 0\nGCD = 12",
    formula: "Euclidean Algorithm:\nGCD(a, b) = GCD(b, a mod b)\nGCD(a, 0) = a",
    applications: [
      "Simplifying fractions to their lowest terms",
      "Cryptography and RSA key generation algorithms",
      "Solving Diophantine equations in number theory",
      "Determining gear ratios and mechanical fits",
      "Division and distribution problems in everyday math"
    ],
    faqs: [
      { q: "What is GCD?", a: "The Greatest Common Divisor is the largest number that divides two or more numbers evenly. For example, GCD of 12 and 18 is 6, because 6 is the largest number that divides both 12 and 18 without a remainder." },
      { q: "How does the Euclidean algorithm work?", a: "The Euclidean algorithm repeatedly divides the larger number by the smaller and takes the remainder, until the remainder is zero. The last non-zero remainder is the GCD. It is extremely efficient even for very large numbers." },
      { q: "Is GCD the same as HCF?", a: "Yes, GCD (Greatest Common Divisor), GCF (Greatest Common Factor), and HCF (Highest Common Factor) all refer to the same concept. Different countries and textbooks use different terms." },
      { q: "Can I find GCD of more than two numbers?", a: "Yes, enter any number of values separated by commas or spaces. The calculator finds the GCD iteratively: GCD(a,b,c) = GCD(GCD(a,b), c). It works for any quantity of numbers." }
    ]
  },
  "prime-factorization": {
    whatIs: "The Prime Factorization tool breaks down any positive integer into its prime factors — the building blocks of all whole numbers. Every integer greater than 1 can be uniquely expressed as a product of prime numbers, a principle known as the Fundamental Theorem of Arithmetic. This tool is essential for number theory, simplifying fractions, finding LCM and GCD, and understanding divisibility. Students, mathematicians, and puzzle enthusiasts use prime factorization regularly for academic work, competitive math, and cryptographic analysis.",
    extraSeo: "A foundational math tool for number theory, cryptography education, and simplifying fractions by breaking numbers into prime building blocks.",
    example: "360 = 2³ × 3² × 5 = 2 × 2 × 2 × 3 × 3 × 5",
    applications: [
      "Simplifying fractions using common prime factors",
      "Finding LCM and GCD through prime factorization method",
      "Understanding number properties and divisibility rules",
      "Competitive mathematics and olympiad preparation",
      "Basic cryptography concepts involving prime numbers"
    ],
    faqs: [
      { q: "What are prime factors?", a: "Prime factors are prime numbers that multiply together to give the original number. For example, the prime factors of 60 are 2, 2, 3, and 5, because 2 × 2 × 3 × 5 = 60." },
      { q: "Why is prime factorization important?", a: "Prime factorization is the foundation for many mathematical operations: simplifying fractions, computing LCM and GCD, solving modular arithmetic, and even modern encryption algorithms like RSA rely on the difficulty of factoring large primes." },
      { q: "What is the largest number I can factorize?", a: "The tool handles numbers within JavaScript's safe integer range (up to about 9 quadrillion). For everyday use and academic purposes, this is more than sufficient." },
      { q: "Is 1 a prime number?", a: "No, 1 is not a prime number by mathematical convention. A prime number must have exactly two distinct positive divisors: 1 and itself. The number 1 has only one divisor, so it is excluded from prime factorization." }
    ]
  },
  "matrix-calculator": {
    whatIs: "The Matrix Calculator performs essential matrix operations including addition, subtraction, and multiplication. Matrices are fundamental in linear algebra, computer graphics, machine learning, physics simulations, and data science. This tool handles 2×2 and 3×3 matrices with real number entries, displaying results in a clean, formatted layout. Whether you are a student solving linear algebra problems or a developer working with transformation matrices, this calculator simplifies complex matrix arithmetic and verifies your manual computations.",
    extraSeo: "Used by engineering and math students for linear algebra operations including addition, subtraction, and multiplication of matrices.",
    example: "A = [[1,2],[3,4]], B = [[5,6],[7,8]]:\n\nA + B = [[6,8],[10,12]]\nA × B = [[19,22],[43,50]]",
    formula: "Addition: C[i][j] = A[i][j] + B[i][j]\nMultiplication: C[i][j] = Σ(A[i][k] × B[k][j])",
    applications: [
      "Linear algebra coursework and exam preparation",
      "Computer graphics transformation calculations",
      "Machine learning and data science operations",
      "Physics simulations involving tensor calculations",
      "Engineering systems of linear equations"
    ],
    faqs: [
      { q: "What matrix operations are supported?", a: "The calculator supports matrix addition, subtraction, and multiplication. For addition and subtraction, matrices must have the same dimensions. For multiplication, the number of columns in the first matrix must equal the number of rows in the second." },
      { q: "What matrix sizes are supported?", a: "The calculator supports 2×2 and 3×3 matrices. These sizes cover the most common use cases in academic and practical applications, from 2D transformations to 3D rotations." },
      { q: "How is matrix multiplication performed?", a: "Each element in the result is the dot product of a row from the first matrix and a column from the second. For a 2×2 matrix, C[i][j] = A[i][0]×B[0][j] + A[i][1]×B[1][j]. The process is systematic but tedious by hand." },
      { q: "Can I calculate the inverse of a matrix?", a: "For inverse and determinant calculations, use our Determinant Calculator tool. Matrix inversion requires the determinant and adjugate matrix, which are handled separately for clarity." }
    ]
  },
  "determinant-calculator": {
    whatIs: "The Determinant Calculator computes the determinant of 2×2 and 3×3 matrices, a scalar value that reveals important properties of a matrix. The determinant tells you whether a matrix is invertible, the scaling factor of a linear transformation, and the volume of a parallelepiped formed by the matrix's column vectors. It is extensively used in linear algebra, computer graphics, physics, and engineering. This tool performs the calculation instantly, saving you from error-prone manual expansion of cofactors.",
    extraSeo: "Critical for linear algebra students and engineers. The determinant reveals if a matrix is invertible and helps solve linear equation systems.",
    example: "Matrix [[3,8],[4,6]]:\n\nDet = (3×6) − (8×4) = 18 − 32 = −14",
    formula: "2×2: det = ad − bc\n3×3: det = a(ei−fh) − b(di−fg) + c(dh−eg)",
    applications: [
      "Checking matrix invertibility in linear algebra",
      "Solving systems of linear equations using Cramer's rule",
      "Computer graphics and geometric transformations",
      "Physics calculations involving cross products and area/volume",
      "Engineering stability and eigenvalue analysis"
    ],
    faqs: [
      { q: "What does the determinant tell you?", a: "The determinant indicates whether a matrix is invertible (non-zero determinant) or singular (zero determinant). It also represents the scaling factor of the linear transformation defined by the matrix and the signed volume of the transformed unit shape." },
      { q: "How is a 2×2 determinant calculated?", a: "For a 2×2 matrix [[a,b],[c,d]], the determinant is ad - bc. For example, the determinant of [[3,2],[1,4]] is (3×4) - (2×1) = 10." },
      { q: "How is a 3×3 determinant calculated?", a: "A 3×3 determinant uses cofactor expansion along any row or column. The standard method expands along the first row: a(ei-fh) - b(di-fg) + c(dh-eg) for the matrix [[a,b,c],[d,e,f],[g,h,i]]." },
      { q: "What does a determinant of zero mean?", a: "A zero determinant means the matrix is singular — it has no inverse, its rows or columns are linearly dependent, and the system of equations it represents has either no solution or infinitely many solutions." }
    ]
  },
  "gst-calculator": {
    whatIs: "The GST Calculator helps you compute Goods and Services Tax amounts for any product or service. GST is a value-added tax applied in many countries including India, Australia, Canada, and Singapore. This tool lets you calculate GST-inclusive and GST-exclusive prices, determine the tax component of a purchase, and format results in multiple currencies. Whether you are a business owner creating invoices, an accountant filing returns, or a consumer verifying charges, this calculator simplifies GST computation instantly.",
    extraSeo: "Essential for Indian businesses, freelancers, and shoppers to calculate GST-inclusive and exclusive prices. Supports all standard GST rates.",
    example: "Base = ₹1,000, GST = 18%:\n\nGST Amount = ₹180\nTotal = ₹1,180",
    formula: "GST = Base Price × (Rate / 100)\nTotal = Base + GST\nBase = Total / (1 + Rate/100)",
    applications: [
      "Business invoicing and billing with GST breakdowns",
      "Consumer price verification and tax checking",
      "Accounting and tax return preparation",
      "E-commerce pricing and tax compliance",
      "Freelancer invoicing for international clients"
    ],
    faqs: [
      { q: "What is GST?", a: "Goods and Services Tax is a comprehensive indirect tax levied on the manufacture, sale, and consumption of goods and services. It replaces multiple cascading taxes with a single unified tax, simplifying the tax structure." },
      { q: "How is GST calculated?", a: "GST Amount = Price × (GST Rate / 100). For a product priced at ₹1,000 with 18% GST, the tax is ₹180 and the total price is ₹1,180. For GST-inclusive prices, divide by (1 + rate/100) to find the base price." },
      { q: "What are common GST rates?", a: "GST rates vary by country. In India, common slabs are 5%, 12%, 18%, and 28%. In Australia, the standard GST rate is 10%. In Canada, it is 5% federal GST with additional provincial taxes." },
      { q: "Can I calculate reverse GST?", a: "Yes, if you have a GST-inclusive price, the calculator can extract the base price and tax amount. Simply enter the inclusive price and the tool will separate the tax component for you." }
    ]
  },
  "savings-calculator": {
    whatIs: "The Savings Calculator projects how your money will grow through regular monthly contributions combined with compound interest. It shows your future savings balance, total deposits made, and interest earned over time. Whether you are building an emergency fund, saving for a vacation, or planning for a down payment, this tool helps you set realistic goals and understand the power of consistent saving. Visualize your wealth accumulation and adjust contributions, interest rates, and time horizons to find the optimal savings strategy.",
    extraSeo: "Plan your financial future by projecting how regular savings grow over time with compound interest. Perfect for retirement planning and emergency fund goals.",
    example: "Monthly = $500, Rate = 5%, Duration = 10 years:\n\nContributions = $60,000\nInterest ≈ $17,703\nFuture Value ≈ $77,703",
    formula: "FV = PMT × [((1 + r)^n − 1) / r]\nWhere PMT = monthly payment, r = monthly rate, n = total months",
    applications: [
      "Emergency fund planning and goal setting",
      "Saving for major purchases like a car or home down payment",
      "Retirement savings estimation and planning",
      "Education fund growth projection",
      "Comparing savings accounts with different interest rates"
    ],
    faqs: [
      { q: "How does compound interest help savings?", a: "Compound interest earns interest on your interest, creating exponential growth. A $500 monthly contribution at 7% annual return grows to about $173,000 in 15 years, where $83,000 is pure interest earned — money that your money made for you." },
      { q: "Should I save monthly or in a lump sum?", a: "Regular monthly savings benefit from dollar-cost averaging and build discipline. However, a lump sum invested early has more time to compound. Ideally, combine both: invest a lump sum if available and continue regular monthly contributions." },
      { q: "What interest rate should I expect?", a: "Savings accounts typically offer 1-5% depending on the bank and country. Stock market index funds have historically returned 7-10% annually. Use conservative estimates for guaranteed savings and higher rates for investment projections." },
      { q: "Does this account for inflation?", a: "This calculator shows nominal returns. To see real purchasing power, subtract the expected inflation rate from the interest rate. For example, 7% return minus 3% inflation gives approximately 4% real growth." }
    ]
  },
  "investment-calculator": {
    whatIs: "The Investment Calculator estimates how your initial investment and regular contributions grow over time through the power of compound interest. It is an essential financial planning tool for anyone considering stocks, mutual funds, retirement accounts, or real estate investments. By adjusting variables like initial amount, monthly contribution, expected return rate, and time horizon, you can model different investment scenarios and make informed decisions. This tool helps you understand the relationship between risk, return, and time — the three pillars of investing.",
    extraSeo: "Estimate how investments grow with compound interest over time. Used by financial planners and anyone looking to understand long-term wealth building.",
    example: "Initial = $10,000, Return = 8%, Period = 20 years:\n\nFuture Value = $46,609.57\nTotal Growth = $36,609.57",
    formula: "Future Value = P × (1 + r)^t\nWhere P = initial investment, r = annual return, t = years",
    applications: [
      "Retirement portfolio growth estimation",
      "Mutual fund and SIP return projections",
      "Comparing different investment strategies",
      "Setting and tracking long-term financial goals",
      "Understanding the impact of fees and returns on wealth"
    ],
    faqs: [
      { q: "What return rate should I use?", a: "Historical stock market returns average about 7-10% annually after inflation. Bond returns are typically 3-5%. Use conservative estimates for planning and remember that past performance does not guarantee future results." },
      { q: "How important is starting early?", a: "Extremely important due to compounding. Investing $200/month starting at age 25 at 8% returns gives about $700,000 by age 65. Starting at age 35 with the same parameters gives only about $300,000 — less than half." },
      { q: "What is the difference between this and the Savings Calculator?", a: "The Investment Calculator focuses on wealth growth through market investments with variable returns. The Savings Calculator focuses on safe, fixed-rate savings accounts. Use both to plan your complete financial strategy." },
      { q: "Are the results guaranteed?", a: "No, investment returns are projections based on the rate you specify. Actual market returns vary year to year. Use multiple scenarios (conservative, moderate, aggressive) to plan for different outcomes." }
    ]
  },
  "inflation-calculator": {
    whatIs: "The Inflation Calculator shows how inflation erodes purchasing power over time. By entering a dollar amount, inflation rate, and time period, you can see the future equivalent value of today's money — or conversely, what past money is worth today. Understanding inflation is crucial for retirement planning, salary negotiations, investment analysis, and long-term financial decisions. This tool helps you think in real (inflation-adjusted) terms rather than nominal values, ensuring your financial plans account for the silent wealth erosion caused by rising prices.",
    extraSeo: "Understand how inflation erodes purchasing power over time. Useful for financial planning, salary negotiations, and historical price analysis.",
    example: "$1,000 with 5% inflation over 10 years:\n\nFuture equivalent ≈ $613.91 in today's value\nPurchasing power lost ≈ 38.6%",
    formula: "Adjusted Value = Present Value / (1 + r)^years\nReal Return = Nominal Return − Inflation Rate",
    applications: [
      "Retirement savings planning with inflation adjustment",
      "Salary negotiation using real wage calculations",
      "Long-term investment goal setting",
      "Historical purchasing power comparisons",
      "Economic analysis and consumer price research"
    ],
    faqs: [
      { q: "What is a typical inflation rate?", a: "Most developed countries target 2-3% annual inflation. The US has averaged about 3% over the last century. However, inflation can spike significantly during economic crises — it exceeded 8% in the US in 2022." },
      { q: "How does inflation affect savings?", a: "If your savings earn 2% but inflation is 3%, your real purchasing power decreases by 1% annually. Money in a low-interest account gradually loses value. This is why investing above the inflation rate is important for long-term wealth." },
      { q: "What is purchasing power?", a: "Purchasing power is what your money can actually buy. $100 today buys less than $100 did 20 years ago because prices have risen. The inflation calculator quantifies this erosion so you can plan accordingly." },
      { q: "Should I use historical or projected inflation?", a: "For past calculations, use actual historical rates. For future projections, 2-3% is a reasonable assumption for developed economies. For conservative planning, use a slightly higher rate like 4% to build in a safety margin." }
    ]
  },
  "sales-tax-calculator": {
    whatIs: "The Sales Tax Calculator computes the total price of a purchase including applicable sales tax. Sales tax rates vary by country, state, and even city, making manual calculation error-prone. This tool lets you enter any price and tax percentage to instantly see the tax amount and final price in your chosen currency. It is indispensable for shoppers estimating totals, business owners pricing products, and accountants preparing financial records. Always know exactly what you will pay before reaching the checkout counter.",
    extraSeo: "Quickly calculate sales tax on any purchase. Essential for shoppers, retailers, and accountants who need pre-tax or post-tax price calculations.",
    example: "Price = $250, Tax = 8.5%:\n\nTax Amount = $21.25\nTotal = $271.25",
    formula: "Tax = Price × (Rate / 100)\nTotal = Price + Tax\nPre-tax = Total / (1 + Rate/100)",
    applications: [
      "Estimating total purchase costs while shopping",
      "Business product pricing with tax inclusion",
      "E-commerce checkout tax calculation",
      "Accounting and bookkeeping for tax records",
      "Comparing prices across states with different tax rates"
    ],
    faqs: [
      { q: "How is sales tax calculated?", a: "Sales Tax = Price × (Tax Rate / 100). For a $50 item with 8% sales tax, the tax is $4 and the total price is $54. Some jurisdictions have compound taxes or exempt certain items." },
      { q: "Are sales tax rates the same everywhere?", a: "No, rates vary significantly. The US has no federal sales tax; states range from 0% to 7.25%, with local additions. European VAT ranges from 17-27%. Some countries have no sales tax at all." },
      { q: "What items are typically tax-exempt?", a: "Common exemptions include groceries, prescription medications, and children's clothing in many jurisdictions. Tax-exempt items vary widely by location, so check your local tax authority for specific exemptions." },
      { q: "Is sales tax the same as VAT?", a: "They are similar but different. Sales tax is typically charged only at the final point of sale. VAT (Value Added Tax) is charged at every stage of production and distribution, with businesses claiming back tax paid on their inputs." }
    ]
  },
  "electricity-cost-calculator": {
    whatIs: "The Electricity Cost Calculator estimates your electricity expenses based on appliance wattage, daily usage hours, and your local electricity rate. Understanding energy consumption is key to managing utility bills and reducing waste. This tool helps you identify which appliances cost the most to run, compare energy-efficient alternatives, and budget for monthly electricity expenses. Simply enter the power rating of any device, how many hours you use it daily, and your rate per kilowatt-hour to see daily, monthly, and yearly costs.",
    extraSeo: "Estimate electricity bills by entering appliance wattage and usage hours. Helps homeowners and businesses identify high-consumption devices.",
    example: "1500W heater, 4 hours/day, $0.12/kWh:\n\nDaily = (1500×4)/1000 × $0.12 = $0.72\nMonthly = $21.60",
    formula: "Energy (kWh) = Watts × Hours / 1000\nCost = kWh × Rate",
    applications: [
      "Monthly electricity bill estimation and budgeting",
      "Comparing energy costs of different appliances",
      "Evaluating energy-efficient appliance upgrades",
      "Solar panel ROI calculations based on current usage",
      "Business operational cost analysis for equipment"
    ],
    faqs: [
      { q: "How is electricity cost calculated?", a: "Cost = (Watts × Hours per day × Days) / 1000 × Rate per kWh. A 100W bulb running 10 hours daily at $0.12/kWh costs 100 × 10 / 1000 × 0.12 = $0.12 per day or about $3.60 per month." },
      { q: "What is a kilowatt-hour (kWh)?", a: "A kilowatt-hour is the energy consumed by a 1000-watt device running for 1 hour. It is the standard billing unit for electricity worldwide. Your electricity meter measures consumption in kWh." },
      { q: "Which appliances use the most electricity?", a: "Air conditioners, water heaters, electric dryers, and space heaters are typically the biggest consumers. A central AC unit can use 3000-5000 watts, costing several dollars per hour to operate." },
      { q: "How can I reduce electricity costs?", a: "Use energy-efficient appliances (look for Energy Star ratings), switch to LED lighting, unplug devices when not in use, use programmable thermostats, and run heavy appliances during off-peak hours if your utility offers time-of-use pricing." }
    ]
  },
  "square-root-calculator": {
    whatIs: "The Square Root Calculator computes the square root and nth root of any positive number with high precision. Square roots appear throughout mathematics, physics, engineering, and finance — from the Pythagorean theorem to standard deviation calculations. This tool handles perfect squares (like √16 = 4) and irrational results (like √2 ≈ 1.414) with equal ease. Whether you are solving geometry problems, working with quadratic formulas, or calculating distances, this calculator provides instant, accurate root values.",
    extraSeo: "A quick math utility for finding square roots and nth roots of any number. Perfect for geometry, algebra, and engineering calculations.",
    example: "√144 = 12\n∛27 = 3\n√2 ≈ 1.4142",
    formula: "√x = x^(1/2)\nⁿ√x = x^(1/n)",
    applications: [
      "Geometry and Pythagorean theorem calculations",
      "Quadratic equation solving in algebra",
      "Standard deviation computation in statistics",
      "Distance calculations between two points",
      "Engineering stress and structural analysis"
    ],
    faqs: [
      { q: "What is a square root?", a: "The square root of a number x is the value that, when multiplied by itself, gives x. For example, √25 = 5 because 5 × 5 = 25. The symbol √ is called the radical sign." },
      { q: "Can I find cube roots and higher?", a: "Yes, this calculator supports nth roots. A cube root (3rd root) finds the number that when cubed gives the original. For example, the cube root of 27 is 3 because 3³ = 27." },
      { q: "What is an irrational square root?", a: "Most square roots are irrational, meaning they cannot be expressed as a simple fraction and have infinite non-repeating decimals. √2 ≈ 1.41421356... goes on forever without repeating." },
      { q: "Can I take the square root of a negative number?", a: "In real numbers, square roots of negative numbers are undefined. However, in complex mathematics, √(-1) = i (the imaginary unit). This calculator works with real positive numbers." }
    ]
  },
  "exponent-calculator": {
    whatIs: "The Exponent Calculator computes any base raised to any power, including fractional and negative exponents. Exponentiation is a fundamental mathematical operation used in compound interest formulas, scientific notation, computer science algorithms, and physics equations. Whether you need to calculate 2¹⁰ for binary computing, understand exponential growth models, or solve power equations in algebra, this tool delivers instant, precise results. It supports integer exponents, decimal exponents, and even negative powers for reciprocal calculations.",
    extraSeo: "Calculate powers and exponents quickly for math, scientific computations, and financial growth projections.",
    example: "2^10 = 1,024\n5^3 = 125\n10^(-2) = 0.01",
    formula: "a^n = a × a × ... (n times)\na^0 = 1\na^(-n) = 1/a^n",
    applications: [
      "Computing powers for algebra and calculus problems",
      "Scientific notation and large number calculations",
      "Compound interest and exponential growth modeling",
      "Computer science binary power calculations",
      "Physics formulas involving squared and cubed quantities"
    ],
    faqs: [
      { q: "What is an exponent?", a: "An exponent indicates how many times a base number is multiplied by itself. In 2³, the base is 2 and the exponent is 3, meaning 2 × 2 × 2 = 8. Exponents are also called powers or indices." },
      { q: "What does a negative exponent mean?", a: "A negative exponent means the reciprocal of the positive exponent. For example, 2⁻³ = 1/2³ = 1/8 = 0.125. Negative exponents are used extensively in scientific notation for very small numbers." },
      { q: "What is x⁰?", a: "Any non-zero number raised to the power of 0 equals 1. This is a mathematical convention that ensures consistency in exponent rules. So 5⁰ = 1, 100⁰ = 1, and even (-3)⁰ = 1." },
      { q: "Can I use decimal exponents?", a: "Yes, decimal exponents represent roots. For example, x^0.5 is the square root of x, and x^(1/3) is the cube root. The calculator handles any decimal exponent value." }
    ]
  },
  "ratio-calculator": {
    whatIs: "The Ratio Calculator helps you solve proportions, simplify ratios, and find missing values in ratio equations. Ratios are used extensively in cooking, map reading, architecture, photography, finance, and science. Whether you need to scale a recipe, determine map distances, calculate aspect ratios for images, or solve proportion problems in math class, this tool makes ratio arithmetic effortless. Enter any ratio and instantly get simplified forms, equivalent ratios, and solutions to missing-value problems.",
    extraSeo: "Used in cooking, construction, design, and academics to scale proportions, solve missing terms, and simplify ratios.",
    example: "Ratio 3:5, total = 160:\n\nFirst part = (3/8) × 160 = 60\nSecond part = (5/8) × 160 = 100",
    formula: "If a:b = c:d then a×d = b×c\nSimplify: divide both by GCD(a,b)",
    applications: [
      "Scaling recipes for different serving sizes",
      "Map and architectural scale calculations",
      "Image and video aspect ratio determination",
      "Mixing solutions and chemical proportions",
      "Financial ratio analysis for business evaluation"
    ],
    faqs: [
      { q: "How do I simplify a ratio?", a: "Divide both numbers by their greatest common divisor (GCD). For example, 12:8 simplifies to 3:2 because the GCD of 12 and 8 is 4. The calculator performs this simplification automatically." },
      { q: "What is a proportion?", a: "A proportion states that two ratios are equal. For example, 1:2 = 3:6 is a proportion. If you know three values, you can find the fourth using cross-multiplication: a/b = c/d means ad = bc." },
      { q: "How are ratios used in real life?", a: "Ratios appear everywhere: cooking recipes (flour to sugar), maps (1:50000 scale), medicine (dosage per weight), finance (price-to-earnings ratio), and construction (cement to sand mix proportions)." },
      { q: "What is the difference between a ratio and a fraction?", a: "A ratio compares two quantities (3:2 means 3 parts to 2 parts). A fraction represents a part of a whole (3/5 means 3 out of 5). They are related but used in different contexts. Ratios compare, fractions divide." }
    ]
  },
  "currency-converter": {
    whatIs: "The Currency Converter allows you to convert between major world currencies using approximate exchange rates. Whether you are planning international travel, comparing prices across countries, or sending money abroad, this tool gives you a quick estimate of currency values. It supports 10 major currencies including USD, EUR, GBP, INR, JPY, AUD, CAD, CHF, CNY, and SGD. While rates are static approximations, they provide useful ballpark figures for everyday conversion needs without requiring an internet API call.",
    extraSeo: "Convert between major world currencies instantly. Great for travelers, online shoppers, and businesses dealing with international transactions.",
    example: "Convert $100 USD to EUR:\n\nRate: 1 USD = 0.92 EUR\n$100 × 0.92 = €92.00",
    applications: [
      "International travel budget planning",
      "Cross-border shopping price comparisons",
      "Freelance invoicing in different currencies",
      "Study abroad expense estimation",
      "Understanding relative currency values globally"
    ],
    faqs: [
      { q: "How accurate are the exchange rates?", a: "The rates are static approximations and may differ from live market rates. For precise conversions involving real transactions, always check current rates from your bank or a financial service provider before sending money." },
      { q: "How many currencies are supported?", a: "The converter supports 10 major world currencies: USD, EUR, GBP, INR, JPY, AUD, CAD, CHF, CNY, and SGD. These cover the majority of international trade and travel needs." },
      { q: "Can I swap currencies quickly?", a: "Yes, use the swap button to instantly reverse the conversion direction. This is helpful when you want to see both sides of the exchange, for example, USD to EUR and then EUR to USD." },
      { q: "Why do exchange rates change?", a: "Exchange rates fluctuate based on supply and demand, interest rates, inflation, political stability, and trade balances. Central bank policies and global events can cause significant short-term movements." }
    ]
  },
  "length-converter": {
    whatIs: "The Length Converter transforms measurements between metric and imperial length units including meters, kilometers, centimeters, millimeters, miles, yards, feet, and inches. Length conversion is one of the most common unit conversions needed in daily life, construction, travel, and science. Whether you are converting your height from centimeters to feet, calculating distances for a trip, or working on a construction project with mixed unit specifications, this tool delivers instant, accurate conversions.",
    extraSeo: "A go-to tool for travelers, engineers, and students converting between metric and imperial length units instantly.",
    example: "5 miles to km:\n5 × 1.60934 = 8.047 km",
    formula: "1 inch = 2.54 cm | 1 foot = 0.3048 m | 1 mile = 1.60934 km",
    applications: [
      "Converting height between metric and imperial systems",
      "Construction and home improvement measurements",
      "Travel distance conversions between km and miles",
      "Scientific measurements and lab work",
      "Textile and fabric measurement conversions"
    ],
    faqs: [
      { q: "How many feet are in a meter?", a: "One meter equals approximately 3.28084 feet. Conversely, one foot equals 0.3048 meters. This is one of the most commonly needed conversions for international communication." },
      { q: "What is the difference between metric and imperial?", a: "The metric system (meters, kilometers) is based on powers of 10 and used by most countries worldwide. The imperial system (feet, miles, inches) is primarily used in the United States, UK, and a few other countries." },
      { q: "How do I convert miles to kilometers?", a: "Multiply miles by 1.60934 to get kilometers. For example, 10 miles = 16.09 km. For a quick mental estimate, multiply miles by 1.6 or remember that 5 miles ≈ 8 km." },
      { q: "What is the smallest unit supported?", a: "The converter handles millimeters as the smallest unit. One millimeter is 0.001 meters or about 0.039 inches. For smaller measurements, you would need specialized scientific converters." }
    ]
  },
  "weight-converter": {
    whatIs: "The Weight Converter transforms mass measurements between kilograms, pounds, ounces, grams, milligrams, metric tons, and other common units. Weight conversion is essential for international shipping, cooking, fitness tracking, medical dosages, and scientific research. Whether you are converting your body weight for a medical form, measuring ingredients for an international recipe, or calculating shipping costs, this tool handles all common weight units with precision and speed.",
    extraSeo: "Essential for cooking, fitness tracking, shipping, and international trade. Convert between metric and imperial weight units instantly.",
    example: "150 pounds to kg:\n150 × 0.453592 = 68.04 kg",
    formula: "1 kg = 2.20462 lb | 1 lb = 453.592 g | 1 oz = 28.3495 g",
    applications: [
      "Body weight conversion between kg and lbs",
      "Cooking and baking ingredient measurements",
      "International shipping weight calculations",
      "Medical dosage calculations based on body weight",
      "Scientific laboratory measurements and conversions"
    ],
    faqs: [
      { q: "How many pounds are in a kilogram?", a: "One kilogram equals approximately 2.20462 pounds. Conversely, one pound equals about 0.453592 kilograms. For a quick estimate, multiply kg by 2.2 to get pounds." },
      { q: "What is the difference between mass and weight?", a: "Mass is the amount of matter in an object (measured in kg), while weight is the force of gravity on that mass (measured in Newtons). On Earth, the distinction is often ignored in everyday use, and the terms are used interchangeably." },
      { q: "How do I convert ounces to grams?", a: "Multiply ounces by 28.3495 to get grams. For example, 8 ounces = about 226.8 grams. This is especially useful when following recipes from different countries." },
      { q: "What units are commonly used worldwide?", a: "Most of the world uses kilograms and grams (metric system). The United States primarily uses pounds and ounces (imperial). The UK uses a mix of both systems depending on context." }
    ]
  },
  "temperature-converter": {
    whatIs: "The Temperature Converter instantly transforms temperatures between Celsius, Fahrenheit, and Kelvin scales. Temperature conversion is essential for cooking, weather interpretation, scientific experiments, and international travel. Celsius is used in most countries, Fahrenheit in the United States, and Kelvin in scientific contexts. This tool eliminates the need to memorize complex conversion formulas, giving you accurate results for any temperature value — from cooking temperatures to absolute zero.",
    extraSeo: "Perfect for travelers, cooks, scientists, and students who need instant temperature conversions between major scales.",
    example: "98.6°F to Celsius:\n°C = (98.6 − 32) × 5/9 = 37°C",
    formula: "°F = (°C × 9/5) + 32\n°C = (°F − 32) × 5/9\nK = °C + 273.15",
    applications: [
      "Cooking and baking temperature conversions",
      "Weather temperature interpretation while traveling",
      "Scientific experiments requiring Kelvin",
      "Medical temperature readings in different scales",
      "Industrial and manufacturing temperature monitoring"
    ],
    faqs: [
      { q: "How do I convert Celsius to Fahrenheit?", a: "Multiply the Celsius temperature by 9/5 (or 1.8) and add 32. For example, 25°C = (25 × 1.8) + 32 = 77°F. This formula works for any temperature value." },
      { q: "What is Kelvin used for?", a: "Kelvin is the SI unit of temperature used in science. It starts at absolute zero (−273.15°C), the lowest possible temperature where molecular motion theoretically stops. It is essential in physics, chemistry, and astronomy." },
      { q: "What is normal body temperature in both scales?", a: "Normal human body temperature is approximately 37°C or 98.6°F. However, normal ranges vary slightly from 36.1°C to 37.2°C (97°F to 99°F) depending on the person and time of day." },
      { q: "What is absolute zero?", a: "Absolute zero is 0 Kelvin, −273.15°C, or −459.67°F. It is the theoretical lowest temperature where atoms have minimal thermal motion. It has been closely approached in labs but never fully reached." }
    ]
  },
  "volume-converter": {
    whatIs: "The Volume Converter transforms measurements between liters, milliliters, gallons, cups, fluid ounces, pints, quarts, and cubic meters. Volume conversions are essential in cooking, beverage manufacturing, chemistry, fuel measurement, and swimming pool maintenance. Different countries use different volume units, making conversion necessary for following recipes, understanding fuel economy, and interpreting product labels. This tool handles both metric and imperial volume units with precision.",
    extraSeo: "Used in cooking, chemistry, and engineering to convert between metric and imperial volume measurements.",
    example: "2 gallons to liters:\n2 × 3.78541 = 7.571 liters",
    formula: "1 gallon = 3.78541 L | 1 L = 1000 ml | 1 cup = 236.588 ml",
    applications: [
      "Cooking and baking recipe conversions",
      "Fuel tank and consumption measurements",
      "Swimming pool and aquarium volume calculations",
      "Beverage serving size conversions",
      "Chemical solution preparation in laboratories"
    ],
    faqs: [
      { q: "How many liters are in a gallon?", a: "One US gallon equals approximately 3.785 liters. One UK (imperial) gallon equals about 4.546 liters. Always check whether a recipe or measurement uses US or imperial gallons." },
      { q: "How many cups are in a liter?", a: "One liter equals approximately 4.227 US cups. This conversion is especially useful when following American recipes that use cups while you have metric measuring tools." },
      { q: "What is the difference between US and UK fluid ounces?", a: "A US fluid ounce is about 29.57 mL, while a UK fluid ounce is about 28.41 mL. The difference is small but can add up in recipes requiring precision." },
      { q: "What is a cubic meter?", a: "A cubic meter is 1000 liters — the volume of a cube measuring 1 meter on each side. It is used for large-scale measurements like swimming pools, water tanks, and construction materials." }
    ]
  },
  "angle-converter": {
    whatIs: "The Angle Converter transforms angular measurements between degrees, radians, gradians, and turns. Angles are fundamental in geometry, trigonometry, navigation, engineering, and computer graphics. Degrees are most commonly used in everyday life, radians in mathematics and physics, gradians in surveying, and turns in specific engineering applications. This tool handles all four systems instantly, making it indispensable for students, engineers, and anyone working with angular measurements across different conventions.",
    extraSeo: "Useful for math students, engineers, and navigators converting between different angular measurement systems.",
    example: "180° to radians:\n180 × (π/180) = π ≈ 3.14159 radians",
    formula: "Radians = Degrees × π/180\n1 turn = 360° = 2π rad = 400 grad",
    applications: [
      "Mathematics and physics angle calculations",
      "Surveying and land measurement",
      "Navigation and compass bearing conversions",
      "Computer graphics rotation calculations",
      "Engineering and mechanical design"
    ],
    faqs: [
      { q: "How do I convert degrees to radians?", a: "Multiply degrees by π/180. For example, 90° = 90 × π/180 = π/2 ≈ 1.5708 radians. Most scientific calculators and programming languages use radians by default." },
      { q: "What are gradians?", a: "Gradians divide a right angle into 100 parts (a full circle = 400 gradians). They are used in surveying and some European engineering contexts because they make percentage grade calculations simpler." },
      { q: "What is a turn?", a: "One turn equals one complete rotation or 360 degrees. Turns are useful in engineering and robotics where counting complete rotations is more intuitive than tracking degrees." },
      { q: "Why do scientists use radians instead of degrees?", a: "Radians simplify many mathematical formulas, especially in calculus. The derivative of sin(x) is cos(x) only when x is in radians. Many physics formulas for circular motion and waves require radian measure." }
    ]
  },
  "speed-converter": {
    whatIs: "The Speed Converter transforms velocity measurements between km/h, mph, m/s, ft/s, and knots. Speed conversion is essential for travel, aviation, maritime navigation, sports, and physics. Different countries and industries use different speed units — highway signs show km/h or mph, scientists use m/s, and sailors use knots. This tool eliminates confusion by providing instant conversions between all common speed units, helping you interpret speed limits, calculate travel times, and solve physics problems.",
    extraSeo: "Convert between speed units used in transportation, aviation, maritime, and physics applications worldwide.",
    example: "100 km/h to mph:\n100 ÷ 1.60934 = 62.14 mph",
    formula: "1 km/h = 0.621371 mph | 1 m/s = 3.6 km/h | 1 knot = 1.852 km/h",
    applications: [
      "Interpreting speed limits while driving abroad",
      "Aviation and maritime speed calculations",
      "Sports performance analysis and comparison",
      "Physics velocity and motion problems",
      "Weather wind speed interpretation"
    ],
    faqs: [
      { q: "How do I convert km/h to mph?", a: "Divide km/h by 1.60934 to get mph. For example, 100 km/h ≈ 62.14 mph. For a quick estimate, multiply km/h by 0.6 to get an approximate mph value." },
      { q: "What is a knot?", a: "A knot equals one nautical mile per hour (approximately 1.852 km/h or 1.151 mph). It is used in aviation and maritime navigation because nautical miles relate directly to latitude degrees." },
      { q: "What speed unit do scientists use?", a: "Scientists use meters per second (m/s) as the SI unit of speed. It provides consistent calculations in physics equations. 1 m/s ≈ 3.6 km/h ≈ 2.237 mph." },
      { q: "How fast is the speed of sound?", a: "The speed of sound in air at sea level is approximately 343 m/s, 1,235 km/h, or 767 mph. This is known as Mach 1 and varies with temperature and altitude." }
    ]
  },
  "energy-converter": {
    whatIs: "The Energy Converter transforms measurements between joules, kilojoules, calories, kilocalories, watt-hours, kilowatt-hours, and BTU. Energy conversion is critical in physics, nutrition, electrical engineering, and environmental science. Whether you are calculating food energy content, comparing fuel types, analyzing electricity consumption, or solving thermodynamics problems, this tool provides instant and accurate conversions across all common energy units.",
    extraSeo: "Convert between energy units used in physics, nutrition, and engineering for science students and professionals.",
    example: "500 calories to joules:\n500 × 4.184 = 2,092 J",
    formula: "1 cal = 4.184 J | 1 kWh = 3,600,000 J | 1 BTU = 1,055.06 J",
    applications: [
      "Nutritional calorie and kilojoule conversions",
      "Electricity billing and energy consumption analysis",
      "Physics and thermodynamics problem solving",
      "Fuel energy content comparison",
      "Environmental and renewable energy calculations"
    ],
    faqs: [
      { q: "What is the relationship between calories and joules?", a: "One calorie equals 4.184 joules. In nutrition, 'Calories' (capital C) actually means kilocalories. So a 200 Calorie snack contains 200,000 calories or approximately 837 kilojoules of energy." },
      { q: "What is a kilowatt-hour?", a: "A kilowatt-hour (kWh) is the energy consumed by a 1000-watt device running for one hour. It equals 3.6 million joules. It is the standard billing unit for household electricity worldwide." },
      { q: "What is a BTU?", a: "A British Thermal Unit is the energy needed to raise one pound of water by one degree Fahrenheit. It equals about 1055 joules. BTU is commonly used to rate heating and cooling equipment capacity." },
      { q: "How is food energy measured?", a: "Food energy is measured in kilocalories (kcal) or kilojoules (kJ). In the US, food labels show Calories (which are actually kcal). In many other countries, labels show kilojoules. 1 kcal = 4.184 kJ." }
    ]
  },
  "pressure-converter": {
    whatIs: "The Pressure Converter transforms measurements between Pascal, kilopascal, bar, PSI, atmosphere, and mmHg (Torr). Pressure conversion is essential in meteorology, engineering, automotive maintenance, scuba diving, and medical applications. Different fields use different pressure units — weather reports use millibars, tire gauges show PSI, blood pressure is measured in mmHg, and scientists use Pascals. This tool bridges all these conventions with instant, accurate conversions.",
    extraSeo: "Used by engineers, meteorologists, and medical professionals for pressure unit conversions across measurement systems.",
    example: "1 atm to PSI:\n1 atm = 14.696 PSI",
    formula: "1 atm = 101,325 Pa = 14.696 PSI = 1.01325 bar = 760 mmHg",
    applications: [
      "Tire pressure conversion between PSI and bar",
      "Blood pressure readings and medical measurements",
      "Weather and atmospheric pressure analysis",
      "Scuba diving depth and pressure calculations",
      "Industrial hydraulic and pneumatic system design"
    ],
    faqs: [
      { q: "What is standard atmospheric pressure?", a: "Standard atmospheric pressure is defined as 101,325 Pascals = 1.01325 bar = 14.696 PSI = 1 atm = 760 mmHg. This is the average pressure at sea level and serves as the reference point for pressure measurements." },
      { q: "What is PSI?", a: "PSI stands for Pounds per Square Inch, a pressure unit commonly used in the United States for tire pressure, water pressure, and industrial applications. Car tires typically require 30-35 PSI." },
      { q: "Why is blood pressure measured in mmHg?", a: "Blood pressure is traditionally measured in millimeters of mercury (mmHg) because early sphygmomanometers used mercury columns. Normal blood pressure is about 120/80 mmHg. The convention persists even with digital devices." },
      { q: "What is the difference between gauge and absolute pressure?", a: "Absolute pressure includes atmospheric pressure, while gauge pressure measures only the pressure above atmospheric. A tire at 30 PSI gauge has an absolute pressure of about 44.7 PSI (30 + 14.7 atmospheric)." }
    ]
  },
  "time-converter": {
    whatIs: "The Time Converter transforms durations between seconds, minutes, hours, days, weeks, months, and years. Time conversion is needed for project planning, scientific calculations, travel scheduling, and everyday time management. Whether you are converting movie runtimes, calculating project deadlines, or solving physics time problems, this tool provides instant results across all common time units. It handles both small durations (seconds to hours) and large spans (months to years) with ease.",
    extraSeo: "Convert between time units from milliseconds to years for project planning, scientific calculations, and everyday use.",
    example: "3.5 hours to minutes:\n3.5 × 60 = 210 minutes",
    formula: "1 hour = 3,600 seconds | 1 day = 24 hours | 1 year ≈ 365.25 days",
    applications: [
      "Project management and deadline calculations",
      "Travel itinerary planning across time zones",
      "Scientific experiment duration conversions",
      "Video and audio content length calculations",
      "Fitness and sports performance time analysis"
    ],
    faqs: [
      { q: "How many seconds are in a day?", a: "There are exactly 86,400 seconds in a day (60 seconds × 60 minutes × 24 hours). This number is important in computing, especially for Unix timestamps and time-based calculations." },
      { q: "How does the converter handle months?", a: "Since months vary in length (28-31 days), the converter uses an average of 30.4375 days per month (365.25/12). For precise month calculations involving specific dates, use a date calculator instead." },
      { q: "How many hours are in a year?", a: "A standard year has 8,760 hours (365 × 24). A leap year has 8,784 hours. This is useful for calculating annual energy consumption, working hours, or subscription costs." },
      { q: "What about leap years?", a: "The converter uses 365.25 days per year on average to account for leap years. For specific date-based calculations where leap years matter, use our Date Difference Calculator for exact results." }
    ]
  },
  "binary-to-decimal": {
    whatIs: "The Binary to Decimal Converter transforms binary numbers (base-2) into their decimal (base-10) equivalents. Binary is the fundamental language of computers, where all data is stored and processed as sequences of 0s and 1s. Understanding binary-to-decimal conversion is essential for computer science students, programmers, network engineers, and anyone working with digital systems. This tool provides instant conversion for any binary number, making it easy to interpret machine-level data in human-readable form.",
    extraSeo: "Essential for CS students learning number systems and programmers working with low-level binary data representation.",
    example: "Binary 11010110 to decimal:\n1×128 + 1×64 + 0×32 + 1×16 + 0×8 + 1×4 + 1×2 + 0 = 214",
    formula: "Decimal = Σ(bit × 2^position), position from 0 at right",
    applications: [
      "Computer science education and coursework",
      "Network subnet mask and IP address calculations",
      "Digital electronics and circuit design",
      "Programming and debugging at the bit level",
      "Understanding file permissions in Unix/Linux"
    ],
    faqs: [
      { q: "How does binary to decimal conversion work?", a: "Each binary digit represents a power of 2, starting from the right. For example, 1101 = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13 in decimal." },
      { q: "Why do computers use binary?", a: "Computers use binary because electronic circuits have two stable states: on (1) and off (0). This simplicity makes circuits reliable and fast. All data — text, images, video — is ultimately represented in binary." },
      { q: "What is the largest binary number I can convert?", a: "The tool handles binary numbers within JavaScript's numeric precision, which covers up to 53 bits (about 9 quadrillion in decimal). This is sufficient for virtually all educational and practical needs." },
      { q: "What about negative binary numbers?", a: "This converter handles positive binary numbers. Negative numbers in binary are typically represented using two's complement notation, which is a separate concept used in computer architecture." }
    ]
  },
  "decimal-to-binary": {
    whatIs: "The Decimal to Binary Converter transforms standard decimal numbers (base-10) into their binary (base-2) representation. This conversion is fundamental in computer science, digital electronics, and programming. Understanding how numbers are represented in binary helps you grasp how computers process data, manage memory, and perform calculations. Whether you are a student learning number systems or a developer working with low-level programming, this tool provides instant, accurate decimal to binary conversion.",
    extraSeo: "A fundamental CS tool for understanding how decimal numbers are stored as binary in computer memory.",
    example: "Decimal 42 to binary:\n42→21 R0, 21→10 R1, 10→5 R0, 5→2 R1, 2→1 R0, 1→0 R1\nResult: 101010",
    formula: "Repeatedly divide by 2, collect remainders bottom-to-top.",
    applications: [
      "Learning computer science number systems",
      "Programming and bitwise operation planning",
      "Network engineering and IP address subnetting",
      "Digital circuit design and logic gates",
      "Understanding computer memory and data representation"
    ],
    faqs: [
      { q: "How do I convert decimal to binary?", a: "Repeatedly divide the decimal number by 2 and record the remainder. Read the remainders from bottom to top. For example, 13 ÷ 2 gives remainders 1,0,1,1 — reading bottom-to-top gives 1101 in binary." },
      { q: "What is 255 in binary?", a: "255 in binary is 11111111 (eight 1s). This is significant because it is the maximum value of an 8-bit byte, commonly seen in IP addresses and color values (RGB components range from 0-255)." },
      { q: "Can I convert decimal fractions to binary?", a: "This tool handles whole numbers. Decimal fractions in binary use a binary point (like a decimal point) and can result in repeating binary fractions, similar to how 1/3 = 0.333... in decimal." },
      { q: "How many binary digits do I need for a given decimal number?", a: "The number of binary digits (bits) needed is approximately log₂(n) + 1. For example, 255 needs 8 bits, 1000 needs 10 bits, and 1,000,000 needs 20 bits." }
    ]
  },
  "roman-numeral-converter": {
    whatIs: "The Roman Numeral Converter translates between Roman numerals and decimal numbers. Roman numerals use letters like I, V, X, L, C, D, and M to represent values and are still used today in clock faces, book chapters, movie sequels, Super Bowl numbering, and formal documents. This tool handles conversion in both directions — enter a Roman numeral to get the decimal value, or enter a number to get its Roman representation. It supports standard Roman numeral rules including subtractive notation.",
    extraSeo: "Useful for history enthusiasts, students, and event planners working with traditional Roman numeral notation.",
    example: "2024 → MMXXIV\n(M=1000, M=1000, X=10, X=10, IV=4)",
    applications: [
      "Reading and writing Roman numerals on clocks and monuments",
      "Academic formatting for outlines and chapters",
      "Understanding historical dates and inscriptions",
      "Movie and event numbering interpretation",
      "Educational exercises in number systems"
    ],
    faqs: [
      { q: "What are the basic Roman numeral values?", a: "I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Numbers are formed by combining these letters. When a smaller value precedes a larger one, it is subtracted (IV=4, IX=9, XL=40, XC=90, CD=400, CM=900)." },
      { q: "What is the largest number in Roman numerals?", a: "Standard Roman numerals go up to 3,999 (MMMCMXCIX). Larger numbers historically used a vinculum (bar above) to multiply by 1,000, but this tool uses the standard range." },
      { q: "Why are Roman numerals still used?", a: "Roman numerals add a sense of formality and tradition. They are used on clock faces, building cornerstones, book prefaces, Olympic games, Super Bowl numbering, and royal names (Queen Elizabeth II)." },
      { q: "Can Roman numerals represent zero or negative numbers?", a: "No, the Roman numeral system has no symbol for zero and does not represent negative numbers. The concept of zero was developed later in history by Indian mathematicians." }
    ]
  },
  "bytes-converter": {
    whatIs: "The Bytes Converter transforms digital storage measurements between bytes, kilobytes (KB), megabytes (MB), gigabytes (GB), and terabytes (TB). Understanding data sizes is crucial in computing, from evaluating hard drive capacity to estimating download times and managing cloud storage. This tool uses standard binary conversion factors (1 KB = 1024 bytes) and helps you quickly understand file sizes, storage requirements, and bandwidth needs in whichever unit is most meaningful for your context.",
    extraSeo: "Essential for understanding file sizes, storage capacity, and data transfer measurements in the digital world.",
    example: "2.5 GB to MB:\n2.5 × 1024 = 2,560 MB",
    formula: "1 KB = 1024 B | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB",
    applications: [
      "Evaluating storage device capacity and usage",
      "Estimating file sizes for uploads and downloads",
      "Cloud storage planning and cost estimation",
      "Network bandwidth and data transfer calculations",
      "Photography and video storage requirements"
    ],
    faqs: [
      { q: "What is the difference between KB and kB?", a: "In computing, 1 KB (kilobyte) = 1024 bytes (binary), while 1 kB (kilobyte in SI) = 1000 bytes. Storage manufacturers often use SI units (1000-based), while operating systems use binary (1024-based), causing apparent discrepancies." },
      { q: "How many MB are in a GB?", a: "1 GB = 1024 MB in binary convention, or 1000 MB in decimal convention. A typical smartphone photo is 3-5 MB, so a 64 GB phone can store roughly 13,000-21,000 photos." },
      { q: "Why does my hard drive show less space than advertised?", a: "Hard drive manufacturers use decimal (1 GB = 1,000,000,000 bytes) while operating systems use binary (1 GB = 1,073,741,824 bytes). A '1 TB' drive shows about 931 GB in your OS. The missing space is not lost — it is a units difference." },
      { q: "What is the largest unit of digital storage?", a: "Common units go up to terabytes (TB) and petabytes (PB). Beyond that are exabytes, zettabytes, and yottabytes. Total global data is estimated at around 100 zettabytes and growing rapidly." }
    ]
  },
  "number-base-converter": {
    whatIs: "The Number Base Converter transforms numbers between binary (base-2), octal (base-8), decimal (base-10), and hexadecimal (base-16) systems. Different number bases are used throughout computer science and digital engineering. Binary is the language of processors, octal is used in Unix permissions, decimal is our everyday system, and hexadecimal is essential for memory addresses, color codes, and low-level programming. This tool converts between all four bases instantly, making it invaluable for developers and students.",
    extraSeo: "A versatile tool for converting numbers between binary, octal, decimal, and hexadecimal systems used in computing.",
    example: "Decimal 255 to hex:\n255 → FF\nDecimal 255 to binary: 11111111",
    applications: [
      "Programming and debugging in different number systems",
      "Understanding hex color codes in web development",
      "Unix file permission calculations using octal",
      "Memory address interpretation in system programming",
      "Computer science education and coursework"
    ],
    faqs: [
      { q: "Why is hexadecimal used in computing?", a: "Hexadecimal is compact — each hex digit represents exactly 4 binary bits. The byte value 11111111 (binary) is simply FF in hex. This makes memory addresses, color codes (#FF0000), and byte values much easier to read and write." },
      { q: "What is octal used for?", a: "Octal (base-8) is primarily used for Unix/Linux file permissions. Each permission set (read/write/execute) maps to 3 bits, which fits perfectly into one octal digit. chmod 755 is a common example." },
      { q: "How do I read hexadecimal?", a: "Hex uses digits 0-9 and letters A-F (A=10, B=11, C=12, D=13, E=14, F=15). Count in base 16: after 9 comes A, after F comes 10 (which equals 16 in decimal)." },
      { q: "Can I convert any number between these bases?", a: "Yes, any positive integer can be represented in any base. Enter the number, select the input base, and instantly see the equivalent in binary, octal, decimal, and hexadecimal." }
    ]
  },
  "color-converter": {
    whatIs: "The Color Converter transforms color values between HEX, RGB, and HSL formats. Web developers, designers, and digital artists frequently need to convert between these formats depending on the context — CSS stylesheets, design tools, and image editors each prefer different color notations. This tool provides instant bidirectional conversion, ensuring you always have the right color format. Enter any color in one format and immediately see the equivalent in all supported formats.",
    extraSeo: "Essential for web designers and developers converting color values between HEX, RGB, and HSL for CSS and design tools.",
    example: "HEX #FF6B35 → RGB(255, 107, 53)",
    applications: [
      "Web development and CSS color specification",
      "Graphic design and color matching across tools",
      "Digital art and illustration color management",
      "Brand guideline compliance with specific color values",
      "Accessibility testing with different color representations"
    ],
    faqs: [
      { q: "What is the difference between HEX and RGB?", a: "They represent the same information differently. RGB uses three decimal numbers (0-255) for red, green, blue. HEX uses a 6-digit hexadecimal string (#RRGGBB). For example, pure red is rgb(255,0,0) or #FF0000." },
      { q: "What is HSL?", a: "HSL stands for Hue, Saturation, Lightness. Hue is the color angle (0-360°), Saturation is intensity (0-100%), and Lightness is brightness (0-100%). HSL is more intuitive for humans to understand and adjust than RGB." },
      { q: "Which format should I use for web development?", a: "All three work in CSS. HEX is most compact (#333), RGB is clearest for opacity (rgba), and HSL is best when you need to programmatically adjust hue, saturation, or lightness. Modern CSS supports all formats." },
      { q: "Can I convert colors with transparency?", a: "This tool converts between opaque HEX, RGB, and HSL values. For transparency, add an alpha channel manually: rgba(255,0,0,0.5) or #FF000080 for 50% transparent red." }
    ]
  },
  "currency-formatter": {
    whatIs: "The Currency Formatter converts any number into properly formatted currency strings for multiple currencies including USD, EUR, GBP, INR, JPY, and more. Proper currency formatting includes the correct symbol, decimal places, thousands separators, and locale-specific conventions. This tool is essential for developers building financial applications, accountants preparing reports, and anyone who needs to display money values correctly. Enter any number and instantly see it formatted in multiple currency styles.",
    extraSeo: "Format numbers in international currency styles with proper symbols, separators, and decimal places for invoices and reports.",
    example: "1234567.89 →\nUSD: $1,234,567.89\nINR: ₹12,34,567.89\nEUR: €1.234.567,89",
    applications: [
      "Formatting prices for e-commerce applications",
      "Financial report preparation with proper currency display",
      "Invoice and receipt generation",
      "International price comparison and display",
      "Learning different currency formatting conventions"
    ],
    faqs: [
      { q: "Why does currency formatting differ by country?", a: "Different countries use different symbols, decimal separators, and grouping conventions. The US uses $1,234.56 while Germany uses 1.234,56 € and India uses ₹1,23,456.78. Proper formatting prevents confusion in international contexts." },
      { q: "How does the Indian numbering system work?", a: "India groups digits differently: after the first three digits, subsequent groups are two digits each. So one million (1,000,000) is written as 10,00,000 (ten lakh). This tool respects these locale-specific formatting rules." },
      { q: "How many decimal places do currencies use?", a: "Most currencies use 2 decimal places (USD, EUR, GBP). Japanese Yen uses 0 decimal places. Some currencies like Bahraini Dinar use 3. This tool automatically applies the correct precision for each currency." },
      { q: "Can I use this for display purposes in my website?", a: "Yes, the formatting follows Intl.NumberFormat standards used in web development. You can reference the formatted output as a guide for implementing currency display in your own applications." }
    ]
  },
  "frequency-converter": {
    whatIs: "The Frequency Converter transforms measurements between hertz, kilohertz, megahertz, gigahertz, and RPM. Frequency measures how often something repeats per unit of time and is fundamental in electronics, telecommunications, music, physics, and engineering. Whether you are tuning a radio, analyzing a processor clock speed, measuring motor RPM, or studying sound waves, this tool provides instant conversions between all common frequency units.",
    extraSeo: "Convert between frequency units used in electronics, telecommunications, audio engineering, and physics.",
    example: "2.4 GHz to MHz:\n2.4 × 1000 = 2,400 MHz",
    formula: "1 kHz = 1,000 Hz | 1 MHz = 1,000 kHz | 1 GHz = 1,000 MHz",
    applications: [
      "Electronics and radio frequency calculations",
      "Computer processor clock speed comparisons",
      "Music and audio frequency analysis",
      "Motor speed and RPM conversions",
      "Telecommunications bandwidth calculations"
    ],
    faqs: [
      { q: "What is a hertz?", a: "A hertz (Hz) is one cycle per second. It is the SI unit of frequency named after physicist Heinrich Hertz. Human hearing ranges from about 20 Hz to 20,000 Hz (20 kHz)." },
      { q: "How fast is a GHz processor?", a: "A 3 GHz processor completes 3 billion cycles per second. Each cycle can execute one or more instructions. Higher clock speeds generally mean faster processing, though architecture efficiency also matters." },
      { q: "What is the difference between Hz and RPM?", a: "Both measure rotational or cyclical frequency. Hz measures cycles per second, RPM measures revolutions per minute. To convert: Hz = RPM / 60. A motor spinning at 3000 RPM rotates at 50 Hz." },
      { q: "What frequencies does WiFi use?", a: "WiFi operates on 2.4 GHz and 5 GHz bands. The 2.4 GHz band has longer range but slower speeds, while 5 GHz offers faster speeds but shorter range. Newer WiFi 6E also uses the 6 GHz band." }
    ]
  },
  "data-transfer-rate-converter": {
    whatIs: "The Data Transfer Rate Converter transforms between bps, Kbps, Mbps, Gbps, Tbps, and their byte-per-second equivalents. Understanding data transfer rates is essential for evaluating internet speeds, network performance, file transfer times, and streaming quality requirements. ISPs advertise speeds in Mbps, while download managers show MB/s — this tool bridges the gap and helps you compare and understand data rates across different units and contexts.",
    extraSeo: "Compare internet speeds and data transfer rates across different units for understanding bandwidth and network capacity.",
    example: "100 Mbps to MB/s:\n100 ÷ 8 = 12.5 MB/s",
    formula: "1 Byte = 8 bits | 1 Mbps = 1,000 Kbps | 1 Gbps = 1,000 Mbps",
    applications: [
      "Evaluating internet service provider speed claims",
      "Estimating file download and upload times",
      "Network infrastructure planning and capacity",
      "Streaming video quality requirements analysis",
      "Comparing wired vs wireless connection speeds"
    ],
    faqs: [
      { q: "What is the difference between Mbps and MB/s?", a: "Mbps (megabits per second) and MB/s (megabytes per second) differ by a factor of 8, since 1 byte = 8 bits. A 100 Mbps internet connection downloads at approximately 12.5 MB/s maximum." },
      { q: "What internet speed do I need for streaming?", a: "Netflix recommends 3 Mbps for SD, 5 Mbps for HD, and 25 Mbps for 4K Ultra HD. For households with multiple devices streaming simultaneously, higher speeds are recommended." },
      { q: "Why is my actual speed lower than advertised?", a: "ISPs advertise maximum theoretical speeds. Actual speeds are affected by network congestion, distance from the router, interference, device capability, and overhead from networking protocols." },
      { q: "What does Gbps mean?", a: "Gbps means gigabits per second, or 1,000 megabits per second. Fiber optic connections commonly offer 1 Gbps speeds. This translates to about 125 MB/s actual download speed." }
    ]
  },
  "area-converter": {
    whatIs: "The Area Converter transforms measurements between square meters, square kilometers, square feet, square inches, acres, hectares, and square miles. Area conversion is essential in real estate, agriculture, construction, land surveying, and urban planning. Different countries and industries use different area units — the US favors square feet and acres, while the metric system uses square meters and hectares. This tool bridges all conventions with instant, precise conversions.",
    extraSeo: "Convert between area units for real estate, agriculture, construction, and land measurement in metric and imperial systems.",
    example: "5 acres to m²:\n5 × 4,046.86 = 20,234.3 m²",
    formula: "1 acre = 4,046.86 m² | 1 hectare = 10,000 m² | 1 sq mile = 2.59 km²",
    applications: [
      "Real estate property size comparisons",
      "Agricultural land measurement and planning",
      "Construction floor area calculations",
      "Urban planning and zoning measurements",
      "International property listings conversion"
    ],
    faqs: [
      { q: "How many square feet are in an acre?", a: "One acre equals 43,560 square feet. This is roughly the size of a football field (without end zones). An acre is also approximately 4,047 square meters or 0.4047 hectares." },
      { q: "What is a hectare?", a: "A hectare is 10,000 square meters (a 100m × 100m square). It is the standard metric unit for land measurement, equivalent to about 2.471 acres. Agricultural land is commonly measured in hectares worldwide." },
      { q: "How do I convert square meters to square feet?", a: "Multiply square meters by 10.7639 to get square feet. For example, a 50 m² apartment is about 538 square feet. This is the most common conversion for international real estate comparisons." },
      { q: "What is the largest area unit supported?", a: "Square miles is the largest unit in this converter. One square mile equals 640 acres, 259 hectares, or about 2.59 square kilometers. It is commonly used for city and regional area measurements." }
    ]
  },
  "power-converter": {
    whatIs: "The Power Converter transforms measurements between watts, kilowatts, megawatts, horsepower, BTU per hour, and foot-pounds per second. Power measures the rate of energy transfer and is critical in electrical engineering, automotive performance, HVAC systems, and industrial equipment specification. Whether you are comparing car engines, sizing generators, evaluating HVAC capacity, or solving physics problems, this tool provides instant conversions between all common power units.",
    extraSeo: "Convert between power units for engineering, automotive, and electrical applications including motor ratings.",
    example: "150 HP to kW:\n150 × 0.7457 = 111.85 kW",
    formula: "1 HP = 745.7 W | 1 kW = 1,000 W | 1 BTU/h = 0.29307 W",
    applications: [
      "Automotive engine power comparisons between HP and kW",
      "Electrical generator and motor specifications",
      "HVAC system capacity evaluation in BTU/h",
      "Industrial equipment power requirements planning",
      "Physics and engineering power calculations"
    ],
    faqs: [
      { q: "How many watts in a horsepower?", a: "One mechanical horsepower equals approximately 745.7 watts. So a 200 HP car engine produces about 149,140 watts or 149.14 kilowatts. This conversion is essential when comparing American and European car specifications." },
      { q: "What is a kilowatt?", a: "A kilowatt (kW) is 1,000 watts. It is commonly used for electrical appliances, electric vehicles, and power generation. A typical home uses 1-2 kW on average, while an electric car charger may use 7-22 kW." },
      { q: "How is BTU/hour used?", a: "BTU per hour measures heating and cooling power. Air conditioners and furnaces are rated in BTU/h. A window AC unit might be 5,000-12,000 BTU/h, while a central system can be 24,000-60,000 BTU/h." },
      { q: "What is a megawatt?", a: "A megawatt (MW) is one million watts. It measures large-scale power generation. A wind turbine produces 2-3 MW, a gas power plant produces 500-1000 MW, and a large nuclear plant can produce over 3,000 MW." }
    ]
  },
  "fuel-efficiency-converter": {
    whatIs: "The Fuel Efficiency Converter transforms between km/L, miles per gallon (US), miles per gallon (UK), and liters per 100km. Fuel efficiency measurements vary by country — the US uses MPG, Europe uses L/100km, and many Asian countries use km/L. This tool makes it easy to compare vehicle fuel economy across different standards, helping you make informed decisions when buying cars, planning road trips, or comparing international vehicle specifications.",
    extraSeo: "Compare fuel efficiency across different measurement systems used worldwide for vehicle specifications.",
    example: "35 mpg (US) to km/L:\n35 × 0.425144 = 14.88 km/L",
    formula: "1 mpg (US) = 0.425144 km/L\nL/100km = 235.214 / mpg",
    applications: [
      "Comparing car fuel economy across different markets",
      "Road trip fuel cost estimation",
      "Vehicle purchase decision support",
      "Fleet management and fuel budgeting",
      "Environmental impact and carbon footprint calculations"
    ],
    faqs: [
      { q: "What is a good fuel efficiency?", a: "In the US, 30+ MPG is considered good for a gasoline car. In Europe, under 6 L/100km is efficient. Hybrid vehicles achieve 50-60 MPG, and fully electric vehicles have equivalent ratings of 100+ MPGe." },
      { q: "Why do some countries use L/100km instead of MPG?", a: "L/100km measures fuel consumed per distance, making it easier to calculate trip fuel costs. MPG measures distance per fuel unit. L/100km is mathematically simpler for cost planning: L needed = (L/100km × distance) / 100." },
      { q: "What is the difference between US and UK MPG?", a: "A US gallon is 3.785 liters while a UK imperial gallon is 4.546 liters. So UK MPG values are about 20% higher than US MPG for the same vehicle. Always check which standard is being used." },
      { q: "How do I convert MPG to L/100km?", a: "Divide 235.215 by the MPG value. For example, 30 US MPG = 235.215/30 = 7.84 L/100km. The relationship is inverse — higher MPG means lower L/100km (better efficiency)." }
    ]
  },
  "density-converter": {
    whatIs: "The Density Converter transforms measurements between kg/m³, g/cm³, g/mL, lb/ft³, lb/in³, and other density units. Density — mass per unit volume — is a fundamental physical property used in materials science, chemistry, geology, fluid mechanics, and manufacturing. Whether you are identifying unknown materials, designing floating structures, calculating buoyancy, or comparing material specifications, this tool provides instant conversions between all common density units.",
    extraSeo: "Convert between density units used in physics, chemistry, engineering, and material science for lab work.",
    example: "Water: 1 g/cm³ to kg/m³:\n1 × 1000 = 1,000 kg/m³",
    formula: "Density = Mass / Volume\n1 g/cm³ = 1,000 kg/m³ | 1 lb/ft³ = 16.0185 kg/m³",
    applications: [
      "Material identification and quality testing",
      "Engineering design for buoyancy and flotation",
      "Chemistry solution concentration calculations",
      "Geology and mineral identification",
      "Manufacturing material selection and specification"
    ],
    faqs: [
      { q: "What is density?", a: "Density is mass per unit volume (ρ = m/V). Water has a density of 1 g/cm³ or 1000 kg/m³ at standard conditions. Objects denser than water sink; less dense objects float. Density is a key property for material identification." },
      { q: "What are common density values?", a: "Water: 1000 kg/m³, steel: ~7800 kg/m³, aluminum: ~2700 kg/m³, air: ~1.225 kg/m³, gold: ~19,300 kg/m³. These values help identify materials and predict their behavior in various applications." },
      { q: "Why do scientists use g/cm³ while engineers use kg/m³?", a: "Both are valid metric units. g/cm³ gives convenient small numbers for common materials (water = 1, steel ≈ 7.8). kg/m³ is the SI standard used in engineering calculations. 1 g/cm³ = 1000 kg/m³." },
      { q: "How is density related to buoyancy?", a: "An object floats if its density is less than the surrounding fluid. This is Archimedes' principle. Ships float because their average density (including air inside) is less than water's density." }
    ]
  },
  "illuminance-converter": {
    whatIs: "The Illuminance Converter transforms measurements between lux, foot-candle, phot, and kilolux. Illuminance measures the amount of light falling on a surface and is critical in lighting design, photography, workplace safety, agriculture, and architectural planning. Different regions and industries use different units — foot-candles in the US and lux internationally. This tool helps lighting professionals, photographers, and facility managers convert between all standard illuminance units instantly.",
    extraSeo: "Convert between light measurement units for photography, architecture, workplace safety, and lighting design.",
    example: "500 lux to foot-candles:\n500 × 0.0929 = 46.45 fc",
    formula: "1 fc = 10.764 lux | 1 phot = 10,000 lux",
    applications: [
      "Office and workplace lighting design to meet standards",
      "Photography exposure and lighting calculations",
      "Architectural lighting specification",
      "Agricultural greenhouse light level management",
      "Sports facility and stadium lighting planning"
    ],
    faqs: [
      { q: "What is lux?", a: "Lux is the SI unit of illuminance, measuring lumens per square meter. Typical values: moonlight ≈ 1 lux, office lighting ≈ 300-500 lux, overcast day ≈ 1,000 lux, direct sunlight ≈ 100,000 lux." },
      { q: "How does foot-candle relate to lux?", a: "One foot-candle equals approximately 10.764 lux. Foot-candles are commonly used in the United States, while lux is the international standard. Multiply foot-candles by 10.764 to get lux." },
      { q: "What illuminance level is recommended for offices?", a: "Most standards recommend 300-500 lux (28-46 foot-candles) for general office work. Detailed tasks like drafting may require 750-1000 lux. Corridors and lobbies need 100-200 lux." },
      { q: "What is the difference between illuminance and luminance?", a: "Illuminance measures light arriving at a surface (measured in lux). Luminance measures light emitted or reflected from a surface (measured in candelas/m²). Illuminance is about the light; luminance is about the brightness you perceive." }
    ]
  },
  "word-counter": {
    whatIs: "The Word Counter is a comprehensive text analysis tool that counts words, characters, sentences, and paragraphs in any text. It is essential for writers, students, bloggers, and content creators who need to meet specific length requirements. Whether you are writing an essay with a word limit, crafting a tweet within character restrictions, or optimizing content for SEO with target word counts, this tool provides real-time statistics as you type. It handles all languages and provides instant feedback.",
    extraSeo: "An essential writing tool for bloggers, students, copywriters, and content creators needing accurate word count statistics.",
    example: "'The quick brown fox jumps over the lazy dog.'\n\nWords: 9 | Characters: 44 | Sentences: 1",
    applications: [
      "Academic essay and assignment word limit compliance",
      "Blog and article content length optimization",
      "Social media post character counting",
      "SEO content planning with target word counts",
      "Translation work requiring word count comparisons"
    ],
    faqs: [
      { q: "How are words counted?", a: "Words are defined as sequences of characters separated by spaces or punctuation. The counter handles multiple spaces, line breaks, and special characters correctly. Hyphenated words count as one word." },
      { q: "Does it count characters with or without spaces?", a: "The tool provides both counts: total characters including spaces and characters excluding spaces. This is important because some platforms (like Twitter) count spaces, while others (like certain academic systems) do not." },
      { q: "How are sentences counted?", a: "Sentences are detected by counting periods, exclamation marks, and question marks that end a sentence. Abbreviations like 'Dr.' or 'U.S.A.' may slightly affect the count, but the tool handles common cases well." },
      { q: "What is a good word count for a blog post?", a: "For SEO, blog posts of 1,500-2,500 words tend to rank well. However, quality matters more than quantity. Aim for comprehensive coverage of your topic rather than artificially inflating word count." }
    ]
  },
  "character-counter": {
    whatIs: "The Character Counter precisely counts every character in your text, including letters, numbers, spaces, and special characters. It also provides a count excluding spaces. This tool is critical for anyone working with character-limited platforms like Twitter (280 characters), SMS messages (160 characters), meta descriptions (155-160 characters), and database fields with fixed lengths. Writers, developers, and marketers rely on character counting to ensure their content fits within required constraints.",
    extraSeo: "Perfect for crafting tweets, meta descriptions, SMS messages, and any content with strict character limits.",
    example: "'Hello, World!' → 13 characters (with spaces), 12 (without spaces)",
    applications: [
      "Social media posts within character limits",
      "SEO meta description and title tag optimization",
      "SMS message length checking",
      "Database field length validation",
      "Academic submissions with character limits"
    ],
    faqs: [
      { q: "Do spaces count as characters?", a: "Yes, spaces are characters. The tool shows both total characters (including spaces) and characters excluding spaces. Most platforms like Twitter count spaces toward the character limit." },
      { q: "What is the character limit for common platforms?", a: "Twitter: 280 characters. SMS: 160 characters. Google meta title: ~60 characters. Meta description: ~155-160 characters. Instagram caption: 2,200 characters. LinkedIn post: 3,000 characters." },
      { q: "Does it count emoji as one character?", a: "Emoji counting varies by platform. Some emoji are one character, while complex emoji (like family emoji) may count as multiple. This tool counts based on JavaScript string length, which matches most web platform behavior." },
      { q: "How is this different from the Word Counter?", a: "The Character Counter focuses specifically on character-level analysis — total characters, characters without spaces, and individual character frequency. The Word Counter provides higher-level metrics like word count, sentence count, and reading time." }
    ]
  },
  "text-case-converter": {
    whatIs: "The Text Case Converter transforms text between multiple case formats including UPPERCASE, lowercase, Title Case, Sentence case, camelCase, and more. Case conversion is frequently needed in writing, programming, data processing, and content formatting. Whether you accidentally typed in caps lock, need to format headings consistently, convert database values, or generate variable names for code, this tool handles all common text case transformations instantly and accurately.",
    extraSeo: "Instantly convert text between uppercase, lowercase, title case, and sentence case. Saves time for writers and content managers.",
    example: "'hello world' →\nUPPERCASE: HELLO WORLD\nTitle Case: Hello World",
    applications: [
      "Fixing accidentally capitalized text",
      "Formatting headings and titles consistently",
      "Programming variable naming conventions",
      "Data cleaning and standardization",
      "Legal and formal document formatting"
    ],
    faqs: [
      { q: "What is Title Case?", a: "Title Case capitalizes the first letter of each major word while keeping articles, conjunctions, and prepositions lowercase (e.g., 'The Quick Brown Fox Jumps Over the Lazy Dog'). Rules vary by style guide." },
      { q: "What is camelCase?", a: "camelCase joins words together with no spaces, capitalizing the first letter of each word except the first (e.g., 'myVariableName'). It is widely used in JavaScript, Java, and other programming languages for variable and function naming." },
      { q: "What is Sentence case?", a: "Sentence case capitalizes only the first letter of the first word and proper nouns, like a regular sentence. It is the most common case for body text and is considered more readable than Title Case for long text." },
      { q: "Can I convert to snake_case or kebab-case?", a: "These programming naming conventions replace spaces with underscores (snake_case) or hyphens (kebab-case). Check if the tool supports them — they are commonly used in Python, Ruby, CSS, and URL slugs." }
    ]
  },
  "remove-extra-spaces": {
    whatIs: "The Remove Extra Spaces tool cleans up messy text by eliminating redundant whitespace — multiple consecutive spaces, leading and trailing spaces, and excessive blank lines. Pasted text from PDFs, web pages, or documents often contains irregular spacing that looks unprofessional. This tool normalizes whitespace while preserving intentional single spaces and paragraph breaks. It is invaluable for writers, editors, data processors, and developers who need clean, properly formatted text.",
    extraSeo: "Clean up messy text by removing unnecessary whitespace and extra spaces between words. Ideal for reformatting pasted text.",
    example: "'Hello    World    !' → 'Hello World !'",
    applications: [
      "Cleaning text copied from PDFs and websites",
      "Formatting data before importing into spreadsheets",
      "Preparing text for publishing and printing",
      "Code cleanup and whitespace normalization",
      "Email and document formatting"
    ],
    faqs: [
      { q: "Does it remove all spaces?", a: "No, it only removes extra spaces — multiple consecutive spaces are reduced to single spaces, and leading/trailing spaces are trimmed. Normal single spaces between words are preserved." },
      { q: "Will it affect line breaks?", a: "The tool can optionally handle excessive blank lines while preserving intentional paragraph breaks. Single line breaks are typically kept intact." },
      { q: "Why does copied text have extra spaces?", a: "Text copied from PDFs, formatted documents, and web pages often includes invisible formatting characters, non-breaking spaces, and column-based whitespace that appears as extra spaces in plain text." },
      { q: "Can I use this for code formatting?", a: "For basic whitespace cleanup in code, yes. However, for proper code formatting with consistent indentation, consider using a dedicated code formatter like Prettier or your IDE's built-in formatter." }
    ]
  },
  "reverse-text": {
    whatIs: "The Reverse Text tool flips any text string character by character, turning 'Hello World' into 'dlroW olleH'. While seemingly simple, text reversal has practical applications in programming challenges, puzzle solving, palindrome checking, creative writing, and social media fun. This tool handles any text including Unicode characters, providing instant character-by-character reversal. It is also useful for learning about string manipulation concepts in computer science.",
    extraSeo: "Reverse any text character by character for puzzles, coding challenges, or creative content exploration.",
    example: "'ToolVerse' → 'esreVlooT'",
    applications: [
      "Checking if text is a palindrome",
      "Programming practice and coding challenges",
      "Creating hidden or encoded messages for fun",
      "Social media creative content",
      "Understanding string manipulation in computer science"
    ],
    faqs: [
      { q: "What is reversed text used for?", a: "Reversed text is used for palindrome checking, mirror writing (like Leonardo da Vinci), creative social media posts, programming exercises, and puzzle games. It is also a fundamental string operation in computer science." },
      { q: "Does it handle special characters?", a: "Yes, the tool reverses all characters including letters, numbers, punctuation, spaces, and Unicode characters. The entire string is reversed character by character." },
      { q: "What is a palindrome?", a: "A palindrome reads the same forwards and backwards, like 'racecar', 'madam', or 'A man a plan a canal Panama' (ignoring spaces and case). Use this tool to quickly check if a word or phrase is a palindrome." },
      { q: "Can I reverse word order instead of character order?", a: "This tool reverses character order. To reverse word order ('Hello World' → 'World Hello'), you would need to use a different approach. Some text tools offer both character and word reversal options." }
    ]
  },
  "sort-text": {
    whatIs: "The Sort Text tool arranges lines of text in alphabetical, reverse alphabetical, or numerical order. Sorting is essential for organizing lists, cleaning data, preparing directories, and processing text files. Whether you are alphabetizing a name list, sorting product entries, organizing code imports, or arranging research references, this tool handles the task instantly. It supports case-sensitive and case-insensitive sorting and handles large amounts of text efficiently.",
    extraSeo: "Sort lines of text alphabetically in ascending or descending order for organizing lists and cleaning data.",
    example: "Input: Banana, Apple, Cherry\nSorted: Apple, Banana, Cherry",
    applications: [
      "Alphabetizing name lists and directories",
      "Organizing data for spreadsheet import",
      "Sorting programming imports and dependencies",
      "Preparing bibliographies and reference lists",
      "Cleaning and organizing log files"
    ],
    faqs: [
      { q: "How is alphabetical sorting done?", a: "The tool compares lines character by character based on Unicode values. Numbers come before letters, uppercase before lowercase (in case-sensitive mode). You can choose ascending (A-Z) or descending (Z-A) order." },
      { q: "Does it handle numbers correctly?", a: "By default, numbers are sorted lexicographically (1, 10, 2, 20, 3). For true numerical sorting, ensure each line contains only a number or use numerical sort mode if available." },
      { q: "Can I remove duplicates while sorting?", a: "The sort tool focuses on ordering. To remove duplicates, use our Remove Duplicate Lines tool first, then sort the result. This gives you a clean, sorted list." },
      { q: "Is the sorting case-sensitive?", a: "Case sensitivity depends on the sorting mode. Case-insensitive sorting treats 'Apple' and 'apple' as equal, while case-sensitive sorting separates uppercase and lowercase letters." }
    ]
  },
  "remove-duplicate-lines": {
    whatIs: "The Remove Duplicate Lines tool eliminates repeated lines from text while keeping unique entries. This is invaluable when cleaning data, processing lists, deduplicating email addresses, or preparing datasets. Whether you have a list with hundreds of repeated entries from a database export, a log file with redundant messages, or a CSV file with duplicate rows, this tool strips out duplicates instantly while preserving the original order of first occurrences.",
    extraSeo: "Remove repeated lines from text data while preserving the original order. Essential for data cleaning and list deduplication.",
    example: "Input: Apple, Banana, Apple, Cherry, Banana\nOutput: Apple, Banana, Cherry",
    applications: [
      "Cleaning email lists and contact databases",
      "Removing duplicate entries from data exports",
      "Processing log files with repeated messages",
      "Preparing unique keyword lists for SEO",
      "Deduplicating product catalogs and inventories"
    ],
    faqs: [
      { q: "Does it preserve the order of lines?", a: "Yes, the tool keeps lines in their original order and removes subsequent duplicates. The first occurrence of each unique line is preserved, maintaining the logical flow of your data." },
      { q: "Is the comparison case-sensitive?", a: "By default, the comparison is exact and case-sensitive. 'Hello' and 'hello' are considered different lines. Some versions offer a case-insensitive option for more flexible deduplication." },
      { q: "Can it handle large files?", a: "The tool efficiently processes text with thousands of lines in your browser. For very large files (millions of lines), performance depends on your device's memory, but most practical use cases are handled instantly." },
      { q: "Does it handle whitespace differences?", a: "The comparison is exact by default, so 'Hello ' (with trailing space) and 'Hello' would be considered different. For best results, run the Remove Extra Spaces tool first to normalize whitespace." }
    ]
  },
  "text-repeater": {
    whatIs: "The Text Repeater duplicates any text string a specified number of times with optional separators between repetitions. This is useful for generating test data, creating patterns, filling templates, and various creative applications. Whether you need to repeat a word 100 times for a visual effect, generate sample data for testing, or create repetitive patterns for design work, this tool handles it instantly. Set the repetition count and separator to get exactly the output you need.",
    extraSeo: "Repeat text a specified number of times with optional separators for generating test data and filling content templates.",
    example: "'Hello' × 3 with ' - ':\n'Hello - Hello - Hello'",
    applications: [
      "Generating test data for software development",
      "Creating visual text patterns and designs",
      "Filling placeholder content in templates",
      "Stress testing text inputs in applications",
      "Creative writing and poetry experiments"
    ],
    faqs: [
      { q: "What is the maximum number of repetitions?", a: "The tool can handle hundreds or thousands of repetitions depending on your browser's capacity. For most practical purposes, even 10,000 repetitions work smoothly. Very large outputs may take a moment to render." },
      { q: "Can I add a separator between repetitions?", a: "Yes, you can specify any separator string — newline, comma, space, dash, or any custom text. This makes it easy to create comma-separated lists, line-by-line repetitions, or custom-delimited output." },
      { q: "What are common uses for repeated text?", a: "Common uses include generating dummy content for web layouts, creating test data for input validation, making attention-grabbing social media posts, and producing repetitive patterns for artistic projects." },
      { q: "Can I repeat multiple lines?", a: "Yes, you can enter multi-line text and the entire block will be repeated. Each repetition includes all the original lines, separated by your chosen delimiter." }
    ]
  },
  "remove-line-breaks": {
    whatIs: "The Remove Line Breaks tool joins multiple lines of text into a single continuous paragraph by removing newline characters. Text copied from emails, PDFs, formatted documents, and code often contains unwanted line breaks that disrupt reading flow. This tool cleanly merges lines while preserving spaces between words, creating a smooth, continuous text block. It is essential for content reformatting, data cleaning, and preparing text for platforms that do not support multi-line input.",
    extraSeo: "Join multi-line text into a single continuous paragraph. Ideal for reformatting text from PDFs and emails.",
    example: "Line 1\nLine 2\nLine 3 → 'Line 1 Line 2 Line 3'",
    applications: [
      "Cleaning text copied from PDFs and formatted documents",
      "Preparing text for single-line input fields",
      "Reformatting poetry or verse into prose",
      "Email text cleanup and formatting",
      "Data processing and CSV field cleanup"
    ],
    faqs: [
      { q: "Does it replace line breaks with spaces?", a: "Yes, each line break is replaced with a space to ensure words from adjacent lines do not merge together. The result is a clean, readable single paragraph." },
      { q: "Will it remove paragraph breaks too?", a: "The tool removes all line breaks, including paragraph breaks. If you want to preserve paragraph structure, consider using a tool that only removes single line breaks while keeping double line breaks as paragraph separators." },
      { q: "Why does copied text have unwanted line breaks?", a: "PDFs and formatted documents use hard line breaks at the end of each visual line. When copied to plain text, these breaks remain even though you intended continuous paragraphs. This tool fixes that." },
      { q: "Can I choose what replaces the line breaks?", a: "The standard behavior replaces line breaks with spaces. Some versions allow you to choose a custom replacement character like a comma or semicolon for list-style formatting." }
    ]
  },
  "text-diff-checker": {
    whatIs: "The Text Difference Checker compares two texts side by side and highlights the differences between them. It identifies additions, deletions, and changes at the line or word level, making it invaluable for proofreading, code review, document version comparison, and quality assurance. Whether you are reviewing document revisions, comparing code changes, verifying translation accuracy, or checking data integrity, this tool provides clear visual indication of every difference between two text versions.",
    extraSeo: "Compare two text blocks side by side with highlighted differences for code reviews and document versioning.",
    example: "'The cat sat on the mat' vs 'The cat sat on the hat'\nDifference: 'mat' → 'hat'",
    applications: [
      "Document version comparison and proofreading",
      "Code review and change tracking",
      "Translation accuracy verification",
      "Contract and legal document revision checking",
      "Data integrity and backup verification"
    ],
    faqs: [
      { q: "How does the diff algorithm work?", a: "The tool compares texts line by line (and optionally word by word), identifying segments that were added, removed, or modified. Differences are highlighted with colors — typically green for additions and red for deletions." },
      { q: "Can it compare code files?", a: "Yes, it works well for comparing code. It treats each line independently and highlights changes, similar to version control diff tools like git diff. It is great for quick code comparisons without command-line tools." },
      { q: "Does it handle large texts?", a: "The tool handles moderately large texts efficiently in the browser. For very large files (thousands of lines), processing may take a moment, but most practical comparisons are instant." },
      { q: "Can I compare formatted text?", a: "The tool compares plain text content only. Formatting differences like bold, italic, or font changes are not detected. Convert formatted text to plain text first for content-level comparison." }
    ]
  },
  "markdown-previewer": {
    whatIs: "The Markdown Previewer lets you write Markdown text and see a live HTML preview side by side. Markdown is a lightweight markup language widely used for documentation, README files, blog posts, and note-taking. This tool supports headings, bold, italic, inline code, lists, and other common Markdown syntax. Whether you are writing GitHub documentation, crafting a blog post, or learning Markdown for the first time, this real-time previewer makes the writing process visual and intuitive.",
    extraSeo: "Write Markdown and see instant HTML preview side by side for README files, blogs, and documentation.",
    example: "'# Hello\n**Bold** and *italic*' → Rendered heading with bold and italic text",
    applications: [
      "Writing and previewing GitHub README files",
      "Blog post and article drafting in Markdown",
      "Documentation and technical writing",
      "Learning Markdown syntax with immediate feedback",
      "Note-taking and knowledge base creation"
    ],
    faqs: [
      { q: "What Markdown features are supported?", a: "The previewer supports headings (# to ###), bold (**text**), italic (*text*), inline code (`code`), unordered lists (- item), and ordered lists (1. item). These cover the most commonly used Markdown elements." },
      { q: "Can I export the HTML output?", a: "You can copy the rendered HTML from the preview panel. For full HTML export, select the preview content and paste it into your target application or view the generated HTML source." },
      { q: "Is this compatible with GitHub Flavored Markdown?", a: "The tool supports core Markdown syntax. Some GitHub-specific features like task lists, tables, and syntax-highlighted code blocks may have limited support. It covers the most commonly used elements." },
      { q: "Can I use this for README files?", a: "Yes, this is perfect for drafting README.md files. Write your content, preview it in real-time, and when satisfied, copy the Markdown text to your project's README file." }
    ]
  },
  "text-to-slug": {
    whatIs: "The Text to Slug converter transforms any text into a URL-friendly slug format. Slugs are cleaned-up versions of titles used in web addresses — lowercase, with spaces replaced by hyphens and special characters removed. Good URL slugs improve SEO, readability, and shareability of web pages. This tool is essential for bloggers, web developers, and content managers who need to create clean, consistent URLs for their pages, posts, and products.",
    extraSeo: "Convert text into clean, URL-friendly slug format for SEO-optimized URLs and content management systems.",
    example: "'Hello World! Test 123' → 'hello-world-test-123'",
    applications: [
      "Creating SEO-friendly URLs for blog posts",
      "Generating product page URLs for e-commerce",
      "Building clean navigation structures for websites",
      "Content management system URL generation",
      "Filename sanitization for web uploads"
    ],
    faqs: [
      { q: "What is a URL slug?", a: "A URL slug is the part of a web address that identifies a specific page in human-readable form. For example, in 'example.com/blog/how-to-make-bread', the slug is 'how-to-make-bread'. Good slugs are short, descriptive, and use hyphens." },
      { q: "Why are slugs important for SEO?", a: "Search engines use URL slugs as a ranking signal. Clean, keyword-rich slugs help search engines understand page content and improve click-through rates when URLs appear in search results." },
      { q: "What characters are removed from slugs?", a: "Special characters, punctuation, accented letters, and non-ASCII characters are removed or transliterated. Spaces become hyphens, multiple hyphens are collapsed to one, and everything is lowercased." },
      { q: "How long should a URL slug be?", a: "Keep slugs under 60 characters for best SEO results. Use 3-5 important words that describe the page content. Remove stop words like 'the', 'and', 'is' to keep slugs concise and focused." }
    ]
  },
  "reading-time-estimator": {
    whatIs: "The Reading Time Estimator calculates how long it takes to read or speak a given text based on average reading speeds. The average adult reads about 200-250 words per minute silently and speaks about 130-150 words per minute. This tool is invaluable for bloggers estimating article reading times, speakers preparing presentations, students planning study sessions, and content creators optimizing content length. Paste any text to get instant reading and speaking time estimates.",
    extraSeo: "Estimate reading and speaking time for any text. Used by bloggers, presenters, and content strategists to plan content length.",
    example: "1,500-word article:\nReading ≈ 6 min (250 wpm)\nSpeaking ≈ 10 min (150 wpm)",
    applications: [
      "Blog post reading time badges for better UX",
      "Speech and presentation timing preparation",
      "Study session planning and time management",
      "Content length optimization for target audiences",
      "Podcast and video script duration estimation"
    ],
    faqs: [
      { q: "How is reading time calculated?", a: "Reading time is calculated by dividing the total word count by the average reading speed (approximately 200-250 words per minute for adults). Technical content may take longer, while casual content may be faster." },
      { q: "Why do blog posts show reading time?", a: "Displaying estimated reading time helps readers decide whether to engage with content. It sets expectations, reduces bounce rates, and improves user experience. Studies show it increases article engagement." },
      { q: "How accurate is the estimate?", a: "The estimate is based on averages and may vary by individual, content complexity, and language. Technical or academic content typically takes 30-50% longer to read than the estimated time for casual content." },
      { q: "What about speaking time?", a: "Speaking time uses a slower rate (about 130-150 words per minute) since speaking is naturally slower than silent reading. This is useful for planning presentations, speeches, and podcast scripts." }
    ]
  },
  "text-encryptor": {
    whatIs: "The Text Encryptor tool encrypts and decrypts text using the Caesar cipher, one of the oldest and simplest encryption methods. The Caesar cipher shifts each letter by a fixed number of positions in the alphabet. While not secure for real-world encryption, it is excellent for learning cryptography basics, creating simple coded messages, solving puzzles, and understanding how substitution ciphers work. Enter your text and shift value to encrypt or decrypt messages instantly.",
    extraSeo: "Encrypt and decrypt text using Caesar cipher substitution. Great for learning cryptography and encoding messages.",
    example: "'HELLO' with shift 3 → 'KHOOR'\n(H→K, E→H, L→O, L→O, O→R)",
    applications: [
      "Learning basic cryptography and cipher concepts",
      "Creating coded messages for games and puzzles",
      "Educational exercises in computer science",
      "Escape room and treasure hunt puzzle creation",
      "Understanding historical encryption methods"
    ],
    faqs: [
      { q: "What is a Caesar cipher?", a: "A Caesar cipher shifts each letter by a fixed number of positions. With a shift of 3, A becomes D, B becomes E, and so on. It is named after Julius Caesar, who reportedly used it for military communications." },
      { q: "Is the Caesar cipher secure?", a: "No, the Caesar cipher is not secure for real encryption. It has only 25 possible keys and can be broken by trying all shifts (brute force) or using frequency analysis. It is primarily used for educational purposes." },
      { q: "How do I decrypt a Caesar cipher message?", a: "To decrypt, apply the cipher with the negative shift value. If the message was encrypted with shift 3, decrypt with shift -3 (or equivalently shift 23). Our tool handles both encryption and decryption." },
      { q: "What happens to numbers and special characters?", a: "The Caesar cipher traditionally only shifts letters. Numbers, spaces, punctuation, and special characters remain unchanged. Only alphabetic characters are affected by the shift operation." }
    ]
  },
  "json-formatter": {
    whatIs: "The JSON Formatter beautifies, validates, and minifies JSON data with proper indentation and syntax highlighting. JSON is the standard data format for web APIs, configuration files, and data exchange. Poorly formatted JSON is hard to read and debug, while valid formatting helps identify structure, find errors, and understand data relationships. This tool is indispensable for developers working with APIs, configuration files, databases, and any system that uses JSON.",
    extraSeo: "Format, beautify, and validate JSON data with proper indentation. Essential for debugging APIs and configuration files.",
    example: "{\"name\":\"John\",\"age\":30} →\n{\n  \"name\": \"John\",\n  \"age\": 30\n}",
    applications: [
      "API response debugging and inspection",
      "Configuration file editing and validation",
      "Data transformation and migration",
      "Database document formatting",
      "Web development and debugging"
    ],
    faqs: [
      { q: "What is JSON?", a: "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It uses key-value pairs and arrays to represent structured data." },
      { q: "What is the difference between beautify and minify?", a: "Beautifying adds indentation and line breaks for readability. Minifying removes all whitespace to create the smallest possible file size. Use beautified JSON for development and minified JSON for production." },
      { q: "How do I validate JSON?", a: "The formatter automatically validates JSON when you paste it. If the JSON is invalid, it shows an error message indicating where the problem is. Common issues include missing commas, unmatched brackets, and trailing commas." },
      { q: "What is proper JSON indentation?", a: "Standard JSON indentation uses 2 or 4 spaces per level. The formatter uses consistent indentation, properly nests objects and arrays, and places each key-value pair on its own line for maximum readability." }
    ]
  },
  "base64-encoder-decoder": {
    whatIs: "The Base64 Encoder/Decoder converts text to Base64 encoding and back. Base64 is a binary-to-text encoding scheme that represents binary data using 64 ASCII characters. It is widely used in web development for embedding images in CSS, encoding email attachments, handling authentication tokens, and transmitting binary data through text-only channels. This tool provides instant encoding and decoding for any text string, making it essential for developers and system administrators.",
    extraSeo: "Encode text to Base64 or decode Base64 strings in web development, email encoding, and data transmission.",
    example: "'Hello World' → Base64: SGVsbG8gV29ybGQ=\nDecode reverses the process.",
    applications: [
      "Embedding images as data URIs in web pages",
      "Encoding authentication credentials for HTTP headers",
      "Email attachment encoding and decoding",
      "API data transmission through text-only channels",
      "Debugging encoded data in web applications"
    ],
    faqs: [
      { q: "What is Base64 encoding?", a: "Base64 converts binary data into a set of 64 printable ASCII characters (A-Z, a-z, 0-9, +, /). It increases data size by about 33% but ensures safe transmission through text-based systems that might corrupt binary data." },
      { q: "Why is Base64 used in web development?", a: "Base64 allows embedding binary data (like images) directly in HTML/CSS as data URIs, reduces HTTP requests for small files, and safely transmits binary data through JSON APIs and text-based protocols." },
      { q: "Is Base64 encryption?", a: "No, Base64 is encoding, not encryption. It does not provide any security — anyone can decode Base64 data. It is a way to represent binary data as text, not a way to hide information." },
      { q: "What is a data URI?", a: "A data URI embeds file content directly in a URL using Base64. For example, a small image can be included as 'data:image/png;base64,iVBORw0KGgo...' instead of linking to a separate file. This reduces HTTP requests." }
    ]
  },
  "url-encoder-decoder": {
    whatIs: "The URL Encoder/Decoder converts special characters in URLs to their percent-encoded equivalents and back. URLs can only contain certain ASCII characters; special characters like spaces, ampersands, and non-English characters must be encoded. This tool is essential for web developers constructing query strings, debugging URLs, handling form submissions, and working with API endpoints that require properly encoded parameters.",
    extraSeo: "Encode special characters in URLs or decode percent-encoded strings for web development and API work.",
    example: "'Hello World & Friends' → 'Hello%20World%20%26%20Friends'",
    applications: [
      "Encoding query parameters for API calls",
      "Debugging malformed URLs with special characters",
      "Handling form data with special characters",
      "Building shareable URLs with dynamic content",
      "Working with internationalized URLs and non-ASCII characters"
    ],
    faqs: [
      { q: "What is URL encoding?", a: "URL encoding replaces unsafe characters with a percent sign followed by their hexadecimal ASCII value. Spaces become %20 (or +), ampersands become %26, and non-ASCII characters like é become %C3%A9." },
      { q: "Why do URLs need encoding?", a: "URLs have a restricted set of valid characters. Characters like spaces, &, =, #, and ? have special meanings in URLs. Encoding ensures these characters are treated as literal data rather than URL syntax." },
      { q: "What is the difference between encodeURI and encodeURIComponent?", a: "encodeURI encodes a full URL, preserving characters like :, /, and ?. encodeURIComponent encodes individual parameters, converting all special characters. Use the latter for query parameter values." },
      { q: "Can I encode non-English characters?", a: "Yes, URL encoding handles all Unicode characters by converting them to their UTF-8 byte sequence and percent-encoding each byte. Japanese, Arabic, Chinese, and all other scripts are properly encoded." }
    ]
  },
  "text-to-binary": {
    whatIs: "The Text to Binary converter transforms readable text into its binary representation and converts binary back to text. Each character is represented as a sequence of 8 bits (0s and 1s) based on its ASCII or Unicode value. This tool is useful for computer science education, understanding character encoding, creating binary art, and learning how computers store text data internally. It bridges the gap between human-readable text and machine-level representation.",
    extraSeo: "Convert text to binary ASCII representation and vice versa. An educational tool for understanding digital text encoding.",
    example: "'Hi' → 01001000 01101001\n(H=72, i=105)",
    applications: [
      "Computer science education on character encoding",
      "Understanding how computers store text",
      "Creating binary coded messages for fun",
      "Programming and debugging character encoding issues",
      "Digital literacy and STEM education"
    ],
    faqs: [
      { q: "How is text converted to binary?", a: "Each character is converted to its ASCII code (e.g., 'A' = 65), then that number is converted to binary (65 = 01000001). Spaces between byte groups make the output readable." },
      { q: "What is ASCII?", a: "ASCII (American Standard Code for Information Interchange) assigns numeric values to 128 characters including letters, digits, and symbols. For example, A=65, a=97, 0=48. Extended ASCII and Unicode cover thousands more characters." },
      { q: "Why are there 8 digits per character?", a: "Each character is represented as one byte (8 bits), which can hold values from 0 to 255. This is enough for all ASCII characters. Extended characters (like emoji) may require multiple bytes in UTF-8 encoding." },
      { q: "Can I convert binary back to text?", a: "Yes, the tool works both ways. Enter a binary string with groups of 8 bits and it will decode them back to readable text. Ensure the binary is properly formatted with spaces between bytes." }
    ]
  },
  "word-frequency-counter": {
    whatIs: "The Word Frequency Counter analyzes text to show how often each word appears, sorted by frequency. This is invaluable for content analysis, SEO keyword research, writing style improvement, and linguistic research. By seeing which words dominate your text, you can identify overused terms, check keyword density for SEO, analyze writing patterns, and ensure your vocabulary is varied. The tool processes any text and provides a clear frequency table.",
    extraSeo: "Analyze text to find word occurrence frequency. Useful for SEO keyword density checks and content analysis.",
    example: "'the cat and the dog and the bird'\nthe: 3, and: 2, cat: 1, dog: 1, bird: 1",
    applications: [
      "SEO keyword density analysis",
      "Writing style improvement and vocabulary diversity",
      "Academic text analysis and linguistics research",
      "Content optimization for search engines",
      "Detecting repetitive language in manuscripts"
    ],
    faqs: [
      { q: "How is word frequency calculated?", a: "The tool counts every occurrence of each word in the text, treating different cases as the same word (e.g., 'The' and 'the' are counted together). Results are sorted from most frequent to least frequent." },
      { q: "Does it filter common words?", a: "Common words (articles, prepositions, conjunctions) like 'the', 'is', 'and' typically appear most frequently. Some tools offer the option to filter these stop words to focus on meaningful content words." },
      { q: "What is a good keyword density for SEO?", a: "Target keywords should appear at about 1-2% density (1-2 times per 100 words). Over-optimization (keyword stuffing) above 3% can actually hurt SEO rankings. Use this tool to check your keyword distribution." },
      { q: "Can I analyze multiple languages?", a: "The tool works with any language that uses space-separated words. It counts words based on whitespace boundaries, so it handles English, Spanish, French, German, and most European languages effectively." }
    ]
  },
  "text-to-morse-code": {
    whatIs: "The Morse Code Translator converts text to Morse code (dots and dashes) and translates Morse code back to text. Developed in the 1830s for telegraph communication, Morse code remains relevant in aviation, maritime communication, amateur radio, emergency signaling, and accessibility applications. This tool handles all letters, numbers, and common punctuation, making it useful for education, hobby radio operation, and understanding one of the most influential communication systems in history.",
    extraSeo: "Translate text to Morse code and back. Popular for learning telecommunications history and amateur radio communication.",
    example: "'SOS' → ... --- ...\n(S = ..., O = ---, S = ...)",
    applications: [
      "Amateur radio and ham radio operation",
      "Emergency communication and survival skills",
      "Learning Morse code for aviation or maritime certification",
      "Educational projects and STEM activities",
      "Accessibility applications for communication devices"
    ],
    faqs: [
      { q: "What is Morse code?", a: "Morse code represents letters and numbers as sequences of short signals (dots/dits) and long signals (dashes/dahs). For example, SOS is ··· --- ···. It can be transmitted as sound, light, or electrical pulses." },
      { q: "Is Morse code still used today?", a: "Yes, Morse code is still used by amateur radio operators, in aviation and maritime emergency signals, and for accessibility. The universal distress signal SOS (··· --- ···) remains recognized worldwide." },
      { q: "How long does it take to learn Morse code?", a: "Basic proficiency (5 words per minute) can be achieved in a few weeks of daily practice. Skilled operators can receive 20-30+ words per minute. Start with common letters (E, T, A, I, N) and build gradually." },
      { q: "What characters are supported?", a: "The tool supports all 26 English letters, digits 0-9, and common punctuation marks. Morse code has standardized representations for these characters established by the International Telecommunication Union." }
    ]
  },
  "password-generator": {
    whatIs: "The Password Generator creates strong, random passwords with customizable length and character options. In an era of frequent data breaches, using unique, complex passwords for every account is essential for digital security. This tool generates cryptographically random passwords that include uppercase and lowercase letters, numbers, and special characters. You control the length and complexity to meet any website's password requirements. Never reuse passwords — generate a unique one for every account.",
    extraSeo: "Generate cryptographically secure passwords with customizable length and character types. Essential for protecting your online accounts.",
    example: "Length 16, all character types:\nGenerated: xK9#mP2$vL7!nQ4@",
    applications: [
      "Creating strong passwords for online accounts",
      "Meeting specific password requirements for different websites",
      "Generating temporary passwords for new user accounts",
      "IT security and system administration",
      "Replacing compromised passwords after data breaches"
    ],
    faqs: [
      { q: "What makes a password strong?", a: "A strong password is at least 12 characters long, uses a mix of uppercase and lowercase letters, numbers, and special characters, and does not contain dictionary words, personal information, or common patterns like '123456'." },
      { q: "How does the generator ensure randomness?", a: "The generator uses the browser's cryptographic random number generator (crypto.getRandomValues), which provides true randomness suitable for security-sensitive applications." },
      { q: "Should I use a different password for every account?", a: "Absolutely. If one account is breached, unique passwords prevent attackers from accessing your other accounts. Use a password manager to store and organize your unique passwords securely." },
      { q: "How long should my password be?", a: "Aim for at least 12-16 characters. Each additional character exponentially increases the time needed to crack the password. A 16-character random password is virtually impossible to brute-force with current technology." }
    ]
  },
  "random-number-generator": {
    whatIs: "The Random Number Generator produces random integers or floating-point numbers within any range you specify. Randomness is essential in games, statistics, sampling, simulations, and decision-making. Whether you need to roll virtual dice, select lottery numbers, generate random samples for research, or make fair random selections, this tool provides unbiased random numbers instantly. It uses the browser's built-in random number generator for quick, reliable results.",
    extraSeo: "Generate random numbers within any range for games, lotteries, statistical sampling, and decision making.",
    example: "Range: 1–100\nGenerated: 47 (random, changes each time)",
    applications: [
      "Board games and dice rolling simulation",
      "Lottery number generation",
      "Statistical sampling and research randomization",
      "Programming test data generation",
      "Fair decision-making and random selection"
    ],
    faqs: [
      { q: "How random are the numbers?", a: "The tool uses Math.random() which provides pseudo-random numbers suitable for most applications like games, simulations, and general use. For cryptographic security, use the Password Generator instead." },
      { q: "Can I generate multiple random numbers at once?", a: "You can generate numbers one at a time or repeatedly click to build a set. For bulk random number generation, some versions offer batch mode to create multiple numbers simultaneously." },
      { q: "Can I set a specific range?", a: "Yes, specify any minimum and maximum values. The generator produces random numbers within your range, inclusive of both endpoints. Works with both integers and decimal numbers." },
      { q: "Is this suitable for scientific research?", a: "For basic research and classroom exercises, yes. For rigorous scientific studies requiring high-quality randomization, consider specialized statistical software or hardware random number generators." }
    ]
  },
  "random-color-generator": {
    whatIs: "The Random Color Generator produces random colors displayed in HEX and RGB formats. It is a fun and practical tool for designers, developers, and artists looking for color inspiration. Each click generates a completely new color, which can spark ideas for palettes, backgrounds, and design elements. Whether you are brainstorming color schemes, generating random visual elements for a project, or simply exploring the vast color spectrum, this tool delivers instant, visually appealing results.",
    extraSeo: "Generate random colors with HEX, RGB, and HSL values for design inspiration and exploring color possibilities.",
    example: "Generated: #3A7BD5\nRGB(58, 123, 213)\nHSL(215, 67%, 53%)",
    applications: [
      "Design inspiration and brainstorming sessions",
      "Generating random backgrounds and accents for projects",
      "Learning about color systems and relationships",
      "Creating random avatar and icon colors",
      "Quick prototyping and mockup creation"
    ],
    faqs: [
      { q: "What color formats are displayed?", a: "The generator shows colors in HEX format (#FF5733) and RGB format (255, 87, 51). Both are widely used in web development and design tools. You can copy either format instantly." },
      { q: "Can I save generated colors?", a: "Click the Copy button to copy the HEX value to your clipboard. For building palettes, generate multiple colors and save them in a document or use our Color Palette Generator for curated harmonious palettes." },
      { q: "How many possible colors are there?", a: "With 24-bit color (8 bits per channel), there are 16,777,216 possible colors. Each click gives you one random color from this vast spectrum, ensuring virtually endless variety." },
      { q: "Are the colors accessible?", a: "Random colors may or may not meet accessibility standards. For ensuring color contrast compliance with WCAG guidelines, use our Contrast Checker tool to verify text readability against any background color." }
    ]
  },
  "username-generator": {
    whatIs: "The Username Generator creates unique, creative usernames for social media, gaming, forums, and other online platforms. Finding an available username is increasingly difficult as platforms grow. This tool combines patterns, words, and random elements to generate memorable usernames that stand out. Whether you are creating a new gaming handle, professional social media presence, or anonymous forum account, this generator provides diverse options tailored to your preferences.",
    extraSeo: "Generate creative usernames for social media, gaming, and online accounts with customizable styles.",
    example: "Generated: SilverFox_42, CosmicWave_7, NeonTiger_88",
    applications: [
      "Creating accounts on social media platforms",
      "Gaming profiles and character names",
      "Professional online presence and branding",
      "Anonymous forum and community accounts",
      "Email address and handle creation"
    ],
    faqs: [
      { q: "How are usernames generated?", a: "The generator combines words, prefixes, suffixes, and numbers using various patterns. It creates diverse options from cool and professional to fun and random, ensuring you find a style that fits your needs." },
      { q: "Will the generated username be available?", a: "The generator creates suggestions, but availability depends on the specific platform. Popular combinations may already be taken. Try generating several options and check availability on your target platform." },
      { q: "Can I customize the style?", a: "You can regenerate for new suggestions. The generator produces various styles — some with numbers, some with word combinations — giving you a range of options from professional to playful." },
      { q: "What makes a good username?", a: "A good username is memorable, easy to spell, not too long, and reflects your personality or brand. Avoid excessive numbers or special characters that make it hard to remember or share verbally." }
    ]
  },
  "business-name-generator": {
    whatIs: "The Business Name Generator creates creative and catchy business name ideas for startups, brands, and projects. A great business name is memorable, easy to pronounce, and relevant to your industry. This tool generates diverse options by combining business-related words, creative patterns, and industry terms. Whether you are launching a tech startup, opening a restaurant, or building an online brand, this generator provides inspiration and starting points for your business identity.",
    extraSeo: "Get creative business name ideas for startups and brands with multiple options based on keywords and industry.",
    example: "Keyword 'Tech':\nTechNova Solutions, ByteForge Labs, InnovateTech Hub",
    applications: [
      "Startup naming and brand identity development",
      "Side project and product naming brainstorming",
      "Domain name availability exploration",
      "Freelance and consulting brand creation",
      "Creative project and portfolio naming"
    ],
    faqs: [
      { q: "How are business names generated?", a: "The generator combines industry terms, creative word patterns, and business-related vocabulary to create diverse name suggestions. It produces a mix of professional, modern, and creative options for you to consider." },
      { q: "Should I check domain availability?", a: "Absolutely. After finding names you like, check domain availability at registrars like Namecheap or GoDaddy. Also search social media platforms to ensure consistent branding across all channels." },
      { q: "What makes a good business name?", a: "A good business name is short (1-3 words), easy to spell and pronounce, memorable, relevant to your industry, and available as a domain name and social media handle. Avoid generic or easily confused names." },
      { q: "Can I trademark a generated name?", a: "Generated names can potentially be trademarked, but you must verify that the name is not already registered. Conduct a trademark search at your country's intellectual property office before investing in branding." }
    ]
  },
  "lorem-ipsum-generator": {
    whatIs: "The Lorem Ipsum Generator creates placeholder text for design mockups, web development, and typography testing. Lorem Ipsum has been the printing industry's standard dummy text since the 1500s. This tool generates customizable amounts of placeholder text in paragraphs, sentences, or words. Designers and developers use it to fill layouts without the distraction of meaningful content, allowing focus on visual design, typography, and spacing decisions.",
    extraSeo: "Generate placeholder text for website mockups, design layouts, and content templates with customizable output length.",
    example: "Generate 2 paragraphs:\nLorem ipsum dolor sit amet, consectetur adipiscing elit...",
    applications: [
      "Web design and development placeholder content",
      "Print layout and typography testing",
      "Graphic design mockups and presentations",
      "Content management system testing",
      "Email template and newsletter design"
    ],
    faqs: [
      { q: "What is Lorem Ipsum?", a: "Lorem Ipsum is scrambled Latin text derived from Cicero's 'De Finibus Bonorum et Malorum' (45 BC). It has been used as placeholder text since the 1500s because its letter and word distribution resembles natural language." },
      { q: "Why not use real text as placeholder?", a: "Using Lorem Ipsum prevents viewers from being distracted by reading the content and instead focusing on design elements like layout, typography, and color. Meaningful text draws attention away from visual assessment." },
      { q: "Can I generate specific amounts?", a: "Yes, specify the number of paragraphs, sentences, or words you need. The generator produces exactly the amount requested, making it easy to fill any layout precisely." },
      { q: "Are there alternatives to Lorem Ipsum?", a: "Yes, alternatives include 'Cupcake Ipsum', 'Hipster Ipsum', 'Bacon Ipsum', and others that use themed vocabulary. However, Lorem Ipsum remains the industry standard for its neutral, non-distracting nature." }
    ]
  },
  "quotes-generator": {
    whatIs: "The Quotes Generator serves random inspirational, motivational, and thought-provoking quotes from famous authors, leaders, scientists, and philosophers. A well-timed quote can boost motivation, provide perspective, and spark creativity. This tool is perfect for daily inspiration, social media content, presentations, email signatures, and personal journaling. Each click reveals a new quote, giving you access to wisdom from history's greatest thinkers.",
    extraSeo: "Get random inspirational quotes from famous people throughout history. Perfect for daily motivation and social media content.",
    example: "\"The only way to do great work is to love what you do.\" — Steve Jobs",
    applications: [
      "Daily motivation and personal development",
      "Social media content creation",
      "Presentation and speech introductions",
      "Email signatures and personal branding",
      "Journaling and reflective writing prompts"
    ],
    faqs: [
      { q: "Where do the quotes come from?", a: "The quotes are curated from famous figures across history, including authors, scientists, leaders, philosophers, and entrepreneurs. They cover themes like success, perseverance, creativity, and wisdom." },
      { q: "Can I share quotes on social media?", a: "Absolutely! Click to generate a quote you love, then copy and paste it to your social media platform. Adding a relevant quote to your posts can boost engagement and inspire your followers." },
      { q: "How many quotes are available?", a: "The generator contains a curated collection of quotes. While not exhaustive, it provides diverse content across many themes and authors. You can click multiple times to discover new quotes." },
      { q: "Are the quotes attributed to their authors?", a: "Yes, each quote is displayed with its attributed author. This helps with proper citation and allows you to explore more work by authors whose quotes resonate with you." }
    ]
  },
  "hash-generator": {
    whatIs: "The Hash Generator creates hash values for any input text using multiple hashing algorithms. Hash functions transform input data into fixed-size strings that act as digital fingerprints — even a tiny change in input produces a completely different hash. Hashing is fundamental in data integrity verification, password storage, digital signatures, and blockchain technology. This tool lets you generate and compare hashes instantly for any text string.",
    extraSeo: "Generate hash values for text using multiple algorithms for data integrity verification and learning cryptography.",
    example: "'Hello World' → DJB2: 2119740623",
    applications: [
      "Data integrity verification and checksum comparison",
      "Understanding password hashing concepts",
      "Digital signature and authentication learning",
      "File integrity checking",
      "Blockchain and cryptocurrency education"
    ],
    faqs: [
      { q: "What is a hash function?", a: "A hash function takes any input and produces a fixed-size output string called a hash or digest. The same input always produces the same hash, but even a tiny change in input creates a completely different hash." },
      { q: "Is hashing the same as encryption?", a: "No, hashing is one-way — you cannot reverse a hash to get the original input. Encryption is two-way — encrypted data can be decrypted with the correct key. Hashing is for verification, encryption is for confidentiality." },
      { q: "Why do websites hash passwords?", a: "Websites hash passwords before storing them so that even if the database is breached, attackers see only hashes, not actual passwords. Proper password hashing uses specialized algorithms like bcrypt with unique salts." },
      { q: "What is a collision?", a: "A collision occurs when two different inputs produce the same hash. Good hash algorithms make collisions extremely unlikely. Older algorithms like MD5 have known collision vulnerabilities, which is why stronger algorithms are preferred." }
    ]
  },
  "qr-text-generator": {
    whatIs: "The QR Code Generator creates scannable QR codes from any text, URL, or data you provide. QR codes are two-dimensional barcodes that can be scanned by smartphone cameras to instantly access websites, contact information, WiFi credentials, and more. This tool generates QR codes directly in your browser using Canvas without any server or API dependency. They are widely used in marketing, payments, ticketing, product packaging, and contactless information sharing.",
    extraSeo: "Generate scannable QR codes from any text or URL. Download high-quality images for sharing links and contact information.",
    example: "Input: 'https://toolverse-hub.vercel.app'\nOutput: Scannable QR code image",
    applications: [
      "Sharing website URLs and links quickly",
      "Business card and contact information sharing",
      "WiFi network credential sharing",
      "Event ticket and registration systems",
      "Product packaging and marketing materials"
    ],
    faqs: [
      { q: "What can I encode in a QR code?", a: "You can encode any text including URLs, plain text, phone numbers, email addresses, WiFi credentials, and more. Most smartphone cameras automatically detect and act on the content type — opening URLs, adding contacts, etc." },
      { q: "How much data can a QR code hold?", a: "A QR code can store up to about 3,000 alphanumeric characters or 7,000 numeric digits. However, more data means a denser, harder-to-scan code. Keep content concise for best results — URL shorteners help." },
      { q: "Do QR codes expire?", a: "Static QR codes (like those generated here) never expire — the data is encoded directly in the pattern. Dynamic QR codes (from paid services) can be updated or deactivated because they link to a redirect URL." },
      { q: "Can I customize the QR code design?", a: "This tool generates standard black and white QR codes. For custom colors, embedded logos, or branded designs, specialized QR code services are available. Ensure any customization maintains sufficient contrast for reliable scanning." }
    ]
  },
  "password-strength-checker": {
    whatIs: "The Password Strength Checker analyzes your passwords and provides a detailed security assessment. It evaluates length, character variety, common patterns, and overall entropy to rate your password's resistance to cracking. In an age of data breaches and automated hacking tools, understanding password strength is crucial. This tool helps you identify weak passwords before using them, providing specific recommendations for improvement without transmitting your password anywhere.",
    extraSeo: "Analyze password strength with detailed feedback on length, complexity, and estimated crack time. Improve your security instantly.",
    example: "'MyP@ss123' → Strength: Medium\nFeedback: Add more length and unique characters.",
    applications: [
      "Evaluating existing passwords for security",
      "Learning what makes passwords strong or weak",
      "Testing passwords before using them on important accounts",
      "Security awareness training and education",
      "IT policy compliance checking"
    ],
    faqs: [
      { q: "How does password strength checking work?", a: "The checker analyzes multiple factors: length, use of uppercase/lowercase/numbers/symbols, presence of common patterns or dictionary words, and overall character diversity. These factors determine how long it would take to crack the password." },
      { q: "Is my password sent to a server?", a: "No, all analysis happens entirely in your browser. Your password is never transmitted anywhere. This is a key security feature — never enter real passwords into tools that send data to external servers." },
      { q: "What is password entropy?", a: "Entropy measures the randomness of a password in bits. Higher entropy means more possible combinations an attacker must try. A random 12-character password with mixed characters has about 72 bits of entropy — extremely strong." },
      { q: "Why is my password rated as weak even though it is long?", a: "Length alone is not enough. Common phrases, dictionary words, keyboard patterns (qwerty), and repeated characters are easily guessed. A strong password needs both length AND randomness or unpredictability." }
    ]
  },
  "pomodoro-timer": {
    whatIs: "The Pomodoro Study Timer implements the Pomodoro Technique, a time management method that alternates focused work sessions with short breaks. Developed by Francesco Cirillo in the late 1980s, this technique uses 25-minute work intervals (called 'pomodoros') followed by 5-minute breaks, with longer breaks after four cycles. Research shows that structured work-break patterns improve concentration, reduce mental fatigue, and increase productivity. This timer handles the timing automatically so you can focus on your work.",
    extraSeo: "Boost productivity using the Pomodoro Technique with focused 25-minute intervals and short breaks to avoid burnout.",
    example: "Work: 25 min → Break: 5 min → Work: 25 min → Long break: 15 min (after 4 sessions)",
    applications: [
      "Student study sessions and exam preparation",
      "Remote work productivity and focus management",
      "Creative writing and deep work sessions",
      "Programming and coding sprints",
      "Task management and procrastination prevention"
    ],
    faqs: [
      { q: "What is the Pomodoro Technique?", a: "It is a time management method: work for 25 minutes with full focus, then take a 5-minute break. After completing 4 work sessions, take a longer 15-30 minute break. The technique prevents burnout while maintaining high productivity." },
      { q: "Why 25 minutes?", a: "Research suggests 25 minutes is optimal for sustained focus without mental fatigue. It is long enough to make progress on complex tasks but short enough to maintain concentration. You can adjust timing to suit your personal rhythm." },
      { q: "Can I customize the timer durations?", a: "The standard Pomodoro technique uses 25-minute work and 5-minute break periods. Some people prefer longer sessions (50 minutes work, 10 minutes break). Experiment to find what works best for your focus pattern." },
      { q: "Does the Pomodoro Technique really work?", a: "Studies show it helps reduce procrastination, improves focus, and prevents burnout. The forced breaks give your brain time to consolidate information. It is especially effective for tasks you tend to procrastinate on." }
    ]
  },
  "date-difference-calculator": {
    whatIs: "The Date Difference Calculator computes the exact duration between any two dates in days, weeks, months, and years. Whether you need to know how many days until a deadline, the duration of a project, or the time between historical events, this tool provides precise calculations accounting for varying month lengths and leap years. It is essential for project management, event planning, legal proceedings, and personal milestones tracking.",
    extraSeo: "Calculate exact days, weeks, months, and years between any two dates for project planning and event countdown.",
    example: "Jan 1, 2024 → Dec 31, 2024:\n365 days = 52 weeks 1 day = 12 months",
    applications: [
      "Project timeline and deadline management",
      "Event planning and countdown tracking",
      "Legal proceedings and contract duration calculations",
      "Historical date analysis and research",
      "Personal milestone and anniversary tracking"
    ],
    faqs: [
      { q: "Does it account for leap years?", a: "Yes, the calculator properly handles leap years, including the rules for century years (divisible by 400). February 29 is correctly counted in all calculations, ensuring precise results for any date range." },
      { q: "Can I calculate future dates?", a: "Yes, you can calculate the difference between any two dates — past, present, or future. This is useful for counting days until events, deadlines, or milestones." },
      { q: "How are months calculated?", a: "Months are calculated based on calendar months, accounting for varying lengths (28-31 days). The remaining days after complete months are shown separately for precise duration representation." },
      { q: "What about time zones?", a: "The calculator works with dates only (not specific times) based on your local timezone. For date calculations, timezone differences typically do not affect the result as we are counting full days." }
    ]
  },
  "countdown-timer": {
    whatIs: "The Countdown Timer lets you set a custom countdown with hours, minutes, and seconds. It is perfect for timing presentations, cooking, workouts, exams, and any activity that requires precise time management. The timer displays remaining time clearly and alerts you when the countdown reaches zero. Unlike a stopwatch that counts up, the countdown timer counts down from your specified duration, creating urgency and helping you stay on track.",
    extraSeo: "Set custom countdown timers for cooking, workouts, presentations, or any timed activity with audio alerts.",
    example: "Set 25 minutes: 24:59... 24:58... → 00:00 (alarm sounds!)",
    applications: [
      "Presentation and meeting time management",
      "Cooking and baking timer",
      "Workout and exercise interval timing",
      "Exam and test time tracking",
      "Event and game time management"
    ],
    faqs: [
      { q: "Can I set any duration?", a: "Yes, you can set hours, minutes, and seconds for any duration you need. Whether it is a 30-second microwave timer or a multi-hour study session, the countdown handles any duration accurately." },
      { q: "Will it alert me when time is up?", a: "Yes, the timer provides a visual and/or audio alert when the countdown reaches zero, so you do not need to watch it constantly. The alert ensures you are notified even if you are focused on other tasks." },
      { q: "Can I pause and resume?", a: "Yes, you can pause the countdown at any time and resume it later. The remaining time is preserved, so you do not lose your place if you need to take an interruption." },
      { q: "Does it work in the background?", a: "The timer continues running as long as the browser tab is open. However, if you close the tab, the timer will stop. Keep the tab open for the countdown to complete properly." }
    ]
  },
  "random-question-picker": {
    whatIs: "The Random Question Picker selects random questions from a list you provide, making it perfect for quizzes, study sessions, ice-breakers, and classroom activities. Enter your questions, and the tool will randomly choose one for you. This eliminates bias in question selection, makes study sessions more engaging, and adds an element of surprise to group activities. Teachers, students, and meeting facilitators all benefit from truly random selection.",
    extraSeo: "Randomly select questions from a custom list for quizzes, study sessions, and classroom activities with fair selection.",
    example: "10 questions → Randomly picked #7: 'What is the capital of France?'",
    applications: [
      "Classroom quiz and test question selection",
      "Study group flashcard-style practice",
      "Team meeting ice-breaker activities",
      "Interview question randomization",
      "Game night trivia question selection"
    ],
    faqs: [
      { q: "How does the random selection work?", a: "The picker uses JavaScript's random number generator to select questions with equal probability. Each question in your list has an equal chance of being selected, ensuring fair and unbiased picks." },
      { q: "Can I add my own questions?", a: "Yes, enter your questions into the text area, one per line. The picker works with any questions you provide — academic, trivia, discussion prompts, or anything else you need." },
      { q: "Will it repeat questions?", a: "Each pick is independent, so the same question may be selected again. For non-repeating selection, manually remove picked questions from the list or track which ones have been used." },
      { q: "How many questions can I add?", a: "There is no practical limit. You can add hundreds of questions. The picker handles large question banks efficiently, making it suitable for comprehensive review sessions and extensive quiz banks." }
    ]
  },
  "unit-circle-helper": {
    whatIs: "The Unit Circle Helper provides an interactive visual reference for the trigonometric unit circle, displaying standard angles with their radian measures, degree values, and exact (sin, cos) coordinate pairs. The unit circle is a cornerstone concept in trigonometry and calculus, and memorizing its values is essential for students. This tool makes learning and referencing unit circle values easy, visual, and interactive — far more effective than staring at static textbook diagrams.",
    extraSeo: "Interactive unit circle showing all standard angles with radian measures, sine, cosine, and tangent values for trig students.",
    example: "At 30° (π/6):\nsin = 0.5, cos = √3/2 ≈ 0.866, tan ≈ 0.577",
    applications: [
      "Trigonometry study and memorization",
      "Quick reference during math homework",
      "Calculus prerequisite preparation",
      "Teaching trigonometric concepts visually",
      "Exam preparation for standardized math tests"
    ],
    faqs: [
      { q: "What is the unit circle?", a: "The unit circle is a circle with radius 1 centered at the origin (0,0). It defines trigonometric functions geometrically: for any angle θ, the point on the circle has coordinates (cos θ, sin θ)." },
      { q: "Why is the unit circle important?", a: "It is the foundation of trigonometry. All trigonometric values can be derived from it. Understanding the unit circle makes trigonometric identities, calculus, and physics involving circular motion much more intuitive." },
      { q: "Which angles should I memorize?", a: "Focus on the standard angles: 0°, 30°, 45°, 60°, 90°, and their counterparts in other quadrants. These correspond to 0, π/6, π/4, π/3, π/2 radians. Their sin and cos values appear repeatedly in math and science." },
      { q: "How do the coordinates relate to trig functions?", a: "On the unit circle, the x-coordinate of any point is the cosine of the angle, and the y-coordinate is the sine. Tangent is the ratio y/x = sin/cos. This geometric interpretation makes trig functions concrete and visual." }
    ]
  },
  "stopwatch": {
    whatIs: "The Stopwatch provides precise time measurement with centisecond accuracy and lap tracking capability. Whether you are timing athletic events, experiments, cooking, or any activity requiring accurate elapsed time measurement, this tool delivers reliable results. Start, stop, lap, and reset controls make it easy to track multiple intervals. The lap feature is especially useful for comparing split times in races, workouts, or sequential tasks.",
    extraSeo: "A precise digital stopwatch with lap tracking and centisecond accuracy for timing exercises, experiments, and sports.",
    example: "Lap 1: 00:15.42\nLap 2: 00:14.87\nTotal: 00:30.29",
    applications: [
      "Athletic training and race timing",
      "Science experiments requiring precise timing",
      "Cooking and recipe step timing",
      "Productivity tracking and task duration measurement",
      "Games and competition timing"
    ],
    faqs: [
      { q: "How accurate is the stopwatch?", a: "The stopwatch measures time to centisecond (1/100th second) accuracy using JavaScript's high-resolution timer. This is more than sufficient for most practical timing needs." },
      { q: "What is the lap feature?", a: "The lap button records the current time without stopping the stopwatch. This lets you track split times — for example, recording each lap time during a run while the total time continues counting." },
      { q: "Does it work in the background?", a: "The timer continues running even if you switch browser tabs, though display updates may pause. The elapsed time is calculated based on actual timestamps, not display intervals, ensuring accuracy." },
      { q: "How is this different from the Countdown Timer?", a: "The Stopwatch counts up from zero to measure how long something takes. The Countdown Timer counts down from a set time to zero. Use the Stopwatch for measuring duration and the Countdown for time management." }
    ]
  },
  "cgpa-to-percentage": {
    whatIs: "The CGPA to Percentage converter transforms Cumulative Grade Point Average into percentage equivalents using standard formulas. Different universities and countries use different conversion methods — the most common multiplies CGPA by 9.5 (as recommended by CBSE in India). This tool helps students convert their grades for job applications, higher education admissions, and scholarship applications that require specific formats. Understanding the relationship between CGPA and percentage is essential for academic and career planning.",
    extraSeo: "Convert CGPA to percentage using standard university conversion formulas for job applications and higher studies.",
    example: "CGPA 8.5 (10-point scale):\nPercentage = 8.5 × 9.5 = 80.75%",
    formula: "Percentage = CGPA × 9.5 (standard)\nSome use: (CGPA − 0.75) × 10",
    applications: [
      "Job applications requiring percentage marks",
      "Graduate school admission forms and applications",
      "Scholarship applications with percentage criteria",
      "Academic transcript interpretation",
      "International education credential evaluation"
    ],
    faqs: [
      { q: "What is the standard CGPA to percentage formula?", a: "The most common formula is Percentage = CGPA × 9.5 (used by CBSE, India). However, different institutions may use different multipliers. Some universities have their own conversion tables. Always check your institution's specific formula." },
      { q: "Is this conversion universally accepted?", a: "The CGPA × 9.5 formula is widely used but not universal. Different countries, universities, and employers may use different conversion methods. When in doubt, contact the receiving institution for their preferred conversion." },
      { q: "What is a good CGPA?", a: "On a 10-point scale, 8.5+ is generally considered excellent, 7.0-8.5 is good, 5.5-7.0 is average, and below 5.5 may need improvement. On a 4.0 scale, 3.5+ is excellent and 3.0+ is good." },
      { q: "Can I use this for different grading scales?", a: "This tool uses the standard 10-point CGPA scale common in Indian universities. For other scales (4.0, 5.0, etc.), the conversion factor differs. Enter your CGPA on the scale used by your institution." }
    ]
  },
  "days-until-date": {
    whatIs: "The Days Until Date calculator shows exactly how many days remain between today and any future date you select. It is perfect for tracking countdowns to holidays, birthdays, vacations, deadlines, product launches, and other important events. The tool automatically updates based on the current date, giving you a real-time countdown that helps with planning and anticipation. Never lose track of important dates again.",
    extraSeo: "Find how many days remain until any future date for tracking deadlines, planning events, or counting down to special occasions.",
    example: "Today: Apr 2, 2026 → Dec 25, 2026:\n267 days remaining",
    applications: [
      "Countdown to holidays and vacations",
      "Deadline tracking for projects and assignments",
      "Birthday and anniversary countdowns",
      "Product launch and event planning",
      "Visa and document expiration monitoring"
    ],
    faqs: [
      { q: "Does it count weekdays or all days?", a: "This tool counts all calendar days including weekends and holidays. For business days only, use our Business Days Calculator which excludes weekends and optionally public holidays." },
      { q: "Can I count days until a past date?", a: "The tool is designed for future dates but will show the number of days that have passed since a past date as a negative number. For detailed past date calculations, use the Date Difference Calculator." },
      { q: "Is it accurate across years?", a: "Yes, the calculator properly handles year boundaries, leap years, and varying month lengths. Whether your target date is next week or five years away, the count is precise." },
      { q: "Does it include or exclude today?", a: "The tool counts remaining full days between today and the target date. Today is not counted as a remaining day. If your event is tomorrow, it shows 1 day remaining." }
    ]
  },
  "business-days-calculator": {
    whatIs: "The Business Days Calculator computes the number of working days between two dates, excluding weekends (Saturday and Sunday). This is essential for project management, delivery time estimation, legal deadlines, HR processes, and financial calculations. Many business processes are measured in business days rather than calendar days — shipping estimates, payment terms, notice periods, and contractual obligations all frequently use business day counting.",
    extraSeo: "Calculate business (working) days between two dates excluding weekends for project management and delivery estimates.",
    example: "Mon Apr 1 → Fri Apr 30:\n22 business days (excluding 8 weekend days)",
    applications: [
      "Project management and sprint planning",
      "Shipping and delivery time estimation",
      "Legal deadline and notice period calculations",
      "HR processes like probation periods and leave counting",
      "Financial payment terms and settlement dates"
    ],
    faqs: [
      { q: "What counts as a business day?", a: "A business day is typically Monday through Friday, excluding weekends. Some calculations also exclude public holidays. This tool excludes weekends by default for standard business day counting." },
      { q: "Does it account for public holidays?", a: "The basic calculator excludes weekends. Public holidays vary by country and region. For precise calculations, manually subtract any public holidays that fall within your date range." },
      { q: "How is this different from the Date Difference Calculator?", a: "The Date Difference Calculator counts all calendar days. The Business Days Calculator counts only weekdays (Monday-Friday). Use business days for work-related timelines and calendar days for general duration." },
      { q: "Why do contracts specify business days?", a: "Business days standardize timelines to working periods. Saying '5 business days' means one working week regardless of holidays. Calendar days would include non-working periods, potentially causing confusion about response times." }
    ]
  },
  "workdays-calculator": {
    whatIs: "The Workdays Calculator determines the total number of working days between any two dates. Similar to the Business Days Calculator but focused on total working day counts, this tool is invaluable for payroll processing, project billing, employee attendance tracking, and capacity planning. Whether you are calculating billable hours for a client engagement, determining pay periods, or planning resource allocation, accurate working day counts are essential for business operations.",
    extraSeo: "Calculate total working days between any two dates. Can be customized for different work schedules.",
    example: "Jan 1 → Mar 31, 2026:\nTotal workdays: 63 days",
    applications: [
      "Payroll and salary calculations for employees",
      "Client billing and project cost estimation",
      "Resource capacity planning and allocation",
      "Employee attendance and leave balance tracking",
      "Contract duration and staffing calculations"
    ],
    faqs: [
      { q: "How is this different from the Business Days Calculator?", a: "Both calculate working days. The Workdays Calculator focuses on total working day counts for a period, useful for payroll and billing. The Business Days Calculator is more geared toward deadline counting from a start date." },
      { q: "Does it include the start and end dates?", a: "The calculator typically includes both the start and end dates in the count if they fall on working days. This is the standard convention for most payroll and billing calculations." },
      { q: "How many workdays are in a typical year?", a: "A standard year has approximately 260-262 working days (52 weeks × 5 days). After subtracting public holidays, most workers have about 248-252 working days per year, varying by country." },
      { q: "Can I account for part-time schedules?", a: "This tool calculates based on a standard Monday-Friday work week. For part-time schedules, multiply the result by your part-time fraction (e.g., for a 3-day work week, multiply by 0.6)." }
    ]
  },
  "week-number-calculator": {
    whatIs: "The Week Number Calculator determines the ISO week number for any date. ISO week numbering is used internationally in business, project management, manufacturing, and scheduling systems. It provides a standardized way to reference specific weeks of the year, avoiding confusion between different calendar conventions. Whether you are scheduling production runs, planning sprints, or referencing dates in international business communication, knowing the ISO week number is essential.",
    extraSeo: "Find the ISO week number for any date, used in business reporting, project planning, and scheduling.",
    example: "April 2, 2026:\nISO Week Number: 14, Thursday",
    applications: [
      "Project management sprint and milestone planning",
      "Manufacturing production scheduling",
      "International business date referencing",
      "Event and conference planning by week number",
      "Fiscal and reporting period calculations"
    ],
    faqs: [
      { q: "What is ISO week numbering?", a: "ISO 8601 defines week numbers where weeks start on Monday and the first week of the year contains January 4th. A year has 52 or 53 weeks. This standard ensures consistent week numbering across countries." },
      { q: "Why do some years have 53 weeks?", a: "An ISO year has 53 weeks when January 1st falls on a Thursday (or Wednesday in leap years). This happens roughly every 5-6 years to keep week numbers aligned with the calendar." },
      { q: "Where are week numbers commonly used?", a: "Week numbers are widely used in European business, manufacturing planning, project management (especially Agile sprints), government statistics, and international trade for scheduling and reporting." },
      { q: "Do all countries use the same week numbering?", a: "ISO week numbering is the international standard. However, some countries (like the US) traditionally start weeks on Sunday and may use different week numbering. The ISO standard starting on Monday is used for international communication." }
    ]
  },
  "unix-timestamp-converter": {
    whatIs: "The Unix Timestamp Converter translates between Unix timestamps (seconds since January 1, 1970) and human-readable dates. Unix timestamps are the standard time representation in computing, used in databases, APIs, log files, and programming. While computers work efficiently with timestamps, humans need readable dates. This bidirectional converter bridges that gap, making it essential for developers, system administrators, and data analysts working with time-based data.",
    extraSeo: "Convert Unix timestamps to readable dates and vice versa. Essential for debugging logs, APIs, and database records.",
    example: "1714600000 → May 1, 2024, 11:06:40 PM UTC",
    applications: [
      "Debugging API responses with timestamp fields",
      "Database date field interpretation and conversion",
      "Log file timestamp analysis and debugging",
      "Programming and system administration tasks",
      "Data migration and ETL process date handling"
    ],
    faqs: [
      { q: "What is a Unix timestamp?", a: "A Unix timestamp is the number of seconds elapsed since January 1, 1970, 00:00:00 UTC (called the Unix epoch). For example, timestamp 1700000000 represents November 14, 2023. It provides a universal, timezone-independent time reference." },
      { q: "Why is January 1, 1970 the starting point?", a: "The Unix epoch was chosen by the creators of the Unix operating system in the early 1970s as a convenient recent date. It has since become the universal standard for computer timekeeping across all platforms." },
      { q: "What is the Year 2038 problem?", a: "32-bit systems store timestamps as signed integers, with a maximum value of 2,147,483,647 (January 19, 2038). After this, the counter overflows. Most modern systems use 64-bit timestamps, solving this for billions of years." },
      { q: "Does it handle millisecond timestamps?", a: "Some systems (like JavaScript) use millisecond timestamps. If your timestamp has 13 digits instead of 10, it is likely in milliseconds. Divide by 1000 to convert to standard Unix seconds." }
    ]
  },
  "json-to-csv": {
    whatIs: "The JSON to CSV Converter transforms structured JSON data into tabular CSV format for use in spreadsheets, databases, and data analysis tools. JSON is the standard format for web APIs and data exchange, while CSV is universally compatible with Excel, Google Sheets, and database import tools. This converter handles arrays of objects, flattening nested structures into clean, importable CSV format with proper header rows and escaped values.",
    extraSeo: "Convert JSON arrays into downloadable CSV format for spreadsheets, simplifying data export from APIs and databases.",
    example: "[{name:'Alice',age:30},{name:'Bob',age:25}]\n→ name,age\nAlice,30\nBob,25",
    applications: [
      "Exporting API data to spreadsheets for analysis",
      "Database data migration between formats",
      "Creating reports from JSON data sources",
      "Data analysis preparation and cleaning",
      "Bulk data import into CRM and business tools"
    ],
    faqs: [
      { q: "What JSON structure works best?", a: "An array of flat objects works best: [{\"name\": \"John\", \"age\": 30}, ...]. Each object becomes a row, and keys become column headers. Nested objects are flattened with dot notation or stringified." },
      { q: "How are nested objects handled?", a: "Nested objects are typically flattened using dot notation (e.g., address.city) or stringified as JSON in the cell. Simple one-level nesting converts cleanly; deeply nested structures may need preprocessing." },
      { q: "Can I open the CSV in Excel?", a: "Yes, CSV files open directly in Microsoft Excel, Google Sheets, LibreOffice Calc, and virtually any spreadsheet application. The converter produces standard RFC 4180 compliant CSV format." },
      { q: "How are special characters handled?", a: "Values containing commas, quotes, or newlines are automatically wrapped in double quotes. Existing quotes within values are escaped. This ensures proper parsing by any CSV reader." }
    ]
  },
  "csv-to-json": {
    whatIs: "The CSV to JSON Converter transforms tabular CSV data into structured JSON format for use in web applications, APIs, and modern data systems. CSV is the simplest tabular format, but JSON is the standard for web development and data interchange. This converter reads CSV headers as keys and rows as objects, producing clean, properly formatted JSON arrays ready for use in applications, databases, and APIs.",
    extraSeo: "Convert CSV data into structured JSON format for APIs, web applications, and databases with automatic type detection.",
    example: "name,age\nAlice,30\n→ [{\"name\":\"Alice\",\"age\":\"30\"}]",
    applications: [
      "Importing spreadsheet data into web applications",
      "Preparing data for REST API endpoints",
      "Database seeding and data migration",
      "Converting exports from legacy systems",
      "Data transformation in ETL pipelines"
    ],
    faqs: [
      { q: "Does the first row need to be headers?", a: "Yes, the converter uses the first row as JSON object keys. Each subsequent row becomes an object with those keys. Ensure your first row contains descriptive, unique column names." },
      { q: "How are data types handled?", a: "CSV is text-based, so all values are initially strings. The converter may auto-detect numbers and booleans. For strict type control, you may need to process the JSON output with additional type conversion." },
      { q: "What delimiter is supported?", a: "Standard comma-separated values are supported. Some CSVs use semicolons or tabs as delimiters. If your file uses a non-standard delimiter, you may need to replace it with commas first." },
      { q: "Can I handle large CSV files?", a: "The tool processes CSV data in the browser, so performance depends on your device. Files up to a few megabytes process smoothly. For very large datasets, consider using command-line tools or server-side processing." }
    ]
  },
  "uuid-generator": {
    whatIs: "The UUID Generator creates Universally Unique Identifiers (UUID v4) — 128-bit random values formatted as 32 hexadecimal digits in a specific pattern. UUIDs are used extensively in software development as database primary keys, session identifiers, API request tracking, and unique object identification. The probability of generating a duplicate UUID is astronomically small, making them perfect for distributed systems where coordination for unique ID generation is impractical.",
    extraSeo: "Generate universally unique identifiers (UUID v4) for databases, APIs, and software development. Cryptographically random.",
    example: "Generated: 550e8400-e29b-41d4-a716-446655440000",
    applications: [
      "Database primary key generation",
      "API request tracking and correlation",
      "Session and token identifier creation",
      "Distributed system unique identification",
      "Test data generation for software development"
    ],
    faqs: [
      { q: "What is a UUID?", a: "A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify objects. The standard format is xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx where x is a random hex digit and the 4 indicates version 4 (random)." },
      { q: "How unique are UUIDs?", a: "Extremely unique. There are 2^122 (about 5.3 × 10^36) possible v4 UUIDs. You would need to generate 1 billion UUIDs per second for about 85 years to have a 50% probability of one collision." },
      { q: "When should I use UUIDs vs auto-increment IDs?", a: "Use UUIDs for distributed systems, client-generated IDs, security (hard to guess), and avoiding ID conflicts during data merges. Use auto-increment for simplicity, performance, and when sequential ordering matters." },
      { q: "What is UUID v4?", a: "UUID v4 is the random version — all bits except version and variant markers are random. Other versions use timestamps (v1), names (v3/v5), or ordered timestamps (v7). V4 is the most commonly used version." }
    ]
  },
  "jwt-decoder": {
    whatIs: "The JWT Decoder parses JSON Web Tokens and displays their header, payload, and signature components in readable format. JWTs are the standard for authentication tokens in modern web applications, encoding user identity and permissions as a compact, self-contained token. This tool helps developers inspect token contents, debug authentication issues, verify claims, and understand token structure — all without needing backend access or API calls.",
    extraSeo: "Decode JSON Web Tokens to inspect header, payload, and signature. Essential for debugging authentication and APIs.",
    example: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.xxx\n→ Payload: {\"sub\": \"1234567890\"}",
    applications: [
      "Debugging authentication and authorization issues",
      "Inspecting token claims and expiration times",
      "Verifying JWT payload during development",
      "Understanding OAuth and SSO token contents",
      "Security auditing of token-based authentication"
    ],
    faqs: [
      { q: "What is a JWT?", a: "A JSON Web Token is a compact, URL-safe token format consisting of three Base64-encoded parts: header (algorithm), payload (claims/data), and signature (verification). They are separated by dots: header.payload.signature." },
      { q: "Is it safe to paste JWTs into this tool?", a: "Yes, all decoding happens in your browser — no data is sent to any server. However, never share JWTs publicly as they may contain sensitive information. Expired tokens are generally safe to inspect." },
      { q: "What are JWT claims?", a: "Claims are statements about the user contained in the payload. Standard claims include 'sub' (subject/user ID), 'exp' (expiration time), 'iat' (issued at), and 'iss' (issuer). Custom claims contain application-specific data." },
      { q: "Does this verify the signature?", a: "This tool decodes and displays the token contents but does not verify the cryptographic signature (which requires the signing key). For production verification, use your backend's JWT library with the proper secret or public key." }
    ]
  },
  "regex-tester": {
    whatIs: "The Regex Tester lets you write and test regular expressions against sample text with live matching and highlighting. Regular expressions are powerful pattern-matching tools used in programming, data validation, text processing, and search operations. This tool provides instant visual feedback as you type your pattern, showing all matches highlighted in the text. It supports standard JavaScript regex syntax including flags for case-insensitive and global matching.",
    extraSeo: "Test and debug regular expressions with live matching and highlighting. Supports global, case-insensitive, and multiline flags.",
    example: "Pattern: /\\d{3}-\\d{4}/g\nText: 'Call 555-1234 or 666-5678'\nMatches: ['555-1234', '666-5678']",
    applications: [
      "Developing and debugging regular expressions",
      "Form input validation pattern creation",
      "Log file parsing and data extraction",
      "Text search and replace operations",
      "Learning regex syntax with visual feedback"
    ],
    faqs: [
      { q: "What is a regular expression?", a: "A regular expression (regex) is a pattern that describes a set of strings. For example, \\d+ matches one or more digits, [a-z]+ matches lowercase words, and .+@.+\\..+ loosely matches email addresses. Regex is supported by virtually all programming languages." },
      { q: "What regex flags are supported?", a: "Common flags include g (global — find all matches), i (case-insensitive), m (multiline — ^ and $ match line boundaries), and s (dotAll — . matches newlines). Combine flags as needed for your pattern." },
      { q: "Why is my regex not matching?", a: "Common issues include: forgetting to escape special characters (use \\. for literal dot), missing the global flag for multiple matches, incorrect character class syntax, and greedy vs lazy quantifiers (.* vs .*?)." },
      { q: "How do I learn regex?", a: "Start with basic patterns: \\d (digit), \\w (word character), . (any character), * (zero or more), + (one or more). Build up to groups, alternation, and lookaheads. Practice with this tool for instant visual feedback." }
    ]
  },
  "cron-expression-parser": {
    whatIs: "The Cron Expression Parser interprets cron schedule expressions and shows their human-readable meaning along with upcoming execution times. Cron is the standard scheduling format used in Unix/Linux systems, cloud services, CI/CD pipelines, and task automation. This tool helps developers and system administrators write, verify, and debug cron expressions by translating the terse syntax into plain English descriptions and showing exactly when jobs will run next.",
    extraSeo: "Parse cron expressions with human-readable descriptions and next run times. Essential for DevOps and system administration.",
    example: "'0 9 * * 1-5' → At 9:00 AM, Monday through Friday",
    applications: [
      "Server job scheduling and automation",
      "CI/CD pipeline schedule configuration",
      "Cloud function and Lambda trigger setup",
      "Database backup schedule planning",
      "Monitoring and alerting schedule configuration"
    ],
    faqs: [
      { q: "What is a cron expression?", a: "A cron expression is a string of five fields (minute, hour, day-of-month, month, day-of-week) that defines a schedule. For example, '0 9 * * 1-5' means 'at 9:00 AM, Monday through Friday'. Special characters like * (any), / (step), and - (range) provide flexibility." },
      { q: "What does * mean in cron?", a: "The asterisk (*) means 'every' or 'any'. In the minute field, * means every minute. In the month field, * means every month. Combined with step values like */5, it means 'every 5 units'." },
      { q: "How do I schedule a job for every 5 minutes?", a: "Use '*/5 * * * *'. The */5 in the minute field means 'every 5 minutes'. This runs at :00, :05, :10, :15, etc. throughout every hour of every day." },
      { q: "What is the difference between 5-field and 6-field cron?", a: "Standard Unix cron uses 5 fields. Some systems (like Spring and Quartz) add a seconds field at the beginning, making 6 fields. This tool uses the standard 5-field format." }
    ]
  },
  "chmod-calculator": {
    whatIs: "The Chmod Calculator converts between numeric (octal) and symbolic Unix file permission notation. File permissions in Linux and Unix systems control who can read, write, and execute files and directories. The chmod command uses either numeric codes (755) or symbolic notation (rwxr-xr-x) to set these permissions. This tool helps system administrators, developers, and DevOps engineers quickly calculate the right permission values for their security needs.",
    extraSeo: "Calculate Unix file permissions in numeric and symbolic notation. A must-have for system administrators and developers.",
    example: "rwxr-xr-- → 754\nOwner: rwx (7), Group: r-x (5), Others: r-- (4)",
    applications: [
      "Linux/Unix server administration and security",
      "Web server file permission configuration",
      "DevOps and deployment script setup",
      "Docker and container permission management",
      "SSH key and certificate file permissions"
    ],
    faqs: [
      { q: "What does chmod 755 mean?", a: "755 means owner has full permissions (7 = read+write+execute), group has read and execute (5 = read+execute), and others have read and execute (5). This is the standard permission for executable files and directories." },
      { q: "How do permission numbers work?", a: "Each digit is the sum of: read (4) + write (2) + execute (1). So 7 = all permissions, 6 = read+write, 5 = read+execute, 4 = read only, 0 = no permissions. Three digits represent owner, group, and others." },
      { q: "What permissions should web files have?", a: "Generally, directories should be 755, regular files 644, and configuration files with sensitive data 600. Avoid 777 (full access to everyone) as it creates security vulnerabilities." },
      { q: "What is the difference between symbolic and numeric mode?", a: "Numeric mode (755) sets all permissions at once. Symbolic mode (u+x, g-w) modifies specific permissions. Numeric is more common for setting permissions; symbolic is useful for adding or removing specific rights." }
    ]
  },
  "gradient-generator": {
    whatIs: "The Gradient Generator creates beautiful CSS linear and radial gradients with a live visual preview and copyable code. Gradients add depth, vibrancy, and visual interest to web designs, replacing flat colors with smooth transitions. This tool lets you pick colors, adjust direction and stops, and instantly see the result. Whether you are designing hero sections, buttons, backgrounds, or overlays, creating the perfect gradient is effortless with real-time visual feedback and ready-to-use CSS code.",
    extraSeo: "Create beautiful CSS gradients with live preview and one-click code copying for modern web design.",
    example: "#667eea → #764ba2 at 135°:\nCSS: background: linear-gradient(135deg, #667eea, #764ba2);",
    applications: [
      "Website hero section and background design",
      "Button and UI element styling",
      "Social media graphic backgrounds",
      "Brand identity and marketing material colors",
      "CSS learning and experimentation"
    ],
    faqs: [
      { q: "What is a CSS gradient?", a: "A CSS gradient is a smooth transition between two or more colors, rendered by the browser without images. Linear gradients flow in a straight line; radial gradients radiate from a center point. They are defined in CSS as background-image values." },
      { q: "How do I use the generated CSS?", a: "Copy the generated CSS code (e.g., 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)') and paste it into your stylesheet. Apply it to any element's background property." },
      { q: "Can I add more than two colors?", a: "Yes, CSS gradients support multiple color stops. You can create complex multi-color transitions by adding additional colors at specific percentage points along the gradient." },
      { q: "Do gradients affect performance?", a: "CSS gradients are rendered by the GPU and are very performant — much better than using gradient images. They scale perfectly to any size and resolution, making them ideal for responsive designs." }
    ]
  },
  "color-palette-generator": {
    whatIs: "The Color Palette Generator creates harmonious color schemes from any base color using established color theory principles. It generates complementary, analogous, triadic, and split-complementary palettes that work together aesthetically. Professional designers use color palettes to ensure visual consistency across websites, apps, branding, and marketing materials. This tool democratizes color theory, helping anyone create professional-looking color combinations without deep design expertise.",
    extraSeo: "Generate harmonious color palettes from any base color using color theory. Create complementary, analogous, and triadic schemes.",
    example: "Base #3498db → Complementary: #db7734, Analogous: #34db98, #3434db",
    applications: [
      "Website and app UI color scheme design",
      "Brand identity and style guide creation",
      "Interior design and room color planning",
      "Digital art and illustration color selection",
      "Marketing material and social media design"
    ],
    faqs: [
      { q: "What are color harmonies?", a: "Color harmonies are combinations based on positions on the color wheel. Complementary colors are opposite (high contrast), analogous are adjacent (harmonious), triadic are evenly spaced (vibrant), and split-complementary offers a balanced alternative to direct complementary." },
      { q: "How do I choose a base color?", a: "Start with your brand's primary color, or choose a color that evokes the desired emotion: blue for trust, red for energy, green for nature, purple for luxury. The generator creates a complete palette from your starting color." },
      { q: "How many colors should a palette have?", a: "A typical design palette has 3-5 colors: a primary, secondary, accent, and 1-2 neutrals. Too many colors create visual chaos; too few can be monotonous. The 60-30-10 rule (primary-secondary-accent) is a good guideline." },
      { q: "Can I use these palettes commercially?", a: "Yes, color combinations are not copyrightable. Any palette generated is free to use for any purpose — personal, commercial, or client work. Colors are mathematical values, not creative works." }
    ]
  },
  "contrast-checker": {
    whatIs: "The Contrast Checker evaluates the color contrast ratio between foreground text and background colors according to WCAG (Web Content Accessibility Guidelines) standards. Sufficient contrast ensures that text is readable by people with visual impairments, including color blindness and low vision. This tool calculates the contrast ratio and tells you whether your color combination passes AA and AAA accessibility levels for normal and large text, helping you create inclusive, accessible designs.",
    extraSeo: "Check color contrast ratios for WCAG accessibility compliance. Ensure readable text for all users including those with visual impairments.",
    example: "#333333 on #FFFFFF → Ratio: 12.63:1\nWCAG AA: ✅ Pass | AAA: ✅ Pass",
    formula: "Ratio = (L1 + 0.05) / (L2 + 0.05)\nWCAG AA: ≥ 4.5:1 (normal text)",
    applications: [
      "Website accessibility compliance testing",
      "UI design color selection for readability",
      "Brand guideline accessibility verification",
      "Document and print design contrast checking",
      "Legal compliance with accessibility regulations"
    ],
    faqs: [
      { q: "What is WCAG?", a: "WCAG (Web Content Accessibility Guidelines) are international standards for web accessibility. They define minimum contrast ratios: AA requires 4.5:1 for normal text and 3:1 for large text; AAA requires 7:1 and 4.5:1 respectively." },
      { q: "What contrast ratio is acceptable?", a: "For WCAG AA compliance (the minimum standard), normal text needs a ratio of 4.5:1 and large text needs 3:1. For AAA (enhanced), normal text needs 7:1 and large text needs 4.5:1. Higher ratios mean better readability." },
      { q: "What counts as large text?", a: "WCAG defines large text as 18pt (24px) or larger for normal weight, or 14pt (18.66px) or larger for bold text. Large text has lower contrast requirements because bigger text is inherently easier to read." },
      { q: "Why does accessibility matter?", a: "About 15% of the world's population has some form of disability. Good contrast benefits everyone — not just visually impaired users but also people using screens in bright sunlight, older adults, and anyone experiencing eye strain." }
    ]
  },
  "rgb-to-cmyk": {
    whatIs: "The RGB to CMYK Converter translates screen colors (RGB) to print colors (CMYK). RGB (Red, Green, Blue) is used for digital displays, while CMYK (Cyan, Magenta, Yellow, Key/Black) is used for printing. Colors can look different on screen versus print because these systems use fundamentally different color models — RGB is additive (light-based) and CMYK is subtractive (ink-based). This tool helps designers prepare files for print by converting digital colors to their closest print equivalents.",
    extraSeo: "Convert RGB to CMYK for print design. Essential for graphic designers preparing digital artwork for professional printing.",
    example: "RGB(255, 99, 71) → C:0%, M:61%, Y:72%, K:0%",
    formula: "K = 1 − max(R',G',B')\nC = (1−R'−K)/(1−K)\nM = (1−G'−K)/(1−K)\nY = (1−B'−K)/(1−K)",
    applications: [
      "Preparing digital designs for professional printing",
      "Brand color specification for print materials",
      "Converting web colors to print-ready values",
      "Comparing screen and print color representations",
      "Graphic design and prepress workflow"
    ],
    faqs: [
      { q: "Why do print colors look different from screen colors?", a: "RGB displays emit light (additive color), while print uses ink that absorbs light (subtractive color). The RGB color gamut is wider than CMYK, so some vibrant screen colors cannot be exactly reproduced in print. This is called 'out of gamut'." },
      { q: "What does the K in CMYK stand for?", a: "K stands for Key, referring to the black printing plate. Black is added because mixing cyan, magenta, and yellow inks does not produce a true black — it creates a muddy dark brown. Pure black ink provides sharper text and true black areas." },
      { q: "Are the conversions exact?", a: "RGB to CMYK conversion is approximate because the color gamuts differ. Highly saturated RGB colors may appear duller in CMYK. Professional print workflows use ICC color profiles for more accurate conversion." },
      { q: "When should I use CMYK?", a: "Use CMYK for anything that will be physically printed: business cards, brochures, posters, packaging, and magazines. Keep RGB for screen-only content: websites, apps, social media graphics, and digital presentations." }
    ]
  },
  "image-color-picker": {
    whatIs: "The Image Color Picker lets you upload any image and extract colors by clicking on specific pixels. It displays the selected color in HEX and RGB formats, making it easy to identify and use colors from photographs, designs, logos, and artwork. This tool is invaluable for designers matching colors from reference images, developers implementing designs from mockups, and anyone who wants to know the exact color value of any pixel in an image.",
    extraSeo: "Upload images and pick colors by clicking pixels. Get exact HEX and RGB values from photos, screenshots, and design mockups.",
    example: "Click on sunset sky → #FF7F50 / RGB(255, 127, 80)",
    applications: [
      "Extracting brand colors from logos and images",
      "Matching colors from design mockups and references",
      "Identifying colors in nature and product photography",
      "Creating color palettes from inspiration images",
      "Web development color matching from design files"
    ],
    faqs: [
      { q: "What image formats are supported?", a: "The picker supports all common web image formats including JPEG, PNG, GIF, WebP, and BMP. Upload any image and click anywhere to extract the pixel color value." },
      { q: "How accurate are the color values?", a: "The values are pixel-perfect — the tool reads the exact RGB values from the image data at the point you click. However, your monitor's color calibration can affect how colors appear visually on screen." },
      { q: "Can I pick multiple colors from one image?", a: "Click different areas of the image to pick multiple colors. Each click updates the displayed color value, so you can systematically sample colors from different parts of the image." },
      { q: "Does image compression affect colors?", a: "JPEG compression can slightly alter pixel colors from the original. For the most accurate color extraction, use PNG or lossless formats. The color values extracted are always from the uploaded file, not the original source." }
    ]
  },
  "css-unit-converter": {
    whatIs: "The CSS Unit Converter transforms values between px, rem, em, vh, vw, and other CSS length units used in web development. Understanding CSS units is essential for creating responsive, accessible designs. Pixels provide fixed sizes, rem units scale with root font size for accessibility, em units inherit from parent elements, and viewport units create fluid layouts. This tool helps developers convert between these systems and understand their relationships.",
    extraSeo: "Convert between CSS units like px, rem, em, vh, and vw for responsive web design and accessible layouts.",
    example: "24px to rem (base 16px):\n24 ÷ 16 = 1.5rem",
    formula: "rem = px / root-font-size\n1vh = 1% viewport height\n1vw = 1% viewport width",
    applications: [
      "Converting pixel designs to responsive rem values",
      "Creating fluid typography with viewport units",
      "Accessibility improvements using rem over px",
      "Legacy code migration from px to modern units",
      "Learning CSS unit relationships and behavior"
    ],
    faqs: [
      { q: "What is the difference between rem and em?", a: "rem is relative to the root (html) font size, while em is relative to the parent element's font size. rem provides consistent sizing throughout a page; em can compound and create unexpected sizes in nested elements." },
      { q: "What is the default root font size?", a: "Browsers default to 16px root font size. So 1rem = 16px by default. If you set html { font-size: 62.5% }, then 1rem = 10px, making mental math easier (1.6rem = 16px)." },
      { q: "Should I use px or rem?", a: "Use rem for font sizes and spacing to respect user accessibility settings. Use px for borders, shadows, and fixed-size elements. Viewport units (vh, vw) are best for full-screen layouts and fluid typography." },
      { q: "What are viewport units?", a: "1vh = 1% of viewport height, 1vw = 1% of viewport width. They create layouts that scale with the browser window. 100vh fills the full screen height, making them perfect for hero sections and full-page layouts." }
    ]
  },
  "box-shadow-generator": {
    whatIs: "The Box Shadow Generator creates CSS box-shadow effects with a live visual preview. Box shadows add depth, elevation, and visual hierarchy to web elements like cards, buttons, modals, and navigation bars. This tool lets you adjust horizontal and vertical offset, blur radius, spread radius, color, and opacity in real-time. See the effect immediately, then copy the generated CSS for your stylesheet. Creating professional shadow effects has never been easier.",
    extraSeo: "Design CSS box shadows with an interactive editor. Adjust offset, blur, spread, and color with live preview and code copying.",
    example: "X=0, Y=4px, Blur=12px, Color=rgba(0,0,0,0.1)\n→ box-shadow: 0px 4px 12px 0px rgba(0,0,0,0.1);",
    applications: [
      "Card and panel elevation effects in web design",
      "Button hover state shadow effects",
      "Modal and dialog visual depth",
      "Navigation bar floating effect",
      "Material Design and neumorphism style effects"
    ],
    faqs: [
      { q: "What is CSS box-shadow?", a: "box-shadow adds shadow effects around an element's frame. The syntax is: box-shadow: offset-x offset-y blur-radius spread-radius color. Multiple shadows can be combined for complex effects." },
      { q: "What does the spread radius do?", a: "Spread radius expands or contracts the shadow. Positive values make the shadow larger than the element; negative values make it smaller. A spread of 0 makes the shadow the same size as the element." },
      { q: "How do I create a subtle, professional shadow?", a: "Use small offsets (0-4px vertical, 0-2px horizontal), moderate blur (10-20px), no spread, and low-opacity black/gray color. Example: box-shadow: 0 4px 12px rgba(0,0,0,0.1) creates an elegant, floating effect." },
      { q: "Can I add multiple shadows?", a: "Yes, separate multiple shadows with commas. Layering several subtle shadows creates more realistic depth than a single heavy shadow. This technique is used in Material Design and modern UI frameworks." }
    ]
  },
  "standard-deviation-calculator": {
    whatIs: "The Standard Deviation Calculator computes the mean, variance, and standard deviation of any dataset. Standard deviation measures how spread out numbers are from the average, making it essential for statistics, data analysis, and scientific research.",
    extraSeo: "Used by students, researchers, and data analysts to understand data variability and consistency in datasets of any size.",
    example: "For the dataset 10, 20, 30, 40, 50:\n\nMean = 30\nVariance = 200\nStandard Deviation = √200 ≈ 14.14",
    formula: "σ = √[(Σ(xi − μ)²) / N]\n\nWhere μ = mean, N = number of values",
    applications: ["Statistical analysis and research", "Quality control in manufacturing", "Financial risk assessment", "Academic grading analysis", "Scientific data interpretation"],
    faqs: [
      { q: "What is standard deviation?", a: "Standard deviation measures the amount of variation in a dataset. A low value means data points are close to the mean, while a high value indicates they are spread out over a wider range." },
      { q: "What is the difference between population and sample standard deviation?", a: "Population standard deviation divides by N (total count), while sample standard deviation divides by N-1 (Bessel's correction). This calculator uses population standard deviation." },
      { q: "Why is variance useful?", a: "Variance is the square of standard deviation and is used in many statistical formulas. It gives a measure of data dispersion that is mathematically convenient for further analysis." }
    ]
  },
  "pythagorean-calculator": {
    whatIs: "The Pythagorean Theorem Calculator finds the hypotenuse or missing side of a right triangle using the formula a² + b² = c². Essential for geometry, construction, navigation, and physics.",
    extraSeo: "Perfect for students studying geometry, builders measuring diagonals, and anyone working with right triangles in real-world applications.",
    example: "For a right triangle with sides a = 3 and b = 4:\n\nc = √(3² + 4²) = √(9 + 16) = √25 = 5",
    formula: "a² + b² = c²\nc = √(a² + b²)",
    applications: ["Geometry homework and exams", "Construction and architecture", "Navigation and distance calculation", "Physics vector problems", "Computer graphics and game development"],
    faqs: [
      { q: "What is the Pythagorean theorem?", a: "It states that in a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides: a² + b² = c²." },
      { q: "Does it work for all triangles?", a: "No, it only works for right triangles (triangles with one 90° angle). For other triangles, use the law of cosines." }
    ]
  },
  "permutation-calculator": {
    whatIs: "The Permutation Calculator computes P(n, r) — the number of ways to arrange r items from a set of n items where order matters. Essential for probability, combinatorics, and statistics.",
    extraSeo: "Widely used by math students, competitive exam aspirants, and probability enthusiasts for arrangement and ordering problems.",
    example: "P(5, 3) = 5! / (5-3)! = 120 / 2 = 60\n\nThere are 60 ways to arrange 3 items from a set of 5.",
    formula: "P(n, r) = n! / (n − r)!",
    applications: ["Probability and statistics", "Competitive exam preparation", "Lottery and game calculations", "Seating arrangement problems", "Password combination counting"],
    faqs: [
      { q: "What is the difference between permutation and combination?", a: "Permutations consider order (ABC ≠ CBA), while combinations do not (ABC = CBA). Use permutations when arrangement matters." },
      { q: "What does n! mean?", a: "n! (n factorial) means n × (n-1) × (n-2) × ... × 1. For example, 5! = 120." }
    ]
  },
  "combination-calculator": {
    whatIs: "The Combination Calculator computes C(n, r) — the number of ways to choose r items from a set of n items where order does not matter. Fundamental in probability, statistics, and discrete mathematics.",
    extraSeo: "Used by students, statisticians, and lottery enthusiasts to calculate selection possibilities without regard to ordering.",
    example: "C(5, 3) = 5! / (3! × 2!) = 120 / 12 = 10\n\nThere are 10 ways to choose 3 items from 5.",
    formula: "C(n, r) = n! / (r! × (n − r)!)",
    applications: ["Probability calculations", "Lottery odds computation", "Team selection problems", "Menu combination counting", "Statistical sampling"],
    faqs: [
      { q: "When should I use combinations vs permutations?", a: "Use combinations when order doesn't matter (choosing team members) and permutations when order matters (assigning ranks)." },
      { q: "What is C(n, 0)?", a: "C(n, 0) = 1 for any n. There is exactly one way to choose nothing from a set." }
    ]
  },
  "percentage-to-fraction": {
    whatIs: "The Percentage to Fraction Converter transforms any percentage value into its simplified fraction form. It automatically finds the greatest common divisor to reduce the fraction to its simplest terms.",
    extraSeo: "Helpful for students learning fractions, teachers preparing materials, and anyone converting between percentage and fraction representations.",
    example: "75% = 75/100 = 3/4 (simplified)\n\n33.33% ≈ 1/3",
    formula: "Fraction = Percentage / 100\nSimplify by dividing numerator and denominator by GCD",
    applications: ["Math homework and exams", "Recipe scaling", "Financial calculations", "Probability expressions", "Teaching fraction concepts"],
    faqs: [
      { q: "How do you convert a percentage to a fraction?", a: "Divide the percentage by 100 to get a fraction, then simplify by finding the GCD of the numerator and denominator." },
      { q: "Can it handle decimal percentages?", a: "Yes, the calculator handles decimal percentages like 12.5% = 1/8." }
    ]
  },
  "number-to-words": {
    whatIs: "The Number to Words Converter transforms numeric values into their written English word form. It supports numbers up to billions, including negative numbers, making it useful for check writing, financial documents, and educational purposes.",
    extraSeo: "Essential for accountants writing checks, teachers creating word problems, and developers building number-to-text features.",
    example: "12345 → twelve thousand three hundred and forty-five\n\n1000000 → one million",
    applications: ["Writing bank checks and financial documents", "Educational word problems", "Legal document preparation", "Invoice and receipt generation", "Accessibility and screen readers"],
    faqs: [
      { q: "What is the maximum number supported?", a: "The converter supports numbers up to 999 billion (999,999,999,999) in both positive and negative forms." },
      { q: "Does it support decimals?", a: "Currently it converts whole integers only. Decimal numbers are rounded to the nearest integer." }
    ]
  },
  "torque-converter": {
    whatIs: "The Torque Converter converts between Newton-meters, pound-feet, pound-inches, kilogram-centimeters, and dyne-centimeters. Essential for automotive, mechanical engineering, and physics applications.",
    extraSeo: "Used by mechanics, engineers, and automotive enthusiasts who need to convert torque specifications between different unit systems.",
    example: "100 N·m = 73.756 lb·ft = 885.075 lb·in",
    formula: "1 N·m = 0.7376 lb·ft\n1 lb·ft = 1.3558 N·m",
    applications: ["Automotive torque specifications", "Mechanical engineering calculations", "Bolt tightening specifications", "Engine performance analysis", "Physics torque problems"],
    faqs: [
      { q: "What is torque?", a: "Torque is the rotational force applied around an axis. It equals force multiplied by the distance from the pivot point." },
      { q: "Why are different torque units used?", a: "N·m is the SI standard used in most countries, while lb·ft is common in the US automotive industry." }
    ]
  },
  "force-converter": {
    whatIs: "The Force Converter converts between Newton, Kilonewton, Dyne, pound-force, and kilogram-force units. Indispensable for physics, engineering, and scientific calculations involving force measurements.",
    extraSeo: "Used by physics students, engineers, and researchers who work with force measurements across different unit systems.",
    example: "100 N = 0.1 kN = 10,000,000 dyn = 22.481 lbf = 10.197 kgf",
    formula: "1 N = 1 kg·m/s²\n1 lbf = 4.44822 N\n1 kgf = 9.80665 N",
    applications: ["Physics force calculations", "Structural engineering", "Material strength testing", "Aerospace engineering", "Weight and mass conversions"],
    faqs: [
      { q: "What is a Newton?", a: "A Newton (N) is the SI unit of force. It is the force needed to accelerate 1 kilogram at 1 meter per second squared." },
      { q: "What is the difference between force and weight?", a: "Weight is a specific type of force caused by gravity. Weight = mass × gravitational acceleration (F = mg)." }
    ]
  },
  "text-to-html": {
    whatIs: "The Text to HTML Converter transforms plain text into proper HTML markup. It automatically wraps text in paragraph tags and converts line breaks to <br> tags, making it easy to prepare content for web pages.",
    extraSeo: "Useful for content writers, bloggers, and web developers who need to quickly convert plain text drafts into HTML-ready content.",
    example: "Input:\nHello World\nThis is a test\n\nOutput:\n<p>Hello World<br>This is a test</p>",
    applications: ["Blog content preparation", "Email HTML formatting", "CMS content migration", "Web development workflows", "Content management"],
    faqs: [
      { q: "Does it escape special characters?", a: "Yes, the converter escapes HTML special characters like <, >, &, and quotes to prevent rendering issues." },
      { q: "Does it handle paragraphs?", a: "Yes, double line breaks are converted to paragraph separators (</p><p>), while single line breaks become <br> tags." }
    ]
  },
  "find-and-replace": {
    whatIs: "The Find and Replace tool lets you search for specific text within a document and replace all occurrences with new text. It supports case-sensitive and case-insensitive matching with live match counting.",
    extraSeo: "Essential for writers, editors, and developers who need to make bulk text changes quickly and accurately without a desktop text editor.",
    example: "Text: 'The cat sat on the mat'\nFind: 'the' → Replace: 'a'\nResult: 'a cat sat on a mat' (case-insensitive)",
    applications: ["Bulk text editing", "Code refactoring", "Document cleanup", "Data transformation", "Content localization"],
    faqs: [
      { q: "Does it support regular expressions?", a: "The current version uses literal text matching with optional case sensitivity. Special regex characters are escaped automatically." },
      { q: "Can I undo a replacement?", a: "There is no undo button, so it's recommended to copy your original text before performing replacements." }
    ]
  },
  "line-counter": {
    whatIs: "The Line Counter tool instantly counts the total number of lines in your text, distinguishing between non-empty lines and empty (blank) lines. Perfect for code analysis, data processing, and document statistics.",
    extraSeo: "Used by programmers counting lines of code, writers tracking document length, and data analysts processing multi-line text data.",
    example: "Input (3 lines, 1 empty):\nHello\n\nWorld\n\nResult: Total: 3, Non-empty: 2, Empty: 1",
    applications: ["Counting lines of code", "Document length analysis", "Data file inspection", "Poetry line counting", "Log file analysis"],
    faqs: [
      { q: "Does it count the last line without a newline?", a: "Yes, the counter includes the last line even if it doesn't end with a newline character." },
      { q: "What counts as an empty line?", a: "A line containing only whitespace (spaces, tabs) or nothing at all is counted as empty." }
    ]
  },
  "sentence-counter": {
    whatIs: "The Sentence Counter tool analyzes your text and counts the number of sentences, paragraphs, and words. It uses punctuation-based detection to accurately identify sentence boundaries.",
    extraSeo: "Helpful for students meeting essay requirements, content writers optimizing readability, and editors analyzing text structure.",
    example: "Input: 'Hello world. How are you? I am fine!'\n\nResult: 3 sentences, 1 paragraph, 8 words",
    applications: ["Essay length verification", "Readability analysis", "Content optimization", "Academic writing requirements", "Speech preparation"],
    faqs: [
      { q: "How does it detect sentences?", a: "It splits text on sentence-ending punctuation marks (., !, ?) and counts the non-empty segments." },
      { q: "Does it handle abbreviations?", a: "Common abbreviations with periods (e.g., Dr., Mr.) may be counted as sentence breaks. For best results, use clean text." }
    ]
  },
  "color-blender": {
    whatIs: "The Color Blender mixes two colors and generates a smooth gradient of intermediate colors between them. You can control the number of steps to create palettes for design, data visualization, and UI development.",
    extraSeo: "Perfect for designers creating color transitions, developers building gradient systems, and artists exploring color mixing.",
    example: "Blending #FF0000 (red) and #0000FF (blue) with 5 steps:\n#FF0000 → #BF003F → #7F007F → #3F00BF → #0000FF",
    applications: ["UI gradient design", "Data visualization color scales", "Art and illustration", "Brand color exploration", "Heat map color schemes"],
    faqs: [
      { q: "How does color blending work?", a: "It linearly interpolates each RGB channel between the two colors, creating smooth transitions at each step." },
      { q: "Can I copy individual colors?", a: "Yes, click any color hex code to copy it to your clipboard." }
    ]
  },
  "border-radius-generator": {
    whatIs: "The Border Radius Generator lets you visually customize CSS border-radius for each corner independently. See a live preview of the shape and copy the CSS code instantly for use in your projects.",
    extraSeo: "Essential for web developers and designers who want to create custom rounded corners, pill shapes, and organic forms with precise CSS control.",
    example: "Top-left: 20px, Top-right: 50px, Bottom-right: 20px, Bottom-left: 50px\nCSS: border-radius: 20px 50px 20px 50px;",
    applications: ["UI component styling", "Button and card design", "Creating organic shapes", "Badge and tag styling", "Modern web design"],
    faqs: [
      { q: "What is border-radius?", a: "CSS border-radius rounds the corners of an element. You can set all corners equally or control each corner independently." },
      { q: "How do I make a circle?", a: "Set border-radius to 50% on a square element (equal width and height) to create a perfect circle." }
    ]
  },
  "text-shadow-generator": {
    whatIs: "The Text Shadow Generator creates CSS text-shadow effects with adjustable X/Y offsets, blur radius, and color. Preview the effect in real-time on custom text and copy the CSS code.",
    extraSeo: "Used by web designers and front-end developers to create eye-catching text effects, 3D text illusions, and glowing text styles.",
    example: "X: 2px, Y: 2px, Blur: 4px, Color: #000000\nCSS: text-shadow: 2px 2px 4px #000000;",
    applications: ["Heading and title styling", "3D text effects", "Neon glow text", "Embossed text design", "Logo and branding text"],
    faqs: [
      { q: "What is CSS text-shadow?", a: "text-shadow adds shadow behind text. The syntax is: text-shadow: offset-x offset-y blur-radius color. Multiple shadows can be comma-separated." },
      { q: "Can I create a glow effect?", a: "Yes, use 0 offset, high blur, and a bright color (e.g., text-shadow: 0 0 10px #00ff00) to create a glowing effect." }
    ]
  },
  "aspect-ratio-calculator": {
    whatIs: "The Aspect Ratio Calculator computes and simplifies the aspect ratio of any resolution or dimensions. Enter width and height to get the simplified ratio, useful for screens, images, and video formats.",
    extraSeo: "Essential for photographers, videographers, and web designers who need to maintain correct proportions across different display sizes.",
    example: "1920 × 1080 → 16:9\n1080 × 1080 → 1:1\n2560 × 1080 → 64:27",
    applications: ["Image and photo cropping", "Video resolution planning", "Responsive web design", "Monitor and TV comparisons", "Print layout design"],
    faqs: [
      { q: "What is aspect ratio?", a: "Aspect ratio is the proportional relationship between width and height. Common ratios include 16:9 (widescreen), 4:3 (standard), and 1:1 (square)." },
      { q: "Why is aspect ratio important?", a: "Maintaining correct aspect ratios prevents images and videos from appearing stretched or distorted on different displays." }
    ]
  },
  "html-entity-encoder": {
    whatIs: "The HTML Entity Encoder converts special characters to their HTML entity equivalents and vice versa. It handles all Unicode characters, angle brackets, ampersands, and quotation marks for safe HTML embedding.",
    extraSeo: "Critical for web developers embedding user-generated content, preventing XSS attacks, and displaying code snippets safely in HTML pages.",
    example: "Encode: <p>Hello \"World\"</p>\nResult: &#60;p&#62;Hello &#34;World&#34;&#60;/p&#62;",
    applications: ["XSS prevention in web apps", "Code snippet display", "Email HTML preparation", "CMS content sanitization", "Documentation formatting"],
    faqs: [
      { q: "Why encode HTML entities?", a: "Encoding prevents browsers from interpreting special characters as HTML markup, avoiding rendering errors and security vulnerabilities like XSS attacks." },
      { q: "What characters need encoding?", a: "At minimum: < (less than), > (greater than), & (ampersand), \" (double quote), and ' (single quote)." }
    ]
  },
  "ip-address-converter": {
    whatIs: "The IP Address Converter transforms IPv4 addresses between dotted decimal, binary, hexadecimal, octal, and integer formats. Useful for networking, security analysis, and system administration.",
    extraSeo: "Used by network engineers, cybersecurity professionals, and system administrators who work with IP addresses in various formats.",
    example: "192.168.1.1 →\nDecimal: 3232235777\nBinary: 11000000.10101000.00000001.00000001\nHex: C0.A8.01.01",
    applications: ["Network troubleshooting", "Firewall rule configuration", "Security analysis", "Subnet calculations", "System administration"],
    faqs: [
      { q: "What is an IPv4 address?", a: "An IPv4 address is a 32-bit number written as four octets (0-255) separated by dots, like 192.168.1.1. It uniquely identifies a device on a network." },
      { q: "Why convert IP to binary?", a: "Binary format is essential for understanding subnet masks, CIDR notation, and how routing works at the network level." }
    ]
  },
  "flashcard-maker": {
    whatIs: "The Flashcard Maker lets you create custom question-answer flashcards and study them with a flip-to-reveal interface. Perfect for memorization, exam preparation, and self-testing across any subject.",
    extraSeo: "Ideal for students preparing for exams, language learners memorizing vocabulary, and professionals studying for certifications.",
    example: "Front: What is the capital of France?\nBack: Paris\n\nCreate multiple cards and review them in study mode.",
    applications: ["Exam preparation and revision", "Language vocabulary learning", "Medical terminology study", "History dates memorization", "Professional certification prep"],
    faqs: [
      { q: "How many flashcards can I create?", a: "There is no limit. You can create as many flashcards as needed for your study session." },
      { q: "Are flashcards saved?", a: "Flashcards exist during your current session. For permanent storage, note down your cards before closing the page." }
    ]
  },
  "grade-calculator": {
    whatIs: "The Grade Calculator computes your overall percentage and letter grade from subject-wise marks. Add multiple subjects with marks obtained and total marks to see your aggregate performance at a glance.",
    extraSeo: "Essential for students calculating term results, parents tracking academic progress, and teachers computing class averages.",
    example: "Math: 85/100, Science: 78/100, English: 92/100\nTotal: 255/300\nPercentage: 85%\nGrade: A",
    formula: "Percentage = (Total Marks Obtained / Total Possible Marks) × 100",
    applications: ["Semester result calculation", "Academic performance tracking", "College admission eligibility", "Scholarship qualification check", "Self-assessment and goal setting"],
    faqs: [
      { q: "What grading scale is used?", a: "A+ (90%+), A (80-89%), B (70-79%), C (60-69%), D (50-59%), F (below 50%). This follows a common academic grading scale." },
      { q: "Can I add more subjects?", a: "Yes, click '+ Add Subject' to add as many subjects as needed. You can also remove subjects you don't need." }
    ]
  }
};

export const getSeoContent = (slug: string): SeoContent | undefined => seo[slug];
export default seo;
