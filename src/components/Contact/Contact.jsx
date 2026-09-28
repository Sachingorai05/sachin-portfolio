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
      icon: <span className="contact-brand-icon">in</span>,
      label: "LinkedIn",
      value: "linkedin.com/in/sachin-gorai-05sg",
      href: "https://www.linkedin.com/in/sachin-gorai-05sg",
    },
    {
      icon: <span className="contact-brand-icon">GH</span>,
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