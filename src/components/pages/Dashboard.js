import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return <div>
    Dashboard Page
    <a href="/addblog">Add Blog Post</a>
    <Link to="/addblog">Add Blog Post </Link>
    </div>;
};

export default Dashboard; 
