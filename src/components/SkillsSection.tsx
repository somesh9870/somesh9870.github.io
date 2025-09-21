"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Palette,
  GitBranch,
  Globe,
  Zap,
} from "lucide-react";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 88 },
        { name: "Next.js", level: 82 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Redux", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 78 },
        { name: "Chakra UI", level: 85 },
        { name: "Material UI", level: 82 },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Mongoose", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "JSON Server", level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 92 },
        { name: "Postman", level: 80 },
        { name: "Thunder Client", level: 75 },
        { name: "Vercel", level: 82 },
        { name: "Netlify", level: 80 },
      ],
    },
    {
      icon: Palette,
      title: "Programming & Others",
      skills: [
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 78 },
        { name: "Problem Solving", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Responsive Design", level: 88 },
        { name: "Team Collaboration", level: 90 },
      ],
    },
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "Thunder Client",
    "Chrome DevTools",
    "Vercel",
    "Netlify",
    "MongoDB Atlas",
    "Redux DevTools",
  ];

  const achievements = [
    {
      icon: Zap,
      title: "Full Stack Projects",
      description:
        "Successfully built and deployed 7+ full-stack web applications using MERN stack",
    },
    {
      icon: Globe,
      title: "E-commerce Expertise",
      description:
        "Developed multiple e-commerce platforms with payment integration and inventory management",
    },
    {
      icon: GitBranch,
      title: "Team Collaboration",
      description:
        "Experienced in collaborative development using Git and agile methodologies",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Specialized in creating mobile-first, responsive web applications with modern UI frameworks",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
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
              Skills & <span className="text-blue-600">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that
              I use to bring ideas to life.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1,
                              delay:
                                categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            }}
                            className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-8"
          >
            <h3 className="text-2xl font-semibold">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-accent transition-colors duration-200 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Learning & Growth */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Technology evolves rapidly, and I&apos;m committed to staying at
                the forefront. Currently exploring advanced Next.js features,
                cloud technologies, and performance optimization techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Next.js 15", "TypeScript", "GraphQL", "Docker", "AWS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-200 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-800"
                    >
                      Currently Learning: {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
