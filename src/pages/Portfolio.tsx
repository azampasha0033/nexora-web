import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "POS", "WordPress", "Shopify"];

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      category: "Web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      outcome: "Increased online sales by 150% with modern React-based platform."
    },
    {
      id: 2,
      name: "Restaurant POS System",
      category: "POS",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
      outcome: "Streamlined operations and reduced order processing time by 40%."
    },
    {
      id: 3,
      name: "Corporate WordPress Site",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      outcome: "Enhanced SEO rankings and improved user engagement by 65%."
    },
    {
      id: 4,
      name: "Fashion Shopify Store",
      category: "Shopify",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      outcome: "Custom theme increased conversion rate by 85%."
    },
    {
      id: 5,
      name: "SaaS Web Application",
      category: "Web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      outcome: "Delivered scalable platform serving 10,000+ active users."
    },
    {
      id: 6,
      name: "Retail Management System",
      category: "POS",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
      outcome: "Integrated inventory management reduced stock discrepancies by 90%."
    },
    {
      id: 7,
      name: "Blog & Content Platform",
      category: "WordPress",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696",
      outcome: "Custom CMS improved content management efficiency by 70%."
    },
    {
      id: 8,
      name: "Dropshipping Store",
      category: "Shopify",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      outcome: "Automated workflows increased order fulfillment speed by 200%."
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-nexora-accent to-background">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our successful projects and the results we've delivered for clients across various industries
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter 
                    ? "bg-gradient-to-r from-nexora-primary to-nexora-secondary" 
                    : ""
                  }
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                      <Button size="sm" variant="secondary" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-nexora-primary text-white px-2 py-1 rounded text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.outcome}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90">
              <a href="/contact">Start Your Project Today</a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;