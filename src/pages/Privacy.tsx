import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const Privacy = () => (
  <Layout>
    <div className="container py-8 max-w-3xl">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="prose prose-sm text-muted-foreground space-y-4">
        <p><strong>Last updated:</strong> March 2026</p>
        <h2 className="text-lg font-semibold text-foreground">Data Collection</h2>
        <p>ToolVerse does not collect, store, or transmit any personal data. All tools run entirely in your browser.</p>
        <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
        <p>We may use cookies for analytics and advertising purposes through third-party services like Google Analytics and Google AdSense.</p>
        <h2 className="text-lg font-semibold text-foreground">Third-Party Services</h2>
        <p>We may use Google AdSense for advertising, which may use cookies to serve ads based on your browsing history.</p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>If you have questions about this policy, please contact us through our Contact page.</p>
      </div>
    </div>
  </Layout>
);
export default Privacy;
