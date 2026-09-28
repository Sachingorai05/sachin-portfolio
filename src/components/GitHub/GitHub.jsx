import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  GitBranch,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

function GitHub() {
  const repositories = [
    {
      name: "AI-Powered College Knowledge Assistant",
      description:
        "An AI-powered college knowledge assistant designed to retrieve and answer questions from college-specific information using Retrieval-Augmented Generation.",
      technologies: [
        "Python",
        "RAG",
        "LangChain",
        "ChromaDB",
        "React",
      ],
      status: "Featured Repository",
      github:
        "https://github.com/Sachingorai05/AI-College-Knowledge-Assistant-RAG",
    },

    {
      name: "AI Customer Service Chatbot",
      description:
        "A Python-based customer service chatbot designed to handle common customer queries related to orders, refunds, shipping, payments, accounts, and support.",
      technologies: [
        "Python",
        "JSON",
        "Chatbot",
      ],
      status: "AI Project",
      github:
        "https://github.com/Sachingorai05/CUSTOMER-SERVICE-CHATBOT",
    },
  ];

  return (
    <section id="github" className="github-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
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
            07 — GitHub
          </span>

          <h2>
            Code, experiments &
            <span> ideas.</span>
          </h2>

          <p>
            A look at the projects and experiments I'm
            building while continuously improving my
            development skills.
          </p>
        </motion.div>

        {/* GitHub Profile Card */}
        <motion.div
          className="github-profile-card"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="github-profile-icon">
  <svg
    className="github-profile-brand-svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.2 7.68 10.69.56.1.76-.24.76-.54v-2.08c-3.12.68-3.78-1.32-3.78-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 1.87 2.78 1.33.1-.7.39-1.18.71-1.45-2.49-.28-5.11-1.25-5.11-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.28-5.13 5.55.4.35.75 1.04.75 2.1v3.11c0 .3.2.65.77.54a11.26 11.26 0 0 0 7.67-10.69C23.25 5.48 18.27.5 12 .5Z"
    />
  </svg>
</div>

          <div className="github-profile-content">
            <span>
              GitHub Profile
            </span>

            <h3>
              @Sachingorai05
            </h3>

            <p>
              Explore my repositories, projects, and
              ongoing experiments.
            </p>
          </div>

          <a
            href="https://github.com/Sachingorai05"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-button"
          >
            Visit Profile
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Repository Cards */}
        <div className="github-repositories">
          {repositories.map((repository, index) => (
            <motion.article
              className="github-repository-card"
              key={repository.name}
              initial={{
                opacity: 0,
                y: 30,
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
                y: -6,
              }}
            >
              {/* Repository Header */}
              <div className="github-repository-top">
                <div className="github-repository-icon">
                  <Code2 size={21} />
                </div>

                <span>
                  {repository.status}
                </span>
              </div>

              {/* Repository Name */}
              <h3>
                {repository.name}
              </h3>

              {/* Repository Description */}
              <p>
                {repository.description}
              </p>

              {/* Technologies */}
              <div className="github-repository-tech">
                {repository.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>

              {/* Repository Stats */}
              <div className="github-repository-meta">
                <span>
                  <GitBranch size={15} />
                  Repository
                </span>

                <span>
                  <Star size={15} />
                  GitHub
                </span>
              </div>

              {/* Repository Link */}
              <a
                href={repository.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-repository-link"
              >
                View Repository
                <ExternalLink size={15} />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="github-bottom"
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
            <span>
              Open source & continuous learning
            </span>

            <p>
              More projects and experiments are available
              on my GitHub profile.
            </p>
          </div>

          <a
            href="https://github.com/Sachingorai05"
            target="_blank"
            rel="noopener noreferrer"
            className="github-bottom-button"
          >
            Explore GitHub
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default GitHub;