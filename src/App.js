import React, { useEffect } from 'react';
import logo from './logo.svg';
import discordLogo from './discord.svg';
import githubLogo from './github.svg';
import './App.css';
import elementAnimation from 'element-animation';

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
            opacity: [0.5, 0.9]  // Add opacity range
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
                <div className="circle-background">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p>
                    The page is currently being built for Sakura Studios.
                </p>
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
