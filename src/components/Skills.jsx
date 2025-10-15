import { useState } from "react";

export default function Skills() {
  const [skill, setSkill] = useState("technical");

  const skills = {
    technical: [
      { name: "HTML", prof: 85 },
      { name: "CSS", prof: 85 },
      { name: "JavaScript", prof: 85 },
      { name: "BootStrap", prof: 85 },
      { name: "React", prof: 70 },
      { name: "Springboot", prof: 70 },
      { name: "Hibernate", prof: 75 },
      { name: "SQL", prof: 80 },

    ],
    soft: [
      { name: "Communication", prof: 60 },
      { name: "Teamwork", prof: 85 },
      { name: "Problem Solving", prof: 70 },
    ],
  };

  const getproflabel = (prof) => {
    if (prof >= 85) return "Expert";
    if (prof >= 70) return "Proficient";
    if (prof >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="py-5">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-info">My Skills</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            A comprehensive overview of my Technical Expertise and Professional
            Skills.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="d-flex justify-content-center mb-4">
          <button
            onClick={() => setSkill("technical")}
            className={`btn me-2 ${
              skill === "technical" ? "btn-success" : "btn-outline-light"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`btn ${
              skill === "soft" ? "btn-success" : "btn-outline-light"
            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* Skills Cards */}
        <div className="row gy-4 justify-content-center ">
          {skills[skill].map((skillItem, index) => (
            <div className="col-sm-6 col-lg-3 text-center" key={index}>
              <div className="card h-100 shadow-lg">
                <div className="card-body">
                  <h5 className="card-title">{skillItem.name}</h5>
                  <div className="d-flex justify-content-between mb-1">
                    <small className="text-muted">
                      {getproflabel(skillItem.prof)}
                    </small>
                    <small className="text-muted">{skillItem.prof}%</small>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: `${skillItem.prof}%` }}
                      aria-valuenow={skillItem.prof}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
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
