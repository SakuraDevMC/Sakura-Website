import React from 'react';
import bankerImage from '../assets/banker-image.png';  // Correct the path

const BankerPage = () => {
    return (
        <div>
            <h2>Banker</h2>
            <img src={bankerImage} alt="Banker" />
            <p>Details about Banker...</p>
        </div>
    );
}

export default BankerPage;
