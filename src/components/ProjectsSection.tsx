"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "MacMatch",
      description:
        "It is an e-commerce website which provides various types of electronic products with online services.",
      image: "/projects/MacMatch.png",
      technologies: [
        "React",
        "Redux",
        "JavaScript",
        "Redux-Thunk",
        "Chakra UI",
        "Material UI",
      ],
      githubUrl: "https://github.com/somesh9870/MacMatch",
      liveUrl: "https://macmatch.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      title: "HealthyWay",
      description:
        "Healthyway is a website that functions as a nutrition tracking tool to help users reach their health goals by monitoring their daily caloric intake and other relevant factors.",
      image: "/projects/HealthyWay.png",
      technologies: [
        "React",
        "Redux",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Mongoose",
        "MongoDB Atlas",
        "Chakra UI",
      ],
      githubUrl: "https://github.com/somesh9870/Healthy-way",
      liveUrl: "https://healty-way.vercel.app/",
      featured: true,
    },
    {
      id: 3,
      title: "PharmEasy",
      description:
        "PharmEasy is an online pharmacy store that allows customers to order prescription and over-the-counter medications and have them delivered to their doorstep.",
      image: "/projects/pharmeasy.png",
      technologies: ["HTML", "CSS", "JavaScript", "JSON server"],
      githubUrl: "https://github.com/somesh9870/Pharmeasy-Clone",
      liveUrl: "https://marspharmacy.netlify.app/",
      featured: false,
    },
    {
      id: 4,
      title: "Riddle Of Ruins",
      description:
        "A object finding game where one have to find hidden objects to earn points and move ahead to another level.",
      image: "/projects/game.png",
      technologies: [
        "React",
        "Redux",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Mongoose",
        "MongoDB Atlas",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/somesh9870/Game-Geniuses",
      liveUrl: "https://game-geniuses.vercel.app/",
      featured: false,
    },
    {
      id: 5,
      title: "Style Incore",
      description:
        "It is a fashion-forward apparel brand and style community which provides various types of clothing products with online services.",
      image: "/projects/styleIncore.png",
      technologies: ["React", "JavaScript", "Chakra UI"],
      githubUrl: "https://github.com/somesh9870/express",
      liveUrl: "https://express-rouge-seven.vercel.app/",
      featured: false,
    },
    {
      id: 6,
      title: "Intern Thrive",
      description:
        "It is a platform connecting Companies and potential employees in various sectors.",
      image: "/projects/internThrive.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/somesh9870/Intern-Thirve",
      liveUrl: "https://intern-thrive.netlify.app/",
      featured: false,
    },
    {
      id: 7,
      title: "Edith",
      description:
        "Edith is a real-life student course platform for Student of Versatile Technologies that offers a variety of functionalities, including the ability to take tests, set up games for students, write blogs, take note of student fees, and much more.",
      image: "/projects/versatile.png",
      technologies: [
        "React",
        "Redux",
        "Chakra UI",
        "Node.js",
        "Mongoose",
        "MongoDB Atlas",
        "Express",
        "JavaScript",
      ],
      githubUrl: "https://github.com/somesh9870/Versatile-Project",
      liveUrl: "https://versatile-backend.vercel.app/",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20">
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
              Featured <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, featuring full-stack applications,
              creative solutions, and innovative user experiences.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative group overflow-hidden rounded-2xl shadow-2xl"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                      <div className="text-6xl font-bold text-blue-600/20">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                      className="text-3xl font-bold"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                      className="text-muted-foreground text-lg leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="flex space-x-4"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-4">More Projects</h3>
              <p className="text-muted-foreground">
                Additional projects showcasing various technologies and creative
                solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-600/30">
                      {project.title.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <a
              href="https://github.com/somesh9870"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
