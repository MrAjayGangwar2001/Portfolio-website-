import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; // Optional: better mail icon

export default function Footer() {
  return (
    <footer className="bg shadow-lg text-light py-4">
      <div className="container text-center">
        <p className="small mb-2">© 2025 Ajay. All rights reserved.</p>
        <div className="d-flex justify-content-center">
          {/* <a href="#" className="text-secondary mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </a> */}

          <div style={{ display: "flex", gap: "20px", fontSize: "24px" }}>
            <a
              href="https://github.com/MrAjaygangwar2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="#171515"/>
            </a>
            <a
              href="https://linkedin.com/in/ajaygangwar2907"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="#282bd6ff"/>
            </a>
            <a
              href="https://instagram.com/ajaygangwar2907"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color="#E1306C"/>
            </a>
            <a href="mailto:gangwar030@gmail.com">
              <HiOutlineMail color="#be1d0eff" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
