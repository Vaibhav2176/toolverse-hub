import { lazy } from "react";
import type { ToolMeta } from "@/config/tools";
import type { SeoContent } from "@/config/seoContent";

export const mathDTools: ToolMeta[] = [
  {
    "slug": "circle-calculator",
    "title": "Circle Calculator",
    "description": "Enter a circle’s radius, diameter, circumference or area and get all the other measurements.",
    "category": "math-tools",
    "emoji": "⭕",
    "keywords": [
      "circle calculator",
      "circumference calculator",
      "area of a circle",
      "radius from area"
    ],
    "isNew": true,
    "priority": "high",
    "popular": true
  },
  {
    "slug": "triangle-solver",
    "title": "Triangle Solver",
    "description": "Solve a triangle from three sides or two sides and the included angle: all sides, angles, perimeter and area.",
    "category": "math-tools",
    "emoji": "📐",
    "keywords": [
      "triangle solver",
      "triangle calculator",
      "law of cosines calculator",
      "sss sas triangle"
    ],
    "isNew": true
  },
  {
    "slug": "volume-shape-calculator",
    "title": "Volume Calculator",
    "description": "Calculate the volume of a cube, cuboid, sphere, cylinder, cone or pyramid with the formula shown.",
    "category": "math-tools",
    "emoji": "🧊",
    "keywords": [
      "volume calculator",
      "volume of cylinder",
      "volume of sphere",
      "cubic volume calculator"
    ],
    "isNew": true,
    "priority": "high"
  },
  {
    "slug": "surface-area-calculator",
    "title": "Surface Area Calculator",
    "description": "Find the total and lateral surface area of cubes, cuboids, spheres, cylinders, cones and pyramids.",
    "category": "math-tools",
    "emoji": "🎲",
    "keywords": [
      "surface area calculator",
      "surface area of cylinder",
      "lateral surface area",
      "surface area of cone"
    ],
    "isNew": true
  }
];

export const mathDSeo: Record<string, SeoContent> = {
  "circle-calculator": {
    "whatIs": "A circle calculator solves every main measurement of a circle from just one known value. Give it the radius, diameter, circumference or area, and it works out the rest using π. That is useful when you only know one dimension — the circumference of a tree trunk, say, or the area a sprinkler covers — and need the others.",
    "extraSeo": "Answers ‘radius from circumference’, ‘area of a circle with diameter’ and ‘circumference from area’.",
    "example": "Known radius r = 5 cm\nDiameter = 10 cm\nCircumference = 2π × 5 ≈ 31.42 cm\nArea = π × 5² ≈ 78.54 cm²",
    "applications": [
      "Measuring pipes, tables and wheels",
      "Garden and sprinkler coverage",
      "Homework and exam checks",
      "Material estimates for round objects"
    ],
    "faqs": [
      {
        "q": "What value of π is used?",
        "a": "JavaScript’s Math.PI, accurate to about 15 digits."
      },
      {
        "q": "How do I find radius from circumference?",
        "a": "Divide circumference by 2π."
      },
      {
        "q": "Are units converted?",
        "a": "No, results use the same unit you enter; area is in square units."
      }
    ],
    "formula": "d = 2r · C = 2πr · A = πr²\nr = C ÷ 2π · r = √(A ÷ π)"
  },
  "triangle-solver": {
    "whatIs": "A triangle solver finds every missing part of a triangle. Given three sides (SSS) it uses the law of cosines to find each angle; given two sides and the angle between them (SAS) it finds the third side first. It then reports perimeter and area (via Heron’s formula) and flags impossible inputs that break the triangle inequality.",
    "extraSeo": "Handles SSS and SAS cases, making it a law of cosines calculator and a Heron’s formula area tool.",
    "example": "SSS: a = 7, b = 8, c = 9\nC = arccos((49+64−81)/112) ≈ 73.40°\nPerimeter = 24 · s = 12\nArea = √(12·5·4·3) ≈ 26.83",
    "applications": [
      "Geometry and trigonometry homework",
      "Roof and truss measurements",
      "Land surveying estimates",
      "Checking CAD dimensions"
    ],
    "faqs": [
      {
        "q": "What is the triangle inequality?",
        "a": "Any two sides must add up to more than the third, or no triangle exists."
      },
      {
        "q": "Are angles in degrees?",
        "a": "Yes, input and output angles use degrees."
      },
      {
        "q": "Can it solve ASA or SSA?",
        "a": "This version supports SSS and SAS, which always give a unique triangle."
      }
    ],
    "formula": "c² = a² + b² − 2ab·cos C\nArea = √(s(s−a)(s−b)(s−c)), s = (a+b+c)/2"
  },
  "volume-shape-calculator": {
    "whatIs": "A volume calculator works out how much space a 3D shape occupies. Choose a cube, rectangular cuboid, sphere, cylinder, cone or square pyramid, enter its dimensions, and get the volume in cubic units with the formula used. It helps with tank capacities, concrete orders, packaging and school geometry.",
    "extraSeo": "Covers ‘volume of a cylinder’, ‘volume of a cone’ and ‘cubic metres of a box’ searches.",
    "example": "Cylinder: r = 0.5 m, h = 2 m\nV = π × 0.5² × 2 ≈ 1.571 m³ (≈ 1,571 litres)",
    "applications": [
      "Tank and container capacity",
      "Concrete and soil orders",
      "Packaging design",
      "Geometry homework"
    ],
    "faqs": [
      {
        "q": "How do I convert m³ to litres?",
        "a": "Multiply by 1,000."
      },
      {
        "q": "What units should I use?",
        "a": "Any, as long as all dimensions use the same unit."
      },
      {
        "q": "Why is a cone one third of a cylinder?",
        "a": "A cone with the same base and height holds exactly one third of the cylinder’s volume."
      }
    ],
    "formula": "Cube a³ · Cuboid l×w×h · Sphere 4/3πr³\nCylinder πr²h · Cone 1/3πr²h · Pyramid 1/3·b²·h"
  },
  "surface-area-calculator": {
    "whatIs": "A surface area calculator measures the total area covering a 3D shape — what you would need to paint, wrap or coat it. It also gives lateral area (the sides only, excluding top and bottom) where that distinction matters, such as labels around a can. Supported shapes are cube, cuboid, sphere, cylinder, cone and square pyramid.",
    "extraSeo": "Answers ‘surface area of a cylinder’, ‘paint needed for a box’ and ‘lateral area of a cone’.",
    "example": "Cylinder: r = 3 cm, h = 10 cm\nLateral = 2π×3×10 ≈ 188.50 cm²\nTotal = lateral + 2π×3² ≈ 245.04 cm²",
    "applications": [
      "Estimating paint or coating",
      "Packaging and label sizes",
      "Heat-loss calculations",
      "Geometry homework"
    ],
    "faqs": [
      {
        "q": "What is lateral surface area?",
        "a": "The area of the sides only, excluding the bases."
      },
      {
        "q": "What is slant height?",
        "a": "For a cone, the distance from the rim to the tip along the surface: √(r² + h²)."
      },
      {
        "q": "What units are results in?",
        "a": "Square units of whatever length unit you entered."
      }
    ],
    "formula": "Cube 6a² · Cuboid 2(lw+lh+wh) · Sphere 4πr²\nCylinder 2πr(r+h) · Cone πr(r+l), l = √(r²+h²)"
  }
};

export const mathDRoutes = {
  "circle-calculator": lazy(() => import("@/tools/CircleCalculator")),
  "triangle-solver": lazy(() => import("@/tools/TriangleSolver")),
  "volume-shape-calculator": lazy(() => import("@/tools/VolumeShapeCalculator")),
  "surface-area-calculator": lazy(() => import("@/tools/SurfaceAreaCalculator")),
};
