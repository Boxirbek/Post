import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        axios.get('https://your-render-url.com/posts')
            .then(response => {
                const filteredPosts = response.data.filter(post =>
                    post.title.toLowerCase().includes(search.toLowerCase())
                );
                setResults(filteredPosts);
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Search</h1>
            <input
                type="text"
                placeholder="Search Posts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {results.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
