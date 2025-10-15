import React from "react";
import TypingEffect from "./Type";
import Typed from "typed.js";

export default function About() {
  return (
    <div className="min-vh-100 py-3">
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
            A Tech Savvy and passionate Java developer with a knack for creating
            interactive and user-friendly applications. I love to explore new
            technologies and continuously improve my skills.
          </p>
        </div>

        {/* Professional Background */}
        <div className="bg-white shadow p-4 rounded mb-5">
          <h2 className="text-center fw-bold mb-4">Professional Journey</h2>
          <p className="fs-5 text-muted">
            I have a background in computer science and have worked on various
            projects ranging in web development. I am
            proficient in HTML, CSS, Bootstrap, JavaScript, React, SpringBoot, Hibernate and Microservices.
          </p>
        </div>

        {/* Skills Section */}
        <div className="row text-center g-4 mb-5 ">
          {[
            {
              title: "Frontend Developer",
              desc: "HTML, CSS, JavaScript, Bootstrap, React",
              color: "text-primary",
            },
            {
              title: "Backend Developer",
              desc: "Java, Springboot, SpringMVC, Hibernate, RestfullAPIs, databases",
              color: "text-success",
            },
            { title: "Database", desc: "SQL", color: "text-warning" },
            {
              title: "Microservices",
              desc: "Building scalable microservices architecture",
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

        {/* Professional Interests */}
        <div className="bg-white shadow rounded p-4 mb-5">
          <h3 className="text-center fw-bold mb-4">Professional Interests</h3>
          <div className="row g-4">
            {[
              {
                title: "Open Source Contribution",
                desc: "Actively contributing to open source software and projects on GitHub.",
              },
              {
                title: "Tech Community",
                desc: "Engaging with tech communities and contributing to discussions and events.",
              },
              {
                title: "LeetCode & HackerRank",
                desc: "Solving coding problems and challenges on LeetCode and CodeChef.",
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
          <h3 className="fw-bold mb-3">LeetCode and CodeChef</h3>
          <p className="fs-5 mx-auto" style={{ maxWidth: "600px" }}>
            I am actively solving challenges and contributing on LeetCode and
            CodeChef.
          </p>
          <a href="https://leetcode.com/u/oE5ZV16VxZ/" className="btn btn-light fw-semibold px-4 py-2 mt-3">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
