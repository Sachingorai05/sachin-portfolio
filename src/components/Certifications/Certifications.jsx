import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";

function Certifications() {
  const certifications = [
    {
      title: "Programming In Java",
      issuer: "NPTEL",
      type: "Certification",
      date: "Jan–Apr 2025",
      description:
        "NPTEL online certification for successfully completing the 12-week Programming In Java course.",
      skills: ["Java", "OOP", "Programming"],
      file: "/certificates/01-nptel-programming-in-java.pdf",
    },

    {
      title: "Internship & Job Preparation",
      issuer: "Internshala",
      type: "Training",
      date: "Apr 2024",
      description:
        "Four-week online training covering job hunting, preparation, professional skills, and a final project.",
      skills: ["Job Preparation", "Career Skills", "Final Project"],
      file:
        "/certificates/02-internshala-internship-job-preparation.pdf",
    },

    {
      title: "Java Full Stack",
      issuer: "Briztech Infosystems Pvt. Ltd.",
      type: "Internship",
      date: "Oct–Nov 2023",
      description:
        "Completed a Java Full Stack internship program with training conducted in Ranchi.",
      skills: ["Java", "Full Stack", "Web Development"],
      file:
        "/certificates/03-briztech-java-full-stack.pdf",
    },

    {
      title: "Web Development",
      issuer: "Internshala",
      type: "Training",
      date: "Mar 2024",
      description:
        "Eight-week online training covering HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, React, and a final project.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      file:
        "/certificates/04-internshala-web-development.pdf",
    },

    {
      title: "HTML & CSS Zero to Hero",
      issuer: "LetsUpgrade",
      type: "Workshop",
      date: "Feb 2024",
      description:
        "Three-day learning program focused on HTML and CSS fundamentals for web development.",
      skills: ["HTML", "CSS", "Web Development"],
      file:
        "/certificates/05-letsupgrade-html-css-zero-to-hero.pdf",
    },

    {
      title: "JavaScript Bootcamp",
      issuer: "LetsUpgrade",
      type: "Bootcamp",
      date: "May 2024",
      description:
        "Three-day JavaScript learning program focused on strengthening JavaScript development fundamentals.",
      skills: ["JavaScript", "Web Development", "Programming"],
      file:
        "/certificates/06-letsupgrade-javascript-bootcamp.pdf",
    },

    {
      title: "Retrieval Augmented Generation with LangChain",
      issuer: "IBM SkillsBuild",
      type: "AI / RAG",
      date: "Aug 2025",
      description:
        "Completed a hands-on lab focused on Retrieval Augmented Generation using LangChain.",
      skills: ["RAG", "LangChain", "AI"],
      file:
        "/certificates/07-ibm-skillsbuild-rag-langchain.pdf",
    },

    {
      title: "Oracle SQL for Beginners",
      issuer: "Skill Academy / Testbook",
      type: "Database",
      date: "May 2023",
      description:
        "Certificate of completion for Oracle SQL fundamentals and beginner-level database concepts.",
      skills: ["Oracle SQL", "SQL", "Database"],
      file:
        "/certificates/08-testbook-oracle-sql.pdf",
    },

    {
      title: "HTML & CSS For Web Development",
      issuer: "Skill Academy / Testbook",
      type: "Web Development",
      date: "Apr 2023",
      description:
        "Certificate of completion focused on HTML and CSS for web development.",
      skills: ["HTML", "CSS", "Web Development"],
      file:
        "/certificates/09-testbook-html-css-web-development.pdf",
    },

    {
      title: "Artificial Intelligence Training Program",
      issuer: "Codec Technologies",
      type: "AI Training",
      date: "Jun 2026",
      description:
        "Completed an Artificial Intelligence Training Program focused on developing practical AI-related knowledge and skills.",
      skills: ["Artificial Intelligence", "Python", "Machine Learning"],
      file:
        "/certificates/10-codec-ai-training.pdf",
    },

    {
      title: "Artificial Intelligence Intern",
      issuer: "Codec Technologies Pvt. Ltd.",
      type: "Internship",
      date: "May–Jun 2026",
      description:
        "Completed a one-month Artificial Intelligence internship program conducted from May 25 to June 25, 2026.",
      skills: ["Artificial Intelligence", "Python", "AI"],
      file:
        "/certificates/11-codec-ai-internship.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
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
            06 — Certifications
          </span>

          <h2>
            Learning beyond
            <span> the curriculum.</span>
          </h2>

          <p>
            Certifications, training programs, workshops, and
            internships that have strengthened my technical
            knowledge and practical skills.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <motion.article
              className="certification-card"
              key={certificate.title}
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
                delay: index * 0.06,
              }}
              whileHover={{
                y: -7,
              }}
            >
              {/* Card Header */}
              <div className="certification-top">
                <div className="certification-icon">
                  <Award size={23} />
                </div>

                <span className="certification-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Type */}
              <span className="certification-type">
                {certificate.type}
              </span>

              {/* Title */}
              <h3>
                {certificate.title}
              </h3>

              {/* Issuer */}
              <div className="certification-issuer">
                <BadgeCheck size={16} />

                <span>
                  {certificate.issuer}
                </span>
              </div>

              {/* Date */}
              <span className="certification-date">
                {certificate.date}
              </span>

              {/* Description */}
              <p className="certification-description">
                {certificate.description}
              </p>

              {/* Skills */}
              <div className="certification-skills">
                {certificate.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Credential */}
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-link"
              >
                View Certificate
                <ExternalLink size={15} />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="certifications-footer"
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
          <div className="certifications-footer-icon">
            <ArrowUpRight size={19} />
          </div>

          <div>
            <strong>
              Continuous learning.
            </strong>

            <p>
              Technology keeps evolving, so I keep learning,
              experimenting, and improving.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;