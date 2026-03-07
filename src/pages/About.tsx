import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const About = () => (
  <Layout>
    <div className="container py-8 max-w-3xl">
      <Breadcrumb items={[{ label: "About" }]} />
      <h1 className="text-3xl font-bold mb-4">About ToolVerse</h1>
      <div className="prose prose-sm text-muted-foreground space-y-4">
        <p>ToolVerse is a collection of free, browser-based online tools designed to help you with everyday calculations, conversions, text manipulation, and more.</p>
        <p>All tools run entirely in your browser — no data is sent to any server. Your privacy is our priority.</p>
        <h2 className="text-xl font-semibold text-foreground">Our Mission</h2>
        <p>To provide fast, free, and reliable online tools that anyone can use without signing up or installing anything.</p>
        <h2 className="text-xl font-semibold text-foreground">Features</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>30+ free tools and growing</li>
          <li>No registration required</li>
          <li>100% browser-based — your data stays private</li>
          <li>Mobile-friendly responsive design</li>
          <li>Fast and lightweight</li>
        </ul>
      </div>
    </div>
  </Layout>
);
export default About;
