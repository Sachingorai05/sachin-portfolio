import {
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Layers3,
} from "lucide-react";
import { motion } from "motion/react";

function About() {
  const focusAreas = [
    {
      icon: <BrainCircuit size={24} />,
      title: "AI & Intelligent Systems",
      description:
        "Exploring AI-driven solutions and building practical applications that turn ideas into useful digital experiences.",
    },
    {
      icon: <Code2 size={24} />,
      title: "Full-Stack Development",
      description:
        "Developing responsive web applications with modern frontend and backend technologies.",
    },
    {
      icon: <Layers3 size={24} />,
      title: "Problem Solving",
      description:
        "Combining programming fundamentals, databases, networking, and software engineering to solve real-world problems.",
    },
  ];

  return (
    <section id="about" className="about-section">
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
            01 — About
          </span>

          <h2>
            Building with <span>curiosity.</span>
          </h2>

          <p>
            A developer who enjoys turning technology, ideas,
            and learning into practical digital experiences.
          </p>
        </motion.div>

        {/* About Layout */}
        <div className="about-layout">

          {/* About Introduction */}
          <motion.div
            className="about-introduction"
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="about-kicker">
              A little about me
            </p>

            <h3>
              I'm a Computer Science & Engineering student
              focused on
              <span> AI and modern web development.</span>
            </h3>

            <p>
              I enjoy learning how software works from the
              fundamentals to real-world applications. My
              interests span artificial intelligence,
              full-stack development, databases, networking,
              and building useful products.
            </p>

            <p>
              I'm continuously improving my skills by working
              on projects, experimenting with new technologies,
              and turning concepts into working solutions.
            </p>

            {/* About Actions */}
            <div className="about-actions">
  <a href="#contact" className="about-action-box">
    <span>Let's Connect</span>
    <ArrowUpRight size={17} />
  </a>

  <a
    href="/Sachin-Gorai-Resume.pdf"
    download="Sachin-Gorai-Resume.pdf"
    className="about-action-box"
  >
    <span>Download Resume</span>
    <ArrowUpRight size={17} />
  </a>
</div>
          </motion.div>

          {/* Focus Cards */}
          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <motion.article
                className="focus-card"
                key={area.title}
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
                <div className="focus-icon">
                  {area.icon}
                </div>

                <div>
                  <h4>{area.title}</h4>

                  <p>
                    {area.description}
                  </p>
                </div>

                <span className="focus-number">
                  0{index + 1}
                </span>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;