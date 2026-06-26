import React from "react";
import TypingEffect from "./Type";

export default function About() {
  return (
    <div className="min-vh-100 py-2">
      <div className="container py-5">

        {/* Profile Image */}
        <div className="text-center mb-5">
          <img
            src="https://avatars.githubusercontent.com/u/149433023?v=4"
            alt="Profile"
            className="rounded-circle text-center mx-auto border border-4 border-white shadow-lg"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-warning">Hi, I am Ajay Gangwar</h1>
          <TypingEffect />
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "700px" }}>
            A passionate Full Stack Java Developer who loves building scalable,
            AI-powered web applications and solving real-world problems with clean,
            maintainable code.
          </p>
        </div>

        {/* Professional Background */}
        <div className="bg-white shadow p-4 rounded mb-5">
          <h2 className="text-center fw-bold mb-4">Professional Journey</h2>
          <p className="fs-5 text-muted">
            I have <strong>1.1 years of hands-on experience</strong> as a Full Stack Java Developer
            at <strong>Uncodemy, Noida</strong>, where I designed and shipped scalable web applications
            using <strong>Spring Boot, React.js, MySQL, Docker, and AWS</strong>. I have built
            AI-integrated products using the <strong>Gemini API</strong>, developed Chrome Extensions,
            and delivered end-to-end deployments on AWS EC2, S3, and CloudFront. I am passionate
            about clean architecture, performance optimization, and continuously upgrading my skills.
          </p>
        </div>

        {/* Skills Section */}
        <div className="row text-center g-4 mb-5">
          {[
            {
              title: "Frontend Development",
              desc: "React.js, Redux, HTML5, CSS3, JavaScript (ES6+), Bootstrap, Material UI, Tailwind CSS",
              color: "text-primary",
            },
            {
              title: "Backend Development",
              desc: "Java, Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST APIs, Microservices, JWT, OAuth 2.0, JSP & Servlets, Apache Tomcat",
              color: "text-success",
            },
            {
              title: "Database",
              desc: "MySQL – Schema Design & Query Optimization",
              color: "text-warning",
            },
            {
              title: "DevOps & Cloud",
              desc: "Docker, AWS (EC2, S3, CloudFront), Render, Railway, Vercel, GitHub Actions (CI/CD)",
              color: "text-danger",
            },
            {
              title: "AI & APIs",
              desc: "Gemini Generative AI, RESTful API Design, Web3Forms, Rapid APIs, Chrome Extension (Manifest V3)",
              color: "text-primary",
            },
            {
              title: "Web Services",
              desc: "REST APIs, JSON, XML, YAML, JWT Authentication, API Security",
              color: "text-success",
            },
            {
              title: "Tools & Platforms",
              desc: "IntelliJ IDEA, VS Code, Eclipse, Git, GitHub, Postman, Maven, Swagger / OpenAPI",
              color: "text-warning",
            },
            {
              title: "Core Concepts",
              desc: "OOP, Data Structures & Algorithms, Design Patterns, MVC, Exception Handling, Pagination, RBAC",
              color: "text-danger",
            },
          ].map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="bg-white p-4 shadow rounded h-100">
                <h5 className={`fw-bold mb-3 ${item.color}`}>{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="bg-white shadow rounded p-4 mb-5">
          <h3 className="text-center fw-bold mb-4">Professional Experience</h3>
          <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
            <div>
              <h5 className="fw-bold mb-0">Uncodemy</h5>
              <p className="text-muted mb-0">Full Stack Java Developer &nbsp;·&nbsp; Noida, UP</p>
            </div>
            <span className="badge bg-secondary fs-6 fw-normal px-3 py-2">
              Apr 2025 – Apr 2026 &nbsp;(1.1 yrs)
            </span>
          </div>
          <ul className="text-muted mt-3" style={{ paddingLeft: "20px" }}>
            <li className="mb-2">
              Developed and deployed full-stack web applications using <strong>Java, Spring Boot, MySQL, React.js, and Bootstrap</strong>.
            </li>
            <li className="mb-2">
              Built RESTful APIs with <strong>Spring Data JPA / Hibernate ORM</strong>, input validation, custom exception handling, and pagination.
            </li>
            <li className="mb-2">
              Implemented <strong>Spring Security + JWT</strong> authentication with role-based access control (RBAC).
            </li>
            <li className="mb-2">
              Refactored React components using Hooks; applied lazy loading &amp; code splitting → <strong>~20% faster page load</strong>.
            </li>
            <li className="mb-2">
              Containerized applications with <strong>Docker</strong>; deployed on <strong>AWS EC2, S3, CloudFront</strong>, Render, and Railway.
            </li>
            <li className="mb-2">
              Managed source control via <strong>Git / GitHub</strong>; participated in peer code reviews and agile sprint cycles.
            </li>
          </ul>
        </div>

        {/* Professional Interests */}
        <div className="bg-white shadow rounded p-4 mb-5">
          <h3 className="text-center fw-bold mb-4">Professional Interests</h3>
          <div className="row g-4">
            {[
              {
                title: "AI-Integrated Products",
                desc: "Building intelligent applications using Gemini AI — from email assistants to smart developer tools.",
              },
              {
                title: "Open Source & GitHub",
                desc: "Actively maintaining projects on GitHub and contributing to the developer community.",
              },
              {
                title: "LeetCode & Problem Solving",
                desc: "Regularly solving DSA problems on LeetCode to sharpen algorithmic thinking.",
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div>
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary text-white text-center rounded py-5 px-4">
          <h3 className="fw-bold mb-3">Let's Connect</h3>
          <p className="fs-5 mx-auto" style={{ maxWidth: "600px" }}>
            Open to exciting full-stack roles, freelance projects, and collaborations.
            Feel free to reach out!
          </p>
          <a
            href="https://linkedin.com/in/ajay-gangwar-5234b2268"
            className="btn btn-light fw-semibold px-4 py-2 mt-3 me-3"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
          <a
            href="mailto:gangwar030@gmail.com"
            className="btn btn-outline-light fw-semibold px-4 py-2 mt-3"
          >
            Send Email
          </a>
        </div>

      </div>
    </div>
  );
}