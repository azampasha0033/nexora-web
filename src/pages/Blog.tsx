
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";

// Mock blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt: "Explore the latest trends in web development including AI integration, progressive web apps, and modern frameworks that are shaping the digital landscape.",
    author: "Muhammad Hamza Saleemi",
    publishedDate: "2025-01-20",
    slug: "future-of-web-development-2025",
    image: "/placeholder.svg",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Building Scalable E-commerce Solutions with Modern Technologies",
    excerpt: "Learn how to create robust e-commerce platforms using cutting-edge technologies and best practices for performance and scalability.",
    author: "Muhammad Naveed Anjum",
    publishedDate: "2025-01-18",
    slug: "scalable-ecommerce-solutions",
    image: "/placeholder.svg",
    category: "E-commerce"
  },
  {
    id: 3,
    title: "WordPress vs Custom Development: Making the Right Choice",
    excerpt: "A comprehensive comparison of WordPress and custom development solutions to help you make the best decision for your project.",
    author: "Muhammad Hamza Saleemi",
    publishedDate: "2025-01-15",
    slug: "wordpress-vs-custom-development",
    image: "/placeholder.svg",
    category: "WordPress"
  },
  {
    id: 4,
    title: "SEO Best Practices for 2025: A Complete Guide",
    excerpt: "Stay ahead of the competition with the latest SEO strategies and techniques that will boost your website's visibility and rankings.",
    author: "Muhammad Naveed Anjum",
    publishedDate: "2025-01-12",
    slug: "seo-best-practices-2025",
    image: "/placeholder.svg",
    category: "SEO"
  },
  {
    id: 5,
    title: "The Rise of AI-Powered Business Tools",
    excerpt: "Discover how artificial intelligence is transforming business operations and how you can leverage AI tools for improved productivity.",
    author: "Muhammad Hamza Saleemi",
    publishedDate: "2025-01-10",
    slug: "ai-powered-business-tools",
    image: "/placeholder.svg",
    category: "AI & Technology"
  },
  {
    id: 6,
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Understanding the importance of mobile-first design approach and how it impacts user experience and search rankings.",
    author: "Muhammad Naveed Anjum",
    publishedDate: "2025-01-08",
    slug: "mobile-first-design-importance",
    image: "/placeholder.svg",
    category: "Design"
  }
];

const Blog = () => {
  const postsPerPage = 6;
  const currentPage = 1;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Blog - Nexora LLC</title>
        <meta name="description" content="Stay updated with the latest insights on web development, technology trends, and digital solutions from Nexora LLC." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-nexora-accent to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and updates from the world of web development and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-nexora-primary to-nexora-secondary">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span className="bg-nexora-accent px-2 py-1 rounded text-nexora-primary font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.publishedDate)}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-nexora-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4">
            <Button 
              variant="outline" 
              disabled={currentPage === 1}
              className="flex items-center"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className="w-10"
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              disabled={currentPage === totalPages}
              className="flex items-center"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
