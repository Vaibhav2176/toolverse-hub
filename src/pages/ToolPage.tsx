import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";

const toolComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  "percentage-calculator": lazy(() => import("@/tools/PercentageCalculator")),
  "age-calculator": lazy(() => import("@/tools/AgeCalculator")),
  "discount-calculator": lazy(() => import("@/tools/DiscountCalculator")),
  "profit-loss-calculator": lazy(() => import("@/tools/ProfitLossCalculator")),
  "loan-emi-calculator": lazy(() => import("@/tools/LoanEmiCalculator")),
  "simple-interest-calculator": lazy(() => import("@/tools/SimpleInterestCalculator")),
  "compound-interest-calculator": lazy(() => import("@/tools/CompoundInterestCalculator")),
  "gpa-calculator": lazy(() => import("@/tools/GpaCalculator")),
  "basic-calculator": lazy(() => import("@/tools/BasicCalculator")),
  "scientific-calculator": lazy(() => import("@/tools/ScientificCalculator")),
  "logarithm-calculator": lazy(() => import("@/tools/LogarithmCalculator")),
  "trigonometry-calculator": lazy(() => import("@/tools/TrigonometryCalculator")),
  "fraction-calculator": lazy(() => import("@/tools/FractionCalculator")),
  "bmi-calculator": lazy(() => import("@/tools/BmiCalculator")),
  "area-calculator": lazy(() => import("@/tools/AreaCalculator")),
  "speed-calculator": lazy(() => import("@/tools/SpeedCalculator")),
  "average-calculator": lazy(() => import("@/tools/AverageCalculator")),
  "tip-calculator": lazy(() => import("@/tools/TipCalculator")),
  "percentage-change-calculator": lazy(() => import("@/tools/PercentageChangeCalc")),
  "length-converter": lazy(() => import("@/tools/LengthConverter")),
  "weight-converter": lazy(() => import("@/tools/WeightConverter")),
  "temperature-converter": lazy(() => import("@/tools/TemperatureConverter")),
  "time-converter": lazy(() => import("@/tools/TimeConverter")),
  "binary-to-decimal": lazy(() => import("@/tools/BinaryToDecimal")),
  "decimal-to-binary": lazy(() => import("@/tools/DecimalToBinary")),
  "roman-numeral-converter": lazy(() => import("@/tools/RomanNumeralConverter")),
  "bytes-converter": lazy(() => import("@/tools/BytesConverter")),
  "angle-converter": lazy(() => import("@/tools/AngleConverter")),
  "speed-converter": lazy(() => import("@/tools/SpeedConverter")),
  "energy-converter": lazy(() => import("@/tools/EnergyConverter")),
  "pressure-converter": lazy(() => import("@/tools/PressureConverter")),
  "volume-converter": lazy(() => import("@/tools/VolumeConverter")),
  "number-base-converter": lazy(() => import("@/tools/NumberBaseConverter")),
  "color-converter": lazy(() => import("@/tools/ColorConverter")),
  "currency-formatter": lazy(() => import("@/tools/CurrencyFormatter")),
  "word-counter": lazy(() => import("@/tools/WordCounter")),
  "character-counter": lazy(() => import("@/tools/CharacterCounter")),
  "text-case-converter": lazy(() => import("@/tools/TextCaseConverter")),
  "remove-extra-spaces": lazy(() => import("@/tools/RemoveExtraSpaces")),
  "reverse-text": lazy(() => import("@/tools/ReverseText")),
  "sort-text": lazy(() => import("@/tools/SortText")),
  "remove-duplicate-lines": lazy(() => import("@/tools/RemoveDuplicateLines")),
  "text-repeater": lazy(() => import("@/tools/TextRepeater")),
  "remove-line-breaks": lazy(() => import("@/tools/RemoveLineBreaks")),
  "text-diff-checker": lazy(() => import("@/tools/TextDiffChecker")),
  "markdown-previewer": lazy(() => import("@/tools/MarkdownPreviewer")),
  "text-to-slug": lazy(() => import("@/tools/TextToSlug")),
  "reading-time-estimator": lazy(() => import("@/tools/ReadingTimeEstimator")),
  "text-encryptor": lazy(() => import("@/tools/TextEncryptor")),
  "password-generator": lazy(() => import("@/tools/PasswordGenerator")),
  "random-number-generator": lazy(() => import("@/tools/RandomNumberGenerator")),
  "random-color-generator": lazy(() => import("@/tools/RandomColorGenerator")),
  "username-generator": lazy(() => import("@/tools/UsernameGenerator")),
  "business-name-generator": lazy(() => import("@/tools/BusinessNameGenerator")),
  "lorem-ipsum-generator": lazy(() => import("@/tools/LoremIpsumGenerator")),
  "quotes-generator": lazy(() => import("@/tools/QuotesGenerator")),
  "hash-generator": lazy(() => import("@/tools/HashGenerator")),
  "pomodoro-timer": lazy(() => import("@/tools/PomodoroTimer")),
  "random-question-picker": lazy(() => import("@/tools/RandomQuestionPicker")),
  "unit-circle-helper": lazy(() => import("@/tools/UnitCircleHelper")),
  "countdown-timer": lazy(() => import("@/tools/CountdownTimer")),
  "stopwatch": lazy(() => import("@/tools/Stopwatch")),
  "date-difference-calculator": lazy(() => import("@/tools/DateDiffCalculator")),
  "cgpa-to-percentage": lazy(() => import("@/tools/CgpaToPercentage")),
  "json-formatter": lazy(() => import("@/tools/JsonFormatter")),
  "base64-encoder-decoder": lazy(() => import("@/tools/Base64EncoderDecoder")),
  "url-encoder-decoder": lazy(() => import("@/tools/UrlEncoderDecoder")),
  "days-until-date": lazy(() => import("@/tools/DaysUntilDate")),
  "business-days-calculator": lazy(() => import("@/tools/BusinessDaysCalculator")),
  "workdays-calculator": lazy(() => import("@/tools/WorkdaysCalculator")),
  "week-number-calculator": lazy(() => import("@/tools/WeekNumberCalculator")),
  "unix-timestamp-converter": lazy(() => import("@/tools/UnixTimestampConverter")),
  "lcm-calculator": lazy(() => import("@/tools/LcmCalculator")),
  "gcd-calculator": lazy(() => import("@/tools/GcdCalculator")),
  "prime-factorization": lazy(() => import("@/tools/PrimeFactorization")),
  "matrix-calculator": lazy(() => import("@/tools/MatrixCalculator")),
  "determinant-calculator": lazy(() => import("@/tools/DeterminantCalculator")),
  "gst-calculator": lazy(() => import("@/tools/GstCalculator")),
  "savings-calculator": lazy(() => import("@/tools/SavingsCalculator")),
  "investment-calculator": lazy(() => import("@/tools/InvestmentCalculator")),
  "inflation-calculator": lazy(() => import("@/tools/InflationCalculator")),
  "sales-tax-calculator": lazy(() => import("@/tools/SalesTaxCalculator")),
  "json-to-csv": lazy(() => import("@/tools/JsonToCsv")),
  "csv-to-json": lazy(() => import("@/tools/CsvToJson")),
  "uuid-generator": lazy(() => import("@/tools/UuidGenerator")),
  "jwt-decoder": lazy(() => import("@/tools/JwtDecoder")),
  "regex-tester": lazy(() => import("@/tools/RegexTester")),
  "gradient-generator": lazy(() => import("@/tools/GradientGenerator")),
  "color-palette-generator": lazy(() => import("@/tools/ColorPaletteGenerator")),
  "contrast-checker": lazy(() => import("@/tools/ContrastChecker")),
  "rgb-to-cmyk": lazy(() => import("@/tools/RgbToCmyk")),
  "image-color-picker": lazy(() => import("@/tools/ImageColorPicker")),
  "electricity-cost-calculator": lazy(() => import("@/tools/ElectricityCostCalculator")),
  "square-root-calculator": lazy(() => import("@/tools/SquareRootCalculator")),
  "exponent-calculator": lazy(() => import("@/tools/ExponentCalculator")),
  "ratio-calculator": lazy(() => import("@/tools/RatioCalculator")),
  "frequency-converter": lazy(() => import("@/tools/FrequencyConverter")),
  "data-transfer-rate-converter": lazy(() => import("@/tools/DataTransferRateConverter")),
  "text-to-binary": lazy(() => import("@/tools/TextToBinary")),
  "word-frequency-counter": lazy(() => import("@/tools/WordFrequencyCounter")),
  "text-to-morse-code": lazy(() => import("@/tools/TextToMorseCode")),
  "qr-text-generator": lazy(() => import("@/tools/QrTextGenerator")),
  "password-strength-checker": lazy(() => import("@/tools/PasswordStrengthChecker")),
  "cron-expression-parser": lazy(() => import("@/tools/CronExpressionParser")),
  "chmod-calculator": lazy(() => import("@/tools/ChmodCalculator")),
  "css-unit-converter": lazy(() => import("@/tools/CssUnitConverter")),
  "box-shadow-generator": lazy(() => import("@/tools/BoxShadowGenerator")),
  // New converters
  "currency-converter": lazy(() => import("@/tools/CurrencyConverter")),
  "area-converter": lazy(() => import("@/tools/AreaConverter")),
  "power-converter": lazy(() => import("@/tools/PowerConverter")),
  "fuel-efficiency-converter": lazy(() => import("@/tools/FuelEfficiencyConverter")),
  "density-converter": lazy(() => import("@/tools/DensityConverter")),
  "illuminance-converter": lazy(() => import("@/tools/IlluminanceConverter")),
};

const ToolPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const Component = slug ? toolComponents[slug] : null;

  if (!Component) {
    return (
      <Layout>
        <div className="container py-12 text-center text-muted-foreground">Tool not found.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Suspense fallback={<div className="container py-12 text-center text-muted-foreground">Loading tool...</div>}>
        <Component />
      </Suspense>
    </Layout>
  );
};

export default ToolPage;
