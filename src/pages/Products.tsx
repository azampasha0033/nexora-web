import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { FileText, Search, Type, Download, ExternalLink, Zap } from "lucide-react";

const Products = () => {
  const tools = [
    {
      icon: FileText,
      name: "PDF Tools",
      description: "Convert, merge, split, and manipulate PDF files effortlessly",
      features: ["PDF to Word conversion", "Merge multiple PDFs", "Split PDF pages", "Compress PDF files"]
    },
    {
      icon: Type,
      name: "Word Tools", 
      description: "Advanced document processing and conversion utilities",
      features: ["Word to PDF conversion", "Document formatting", "Text extraction", "File compression"]
    },
    {
      icon: Search,
      name: "SEO Tools",
      description: "Optimize your website's search engine performance",
      features: ["Keyword analysis", "Meta tag generator", "Site audit tools", "Ranking checker"]
    },
    {
      icon: Download,
      name: "Text Tools",
      description: "Powerful text processing and manipulation utilities",
      features: ["Text formatting", "Case conversion", "Word counter", "Text comparison"]
    }
  ];

  const roadmapItems = [
    "Image processing tools",
    "Advanced analytics dashboard", 
    "API access for developers",
    "Mobile app companion"
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-nexora-accent to-background">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                NexoraTool.com
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Free online utilities for PDF processing, document conversion, SEO optimization, and text manipulation. 
              All tools are completely free and require no registration.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 gap-2">
              <a href="https://nexoratool.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                Go to NexoraTool.com
              </a>
            </Button>
          </div>
        </section>

        {/* Tools Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Available Tool Suites</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive utilities designed to streamline your workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-nexora-primary rounded-full flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
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

        {/* Screenshots Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">See It in Action</h2>
              <p className="text-lg text-muted-foreground">
                Clean, intuitive interfaces designed for maximum productivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
                  alt="PDF Tools Interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-foreground mb-2">PDF Processing</h3>
                <p className="text-sm text-muted-foreground">Drag, drop, and process your PDF files instantly</p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="SEO Tools Interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-foreground mb-2">SEO Analytics</h3>
                <p className="text-sm text-muted-foreground">Comprehensive SEO analysis and recommendations</p>
              </div>

              <div className="bg-background rounded-lg p-6 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                  alt="Text Tools Interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-foreground mb-2">Text Processing</h3>
                <p className="text-sm text-muted-foreground">Advanced text manipulation and formatting tools</p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
              <p className="text-lg text-muted-foreground">
                We're constantly expanding our tool suite based on user feedback and emerging needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roadmapItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg border border-border">
                  <div className="w-2 h-2 bg-nexora-secondary rounded-full flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-nexora-primary to-nexora-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Using Our Free Tools Today
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              No registration required. All tools are completely free and ready to use.
            </p>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href="https://nexoratool.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                Visit NexoraTool.com
              </a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;