import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const Contact = () => (
  <Layout>
    <div className="container py-8 max-w-3xl">
      <Breadcrumb items={[{ label: "Contact" }]} />
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-muted-foreground mb-6">Have a question, suggestion, or bug report? We'd love to hear from you.</p>
      <div className="bg-card border border-border rounded-xl p-6 space-y-4 max-w-md">
        <div><label className="text-sm font-medium block mb-1">Name</label><input placeholder="Your name" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" /></div>
        <div><label className="text-sm font-medium block mb-1">Email</label><input type="email" placeholder="your@email.com" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary" /></div>
        <div><label className="text-sm font-medium block mb-1">Message</label><textarea rows={4} placeholder="Your message..." className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary resize-y" /></div>
        <button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Send Message</button>
      </div>
    </div>
  </Layout>
);
export default Contact;
