import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";

function Education() {
  const education = [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "R.V.S. College of Engineering & Technology",
      location: "Jamshedpur, Jharkhand",
      period: "2023 — 2027",
      status: "Currently Pursuing",
      icon: <GraduationCap size={23} />,
      details: [
  "Computer Science & Engineering",
  "CGPA: 7.01 / 10",
],
    },
    {
      degree: "Diploma — Computer Science & Engineering",
      institution: "Madhupur Polytechnic",
      location: "Madhupur, Jharkhand",
      period: "2021 — 2024",
      status: "Completed",
      icon: <BookOpen size={23} />,
      details: [
        "Computer Science & Engineering",
        "Percentage: 75.20%",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="education-section"
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
            05 — Education
          </span>

          <h2>
            The foundation
            <span> behind the code.</span>
          </h2>

          <p>
            My academic journey has built the foundation in
            computer science, programming, and software
            development that I continue to expand through
            projects and practical experience.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="education-grid">
          {education.map((item, index) => (
            <motion.article
              className="education-card"
              key={item.degree}
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
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -7,
              }}
            >

              {/* Top */}
              <div className="education-card-top">

                <div className="education-icon">
                  {item.icon}
                </div>

                <span className="education-number">
                  0{index + 1}
                </span>

              </div>

              {/* Status */}
              <span className="education-status">
                {item.status}
              </span>

              {/* Degree */}
              <h3>
                {item.degree}
              </h3>

              {/* Institution */}
              <h4>
                {item.institution}
              </h4>

              {/* Location */}
              <div className="education-location">
                <MapPin size={15} />
                {item.location}
              </div>

              {/* Period */}
              <div className="education-period">
                {item.period}
              </div>

              {/* Details */}
              <div className="education-details">
                {item.details.map((detail) => (
                  <span key={detail}>
                    {detail}
                  </span>
                ))}
              </div>

            </motion.article>
          ))}
        </div>

        {/* Academic Note */}
        <motion.div
          className="education-footer"
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
          <div className="education-footer-icon">
            <ArrowUpRight size={19} />
          </div>

          <div>
            <strong>
              Beyond the classroom.
            </strong>

            <p>
              I complement my academic learning with
              certifications, internships, projects, and
              continuous self-learning.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;