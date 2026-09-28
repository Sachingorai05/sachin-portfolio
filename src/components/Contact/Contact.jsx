import { ArrowUpRight, Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xbgllrwd");

  const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "sachingorai0107@gmail.com",
    href: "mailto:sachingorai0107@gmail.com",
  },

  {
    icon: (
      <svg
        className="contact-brand-svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0Z"
        />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/sachin-gorai-05sg",
    href: "https://www.linkedin.com/in/sachin-gorai-05sg",
  },

  {
    icon: (
      <svg
        className="contact-brand-svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.2 7.68 10.69.56.1.76-.24.76-.54v-2.08c-3.12.68-3.78-1.32-3.78-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 1.87 2.78 1.33.1-.7.39-1.18.71-1.45-2.49-.28-5.11-1.25-5.11-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.28-5.13 5.55.4.35.75 1.04.75 2.1v3.11c0 .3.2.65.77.54a11.26 11.26 0 0 0 7.67-10.69C23.25 5.48 18.27.5 12 .5Z"
        />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/Sachingorai05",
    href: "https://github.com/Sachingorai05",
  },
];

  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section">
        <div className="section-container">
          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">08 — Contact</span>

            <h2>
              Message <span>sent successfully.</span>
            </h2>

            <p>
              Thank you for reaching out. Your message has been
              delivered successfully.
            </p>
          </motion.div>

          <motion.div
            className="contact-success-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-success-icon">✓</div>

            <h3>Thanks for getting in touch!</h3>

            <p>
              I'll get back to you as soon as possible.
            </p>

            <a href="#home" className="text-button">
              Back to Home
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">08 — Contact</span>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            Have an idea, opportunity, or simply want to
            connect? Feel free to reach out.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            className="contact-introduction"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="contact-kicker">Get in touch</span>

            <h3>
              I'm always open to
              <span> new opportunities.</span>
            </h3>

            <p>
              Whether it's a project, internship opportunity,
              collaboration, or a simple conversation about
              technology, you can reach me through any of the
              channels below.
            </p>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={
                    link.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="contact-link-card"
                >
                  <div className="contact-link-icon">
                    {link.icon}
                  </div>

                  <div className="contact-link-content">
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                  </div>

                  <ArrowUpRight size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-heading">
                <span>Send a message</span>

                <p>
                  I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="form-field">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about your idea..."
                  required
                />
              </div>

              {state.errors && (
                <div className="contact-error">
                  Something went wrong while sending your
                  message. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="contact-submit-button"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    Sending...
                    <span className="submit-spinner" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={17} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Open to opportunities & collaborations</span>

          <a href="mailto:sachingorai0107@gmail.com">
            Say hello
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;