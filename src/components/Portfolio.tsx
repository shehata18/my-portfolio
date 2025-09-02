import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, Lock } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Aqar-guide Real Estate Dashboard",
      description: "A comprehensive real estate broker management system with advanced admin dashboard built using Laravel Filament, featuring complete property management, AI integration, and location services. The platform includes both a powerful admin interface and a RESTful API for mobile applications.",
      image: "/1.png",
      tech: ["Laravel", "Filament", "MySQL", "Google Maps API", "DeepSeek AI", "REST API", "BeOn OTP", "Flutter"],
      github: null,
      demo: null,
      isPrivate: true,
      category: "Laravel",
      features: [
        "Advanced Filament dashboard with real-time statistics and charts",
        "Complete broker and company management system",
        "Property management with Google Maps integration",
        "AI-powered chatbot using DeepSeek for customer support",
        "OTP authentication integration with BeOn",
        "RESTful API with optimized search and filtering",
        "Comprehensive location management (governorates & cities)",
        "Real-time analytics and reporting dashboard",
        "Facilities and unit types management",
        "Query optimization for high-performance searches"
      ]
    },
    {
      title: "Laravel Tasks API",
      description: "A comprehensive task management API built with Laravel, featuring user authentication, CRUD operations, and advanced filtering capabilities.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Laravel", "PHP", "MySQL", "JWT Auth", "REST API"],
      github: "https://github.com/shehata18/laravel-tasks-api",
      demo: "#",
      category: "Laravel",
      features: [
        "User authentication with JWT",
        "CRUD operations for tasks",
        "Advanced filtering and sorting",
        "API documentation with Swagger"
      ]
    },
    {
      title: "Food Ordering System",
      description: "A complete food ordering platform with admin panel, customer interface, and real-time order tracking built with Laravel.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/shehata18/food-ordering-system",
      demo: "#",
      category: "Laravel",
      features: [
        "Multi-role user system",
        "Real-time order tracking",
        "Admin dashboard with analytics"
      ]
    },
    {
      title: "Laravel Social Networking Website",
      description: "A feature-rich social networking platform built with Laravel, featuring real-time updates, media handling, advanced caching, and comprehensive REST API endpoints.",
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Laravel", "WebSocket", "Redis", "MySQL", "Pusher", "Blade", "REST API", "JWT"],
      github: "https://github.com/shehata18/laravel_news",
      demo: "#",
      category: "Full-Stack",
      features: [
        "RESTful API endpoints for mobile integration",
        "JWT authentication for API security",
        "Real-time updates using WebSocket/Pusher",
        "Advanced database relations and Redis caching",
        "Media handling and SEO optimization",
        "Custom middleware and API rate limiting"
      ]
    },
    {
      title: "Amgad Furniture Website",
      description: "Developed the complete backend API system for a furniture e-commerce platform, handling product management, authentication, and analytics.",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Django", "REST API", "Swagger", "JWT Auth"],
      github: "#",
      demo: "https://amgadfurniture.com/",
      category: "Backend Development",
      features: [
        "RESTful API with Django REST framework",
        "Multi-image and video upload system",
        "Advanced authentication and authorization",
        "Product and category management API",
        "Analytics dashboard with statistical data",
        "API documentation with Swagger"
      ]
    },
    {
      title: "Reach KSA Website",
      description: "A comprehensive corporate website with advanced admin dashboard using Laravel Filament, featuring content management, job board, and newsletter system.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Laravel", "Filament", "Next.js", "NGINX", "GitHub Actions", "REST API"],
      github: "#",
      demo: "https://reachksa.com/",
      category: "Laravel",
      features: [
        "Complete admin dashboard with Filament",
        "Job board with CV upload system",
        "Newsletter system with SMTP integration",
        "Real-time dashboard statistics",
        "CI/CD with GitHub Actions",
        "RESTful API for Next.js frontend"
      ]
    },
    {
      title: "Full-Stack E-commerce Website",
      description: "A comprehensive e-commerce platform with customer shopping interface and admin dashboard. Currently in active development with core features being implemented.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Laravel", "Blade", "Yajra Datatables", "AJAX", "MySQL", "Bootstrap", "jQuery"],
      github: "#",
      demo: "#",
      category: "Full-Stack",
      inProgress: true,
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and checkout system",
        "User authentication and profiles",
        "Admin dashboard for inventory & orders",
        "Real-time order tracking",
        "Payment gateway integration"
      ]
    },
    {
      title: "Drive5 Auto Accessories",
      description: "A premium e-commerce platform for luxury car accessories and customization services. Built for a Saudi Arabian company specializing in high-end automotive aesthetics and accessories.",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["WordPress", "WooCommerce", "Custom PHP", "MySQL", "JavaScript"],
      github: "#",
      demo: "https://drive5sa.com",
      category: "WordPress",
      features: [
        "Custom product catalog for car accessories",
        "Advanced product filtering by car model",
        "Appointment booking system",
        "Multi-language support (Arabic/English)",
        "Responsive design for all devices",
        "SEO optimization for Saudi market"
      ]
    }
  ];

  const categories = ["All", "Laravel", "WordPress", "Full-Stack"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") {
      return projects.filter(project => project.category !== "WordPress");
    }
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        
        {/* Floating circles */}
        <div className="absolute w-8 h-8 border-2 border-blue-400/20 rounded-full top-20 left-[20%] animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-12 h-12 border-2 border-indigo-400/20 rounded-full bottom-32 right-[15%] animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute w-6 h-6 border-2 border-blue-400/20 rounded-full top-1/3 right-[25%] animate-[float_15s_ease-in-out_infinite]"></div>
        
        {/* Floating squares */}
        <div className="absolute w-10 h-10 border-2 border-blue-400/20 rotate-45 top-[15%] right-[10%] animate-[float_10s_ease-in-out_infinite]"></div>
        <div className="absolute w-16 h-16 border-2 border-indigo-400/20 rotate-45 bottom-[20%] left-[5%] animate-[float_14s_ease-in-out_infinite]"></div>
        
        {/* Dots grid */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_2px,_transparent_2px)] bg-[length:30px_30px] opacity-50"></div>
        
        {/* Moving dots */}
        <div className="absolute w-2 h-2 bg-blue-400/40 rounded-full top-1/4 left-1/4 animate-ping"></div>
        <div className="absolute w-2 h-2 bg-indigo-400/40 rounded-full top-3/4 right-1/3 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        <div className="absolute w-2 h-2 bg-blue-400/40 rounded-full bottom-1/4 right-1/4 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        
        {/* Fading squares */}
        <div className="absolute w-20 h-20 border-2 border-blue-400/20 rotate-45 top-1/2 left-[45%] animate-[pulse_5s_ease-in-out_infinite]"></div>
        <div className="absolute w-14 h-14 border-2 border-indigo-400/20 rotate-45 bottom-[40%] right-[35%] animate-[pulse_7s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
              My Portfolio
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing my best work in Laravel, WordPress, and full-stack applications
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3 bg-gray-800/50 backdrop-blur-lg rounded-full p-2 shadow-xl border border-gray-700/50">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-700/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] w-full">
          {filteredProjects.map((project, index) => {
            const hasLongDescription = project.description.length > 200;
            const hasMoreFeatures = project.features.length > 4;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`break-inside-avoid mb-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-700/50 group`}
              >
                {project.inProgress && (
                  <div className="absolute top-4 left-4 z-10 bg-yellow-900/80 backdrop-blur-sm text-yellow-300 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-yellow-700/50">
                    <Clock size={14} className="animate-pulse" />
                    <span className="text-sm font-medium">In Progress</span>
                  </div>
                )}

                {/* Project Image */}
                <div className={`relative ${hasLongDescription ? 'h-64' : 'h-48'} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500/80 to-indigo-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-blue-400/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-6 ${hasMoreFeatures ? 'space-y-6' : 'space-y-4'}`}>
                  <h3 className={`${hasLongDescription ? 'text-2xl' : 'text-xl'} font-bold text-white group-hover:text-blue-400 transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-600/50 transition-colors duration-200 border border-gray-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-3 text-lg">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-2">
                    {project.isPrivate ? (
                      <div className="flex-1 flex items-center justify-center space-x-2 bg-gray-700/30 text-gray-400 px-4 py-2 rounded-xl text-sm font-medium">
                        <Lock size={16} />
                        <span>Private Project</span>
                      </div>
                    ) : (
                      <>
                        {project.demo && project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg text-sm font-medium group"
                      >
                        <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                        
                        {project.github && project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center space-x-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-xl hover:bg-gray-700/50 transition-all duration-300 text-sm font-medium group"
                      >
                        <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span>View Code</span>
                      </motion.a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create innovative web solutions. 
            Let's discuss your project and bring your ideas to life.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-10 py-4 rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 font-medium shadow-xl group"
          >
            <span className="flex items-center gap-2">
              Start a Project
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;