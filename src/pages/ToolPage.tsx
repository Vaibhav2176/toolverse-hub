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
  "password-generator": lazy(() => import("@/tools/PasswordGenerator")),
  "random-number-generator": lazy(() => import("@/tools/RandomNumberGenerator")),
  "random-color-generator": lazy(() => import("@/tools/RandomColorGenerator")),
  "username-generator": lazy(() => import("@/tools/UsernameGenerator")),
  "business-name-generator": lazy(() => import("@/tools/BusinessNameGenerator")),
  "pomodoro-timer": lazy(() => import("@/tools/PomodoroTimer")),
  "random-question-picker": lazy(() => import("@/tools/RandomQuestionPicker")),
  "unit-circle-helper": lazy(() => import("@/tools/UnitCircleHelper")),
  "tip-calculator": lazy(() => import("@/tools/TipCalculator")),
  "percentage-change-calculator": lazy(() => import("@/tools/PercentageChangeCalc")),
  "volume-converter": lazy(() => import("@/tools/VolumeConverter")),
  "number-base-converter": lazy(() => import("@/tools/NumberBaseConverter")),
  "color-converter": lazy(() => import("@/tools/ColorConverter")),
  "currency-formatter": lazy(() => import("@/tools/CurrencyFormatter")),
  "markdown-previewer": lazy(() => import("@/tools/MarkdownPreviewer")),
  "text-to-slug": lazy(() => import("@/tools/TextToSlug")),
  "reading-time-estimator": lazy(() => import("@/tools/ReadingTimeEstimator")),
  "text-encryptor": lazy(() => import("@/tools/TextEncryptor")),
  "lorem-ipsum-generator": lazy(() => import("@/tools/LoremIpsumGenerator")),
  "quotes-generator": lazy(() => import("@/tools/QuotesGenerator")),
  "hash-generator": lazy(() => import("@/tools/HashGenerator")),
  "countdown-timer": lazy(() => import("@/tools/CountdownTimer")),
  "stopwatch": lazy(() => import("@/tools/Stopwatch")),
  "date-difference-calculator": lazy(() => import("@/tools/DateDiffCalculator")),
  "cgpa-to-percentage": lazy(() => import("@/tools/CgpaToPercentage")),
  "json-formatter": lazy(() => import("@/tools/JsonFormatter")),
  "base64-encoder-decoder": lazy(() => import("@/tools/Base64EncoderDecoder")),
  "url-encoder-decoder": lazy(() => import("@/tools/UrlEncoderDecoder")),
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
