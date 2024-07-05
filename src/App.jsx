import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search';
import About from './Components/About';
import NewPost from './Components/NewPost';

const App = () => {
  return (
    <Router>
      <header>
        <h1>React JS Blog</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/new">New Post</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </div>
      <footer>
        <p>Copyright © 2024</p>
      </footer>
    </Router>
  );
};

export default App;
