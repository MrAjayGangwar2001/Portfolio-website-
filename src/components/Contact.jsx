import React, { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData();
    formData.append("access_key", "my access key"); // <-- apni key yahan
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const res    = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="py-5">
      <div className="container py-3">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#818cf8" }}>Get In Touch</h2>
          <p className="text-muted mx-auto mt-2" style={{ maxWidth: "520px" }}>
            Open to full-stack roles, freelance projects, and collaborations.
            Drop a message — I reply within 24 hours.
          </p>
        </div>

        <div className="row g-4 align-items-start justify-content-center">

          {/* LEFT — Contact Info */}
          <div className="col-md-4">
            <div
              className="p-4 h-100"
              style={{
                background: "var(--bg-card, #13131a)",
                border: "1px solid var(--border, #2a2a3d)",
                borderRadius: "12px",
              }}
            >
              <h5 className="fw-bold mb-4" style={{ color: "#f1f5f9" }}>
                Contact Info
              </h5>

              {[
                { icon: <MapPin size={16} />,   label: "Location", value: "Noida, Uttar Pradesh" },
                { icon: <Phone size={16} />,    label: "Phone",    value: "+91-9720576210" },
                { icon: <Mail size={16} />,     label: "Email",    value: "gangwar030@gmail.com",
                  href: "mailto:gangwar030@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "36px", height: "36px", borderRadius: "8px",
                      background: "rgba(99,102,241,0.15)", color: "#818cf8",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                      {item.label}
                    </div>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: "13.5px", color: "#94a3b8", textDecoration: "none" }}>{item.value}</a>
                      : <div style={{ fontSize: "13.5px", color: "#94a3b8" }}>{item.value}</div>
                    }
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="mt-2 pt-3" style={{ borderTop: "1px solid #2a2a3d" }}>
                <div style={{ fontSize: "11px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "12px" }}>
                  Find me on
                </div>
                <div className="d-flex gap-3">
                  {[
                    { href: "https://github.com/MrAjayGangwar2001",              icon: <Github size={18} />,   label: "GitHub"   },
                    { href: "https://linkedin.com/in/ajay-gangwar-5234b2268",    icon: <Linkedin size={18} />, label: "LinkedIn" },
                    { href: "https://portfolio-ajay-gangwar.vercel.app",         icon: <Mail size={18} />,     label: "Portfolio"},
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      style={{
                        width: "38px", height: "38px", borderRadius: "8px",
                        background: "#1a1a26", border: "1px solid #2a2a3d",
                        color: "#94a3b8", display: "flex", alignItems: "center",
                        justifyContent: "center", textDecoration: "none",
                        transition: "border-color 0.2s, color 0.2s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#6366f1"; e.currentTarget.style.color = "#818cf8"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2a2a3d"; e.currentTarget.style.color = "#94a3b8"; }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="col-md-6">
            <div
              className="p-4"
              style={{
                background: "var(--bg-card, #13131a)",
                border: "1px solid var(--border, #2a2a3d)",
                borderRadius: "12px",
              }}
            >
              <h5 className="fw-bold mb-4" style={{ color: "#f1f5f9" }}>Send a Message</h5>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold" style={{ fontSize: "13px", color: "#94a3b8" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold" style={{ fontSize: "13px", color: "#94a3b8" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold" style={{ fontSize: "13px", color: "#94a3b8" }}>
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-100 btn fw-semibold"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #a855f7)",
                    border: "none", color: "#fff", borderRadius: "8px",
                    padding: "11px", fontSize: "14px",
                    opacity: status === "sending" ? 0.7 : 1,
                    transition: "opacity 0.2s",
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>

                {/* Status */}
                {status === "success" && (
                  <div className="mt-3 text-center p-3 rounded" style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ade80", fontSize: "14px" }}>
                    ✓ Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-3 text-center p-3 rounded" style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.25)", color: "#f87171", fontSize: "14px" }}>
                    ✗ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}