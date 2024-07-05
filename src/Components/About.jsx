import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const About = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://your-render-url.com/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <div>
            {post ? (
                <div className="post">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p>{new Date(post.timestamp).toLocaleString()}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default About;
