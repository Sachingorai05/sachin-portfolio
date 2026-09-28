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
            <span>GH</span>
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