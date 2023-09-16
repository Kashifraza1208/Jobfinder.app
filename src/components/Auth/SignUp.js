// Login.js
import React, { useEffect, useState } from "react";
import "./Login.css"; // Import the CSS file

import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/authAction";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    dispatch(register(userData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="LoginSignUpContainer">
      <div className="LoginSignUpBox">
        <h2 className="heading">SignUp</h2>

        <form className="loginForm" onSubmit={registerSubmit}>
          <div className="loginEmail">
            <input
              type="text"
              placeholder="Name"
              required
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <input type="submit" value="Register" className="loginBtn" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
