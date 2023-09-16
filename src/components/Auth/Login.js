// Login.js
import React, { useEffect, useState } from "react";
import "./Login.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeAuthentication, login } from "../redux/authAction";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  useEffect(() => {
    // Initialize authentication state from local storage
    dispatch(initializeAuthentication());

    if (isAuthenticated) {
      // Redirect to the home page after successful login
      navigate("/");
    }
  }, [isAuthenticated, dispatch, navigate]);

  return (
    <div className="LoginSignUpContainer">
      <div className="LoginSignUpBox">
        <h2 className="heading">Login</h2>

        <form className="loginForm" onSubmit={loginSubmit}>
          <div className="loginEmail">
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="loginPassword">
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/register">New User ? SignUp</Link>
          <input type="submit" value="Login" className="loginBtn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
