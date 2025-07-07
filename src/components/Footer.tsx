import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Facebook, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: 'mohamedshehata182002@gmail.com',
      href: 'mailto:mohamedshehata182002@gmail.com'
    },
    {
      icon: <Phone size={18} />,
      text: '+20 106 718 0305',
      href: 'tel:+201067180305'
    },
    {
      icon: <MapPin size={18} />,
      text: 'Egypt',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/mohamedshehata18',
      color: 'hover:bg-[#0077B5]'
    },
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      href: 'https://github.com/shehata18',
      color: 'hover:bg-[#333]'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      href: 'https://www.facebook.com/shehata188/',
      color: 'hover:bg-[#1877F2]'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <img 
                  src="/my-logo.png" 
                  alt="Mohamed Shehata Logo" 
                  className="h-20 w-auto filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mohamed Shehata
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Laravel & WordPress Developer passionate about creating exceptional web experiences. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 bg-gray-800 rounded-lg text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 group`}
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 space-y-6"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-0.5 bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 space-y-6"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 6 }}
                  className="flex items-center space-x-3 text-gray-400 group"
                >
                  <span className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-all duration-300">
                    {info.icon}
                  </span>
                  {info.href !== '#' ? (
                    <a 
                      href={info.href}
                      className="hover:text-white transition-colors duration-200 flex items-center"
                    >
                      {info.text}
                      <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          {/* Top Border Gradient */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>

          <p className="text-gray-400 text-sm flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Mohamed Shehata. Made with</span>
            <Heart className="text-red-500 animate-pulse" size={16} />
            <span>in Egypt</span>
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;