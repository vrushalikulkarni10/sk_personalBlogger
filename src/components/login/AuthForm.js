import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';
function AuthForm({ setLoggedIn }) {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState(false);
  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            onClick={() => setLoginForm(true)}
            className={loginForm ? 'active' : ' '}
          >
            Login
          </button>
          <button
            className={!loginForm ? 'active' : ' '}
            onClick={() => setLoginForm(false)}
          >
            SignUp
          </button>
        </div>
        {loginForm ? (
          <>
            <div className="form">
              <h2>Login Form </h2>
              <input
                type="email"
                placeholder="Email"
              />
              <input
                type="password"
                placeholder="Password"
              />
              <a href="#"> Forgot Password ? </a>
              <button
                onClick={() => {
                  navigate('/');
                  setLoggedIn(true);
                }}
              >
                Login
              </button>
              <p>
                Not a Member ?{' '}
                <p
                  onClick={() => {
                    setLoginForm(false);
                  }}
                >
                  Signup Now
                </p>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Sign Up Form</h2>
              <input
                type="text"
                placeholder="UserName"
              ></input>
              <input
                type="email"
                placeholder="Email"
              />
              <input
                type="password"
                placeholder=" Password"
              />
              <input
                type="password"
                placeholder=" Confirm Password"
              />
              <button
                onClick={() => {
                  navigate('/');
                  setLoggedIn(true);
                }}
              >
                Submit{' '}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
