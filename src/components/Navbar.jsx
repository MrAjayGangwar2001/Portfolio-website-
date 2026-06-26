import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const downloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/AjayResume.pdf";
    link.download = "Ajay-Gangwar-Resume.pdf";
    link.click();
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar-dark-custom sticky-top">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between" style={{ height: "64px" }}>

          {/* Brand */}
          <a href="#" className="navbar-brand-custom text-decoration-none">
            <span className="brand-dot" />
            Ajay Gangwar
          </a>

          {/* Desktop Links */}
          <ul className="d-none d-md-flex list-unstyled gap-1 mb-0 align-items-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link-custom">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/AjayResume.pdf"
                onClick={downloadResume}
                className="btn-hire-custom ms-2"
              >
                Hire Me
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="d-md-none bg-transparent border-0 text-white p-1"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-custom d-md-none">
          <div className="container py-3 d-flex flex-column gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-mobile"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/AjayResume.pdf"
              onClick={(e) => { downloadResume(e); setMenuOpen(false); }}
              className="btn-hire-custom mt-2 text-center"
              style={{ display: "block" }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}