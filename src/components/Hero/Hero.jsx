import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">
        {/* =========================
            LEFT CONTENT
        ========================= */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            Sachin <span>Gorai</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >
            AI & Full-Stack Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
          >
            I build intelligent, responsive, and user-focused digital
            experiences by combining modern web technologies with AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
  className="hero-actions"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.7 }}
>
  <button className="primary-button" onClick={scrollToProjects}>
    Explore Projects <ArrowUpRight size={18} />
  </button>

  <a
    href="/Sachin-Gorai-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-button"
  >
    View Resume <ArrowUpRight size={18} />
  </a>

  <button className="secondary-button" onClick={scrollToContact}>
    Let's Connect <Mail size={18} />
  </button>
</motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
          >
            <a
              href="https://github.com/Sachingorai05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <span className="brand-icon">GH</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sachin-gorai-05sg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className="brand-icon">in</span>
            </a>

            <a
              href="mailto:sachingorai0107@gmail.com"
              aria-label="Email Sachin"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* =========================
            RIGHT — CIRCULAR PHOTO
        ========================= */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.35,
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="profile-image-wrapper"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="/src/assets/sachin.png"
              alt="Sachin Gorai"
              className="profile-image"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className="scroll-indicator"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
        }}
        aria-label="Scroll to About section"
      >
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}

export default Hero;