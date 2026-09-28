import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Experience", target: "experience" },
    { label: "Contact", target: "contact" },
  ];

  const handleNavigation = (target) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActiveSection(target);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].target);

        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <button
          className="navbar-brand"
          onClick={() => handleNavigation("home")}
          aria-label="Go to homepage"
        >
          <span className="navbar-logo">
            SG
          </span>

          <span className="navbar-brand-name">
            Sachin Gorai<span>.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav
          className="navbar-links"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.target}
              className={
                activeSection === item.target
                  ? "navbar-link active"
                  : "navbar-link"
              }
              onClick={() => handleNavigation(item.target)}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-navigation ${
          menuOpen ? "mobile-navigation-open" : ""
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.target}
            className={
              activeSection === item.target
                ? "mobile-nav-link active"
                : "mobile-nav-link"
            }
            onClick={() => handleNavigation(item.target)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Navbar;