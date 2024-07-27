import React from 'react';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-overlay"></div>
            <img src={heroImage} alt="Hero" className="hero-image"/>
            <div className="hero-text">
                <h1>Sakura Studios: Crafting Minecraft Greatness</h1>
                <p>Dedicated to Developing Top-Notch Spigot Plugins</p>
                <button className="cta-button">Explore Our Work</button>
                <p className="founders">Founded by two passionate developers, Banker and Hitman</p>
            </div>
        </section>
    );
}

export default HeroSection;
