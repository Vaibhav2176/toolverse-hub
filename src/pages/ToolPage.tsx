import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import { useParams } from "react-router-dom";

// Lazy load all tool components
const toolComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  "percentage-calculator": lazy(() => import("@/tools/PercentageCalculator")),
  "age-calculator": lazy(() => import("@/tools/AgeCalculator")),
  "discount-calculator": lazy(() => import("@/tools/DiscountCalculator")),
  "profit-loss-calculator": lazy(() => import("@/tools/ProfitLossCalculator")),
  "loan-emi-calculator": lazy(() => import("@/tools/LoanEmiCalculator")),
  "simple-interest-calculator": lazy(() => import("@/tools/SimpleInterestCalculator")),
  "compound-interest-calculator": lazy(() => import("@/tools/CompoundInterestCalculator")),
  "gpa-calculator": lazy(() => import("@/tools/GpaCalculator")),
  "length-converter": lazy(() => import("@/tools/LengthConverter")),
  "weight-converter": lazy(() => import("@/tools/WeightConverter")),
  "temperature-converter": lazy(() => import("@/tools/TemperatureConverter")),
  "time-converter": lazy(() => import("@/tools/TimeConverter")),
  "binary-to-decimal": lazy(() => import("@/tools/BinaryToDecimal")),
  "decimal-to-binary": lazy(() => import("@/tools/DecimalToBinary")),
  "roman-numeral-converter": lazy(() => import("@/tools/RomanNumeralConverter")),
  "bytes-converter": lazy(() => import("@/tools/BytesConverter")),
  "word-counter": lazy(() => import("@/tools/WordCounter")),
  "character-counter": lazy(() => import("@/tools/CharacterCounter")),
  "text-case-converter": lazy(() => import("@/tools/TextCaseConverter")),
  "remove-extra-spaces": lazy(() => import("@/tools/RemoveExtraSpaces")),
  "reverse-text": lazy(() => import("@/tools/ReverseText")),
  "sort-text": lazy(() => import("@/tools/SortText")),
  "remove-duplicate-lines": lazy(() => import("@/tools/RemoveDuplicateLines")),
  "password-generator": lazy(() => import("@/tools/PasswordGenerator")),
  "random-number-generator": lazy(() => import("@/tools/RandomNumberGenerator")),
  "random-color-generator": lazy(() => import("@/tools/RandomColorGenerator")),
  "username-generator": lazy(() => import("@/tools/UsernameGenerator")),
  "business-name-generator": lazy(() => import("@/tools/BusinessNameGenerator")),
  "pomodoro-timer": lazy(() => import("@/tools/PomodoroTimer")),
  "random-question-picker": lazy(() => import("@/tools/RandomQuestionPicker")),
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
