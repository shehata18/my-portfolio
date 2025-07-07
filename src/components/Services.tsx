import React from 'react';
import { motion } from 'framer-motion';
import { Server, WholeWord as Wordpress, Database, Code, Globe, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Server className="text-blue-600" size={40} />,
      title: "Laravel Development",
      description: "Building powerful, scalable web applications with Laravel's robust framework and modern architecture patterns",
      features: [
        "Custom web applications with clean, maintainable code",
        "Advanced API development with OAuth2 and JWT authentication",
        "High-performance database architecture and caching solutions",
        "Microservices and service-oriented architecture implementation"
      ],
      color: "blue"
    },
    {
      icon: <Wordpress className="text-purple-600" size={40} />,
      title: "WordPress Solutions",
      description: "Creating functional WordPress websites and simple e-commerce stores for small to medium businesses",
      features: [
        "Custom WordPress website setup and configuration",
        "Basic theme customization and styling",
        "Simple WooCommerce store setup",
        "Essential plugin integration and setup"
      ],
      color: "purple"
    },
    {
      icon: <Database className="text-green-600" size={40} />,
      title: "Database Solutions",
      description: "Architecting high-performance database solutions that scale with your business needs",
      features: [
        "Advanced database design with normalization and optimization",
        "Complex query optimization and performance tuning",
        "Seamless data migration and transformation strategies",
        "Real-time analytics and reporting solutions"
      ],
      color: "green"
    },
    {
      icon: <Code className="text-orange-600" size={40} />,
      title: "API Development",
      description: "Creating robust, secure, and scalable APIs that power modern web applications",
      features: [
        "RESTful and GraphQL API architecture and development",
        "Seamless third-party API integrations and webhooks",
        "Comprehensive API documentation with Swagger/OpenAPI",
        "Advanced security implementation with OAuth2 and rate limiting"
      ],
      color: "orange"
    },
    {
      icon: <Globe className="text-indigo-600" size={40} />,
      title: "Full-Stack Development",
      description: "Building complete web applications using Laravel's powerful Blade templating and traditional frontend technologies",
      features: [
        "Responsive frontend using HTML5, CSS3, and JavaScript",
        "Dynamic interfaces with jQuery and AJAX",
        "Laravel Blade templating for seamless frontend-backend integration",
        "Interactive UI components and form handling"
      ],
      color: "indigo"
    },
    {
      icon: <Wrench className="text-red-600" size={40} />,
      title: "Maintenance & Support",
      description: "Proactive maintenance and support services to keep your applications running smoothly",
      features: [
        "Continuous monitoring and performance optimization",
        "Security patches and vulnerability assessments",
        "Code refactoring and technical debt management",
        "24/7 emergency support and issue resolution"
      ],
      color: "red"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering exceptional web solutions with a focus on performance, security, and scalability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${service.color}-600 mt-2 flex-shrink-0`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you need a custom web application, API integration, or ongoing maintenance, I'm here to help turn your vision into reality.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;