import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/login/AuthForm';
import { Navbar } from './components/Navbar/Navbar';
import { About, Contact, Home, Dashboard } from './components/pages';
import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/dashboard"
                element={<Dashboard />}
              />
              <Route
                path="/contact"
                element={<Contact />}
              />
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
          {/* Redirect to home if the user is logged in and tries to access the auth route */}
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
