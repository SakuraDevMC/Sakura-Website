import React from 'react';
import hitmanImage from '../assets/hitman-image.png';  // Correct the path

const HitmanPage = () => {
    return (
        <div>
            <h2>Hitman</h2>
            <img src={hitmanImage} alt="Hitman" />
            <p>Details about Hitman...</p>
        </div>
    );
}

export default HitmanPage;
