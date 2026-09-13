import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AllTools from "./pages/AllTools";
import CategoryPage from "./pages/CategoryPage";
import ToolPage from "./pages/ToolPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tools" element={<AllTools />} />
            <Route path="/tools/:slug" element={<ToolPage />} />
            <Route path="/calculators" element={<CategoryPage />} />
            <Route path="/converters" element={<CategoryPage />} />
            <Route path="/text-tools" element={<CategoryPage />} />
            <Route path="/generators" element={<CategoryPage />} />
            <Route path="/student-tools" element={<CategoryPage />} />
            <Route path="/developer-tools" element={<CategoryPage />} />
            <Route path="/design-tools" element={<CategoryPage />} />
            <Route path="/finance" element={<CategoryPage />} />
            <Route path="/date-time" element={<CategoryPage />} />
            <Route path="/math-tools" element={<CategoryPage />} />
            <Route path="/productivity" element={<CategoryPage />} />
            <Route path="/writing-tools" element={<CategoryPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
