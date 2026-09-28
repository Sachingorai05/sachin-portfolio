import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { motion } from "motion/react";

function Footer() {
  const navigation = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Experience", target: "experience" },
    { label: "Education", target: "education" },
    { label: "Contact", target: "contact" },
  ];

  const scrollToSection = (target) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Main Footer */}
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="footer-brand">
            <button
              className="footer-logo"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              SG
            </button>

            <div>
              <h3>
                Sachin<span>.</span>
              </h3>

              <p>
                AI & Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Footer CTA */}
          <a
            href="mailto:sachingorai0107@gmail.com"
            className="footer-contact"
          >
            <Mail size={17} />
            Let's connect
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Navigation */}
        <div className="footer-navigation">
          <span className="footer-label">
            Explore
          </span>

          <nav aria-label="Footer navigation">
            {navigation.map((item) => (
              <button
                key={item.target}
                onClick={() =>
                  scrollToSection(item.target)
                }
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a
            href="https://github.com/Sachingorai05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com/in/sachin-gorai-05sg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href="mailto:sachingorai0107@gmail.com"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sachin Gorai.
            All rights reserved.
          </p>

          <p className="footer-built">
            Designed & built with React.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;