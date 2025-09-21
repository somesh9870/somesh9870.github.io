"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Expert in modern web technologies including React, Next.js, Node.js, and cloud platforms.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces with attention to user experience and accessibility.",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Building fast, scalable applications with best practices for performance and SEO.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Experienced in agile methodologies and collaborative development environments.",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Users Served", value: "100K+" },
    { label: "Technologies Mastered", value: "15+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aspiring Full Stack Developer (MERN) with expertise in coding,
              data structures & algorithms, and modern web development.
              Passionate about creating innovative solutions that make a
              difference.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I started my journey in web development with a curiosity for
                  how things work behind the scenes. What began as learning HTML
                  and CSS quickly evolved into a passion for full-stack
                  development and creating digital solutions that solve
                  real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, I specialize in the MERN stack (MongoDB, Express.js,
                  React, Node.js) and have experience building e-commerce
                  platforms, nutrition tracking tools, online pharmacies, and
                  interactive games. I believe in writing clean, maintainable
                  code and creating user experiences that are both beautiful and
                  functional.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, working on personal projects, or enhancing my
                  problem-solving skills through data structures and algorithms
                  practice.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 rounded-lg bg-card border border-border"
                  >
                    <div className="text-3xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">What I Do</h3>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-border">
              <h3 className="text-2xl font-semibold mb-4">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I&apos;m always excited to take on new challenges and
                collaborate on innovative projects. Let&apos;s create something
                amazing together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
