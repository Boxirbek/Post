import React, { useState } from 'react';
import axios from 'axios';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            content,
            timestamp: new Date().toISOString(),
        };

        axios.post('https://your-render-url.com/posts', newPost)
            .then(response => {
                console.log('Post added:', response.data);
                setTitle('');
                setContent('');
                alert('New post added successfully!');
            })
            .catch(error => {
                console.error('There was an error adding the post!', error);
            });
    };

    return (
        <div>
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default NewPost;
