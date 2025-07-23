
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

// Mock blog post data - in a real app, this would come from a CMS or API
const blogPost = {
  id: 1,
  title: "The Future of Web Development: Trends to Watch in 2025",
  content: `
    <h2>Introduction</h2>
    <p>The web development landscape is constantly evolving, and 2025 promises to bring exciting new trends and technologies that will shape how we build digital experiences. As we move forward, developers and businesses need to stay ahead of these trends to remain competitive and provide exceptional user experiences.</p>
    
    <h2>AI Integration in Web Development</h2>
    <p>Artificial Intelligence is no longer just a buzzword – it's becoming an integral part of web development. From AI-powered chatbots to personalized content recommendations, AI is transforming how users interact with websites.</p>
    
    <h3>Key AI Applications:</h3>
    <ul>
      <li>Automated testing and quality assurance</li>
      <li>Intelligent content generation</li>
      <li>Predictive analytics for user behavior</li>
      <li>Enhanced security through anomaly detection</li>
    </ul>
    
    <h2>Progressive Web Apps (PWAs)</h2>
    <p>Progressive Web Apps continue to gain momentum as they bridge the gap between web and mobile applications. PWAs offer native app-like experiences while maintaining the accessibility and reach of web applications.</p>
    
    <h2>Modern JavaScript Frameworks</h2>
    <p>The JavaScript ecosystem continues to evolve with new frameworks and libraries that make development faster and more efficient. React, Vue.js, and Angular remain popular choices, while newer frameworks like Svelte and Solid.js are gaining traction.</p>
    
    <h2>WebAssembly (WASM)</h2>
    <p>WebAssembly is revolutionizing web performance by allowing developers to run high-performance code in the browser. This technology enables complex applications like games, video editors, and scientific simulations to run efficiently on the web.</p>
    
    <h2>Serverless Architecture</h2>
    <p>Serverless computing is becoming increasingly popular for web applications, offering scalability, cost-effectiveness, and reduced operational overhead. Functions-as-a-Service (FaaS) platforms like AWS Lambda and Vercel Functions are making it easier than ever to build and deploy serverless applications.</p>
    
    <h2>Conclusion</h2>
    <p>The future of web development is bright and full of opportunities. By staying informed about these trends and continuously learning new technologies, developers can build better, more efficient, and more engaging web experiences. At Nexora, we're committed to leveraging these cutting-edge technologies to deliver exceptional results for our clients.</p>
  `,
  author: "Muhammad Hamza Saleemi",
  publishedDate: "2025-01-20",
  image: "/placeholder.svg",
  category: "Web Development"
};

const BlogPost = () => {
  const { slug } = useParams();
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(blogPost.title);

  return (
    <Layout>
      <Helmet>
        <title>{blogPost.title} - Nexora LLC Blog</title>
        <meta name="description" content="The web development landscape is constantly evolving, and 2025 promises to bring exciting new trends and technologies..." />
      </Helmet>
      
      <div className="bg-gradient-to-b from-nexora-accent to-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-nexora-primary to-nexora-secondary">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <CardContent className="p-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-4">
                  <span className="bg-nexora-accent px-3 py-1 rounded-full text-nexora-primary font-medium">
                    {blogPost.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(blogPost.publishedDate)}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blogPost.author}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-6 text-foreground">
                {blogPost.title}
              </h1>

              <div className="flex items-center justify-between mb-8 pb-6 border-b">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Share this article:</span>
                  <div className="flex space-x-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div 
                className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-ul:my-4 prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-r from-nexora-primary/10 to-nexora-secondary/10">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Ready to Build Your Next Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help you leverage these cutting-edge technologies for your business.
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-nexora-primary to-nexora-secondary hover:opacity-90">
                  Get a Free Quote
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
