import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const Terms = () => (
  <Layout>
    <div className="container py-8 max-w-3xl">
      <Breadcrumb items={[{ label: "Terms of Service" }]} />
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <div className="prose prose-sm text-muted-foreground space-y-4">
        <p><strong>Last updated:</strong> March 2026</p>
        <h2 className="text-lg font-semibold text-foreground">Acceptance of Terms</h2>
        <p>By using ToolVerse, you agree to these terms. If you disagree, please do not use our services.</p>
        <h2 className="text-lg font-semibold text-foreground">Use of Tools</h2>
        <p>All tools are provided "as is" for informational and educational purposes. We do not guarantee accuracy for critical calculations.</p>
        <h2 className="text-lg font-semibold text-foreground">Limitation of Liability</h2>
        <p>ToolVerse is not liable for any damages arising from the use of our tools. Always verify important calculations independently.</p>
        <h2 className="text-lg font-semibold text-foreground">Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use constitutes acceptance of updated terms.</p>
      </div>
    </div>
  </Layout>
);
export default Terms;
