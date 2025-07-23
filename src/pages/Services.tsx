import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Code, Settings, ShoppingCart, FileText, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and TypeScript. We create responsive, fast, and user-friendly websites that drive business growth.",
      benefits: [
        "Responsive design for all devices",
        "SEO-optimized code structure",
        "Fast loading times and performance",
        "Modern frameworks and technologies",
        "Scalable architecture"
      ]
    },
    {
      icon: Settings,
      title: "Software Development",
      description: "End-to-end software solutions tailored to your business needs. From desktop applications to cloud-based systems, we deliver robust and reliable software.",
      benefits: [
        "Custom business logic implementation",
        "Cloud integration and deployment",
        "API development and integration",
        "Database design and optimization",
        "Ongoing maintenance and support"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Point-of-Sale Solutions",
      description: "Complete POS systems that streamline your business operations. Our solutions include inventory management, sales tracking, and customer management features.",
      benefits: [
        "Real-time inventory tracking",
        "Sales analytics and reporting",
        "Customer relationship management",
        "Multi-location support",
        "Secure payment processing"
      ]
    },
    {
      icon: FileText,
      title: "WordPress Development & Customization",
      description: "Professional WordPress websites with custom themes and plugins. We create content management systems that are easy to use and maintain.",
      benefits: [
        "Custom theme development",
        "Plugin development and customization",
        "WooCommerce integration",
        "Performance optimization",
        "Security hardening"
      ]
    },
    {
      icon: Palette,
      title: "Shopify Customization",
      description: "Tailored Shopify stores that convert visitors into customers. We customize themes, develop apps, and optimize your e-commerce platform for maximum sales.",
      benefits: [
        "Custom Shopify theme development",
        "App development and integration",
        "Conversion rate optimization",
        "Payment gateway setup",
        "Store migration services"
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-nexora-accent to-background">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions to empower your business growth and success
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-foreground">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-nexora-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to discuss your project requirements and get a customized solution that fits your business needs.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90">
              <Link to="/contact">Contact Us to Discuss Your Project</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;