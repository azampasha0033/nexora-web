import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Code, Settings, ShoppingCart, FileText, Palette, ExternalLink, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom responsive websites and web applications built with modern technologies"
    },
    {
      icon: Settings,
      title: "Software Development",
      description: "End-to-end software solutions tailored to your specific business requirements"
    },
    {
      icon: ShoppingCart,
      title: "Point-of-Sale Solutions",
      description: "Complete POS systems with inventory management and analytics features"
    },
    {
      icon: FileText,
      title: "WordPress Development & Customization",
      description: "Professional WordPress sites with custom themes and advanced functionality"
    },
    {
      icon: Palette,
      title: "Shopify Customization",
      description: "Tailored Shopify stores optimized for conversions and user experience"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nexora-accent via-background to-nexora-accent/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Empowering Your{" "}
              <span className="bg-gradient-to-r from-nexora-primary to-nexora-secondary bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Transform your business with innovative web development, software solutions, and cutting-edge technology. 
              From concept to deployment, we deliver excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 text-lg px-8 py-6">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 gap-2">
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions to power your business growth and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-nexora-primary to-nexora-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Products Spotlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative tools and platforms that we've built and maintain
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* NexoraTool Product */}
            <Card className="overflow-hidden border-2 border-nexora-primary/20 hover:border-nexora-primary/40 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gradient-to-br from-nexora-primary to-nexora-secondary flex items-center justify-center">
                    <div className="text-center text-white">
                      <Zap className="h-16 w-16 mx-auto mb-4" />
                      <div className="text-2xl font-bold">NexoraTool</div>
                      <div className="text-sm opacity-90">Free Online Tools</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">NexoraTool.com</h3>
                    <span className="bg-nexora-primary text-white px-2 py-1 rounded text-xs font-medium">FREE</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Your complete suite of free online utilities - PDF processing, Word conversion, text manipulation, 
                    and SEO tools. No registration required, completely free to use.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <FileText className="h-6 w-6 text-nexora-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">PDF Tools</div>
                    </div>
                    <div className="text-center">
                      <FileText className="h-6 w-6 text-nexora-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">Word Tools</div>
                    </div>
                    <div className="text-center">
                      <Code className="h-6 w-6 text-nexora-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">Text Tools</div>
                    </div>
                    <div className="text-center">
                      <Settings className="h-6 w-6 text-nexora-primary mx-auto mb-2" />
                      <div className="text-sm font-medium">SEO Tools</div>
                    </div>
                  </div>

                  <Button asChild className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90 gap-2">
                    <a href="https://nexoratool.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit NexoraTool.com
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* WhatsApp Automation Product */}
            <Card className="overflow-hidden border-2 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="h-16 w-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.498"/>
                      </svg>
                      <div className="text-2xl font-bold">ChatAsBot</div>
                      <div className="text-sm opacity-90">WhatsApp Automation</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">ChatAsBot.com</h3>
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">AI POWERED</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Advanced WhatsApp automation platform for businesses. Automate customer support, 
                    lead generation, and communication workflows with intelligent chatbots.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <svg className="h-6 w-6 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <div className="text-sm font-medium">Auto Replies</div>
                    </div>
                    <div className="text-center">
                      <svg className="h-6 w-6 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div className="text-sm font-medium">Lead Gen</div>
                    </div>
                    <div className="text-center">
                      <svg className="h-6 w-6 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="text-sm font-medium">Analytics</div>
                    </div>
                    <div className="text-center">
                      <svg className="h-6 w-6 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <div className="text-sm font-medium">Workflows</div>
                    </div>
                  </div>

                  <Button asChild className="bg-gradient-to-r from-green-600 to-green-500 hover:opacity-90 gap-2">
                    <a href="https://chatasbot.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Visit ChatAsBot.com
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Project */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our latest successful project delivery
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                    alt="E-commerce Platform Dashboard"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-nexora-primary text-white px-3 py-1 rounded text-sm font-medium">Web Development</span>
                    <span className="bg-nexora-secondary text-white px-3 py-1 rounded text-sm font-medium">E-commerce</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Modern E-Commerce Platform
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    A complete e-commerce solution built with React and Node.js, featuring real-time inventory management, 
                    advanced analytics, and seamless payment integration. The platform achieved a 150% increase in online 
                    sales within the first quarter of launch.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-nexora-primary">150%</div>
                      <div className="text-sm text-muted-foreground">Sales Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-nexora-primary">40%</div>
                      <div className="text-sm text-muted-foreground">Faster Load Times</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-nexora-primary">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-nexora-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>

                  <Button asChild className="gap-2" variant="outline">
                    <Link to="/portfolio">
                      View More Projects
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nexora-primary to-nexora-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with our innovative solutions. 
            Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-nexora-primary text-lg px-8 py-6 gap-2">
              <a href="tel:+923090230074">
                Call Now: +92 309 023 0074
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;