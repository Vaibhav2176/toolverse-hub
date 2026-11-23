import { lazy } from "react";
import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

export const dateATools: ToolMeta[] = [
  {
    "slug": "date-add-subtract-calculator",
    "title": "Date Calculator (Add or Subtract)",
    "description": "Add or subtract days, weeks, months or years from any date and see the resulting date and weekday.",
    "category": "date-time",
    "emoji": "➕",
    "keywords": [
      "add days to date",
      "date calculator",
      "subtract days from date",
      "date plus days"
    ],
    "isNew": true,
    "priority": "high",
    "popular": true
  },
  {
    "slug": "date-to-date-calculator",
    "title": "Date to Date Calculator",
    "description": "Find the exact time between two dates in years, months and days, plus total days, weeks and hours.",
    "category": "date-time",
    "emoji": "📆",
    "keywords": [
      "date to date calculator",
      "time between two dates",
      "how many days between dates",
      "duration calculator"
    ],
    "isNew": true,
    "priority": "high",
    "popular": true
  },
  {
    "slug": "business-date-calculator",
    "title": "Business Days Date Calculator",
    "description": "Add a number of working days to a date, skipping weekends, and find the date you land on.",
    "category": "date-time",
    "emoji": "🏢",
    "keywords": [
      "add business days",
      "working days from date",
      "business day calculator",
      "add workdays to date"
    ],
    "isNew": true
  },
  {
    "slug": "age-in-days-calculator",
    "title": "Age in Days Calculator",
    "description": "See exactly how many days, weeks, months, hours and minutes you have been alive from your date of birth.",
    "category": "date-time",
    "emoji": "🎂",
    "keywords": [
      "age in days",
      "how many days old am i",
      "age in weeks",
      "days since birth"
    ],
    "isNew": true
  },
  {
    "slug": "day-of-year-calculator",
    "title": "Day of Year Calculator",
    "description": "Find which day number of the year a date is, how many days remain, and its ISO week number.",
    "category": "date-time",
    "emoji": "🔢",
    "keywords": [
      "day of year",
      "day number calculator",
      "julian day of year",
      "days left in year"
    ],
    "isNew": true
  },
  {
    "slug": "time-zone-converter",
    "title": "Time Zone Converter",
    "description": "Convert a date and time from one time zone to major world zones, with daylight saving handled automatically.",
    "category": "date-time",
    "emoji": "🌍",
    "keywords": [
      "time zone converter",
      "convert time zones",
      "est to ist",
      "world clock converter"
    ],
    "isNew": true,
    "priority": "high",
    "popular": true
  },
  {
    "slug": "weekday-calculator",
    "title": "Day of the Week Calculator",
    "description": "Find the day of the week for any date, past or future, and how many days away it is.",
    "category": "date-time",
    "emoji": "🗓️",
    "keywords": [
      "what day of the week",
      "day of week calculator",
      "what day was i born",
      "weekday finder"
    ],
    "isNew": true
  },
  {
    "slug": "leap-year-calculator",
    "title": "Leap Year Calculator",
    "description": "Check whether a year is a leap year, see which rule applies, and find the next and previous leap years.",
    "category": "date-time",
    "emoji": "🐸",
    "keywords": [
      "leap year calculator",
      "is it a leap year",
      "next leap year",
      "leap year rule"
    ],
    "isNew": true
  },
  {
    "slug": "days-in-month-calculator",
    "title": "Days in Month Calculator",
    "description": "See how many days any month has in a given year, plus the weekday of its first and last day.",
    "category": "date-time",
    "emoji": "📅",
    "keywords": [
      "days in month",
      "how many days in february",
      "days in a month calculator",
      "month length"
    ],
    "isNew": true
  },
  {
    "slug": "date-format-converter",
    "title": "Date Format Converter",
    "description": "Show one date in ISO 8601, US, UK, long-form, RFC 2822 and Unix timestamp formats.",
    "category": "date-time",
    "emoji": "🔄",
    "keywords": [
      "date format converter",
      "iso 8601 converter",
      "mm/dd/yyyy to dd/mm/yyyy",
      "date to timestamp"
    ],
    "isNew": true
  }
];

export const dateASeo: Record<string, SeoContent> = {
  "date-add-subtract-calculator": {
    "whatIs": "This date calculator moves a date forward or backward by any number of days, weeks, months or years and tells you the resulting date and the day of the week it falls on. It is the quickest way to answer questions like ‘what date is 90 days from today?’ or ‘what was the date six weeks ago?’. Month and year arithmetic follows calendar rules: adding one month to 31 January lands on the last valid day of February rather than spilling into March, and leap years are handled automatically.",
    "extraSeo": "Answers searches like ‘what is 90 days from today’, ‘date 6 weeks ago’ and ‘add months to a date’.",
    "example": "Start: 15 March 2026\nAdd: 90 days\nResult: 13 June 2026 (Saturday)\n\nStart: 31 January 2026\nAdd: 1 month\nResult: 28 February 2026",
    "applications": [
      "Working out notice-period end dates",
      "Finding deadlines like ‘30 days from invoice’",
      "Planning medication or training schedules",
      "Calculating warranty or return windows"
    ],
    "faqs": [
      {
        "q": "Does it count the start date?",
        "a": "No. Adding 1 day to Monday gives Tuesday, matching how most deadlines are calculated."
      },
      {
        "q": "What happens when adding a month to the 31st?",
        "a": "If the next month is shorter, the result is clamped to its last day."
      },
      {
        "q": "Are leap years handled?",
        "a": "Yes, 29 February is included in leap years."
      }
    ]
  },
  "date-to-date-calculator": {
    "whatIs": "A date to date calculator measures the exact gap between two calendar dates. It reports the difference in years, months and days — the way people describe ages and tenures — as well as the total number of days, weeks and hours. That makes it useful both for human-friendly answers (‘2 years, 3 months and 4 days’) and for contracts or billing where only the total day count matters.",
    "extraSeo": "Covers ‘how long between two dates’, ‘days from date to date’ and ‘weeks between dates’ searches.",
    "example": "From: 1 January 2024\nTo: 15 April 2026\nDuration: 2 years, 3 months, 14 days\nTotal: 835 days ≈ 119.3 weeks",
    "applications": [
      "Calculating employment length",
      "Measuring project durations",
      "Counting days for rental or loan terms",
      "Anniversary and relationship milestones"
    ],
    "faqs": [
      {
        "q": "Is the end date included?",
        "a": "No, the count is exclusive of the end date. Add one day if you need an inclusive count."
      },
      {
        "q": "How are months counted?",
        "a": "Full calendar months are counted first, then the remaining days."
      },
      {
        "q": "Does it handle time zones?",
        "a": "It compares calendar dates only, so time zones do not affect the result."
      }
    ],
    "formula": "Total days = (end − start) ÷ 86,400,000 ms"
  },
  "business-date-calculator": {
    "whatIs": "A business date calculator answers ‘what date is N working days from now?’. It steps through the calendar from your start date, counting only Monday to Friday, and returns the landing date along with its weekday. Shipping estimates, payment terms and legal response windows are often expressed in business days, and counting them by hand across weekends is error-prone. Public holidays vary by country, so they are not removed automatically — add extra days for any holidays in the period.",
    "extraSeo": "Use it as an ‘add 10 business days’ tool, a shipping delivery date estimator or a payment-terms due date finder.",
    "example": "Start: Thursday 2 April 2026\nAdd: 5 business days\nCounting Fri, Mon, Tue, Wed, Thu\nResult: Thursday 9 April 2026",
    "applications": [
      "Estimating shipping and delivery dates",
      "Calculating invoice due dates",
      "Legal or HR response deadlines",
      "Sprint and release planning"
    ],
    "faqs": [
      {
        "q": "Are public holidays excluded?",
        "a": "No. Holidays differ by country, so add one extra day for each holiday in your range."
      },
      {
        "q": "What if I start on a weekend?",
        "a": "Counting begins from the next working day."
      },
      {
        "q": "How is this different from a business days counter?",
        "a": "A counter tells you how many working days lie between two dates; this tool gives the date after adding a set number."
      }
    ]
  },
  "age-in-days-calculator": {
    "whatIs": "An age in days calculator converts your date of birth into the total time you have lived, expressed in days, weeks, months, hours and minutes. It is a fun way to spot milestones such as your 10,000th day (about 27 years and 4 months) and a practical one for parents tracking a baby’s age in weeks, or for medical and research forms that ask for age in days.",
    "extraSeo": "Answers ‘how many days old am I’, ‘age in weeks’ and ‘when is my 10,000th day’.",
    "example": "Date of birth: 10 May 2000\nToday: 10 May 2026\nAge: 9,496 days\n= 1,356 weeks 4 days\n≈ 227,904 hours",
    "applications": [
      "Finding your 10,000th-day milestone",
      "Tracking a baby’s age in weeks",
      "Filling in forms that need age in days",
      "Birthday trivia and celebrations"
    ],
    "faqs": [
      {
        "q": "Does it include leap days?",
        "a": "Yes, every 29 February you have lived is counted."
      },
      {
        "q": "How are months calculated?",
        "a": "As full calendar months since birth."
      },
      {
        "q": "When is my 10,000th day?",
        "a": "Roughly 27 years, 4 months and 18 days after birth, depending on leap years."
      }
    ],
    "formula": "Days = (today − birth date) ÷ 1 day"
  },
  "day-of-year-calculator": {
    "whatIs": "A day of year calculator tells you the ordinal position of a date in its year — 1 January is day 1 and 31 December is day 365, or 366 in a leap year. It also shows how many days are left and the ISO 8601 week number. Day numbers are used in manufacturing batch codes, logistics, scientific data logging and some military and aviation systems, where they are often written as YYDDD.",
    "extraSeo": "Also known as an ordinal date or ‘Julian date’ converter in manufacturing and logistics.",
    "example": "Date: 1 March 2026\nDay of year: 60\nDays remaining: 305\nISO week: 9",
    "applications": [
      "Reading or creating batch and lot codes",
      "Logging scientific or sensor data",
      "Tracking progress through the year",
      "Planning yearly goals"
    ],
    "faqs": [
      {
        "q": "Is this the same as a Julian date?",
        "a": "In manufacturing, ‘Julian date’ usually means day of year. Astronomers use a different continuous Julian Day Number."
      },
      {
        "q": "Does a leap year change the numbers?",
        "a": "Yes, from 1 March onward every day number is one higher in a leap year."
      },
      {
        "q": "Which week numbering is used?",
        "a": "ISO 8601, where weeks start on Monday and week 1 contains the first Thursday."
      }
    ],
    "formula": "Day of year = days elapsed since 1 January + 1"
  },
  "time-zone-converter": {
    "whatIs": "A time zone converter shows what a given date and time in one place corresponds to around the world. Pick a source zone and time, and the tool lists the matching local time in major cities using your browser’s built-in time zone database, so daylight saving changes are applied for the exact date you choose. It runs offline and is ideal for scheduling meetings, webinars and calls across continents.",
    "extraSeo": "Covers conversions like EST to IST, PST to GMT and London to Sydney meeting times.",
    "example": "Source: 9:00 AM, 12 June 2026, New York (EDT)\nLondon: 2:00 PM (BST)\nMumbai: 6:30 PM (IST)\nTokyo: 10:00 PM (JST)",
    "applications": [
      "Scheduling international meetings",
      "Planning webinar start times",
      "Coordinating remote teams",
      "Checking flight arrival local times"
    ],
    "faqs": [
      {
        "q": "Is daylight saving time handled?",
        "a": "Yes. Offsets come from the IANA database built into your browser for the date you enter."
      },
      {
        "q": "Does it need internet?",
        "a": "No, conversions use your browser’s internal time zone data."
      },
      {
        "q": "Why do some zones have 30 or 45-minute offsets?",
        "a": "Countries like India and Nepal use non-hour offsets, which the converter shows correctly."
      }
    ]
  },
  "weekday-calculator": {
    "whatIs": "A day of the week calculator tells you which weekday any date falls on — handy for questions like ‘what day was I born?’ or ‘what day is Christmas next year?’. It uses the Gregorian calendar and also shows how many days ago or away the date is from today.",
    "extraSeo": "Answers ‘what day of the week was’, ‘what day was I born on’ and ‘what day is a date in the future’.",
    "example": "Date: 20 July 1969\nWeekday: Sunday\n\nDate: 25 December 2026\nWeekday: Friday",
    "applications": [
      "Finding the weekday you were born",
      "Planning events on weekends",
      "Checking historical dates",
      "Confirming deadlines don’t fall on weekends"
    ],
    "faqs": [
      {
        "q": "Which calendar is used?",
        "a": "The proleptic Gregorian calendar, the standard civil calendar today."
      },
      {
        "q": "Can it handle very old dates?",
        "a": "Yes, but dates before 1582 use Gregorian rules that differ from the Julian calendar used then."
      },
      {
        "q": "Is there a formula?",
        "a": "Zeller’s congruence is a classic method; this tool uses the browser’s date engine."
      }
    ]
  },
  "leap-year-calculator": {
    "whatIs": "A leap year calculator checks whether a year has 366 days. In the Gregorian calendar a year is a leap year if it is divisible by 4, except century years, which must also be divisible by 400. So 2024 is a leap year, 1900 was not, and 2000 was. The tool explains which rule decided the result and lists the nearest leap years either side.",
    "extraSeo": "Answers ‘is 2100 a leap year’, ‘next leap year’ and ‘leap year rules explained’.",
    "example": "2028 → divisible by 4, not a century → leap year\n1900 → century not divisible by 400 → not a leap year\n2000 → divisible by 400 → leap year",
    "applications": [
      "Checking February dates",
      "Validating date inputs in software",
      "Planning 29 February events",
      "Teaching calendar rules"
    ],
    "faqs": [
      {
        "q": "Why do we have leap years?",
        "a": "A solar year is about 365.2422 days; the extra day keeps the calendar aligned with seasons."
      },
      {
        "q": "Is 2100 a leap year?",
        "a": "No — it is a century year not divisible by 400."
      },
      {
        "q": "How often do leap years occur?",
        "a": "97 times every 400 years."
      }
    ],
    "formula": "Leap if (year % 4 = 0 and year % 100 ≠ 0) or year % 400 = 0"
  },
  "days-in-month-calculator": {
    "whatIs": "A days in month calculator tells you how many days a given month has in a specific year — 28 or 29 for February depending on leap years, 30 or 31 for the rest — and the weekday of the first and last days. It helps with payroll periods, rent proration and building calendars.",
    "extraSeo": "Answers ‘how many days in February 2028’ and ‘what day does a month start on’.",
    "example": "February 2028 → 29 days\nStarts: Tuesday · Ends: Tuesday\n\nApril 2026 → 30 days\nStarts: Wednesday · Ends: Thursday",
    "applications": [
      "Prorating rent or subscriptions",
      "Payroll and billing periods",
      "Drawing calendars",
      "Planning monthly goals"
    ],
    "faqs": [
      {
        "q": "Which months have 31 days?",
        "a": "January, March, May, July, August, October and December."
      },
      {
        "q": "When does February have 29 days?",
        "a": "In leap years."
      },
      {
        "q": "How do I prorate rent by days?",
        "a": "Divide monthly rent by the days in that month, then multiply by days occupied."
      }
    ]
  },
  "date-format-converter": {
    "whatIs": "A date format converter takes a single date and time and displays it in the common formats used by people and software: ISO 8601 (2026-06-12T14:30:00), US MM/DD/YYYY, UK DD/MM/YYYY, a written long form, RFC 2822 for email headers, and a Unix timestamp. It avoids the classic 03/04 confusion between US and European ordering.",
    "extraSeo": "Converts MM/DD/YYYY to DD/MM/YYYY, dates to ISO 8601 and dates to Unix timestamps.",
    "example": "Input: 12 June 2026, 14:30\nISO: 2026-06-12T14:30:00\nUS: 06/12/2026 · UK: 12/06/2026\nUnix: 1781274600 (UTC)",
    "applications": [
      "Preparing dates for APIs and databases",
      "Avoiding US/UK date confusion",
      "Formatting dates for documents",
      "Debugging timestamps in logs"
    ],
    "faqs": [
      {
        "q": "Why use ISO 8601?",
        "a": "It sorts correctly as text and has no day/month ambiguity."
      },
      {
        "q": "Is the Unix timestamp in UTC?",
        "a": "Yes, timestamps count seconds since 1 January 1970 UTC."
      },
      {
        "q": "What is RFC 2822?",
        "a": "The date format used in email headers, like ‘Fri, 12 Jun 2026 14:30:00 +0000’."
      }
    ]
  }
};

export const dateARoutes = {
  "date-add-subtract-calculator": lazy(() => import("@/tools/DateAddSubtractCalculator")),
  "date-to-date-calculator": lazy(() => import("@/tools/DateToDateCalculator")),
  "business-date-calculator": lazy(() => import("@/tools/BusinessDateCalculator")),
  "age-in-days-calculator": lazy(() => import("@/tools/AgeInDaysCalculator")),
  "day-of-year-calculator": lazy(() => import("@/tools/DayOfYearCalculator")),
  "time-zone-converter": lazy(() => import("@/tools/TimeZoneConverter")),
  "weekday-calculator": lazy(() => import("@/tools/WeekdayCalculator")),
  "leap-year-calculator": lazy(() => import("@/tools/LeapYearCalculator")),
  "days-in-month-calculator": lazy(() => import("@/tools/DaysInMonthCalculator")),
  "date-format-converter": lazy(() => import("@/tools/DateFormatConverter")),
};
