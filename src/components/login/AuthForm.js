import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

function AuthForm({ setLoggedIn }) {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState(true); // Default to login

  return (
    <div className="auth-container">
      <div className="form-container">
        {loginForm ? (
          <div className="form">
            <h2>Login Form</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button
              onClick={() => {
                navigate('/');
                setLoggedIn(true);
              }}
            >
              Login
            </button>
            <p className="member-text">
              Not a member?{' '}
              <span onClick={() => setLoginForm(false)} className="toggle-link">
                Sign Up Now
              </span>
            </p>
          </div>
        ) : (
          <div className="form">
            <h2>Sign Up Form</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button
              onClick={() => {
                navigate('/');
                setLoggedIn(true);
              }}
            >
              Submit
            </button>
            <p className="member-text">
              Already a member?{' '}
              <span onClick={() => setLoginForm(true)} className="toggle-link">
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
