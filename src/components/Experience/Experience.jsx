import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

function Experience() {
  const experiences = [
    {
      type: "Internship",
      role: "MERN Stack Developer Intern",
      company: "Codectechnologies",
      period: "Apr 2026 — May 2026",
      duration: "1 Month",
      icon: <Code2 size={22} />,
      description:
        "Worked on the fundamentals of modern full-stack web development while exploring the MERN stack and development workflow.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "JavaScript",
        "Git",
        "GitHub",
      ],
    },

    {
      type: "Internship",
      role: "AI Intern",
      company: "Codectechnologies",
      period: "2026",
      duration: "Internship",
      icon: <Sparkles size={22} />,
      description:
        "Explored practical applications of artificial intelligence and machine learning by working on project-based AI tasks.",
      technologies: [
        "Python",
        "AI",
        "Machine Learning",
        "NLP",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="experience-section"
    >
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
            04 — Experience
          </span>

          <h2>
            Learning by <span>building.</span>
          </h2>

          <p>
            Experiences that have helped me develop practical
            skills and understand how technology is applied to
            real-world problems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="experience-timeline">

          {/* Timeline Line */}
          <div className="timeline-line" />

          {experiences.map((experience, index) => (
            <motion.article
              className="experience-item"
              key={`${experience.role}-${experience.company}`}
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              {/* Timeline Marker */}
              <div className="timeline-marker">
                <div className="timeline-marker-inner" />
              </div>

              {/* Experience Card */}
              <div className="experience-card">

                {/* Header */}
                <div className="experience-header">

                  <div className="experience-icon">
                    {experience.icon}
                  </div>

                  <div className="experience-heading-content">
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>
                      {experience.role}
                    </h3>

                    <h4>
                      {experience.company}
                    </h4>
                  </div>

                  <span className="experience-number">
                    0{index + 1}
                  </span>

                </div>

                {/* Meta */}
                <div className="experience-meta">

                  <span>
                    <CalendarDays size={15} />
                    {experience.period}
                  </span>

                  <span>
                    <BriefcaseBusiness size={15} />
                    {experience.duration}
                  </span>

                </div>

                {/* Description */}
                <p className="experience-description">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="experience-tech">
                  {experience.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>

              </div>

            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="experience-footer"
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
          <div className="experience-footer-icon">
            <ArrowUpRight size={19} />
          </div>

          <div>
            <strong>
              Still growing.
            </strong>

            <p>
              Every project and experience is another step
              toward becoming a better developer.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;