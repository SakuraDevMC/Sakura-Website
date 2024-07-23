// src/components/Repositories.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Repositories = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/orgs/SakuraDevMC/repos');
                setRepos(response.data);
            } catch (error) {
                console.error('Error fetching the repositories:', error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className="repositories">
            <h2>Our Open Source Products</h2>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Repositories;
