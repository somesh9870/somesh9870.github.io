"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Code,
  GraduationCap,
} from "lucide-react";

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Cosmofeed",
      location: "Gurugram, India",
      period: "Nov 2023 - Present",
      type: "Full-time",
      technologies: ["Next.js", "Node.js", "MongoDB", "OpenSearch", "Druid"],
      achievements: [
        "Architected and deployed an advanced Audience Management System using OpenSearch and MongoDB, improving audience segmentation speed by 40%",
        "Engineered a unified product listing API serving diverse content types, reducing query latency by 35%",
        "Led development of a customizable Super Profile system with flexible layouts, increasing user engagement by 25%",
        "Designed Lead Magnet feature with automated giveaways and lead capture, greatly increasing efficiency",
        "Developed comprehensive block-level analytics tracking, increasing conversion rates by 15%",
        "Spearheaded platform-wide optimizations improving overall system performance by 30%",
        "Collaborated with cross-functional teams contributing to 20% increase in user retention",
      ],
      current: true,
    },
    {
      id: 2,
      title: "Associate Software Developer",
      company: "Crudcook",
      location: "Chandigarh, India",
      period: "July 2023 - September 2023",
      type: "Full-time",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      achievements: [
        "Developed and documented scalable RESTful APIs using Swagger with authentication and rate limiting, boosting API reliability by 20%",
        "Built modular, component-based React frontend improving load times and UI responsiveness, leading to 15% increase in user engagement",
        "Enhanced error handling practices, reducing user-reported bugs by 30%",
      ],
      current: false,
    },
    {
      id: 3,
      title: "Full Stack Web Development Bootcamp",
      company: "Masai School",
      location: "Bengaluru, India",
      period: "July 2022 - March 2023",
      type: "Intensive Training",
      technologies: ["MERN Stack", "JavaScript", "React", "Node.js", "MongoDB"],
      achievements: [
        "Completed intensive 1200+ hours of hands-on coding in full-stack web development",
        "Built 7+ full-stack projects including e-commerce platforms, nutrition trackers, and interactive games",
        "Mastered modern web technologies: React, Node.js, Express.js, MongoDB, and REST APIs",
        "Developed strong problem-solving skills through data structures and algorithms practice",
        "Collaborated on team projects using Git, GitHub, and agile methodologies",
        "Transitioned from non-tech background to professional software development",
      ],
      current: false,
      isEducation: true,
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "2+",
      label: "Years Experience",
      color: "text-blue-600",
    },
    {
      icon: Building2,
      value: "2",
      label: "Companies",
      color: "text-slate-600 dark:text-slate-400",
    },
    {
      icon: Users,
      value: "100K+",
      label: "Users Served",
      color: "text-purple-600",
    },
    {
      icon: Code,
      value: "40%",
      label: "Performance Boost",
      color: "text-orange-600",
    },
  ];

  return (
    <section id="experience" className="py-20">
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
              Professional <span className="text-blue-600">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey in software development, from intensive learning to
              delivering scalable solutions for 100K+ users.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-background hidden md:block" />

                  {/* Experience Card */}
                  <div className="md:ml-16 bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-2xl font-bold text-foreground">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-200 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800">
                              Current
                            </span>
                          )}
                          {exp.isEducation && (
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-200 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800">
                              <GraduationCap className="w-3 h-3 inline mr-1" />
                              Training
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium text-blue-600">
                              {exp.company}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                          <span className="mx-2">•</span>
                          <span className="text-sm bg-muted px-2 py-1 rounded">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                        TECHNOLOGIES USED
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-100 text-slate-800 dark:bg-slate-800/50 dark:text-slate-200 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                        KEY ACHIEVEMENTS & RESPONSIBILITIES
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.5,
                              delay: 0.6 + index * 0.2 + achIndex * 0.1,
                            }}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-border">
              <h3 className="text-2xl font-semibold mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                With proven experience in scaling applications for 100K+ users
                and improving system performance by 30%+, I&apos;m excited to
                take on new challenges and contribute to innovative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/Somesh-Rawat-Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Download Resume
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-8 py-3 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  Let&apos;s Connect
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
