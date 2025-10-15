import React from 'react';
import { ExternalLink } from 'lucide-react';
export default function Project() {
    const projectData = [
        {
            id: 1,
            title: "Project 1",
            description: "Description of project 1",
            link: "https://example.com/project1",
            technologies: [
                "React", "Tailwind CSS"],
             
        },
        {
            id: 2,
            title: "Project 2",
            description: "Description of project 2",
            link: "https://example.com/project2",
            technologies: [
                "React", "Tailwind CSS"],
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Description of project 2",
            link: "https://example.com/project2",
            technologies: [
                "React", "Tailwind CSS"],
        },
    ];
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from white to-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">My Projects</h2>
            <p className="mt-4 text-xl text-center font-semibold text-gray-600">Here are some of the projects I've worked on:</p>
        </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectData.map((project, index) => (
                        <div key={project.id} className="bg-white shadow-lg hover:shadoq-xl hover:border-2 hover:border-indigo-500 transition-all duration-200 rounded-2xl p-5">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-5">{project.title}</h2>
                            <p className="mt-2 mb-5 text-gray-600">{project.description}</p>
                            <div className="flex flex-wrap gap-4 mb-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-2 text-sm font-medium text-gray-700 mr-2 mb-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline hover:text-indigo-800 font-semibold flex items-center mt-4">
                                View Project <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {/* <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectData.map((project) => (
                    <div key={project.id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p className="text-gray-700">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
                            View Project <ExternalLink className="ml-1" />
                        </a>
                        <div className="mt-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}