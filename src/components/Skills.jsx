import { useState } from "react";

export default function Skills() {
  const [skill, setSkill] = useState("technical");

  const skills = {
    technical: [
      { name: "Java", prof: 80 },
      { name: "Spring Boot", prof: 80 },
      { name: "Spring Security + JWT", prof: 75 },
      { name: "Spring Data JPA / Hibernate", prof: 78 },
      { name: "REST APIs", prof: 85 },
      { name: "React.js", prof: 75 },
      { name: "JavaScript (ES6+)", prof: 80 },
      { name: "HTML5 & CSS3", prof: 85 },
      { name: "Bootstrap / Material UI", prof: 85 },
      { name: "MySQL", prof: 80 },
      { name: "Docker", prof: 70 },
      { name: "AWS (EC2, S3, CloudFront)", prof: 70 },
      { name: "Gemini AI Integration", prof: 72 },
      { name: "Git & GitHub", prof: 82 },
    ],
    soft: [
      { name: "Problem Solving", prof: 80 },
      { name: "Communication", prof: 70 },
      { name: "Teamwork", prof: 85 },
      { name: "Continuous Learning", prof: 90 },
    ],
  };

  const getProfLabel = (prof) => {
    if (prof >= 85) return "Expert";
    if (prof >= 75) return "Proficient";
    if (prof >= 65) return "Intermediate";
    return "Beginner";
  };

  const getBarColor = (prof) => {
    if (prof >= 85) return "bg-success";
    if (prof >= 75) return "bg-primary";
    if (prof >= 65) return "bg-info";
    return "bg-secondary";
  };

  return (
    <div className="py-5">
      <div className="container py-4">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-info">My Skills</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            A comprehensive overview of my technical expertise and professional skills.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="d-flex justify-content-center mb-4 gap-2">
          <button
            onClick={() => setSkill("technical")}
            className={`btn px-4 text-white ${skill === "technical" ? "btn-success" : "btn-outline-secondary"}`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`btn px-4 text-white ${skill === "soft" ? "btn-success" : "btn-outline-secondary"}`}
          >
            Soft Skills
          </button>
        </div>

        {/* Skills Cards */}
        <div className="row gy-4 justify-content-center">
          {skills[skill].map((skillItem, index) => (
            <div className="col-sm-6 col-lg-3" key={index}>
              <div className="card h-100 shadow-sm border-0 bg-white">
                <div className="card-body">
                  <h6 className="card-title fw-bold mb-3">{skillItem.name}</h6>
                  <div className="d-flex justify-content-between mb-1">
                    <small className="text-muted">{getProfLabel(skillItem.prof)}</small>
                    <small className="text-muted fw-semibold">{skillItem.prof}%</small>
                  </div>
                  <div className="progress" style={{ height: "8px", borderRadius: "4px" }}>
                    <div
                      className={`progress-bar ${getBarColor(skillItem.prof)}`}
                      role="progressbar"
                      style={{ width: `${skillItem.prof}%`, borderRadius: "4px" }}
                      aria-valuenow={skillItem.prof}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}