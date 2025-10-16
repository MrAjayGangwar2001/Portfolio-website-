import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Project() {
    const projectData = [
        {
            id: 1,
            // title: "Online Car Rental Service",
            title: "NeoChat AI – Interactive AI Chatbot",
            description: "NeoChat AI is a responsive and interactive chatbot that simulates real-time AI conversations. Users can input queries and receive dynamic, context-aware responses. The project includes a one-click copy feature for easy sharing of AI responses and is designed to provide a seamless user experience with a clean and intuitive interface. Ideal for demonstrating skills in frontend development, asynchronous API handling, and user interaction design.",
            link: "https://github.com/MrAjayGangwar2001/Personal-AI-Chatbot.git",
            technologies: ["HTML", "CSS", "JavaScript (Vanilla JS)", "APIs"],
        },
        //         Online Car Rental System has revolutionized the way people access vehicles for their Travel needs.This system
        // streamlines the rental process, making it easier for users to access vehicles with just a few clicks. By leveraging
        // web technologies such as HTML, CSS, JavaScript, MySQL, and PHP through an Apache server.
        // The purpose of an Online Car Rental System is to provide a convenient and efficient platform for user to rent
        // vehicles.
        {
            id: 2,
            title: "TradeFlow – Portfolio & Transaction Management System",
            description: "TradeFlow is a Java Spring Boot–based financial management system that enables users to monitor stock trades, wallet balance, and portfolio in real time. It ensures smooth integration between order placement, transaction recording, and portfolio updates, maintaining data consistency across all entities.",
            link: "https://tradeflowspringmvcproject-production.up.railway.app/",
            technologies: ["Java", "Spring Boot", "JPA", "MySQL", "Lombok", "REST APIs"],
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A modern and fully responsive personal portfolio website built with React, showcasing my projects, skills, and professional journey. Designed with a clean UI and smooth navigation, it highlights my expertise in frontend development, Backend development, React components, and interactive web design.",
            link: "https://portfolio-website-production-4226.up.railway.app/",
            technologies: ["HTML", "CSS", "Javascript", "React", "Bootstrap 5"],
        },
    ];

    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h2 className="display-6 fw-bold bg-gradient bg-gradient-to-r text-dark">
                    My Projects
                </h2>
                <p className="lead text-muted">
                    Here are some of the projects I've worked on:
                </p>
            </div>

            <div className="row">
                {projectData.map((project) => (
                    <div key={project.id} className="col-md-6 col-lg-4 mb-4">
                        <div className="card shadow-lg p-2 h-100 bg-info">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>

                                <div className="mb-3">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="badge bg-primary me-2 mb-2">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary hover-bg-success  mt-auto d-flex align-items-center justify-content-center"
                                >
                                    View Project <ExternalLink className="ms-2" size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
