import React, { useEffect } from 'react';
import './App.css';
import discordLogo from './discord.svg';
import githubLogo from './github.svg';
import elementAnimation from 'element-animation';

const projects = [
    {
        title: "Survivor MC",
        category: "Minecraft Server",
        image: "temp.png",
        description: "A zombie survival server.",
        status: "Available"
    },
    {
        title: "Twitch Connect",
        category: "Minecraft Plugin",
        image: "temp.png",
        description: "A Minecraft plugin that connects a Twitch streamer's chat to Minecraft.",
        status: "Available"
    },
    {
        title: "Block Storm",
        category: "Minecraft Plugin",
        image: "temp.png",
        description: "Every player receives a random block every 60 seconds, making gameplay fresh and unpredictable.",
        status: "Available"
    },
    {
        title: "Placeholder",
        category: "Placeholder",
        image: "temp.png",
        description: "Placeholder",
        status: "Available"
    },
    {
        title: "Placeholder",
        category: "Placeholder",
        image: "temp.png",
        description: "Placeholder.",
        status: "Available"
    },
    {
        title: "Placeholder",
        category: "Placeholder",
        image: "temp.png",
        description: "Placeholder.",
        status: "Coming Soon"
    },
];

function App() {
    useEffect(() => {
        const container = document.getElementById('falling-leaves-container');
        const props = [
            "leaf1.svg",
            "leaf2.svg",
            "leaf3.svg",
        ];

        const options = {
            interval: 300,
            rotate: [-30, 30],
            size: [20, 40],
            duration: [10, 20],
            amount: [15, 20],
            opacity: [0.5, 0.9]
        };

        const elemAnim = new elementAnimation(container, props, options);

        elemAnim.rain = function() {
            const self = this;
            setInterval(() => {
                const elem = document.createElement('img');
                const randomProp = self.props[Math.floor(Math.random() * self.props.length)];
                const randomSize = Math.random() * (self.options.size[1] - self.options.size[0]) + self.options.size[0];
                const randomRotation = Math.random() * (self.options.rotate[1] - self.options.rotate[0]) + self.options.rotate[0];
                const randomOpacity = Math.random() * (self.options.opacity[1] - self.options.opacity[0]) + self.options.opacity[0];

                elem.src = randomProp;
                elem.style.position = 'absolute';
                elem.style.width = `${randomSize}px`;
                elem.style.height = 'auto';
                elem.style.top = '-50px';
                elem.style.left = `${Math.random() * 100}%`;
                elem.style.transform = `rotate(${randomRotation}deg)`;
                elem.style.opacity = randomOpacity;
                elem.style.pointerEvents = 'none';

                self.container.appendChild(elem);

                elem.animate([
                    { transform: `translateY(${window.innerHeight + 50}px) rotate(${randomRotation}deg)` }
                ], {
                    duration: (Math.random() * (self.options.duration[1] - self.options.duration[0]) + self.options.duration[0]) * 1000,
                    easing: 'linear',
                    iterations: 1
                }).onfinish = () => {
                    elem.remove();
                };
            }, self.options.interval);
        };

        elemAnim.rain();
    }, []);

    return (
        <div className="App">
            <div id="falling-leaves-container"></div>
            <header className="App-header">
                <h1>Sakura Studios</h1>
                <p>The page is currently being built for Sakura Studios.</p>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3>{project.category}</h3>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                {project.status === "Coming Soon" && <span className="coming-soon">Coming Soon</span>}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="social-icons">
                    <a href="https://discord.gg/qBdvgW9EGF" target="_blank" rel="noopener noreferrer">
                        <img src={discordLogo} alt="Discord" className="social-icon" />
                    </a>
                    <a href="https://github.com/SakuraDevMC" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub" className="social-icon" />
                    </a>
                </div>
            </header>
        </div>
    );
}

export default App;
