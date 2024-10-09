// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/login/AuthForm';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/pages';
import WriteBlog from './components/WriteBlog/WriteBlog';
import Dashboard from './components/dashboard/Dashboard';
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn, '====loggedIn');

  return (
    <div className="main">
      <Router>
        {loggedIn && (
          <Navbar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        )}
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/writeBlog" element={<WriteBlog />} />
              <Route path="/updateBlog" element={<WriteBlog />} />
            </>
          ) : (
            <Route
              path="/auth"
              element={
                <AuthForm
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
          )}
          <Route
            path="*"
            element={
              loggedIn ? (
                <Home />
              ) : (
                <AuthForm
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
