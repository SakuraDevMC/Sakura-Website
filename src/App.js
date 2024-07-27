import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import BankerPage from './pages/BankerPage';
import HitmanPage from './pages/HitmanPage';
import ProjectSurvivorMC from './pages/ProjectSurvivorMC';
import ProjectTwitchConnect from './pages/ProjectTwitchConnect';
import ProjectBlockStorm from './pages/ProjectBlockStorm';
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
        <Router>
            <div className="App">
                <div id="falling-leaves-container"></div>
                <Navbar />
                <HeroSection />
                <ExpertiseSection />
                <ProjectsSection />
                <Footer />
                <Routes>
                    <Route path="/banker" element={<BankerPage />} />
                    <Route path="/hitman" element={<HitmanPage />} />
                    <Route path="/project-survivor-mc" element={<ProjectSurvivorMC />} />
                    <Route path="/project-twitch-connect" element={<ProjectTwitchConnect />} />
                    <Route path="/project-block-storm" element={<ProjectBlockStorm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
