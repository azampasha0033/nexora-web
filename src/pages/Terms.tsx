import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service - Nexora LLC</title>
        <meta name="description" content="Terms of Service for Nexora LLC - Read our terms governing the use of our services." />
      </Helmet>

      <section className="relative py-16 overflow-hidden bg-nexora-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(220_25%_8%)_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: April 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">By accessing or using the website and services, you agree to be bound by these Terms of Service and our <a href="/privacy" className="text-nexora-primary hover:underline">Privacy Policy</a>. If you do not agree, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Services</h2>
              <p className="text-muted-foreground">We provide AI-powered communication automation, custom software development, web development, and digital solutions. All services are subject to application approval and applicable terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Responsibilities</h2>
              <p className="text-muted-foreground">You agree to provide accurate and complete information when using our services. You are responsible for maintaining the confidentiality of any account information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. SMS/Text Messaging Terms</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>By opting in, you consent to receive SMS/text messages.</li>
                <li>Message frequency varies based on your account activity and preferences.</li>
                <li>Message and data rates may apply depending on your carrier plan.</li>
                <li>Reply STOP to cancel at any time. Reply HELP for assistance.</li>
                <li>Consent to receive SMS is not required as a condition of purchasing any goods or services.</li>
                <li>Compatible carriers include but are not limited to AT&T, T-Mobile, Verizon, and Sprint.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Intellectual Property</h2>
              <p className="text-muted-foreground">All content, logos, and materials on this website are the property of the website owner and are protected by applicable intellectual property laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">We shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Governing Law</h2>
              <p className="text-muted-foreground">These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Changes to Terms</h2>
              <p className="text-muted-foreground">We reserve the right to modify these Terms at any time. Continued use of our services constitutes acceptance of updated terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Contact</h2>
              <p className="text-muted-foreground">For questions regarding these Terms, please reach out through our <a href="/contact" className="text-nexora-primary hover:underline">Contact page</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
