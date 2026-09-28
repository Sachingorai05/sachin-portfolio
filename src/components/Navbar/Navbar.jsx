import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <button
          className="navbar-brand"
          onClick={() => handleNavigation("home")}
          aria-label="Go to homepage"
        >
          <span className="navbar-logo">
            SG
          </span>

          <span className="navbar-brand-name">
            Sachin<span>.</span>
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
              onClick={() => handleNavigation(item.target)}
            >
              {item.label}
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
            onClick={() =>
              handleNavigation(item.target)
            }
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Navbar;