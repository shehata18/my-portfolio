import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Linkedin, Github, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/mohamedshehata182002@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: formData.message,
          _subject: 'New Contact Form Submission',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      title: "Email",
      value: "mohamedshehata182002@gmail.com",
      link: "mailto:mohamedshehata182002@gmail.com"
    },
    {
      icon: <Phone className="text-green-500" size={24} />,
      title: "Phone",
      value: "+20 106 718 0305",
      link: "tel:+201067180305"
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      title: "Location",
      value: "Cairo, Egypt",
      link: "#"
    },
    {
      icon: <Clock className="text-purple-500" size={24} />,
      title: "Response Time",
      value: "Within 24 hours",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/mohamedshehata18",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/shehata18",
      label: "GitHub",
      color: "hover:text-gray-900"
    },
    {
      icon: <Facebook size={24} />,
      href: "https://www.facebook.com/shehata188/",
      label: "Facebook",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-blue-50 rounded-full blur-3xl -top-32 -left-32 sm:-top-48 sm:-left-48 opacity-50"></div>
        <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-purple-50 rounded-full blur-3xl -bottom-32 -right-32 sm:-bottom-48 sm:-right-48 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="bg-blue-50 rounded-full p-2 sm:p-3">
              <Mail size={24} className="text-blue-500 sm:hidden" />
              <Mail size={32} className="text-blue-500 hidden sm:block" />
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Have a project in mind? Let's discuss how we can bring your ideas to life with modern web solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 lg:col-span-2 space-y-6 sm:space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                      <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 text-sm sm:text-base">{info.title}</h4>
                        {info.link !== "#" ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm sm:text-base break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-600 text-sm sm:text-base">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Connect With Me</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 sm:p-3 rounded-full bg-gray-50 text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
                      whileHover={{ y: -3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 lg:col-span-3"
          >
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  >
                    <option value="">Select project type</option>
                    <option value="laravel">Laravel Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="api">API Development</option>
                    <option value="fullstack">Full-Stack Development</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Please describe your project requirements, timeline, and any specific features you need..."
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-xs sm:text-sm text-center">{error}</p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={18} className="sm:w-5 sm:h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={18} className="sm:w-5 sm:h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </motion.button>

                <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  I'll get back to you within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;