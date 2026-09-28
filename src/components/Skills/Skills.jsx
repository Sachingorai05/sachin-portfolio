import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe,
  ShieldCheck,
  Terminal,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

function Skills() {
  const skillGroups = [
    {
      icon: <Code2 size={22} />,
      title: "Programming",
      description: "Languages and programming fundamentals",
      skills: ["C", "C++", "Java", "Python"],
    },
    {
      icon: <Globe size={22} />,
      title: "Web Development",
      description: "Modern frontend technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    },
    {
      icon: <Database size={22} />,
      title: "Database",
      description: "Data storage and database concepts",
      skills: ["MySQL", "DBMS"],
    },
    {
      icon: <BrainCircuit size={22} />,
      title: "AI & Data",
      description: "Artificial intelligence and language technologies",
      skills: ["AI", "NLP", "Machine Learning"],
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Security & Networking",
      description: "Core security and networking concepts",
      skills: ["Cyber Security", "Networking"],
    },
    {
      icon: <Wrench size={22} />,
      title: "Tools",
      description: "Development and collaboration tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">02 — Skills</span>

          <h2>
            Tools I use to <span>build.</span>
          </h2>

          <p>
            A growing technical toolkit shaped through coursework,
            projects, internships, and continuous experimentation.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-group-card"
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
            >
              {/* Card Header */}
              <div className="skill-card-header">
                <div className="skill-group-icon">
                  {group.icon}
                </div>

                <span className="skill-group-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-group-description">
                {group.description}
              </p>

              {/* Skill Tags */}
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span
                    className="skill-tag"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="skills-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Terminal size={18} />

          <span>
            Always learning. Always building. Always improving.
          </span>

          <GitBranch size={18} />
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;