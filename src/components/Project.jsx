import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Project() {
    const projectData = [
        {
            id: 1,
            title: "AI Email Assistant — Chrome Extension + Web App",
            description:
                "Engineered a scalable AI-powered email assistant using React (Vite), Material UI, and Spring Boot REST APIs with Gemini Generative AI. Developed a Chrome Extension (Manifest V3) for real-time, context-aware email response generation directly inside Gmail. Deployed on AWS EC2, S3, and CloudFront with HTTPS, CORS, and cache optimization.",
            github: "https://github.com/MrAjayGangwar2001/Email_Assisstant_App.git",
            live: "https://dr41zrycf9nrg.cloudfront.net",
            technologies: [
                "React (Vite)", "Spring Boot", "Gemini API", "Material UI",
                "AWS EC2", "S3", "CloudFront", "REST APIs", "Chrome Extension",
            ],
        },
        {
            id: 2,
            title: "TradeFlow — Portfolio & Transaction Management",
            description:
                "A Spring Boot–based financial management system for monitoring stock trades, wallet balance, and portfolio in real time. Built modular REST APIs for order placement, transaction recording, and portfolio updates. Secured with JWT-based Spring Security and Spring Actuator health checks.",
            github: "https://github.com/MrAjayGangwar2001/TradeFlow_SpringMVC_Project.git",
            live: "https://tradeflow-project.onrender.com",
            technologies: [
                "Java", "Spring Boot", "Spring Security", "JWT",
                "Spring Data JPA", "Hibernate", "MySQL", "Lombok", "REST APIs",
            ],
        },
        {
            id: 3,
            title: "Personal Portfolio Website",
            description:
                "A fully responsive personal portfolio built with React, showcasing projects, skills, and professional journey. Integrated Web3Form API for contact form submissions and implemented a client-side resume download flow. Optimized via code splitting for 25% faster load time; deployed on Vercel with CI/CD via GitHub Actions.",
            github: "https://github.com/MrAjayGangwar2001/Portfolio-website-.git",
            live: "https://portfolio-ajay-gangwar.vercel.app",
            technologies: [
                "React.js", "HTML5", "CSS3", "Bootstrap 5",
                "JavaScript", "Web3Form API", "GitHub Actions", "Vercel",
            ],
        },
        {
            id: 4,
            title: "NeoChat AI — Interactive AI Chatbot",
            description:
                "A responsive and interactive chatbot that simulates real-time AI conversations. Users can input queries and receive dynamic, context-aware responses. Includes a one-click copy feature for easy sharing of AI responses, designed with a clean and intuitive interface.",
            github: "https://github.com/MrAjayGangwar2001/Personal-AI-Chatbot.git",
            live: null,
            technologies: ["HTML5", "CSS3", "JavaScript (Vanilla JS)", "Gemini API"],
        },
    ];

    return (
        <div className="container py-5">

            {/* Heading */}
            <div className="text-center mb-5">
                <h2 className="display-6 fw-bold text-dark">My Projects</h2>
                <p className="lead text-muted">
                    Here are some of the projects I've built end-to-end.
                </p>
            </div>

            <div className="row g-4">
                {projectData.map((project) => (
                    <div key={project.id} className="col-md-6">
                        <div className="card shadow-sm h-100 border-0" style={{ borderRadius: "12px" }}>
                            <div className="card-body d-flex flex-column p-4">

                                {/* Title */}
                                <h5 className="card-title fw-bold mb-2">{project.title}</h5>

                                {/* Description */}
                                <p className="card-text text-muted mb-3" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                                    {project.description}
                                </p>

                                {/* Tech Badges */}
                                <div className="mb-4 d-flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="badge bg-light text-dark border"
                                            style={{ fontSize: "12px", fontWeight: "500", borderRadius: "6px" }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-auto d-flex gap-2">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-dark d-flex align-items-center gap-2"
                                        style={{ fontSize: "14px" }}
                                    >
                                        <Github size={16} /> GitHub
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-primary d-flex align-items-center gap-2"
                                            style={{ fontSize: "14px" }}
                                        >
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}