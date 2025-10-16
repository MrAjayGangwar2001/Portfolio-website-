import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [isMenuopen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuopen);
  };

   const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "AjayResume.pdf"; // public folder me resume
    link.download = "Ajay-Gangwar-Resume.pdf"; // download file name
    link.click();
  };
  return (
    <>
      <nav className="w-full bg-gradient bg-primary bg-opacity-90 shadow-lg sticky-top" style={{background: "linear-gradient(to right, #4f46e5, #8b5cf6, #0d9488)"}}>
        <div className="container mx-auto px-4">
          <div className="d-flex align-items-center justify-content-between" style={{height: "4rem"}}>
            {/* Mobile menu button*/}
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <span className="text-light fs-4 fw-bold bg-primary bg-opacity-20 px-3 py-1 rounded-3">
                  {/* My Portfolio */}
                  Ajay Gangwar
                </span>
              </div>
              <div className="d-none d-md-block ms-4">
                <span className="text-light fs-5 fw-semibold">
                  {/* Ajay Gangwar */}
                  
                </span>
              </div>
            </div>
            {/* Desktop menu items */}
            <div className="d-none d-md-block">
              <ul className="d-flex list-unstyled gap-4 mb-0">
                <li>
                  <a
                    href="#"
                    className="text-white hover-bg-success hover-text-dark px-3 py-2 rounded-3 text-decoration-none small fw-medium"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-white hover-bg-success hover-text-dark px-3 py-2 rounded-3 text-decoration-none small fw-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-white hover-bg-success hover-text-dark px-3 py-2 rounded-3 text-decoration-none small fw-medium"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                  onClick={downloadResume}
                    href="/"
                    className="text-white hover-bg-success hover-text-dark px-3 py-2 rounded-3 text-decoration-none small fw-medium"
                  >
                    Hire Me
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-white hover-bg-success hover-text-dark px-3 py-2 rounded-3 text-decoration-none small fw-medium"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white hover-bg-success hover-text-dark px-3 py-2 rounded-3 text-decoration-none small fw-medium"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-md-none">
              <button
                onClick={() => setMenuOpen(!isMenuopen)}
                className="text-white hover-text-info focus-outline-none transition-color duration-200 bg-transparent border-0"
              >
                {isMenuopen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuopen && (
          <div className="d-md-none" style={{background: "linear-gradient(to bottom, #4f46e5, #4338ca)"}}>
            <div className="px-2 pt-2 pb-3">
              <a
                href="#"
                className="text-white hover-bg-success hover-text-dark d-block px-3 py-2 rounded-3 transition-color duration-200 text-decoration-none fw-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover-bg-success hover-text-dark d-block px-3 py-2 rounded-3 transition-color duration-200 text-decoration-none fw-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover-bg-success hover-text-dark d-block px-3 py-2 rounded-3 transition-color duration-200 text-decoration-none fw-medium"
              >
                Skills
              </a>
              <a
                href="#"
                className="text-white hover-bg-success hover-text-dark d-block px-3 py-2 rounded-3 transition-color duration-200 text-decoration-none fw-medium"
              >
                Trace
              </a>
              <a
                href="#"
                className="text-white hover-bg-success hover-text-dark d-block px-3 py-2 rounded-3 transition-color duration-200 text-decoration-none fw-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-white hover-bg-success hover-text-dark d-block px-3 py-2 rounded-3 transition-color duration-200 text-decoration-none fw-medium"
              >
                Contacts
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}