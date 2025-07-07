import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Puzzle, Shield } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Laravel', level: 90 },
    { name: 'PHP', level: 85 },
    { name: 'WordPress', level: 88 },
    { name: 'MySQL', level: 82 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Git', level: 85 },
  ];

  const workProcess = [
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500" />,
      title: "Discovery & Planning",
      description: "Deep understanding of requirements and creating detailed project roadmap",
      gradient: "from-amber-50 to-orange-50"
    },
    {
      icon: <Puzzle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />,
      title: "Smart Solutions",
      description: "Architecting efficient and scalable solutions using modern technologies",
      gradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
      title: "Clean Development",
      description: "Writing maintainable code following best practices and design patterns",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />,
      title: "Quality Assurance",
      description: "Rigorous testing and security measures for robust applications",
      gradient: "from-purple-50 to-fuchsia-50"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate web developer with expertise in Backend Development using php Laravel and WordPress, 
            dedicated to creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Computer Science Graduate & Web Developer
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a dedicated web developer with a Bachelor's degree in Computer Science from 
              Damietta University. With over 2 years of professional experience, I specialize 
              in creating robust web applications using Laravel and developing custom WordPress solutions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My expertise spans from backend API development to frontend user interfaces, 
              database design, and system architecture. I'm passionate about writing clean, 
              maintainable code and staying updated with the latest web technologies.
            </p>

            {/* Work Process Section */}
            <div className="pt-8">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                My Work Process
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {workProcess.map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${process.gradient} p-4 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300`}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-white p-2 sm:p-3 rounded-xl shadow-sm flex-shrink-0">
                        {process.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                          {process.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
              <h4 className="font-bold text-gray-900 mb-2">Education</h4>
              <p className="text-gray-600">
                <strong>Bachelorʼs degree in Computer Science, GPA: 3.03/4</strong><br />
                Damietta University (Egypt)<br />
                <span className="text-sm text-gray-500">2020 - 2024</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;