import React, { useEffect, useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  });

  return (
    <div
      className="blogs"
      style={{ width: '100%', height: '100%', overflowY: 'auto' }}
    >
      {blogs.map((blog) => {
        return (
          <div>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
