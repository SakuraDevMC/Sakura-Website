import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Survivor MC",
        category: "Minecraft Server",
        image: "temp.png",
        description: "A zombie survival server.",
        link: "/project-survivor-mc"
    },
    {
        title: "Twitch Connect",
        category: "Minecraft Plugin",
        image: "temp.png",
        description: "A Minecraft plugin that connects a Twitch streamer's chat to Minecraft.",
        link: "/project-twitch-connect"
    },
    {
        title: "Block Storm",
        category: "Minecraft Plugin",
        image: "temp.png",
        description: "Every player receives a random block every 60 seconds, making gameplay fresh and unpredictable.",
        link: "/project-block-storm"
    },
];

const ProjectsSection = () => {
    return (
        <section className="our-projects" id="projects">
            <div className="projects-text">
                <h2>Our Projects</h2>
                <p>Explore our diverse range of Minecraft plugins and tools designed to enhance your gaming experience.</p>
            </div>
            <div className="projects-images">
                {projects.map((project, index) => (
                    <Link to={project.link} key={index}>
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image"/>
                            <div className="project-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
