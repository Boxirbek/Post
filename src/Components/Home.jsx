import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://your-render-url.com/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`https://your-render-url.com/posts/${id}`)
            .then(() => setPosts(posts.filter(post => post.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Home</h1>
            <div>
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <Link to={`/about/${post.id}`}>Read More</Link>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
