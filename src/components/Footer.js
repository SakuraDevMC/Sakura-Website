import React from 'react';
import discordLogo from '../assets/discord.svg';
import githubLogo from '../assets/github.svg';

const Footer = () => {
    return (
        <footer className="App-footer" id="contact">
            <div className="social-icons">
                <a href="https://discord.gg/qBdvgW9EGF" target="_blank" rel="noopener noreferrer">
                    <img src={discordLogo} alt="Discord" className="social-icon" />
                </a>
                <a href="https://github.com/SakuraDevMC" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub" className="social-icon" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
