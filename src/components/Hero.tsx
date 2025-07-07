import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Array of shape configurations for background animation
  const shapes = [
    {
      type: 'circle',
      size: '120px',
      color: '#60A5FA10',
      left: '5%',
      top: '20%',
      animationDuration: 20,
    },
    {
      type: 'square',
      size: '80px',
      color: '#818CF810',
      right: '10%',
      top: '30%',
      animationDuration: 25,
    },
    {
      type: 'triangle',
      size: '100px',
      color: '#A78BFA10',
      left: '15%',
      bottom: '20%',
      animationDuration: 22,
    },
    {
      type: 'donut',
      size: '150px',
      color: '#60A5FA10',
      right: '20%',
      bottom: '15%',
      animationDuration: 28,
    },
    {
      type: 'cross',
      size: '90px',
      color: '#818CF810',
      left: '40%',
      top: '15%',
      animationDuration: 24,
    }
  ];

  // Generate grid dots
  const gridDots = Array.from({ length: 50 }, (_, i) => {
    const row = Math.floor(i / 10);
    const col = i % 10;
    return {
      x: `${col * 10}%`,
      y: `${row * 10}%`,
      delay: (row + col) * 0.1,
    };
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient with animated mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>

      {/* Animated Grid Dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl mx-auto">
            {gridDots.map((dot, index) => (
              <motion.div
                key={`dot-${index}`}
                className="absolute w-1 h-1 rounded-full bg-blue-200/20"
                style={{
                  left: dot.x,
                  top: dot.y,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: dot.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            right: shape.right,
            top: shape.top,
            bottom: shape.bottom,
            background: shape.type === 'circle' ? shape.color : 'transparent',
            borderRadius: shape.type === 'circle' ? '50%' : '0',
            border: shape.type === 'square' ? `2px solid ${shape.color}` : 'none',
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            ...(shape.type === 'donut' && {
              border: `8px solid ${shape.color}`,
              borderRadius: '50%',
            }),
            ...(shape.type === 'cross' && {
              background: shape.color,
              clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)',
            }),
          }}
          animate={{
            y: ['0%', '20%', '0%'],
            x: ['0%', '10%', '0%'],
            rotate: [0, shape.type === 'cross' ? 180 : 360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.animationDuration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Wave Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="grid grid-cols-10 gap-8 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
          >
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: (i % 10) * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              width: '600px',
              height: '600px',
              left: `${30 + i * 30}%`,
              top: `${20 + i * 20}%`,
              background: i === 0 ? '#60A5FA30' : i === 1 ? '#818CF830' : '#A78BFA30',
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div className="space-y-10">
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <div className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium inline-flex items-center gap-2 hover:bg-blue-200 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for freelance work
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight"
              >
                Backend Laravel
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Developer
                </span>
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
              >
                Crafting robust web applications and dynamic websites with 2+ years of experience. 
                Specializing in Laravel backend development and WordPress customization.
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 text-sm text-gray-600"
            >
              <a 
                href="mailto:mohamedshehata182002@gmail.com" 
                className="group flex items-center space-x-2 hover:text-blue-600 transition-all duration-300"
              >
                <div className="relative p-2 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                  <Mail size={16} className="group-hover:stroke-blue-600 transition-colors" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  mohamedshehata182002@gmail.com
                </span>
              </a>
              <a 
                href="tel:+201067180305" 
                className="group flex items-center space-x-2 hover:text-blue-600 transition-all duration-300"
              >
                <div className="relative p-2 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                  <Phone size={16} className="group-hover:stroke-blue-600 transition-colors" />
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  +20 106 718 0305
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex space-x-4"
            >
              <a
                href="https://linkedin.com/in/mohamedshehata18"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="text-gray-400 group-hover:text-blue-600 transition-colors" size={24} />
              </a>
              <a
                href="https://github.com/shehata18"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="text-gray-400 group-hover:text-gray-800 transition-colors" size={24} />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <span className="relative flex items-center justify-center gap-2 font-medium">
                  Get In Touch
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#portfolio"
                className="group relative px-8 py-4 bg-white text-blue-600 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 w-0 bg-blue-50 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center justify-center gap-2 font-medium">
                  View My Work
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{
                  rotate: [6, 8, 6],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl"
              />
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 mix-blend-overlay"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <img
                    src="MyPhoto.jpg"
                    alt="Mohamed Shehata"
                    className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center space-y-2 text-gray-400 cursor-pointer hover:text-blue-600 transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;