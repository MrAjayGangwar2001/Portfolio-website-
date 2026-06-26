import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const socials = [
    {
      href: "https://github.com/MrAjayGangwar2001",
      icon: <FaGithub size={18} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/ajay-gangwar-5234b2268",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
    },
    {
      href: "https://instagram.com/ajaygangwar2907",
      icon: <FaInstagram size={18} />,
      label: "Instagram",
    },
    {
      href: "mailto:gangwar030@gmail.com",
      icon: <HiOutlineMail size={18} />,
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer style={{ background: "#0d0d14", borderTop: "1px solid #2a2a3d" }}>

      {/* Top strip */}
      <div className="container py-4">
        <div className="row g-4 align-items-start justify-content-between">

          {/* Brand */}
          <div className="col-md-4">
            <div className="fw-bold mb-2" style={{ fontSize: "18px", color: "#f1f5f9", letterSpacing: "0.3px" }}>
              <span
                style={{
                  display: "inline-block", width: "8px", height: "8px",
                  borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#a855f7)",
                  marginRight: "8px", verticalAlign: "middle",
                }}
              />
              Ajay Gangwar
            </div>
            <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.65", maxWidth: "260px" }}>
              Full Stack Java Developer — building scalable web apps with Java, Spring Boot, React, and AWS.
            </p>
          </div>

          {/* Nav links */}
          <div className="col-md-3">
            <div style={{ fontSize: "11px", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
              Navigation
            </div>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ fontSize: "14px", color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#f1f5f9")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social icons */}
          <div className="col-md-3">
            <div style={{ fontSize: "11px", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
              Connect
            </div>
            <div className="d-flex gap-2 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: "38px", height: "38px", borderRadius: "8px",
                    background: "#1a1a26", border: "1px solid #2a2a3d",
                    color: "#94a3b8", display: "flex", alignItems: "center",
                    justifyContent: "center", textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#6366f1";
                    e.currentTarget.style.color = "#818cf8";
                    e.currentTarget.style.background = "rgba(99,102,241,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2a2a3d";
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.background = "#1a1a26";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1e1e2e" }}>
        <div
          className="container py-3 d-flex flex-wrap justify-content-between align-items-center gap-2"
          style={{ fontSize: "12.5px", color: "#475569" }}
        >
          <span>© 2026 Ajay Gangwar. All rights reserved.</span>
          <span>
            Built with{" "}
            <span style={{ color: "#f87171" }}>♥</span>{" "}
            using React js
          </span>
        </div>
      </div>

    </footer>
  );
}