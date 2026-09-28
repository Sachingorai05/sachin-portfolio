import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import sachinImage from "../../assets/sachin.png";

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
  {/* GitHub */}
  <a
    href="https://github.com/Sachingorai05"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <svg
      className="brand-icon-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.2 7.68 10.69.56.1.76-.24.76-.54v-2.08c-3.12.68-3.78-1.32-3.78-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 1.87 2.78 1.33.1-.7.39-1.18.71-1.45-2.49-.28-5.11-1.25-5.11-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.28-5.13 5.55.4.35.75 1.04.75 2.1v3.11c0 .3.2.65.77.54a11.26 11.26 0 0 0 7.67-10.69C23.25 5.48 18.27.5 12 .5Z"
      />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/sachin-gorai-05sg"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <svg
      className="brand-icon-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0Z"
      />
    </svg>
  </a>

  {/* Email */}
  <a
    href="mailto:sachingorai0107@gmail.com"
    aria-label="Email Sachin"
  >
    <Mail size={20} strokeWidth={2} />
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
  src={sachinImage}
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