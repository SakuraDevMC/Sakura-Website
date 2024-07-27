import React from 'react';
import { Link } from 'react-router-dom';
import bankerImage from '../assets/banker-image.png';
import hitmanImage from '../assets/hitman-image.png';

const ExpertiseSection = () => {
    return (
        <section className="our-expertise" id="about">
            <div className="expertise-text">
                <h2>Discover Our Expertise</h2>
                <p>At Sakura Studios, our mission is to revolutionize the Minecraft gaming landscape by developing cutting-edge Spigot plugins that captivate players and elevate the overall gameplay experience.</p>
            </div>
            <div className="expertise-images">
                <Link to="/banker">
                    <div className="expertise-image-container">
                        <img src={bankerImage} alt="Banker" className="expertise-image"/>
                        <div className="expertise-overlay">
                            <h3>Banker</h3>
                            <p>Founder & Developer</p>
                        </div>
                    </div>
                </Link>
                <Link to="/hitman">
                    <div className="expertise-image-container">
                        <img src={hitmanImage} alt="Hitman" className="expertise-image"/>
                        <div className="expertise-overlay">
                            <h3>Hitman</h3>
                            <p>Founder & Developer</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default ExpertiseSection;
