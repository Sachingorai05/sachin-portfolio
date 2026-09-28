import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

function Projects() {
  const projects = [
    {
      title: "AI-Powered College Knowledge Assistant",
      category: "AI / RAG",
      description:
        "An intelligent college knowledge assistant designed to answer student queries using Retrieval-Augmented Generation and college-specific information.",
      technologies: [
        "Python",
        "RAG",
        "LangChain",
        "ChromaDB",
        "React",
      ],
      featured: true,
      github:
        "https://github.com/Sachingorai05/AI-College-Knowledge-Assistant-RAG",
      demo: "",
    },

    {
      title: "AI Customer Service Chatbot",
      category: "AI / Chatbot",
      description:
        "A Python-based customer service chatbot that handles common queries related to orders, refunds, shipping, payments, accounts, and customer support.",
      technologies: [
        "Python",
        "JSON",
        "VS Code",
      ],
      featured: false,
      github:
        "https://github.com/Sachingorai05/CUSTOMER-SERVICE-CHATBOT",
      demo: "",
    },

    {
      title: "Full-Stack Web Application",
      category: "Web Development",
      description:
        "A responsive web application built using modern frontend technologies with a focus on usability, responsive design, and practical functionality.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
      ],
      featured: false,
      github: "",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="section-label">
            03 — Projects
          </span>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p>
            A selection of projects where I have explored AI,
            web development, and practical software solutions.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.featured
                  ? "project-card-featured"
                  : ""
              }`}
              key={project.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
            >
              {/* Project Visual */}
              <div className="project-visual">
                <div className="project-glow" />

                <div className="project-visual-content">
                  <Sparkles size={30} />

                  <span>
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <span className="featured-badge">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">

                {/* Project Meta */}
                <div className="project-meta">
                  <span>
                    0{index + 1}
                  </span>

                  <span>
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>

                {/* Actions */}
                <div className="project-actions">

                  {/* GitHub Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg
  className="project-github-svg"
  viewBox="0 0 24 24"
  aria-hidden="true"
>
  <path
    fill="currentColor"
    d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.2 7.68 10.69.56.1.76-.24.76-.54v-2.08c-3.12.68-3.78-1.32-3.78-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 1.87 2.78 1.33.1-.7.39-1.18.71-1.45-2.49-.28-5.11-1.25-5.11-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.28-5.13 5.55.4.35.75 1.04.75 2.1v3.11c0 .3.2.65.77.54a11.26 11.26 0 0 0 7.67-10.69C23.25 5.48 18.27.5 12 .5Z"
  />
</svg>

GitHub
                    </a>
                  )}

                  {/* Live Demo Button */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-secondary"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}

                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="projects-footer"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div>
            <span className="projects-footer-label">
              More on GitHub
            </span>

            <p>
              Explore my repositories and see what I'm
              currently building.
            </p>
          </div>

          <a
            href="https://github.com/Sachingorai05"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            Visit GitHub
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;