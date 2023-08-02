import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Components/Form.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // Find the user with the matching email
    const user = existingUsers.find((user) => user.email === email);

    if (!user || user.password !== password) {
      alert("Invalid email or password.");
      return;
    }

    // Store a simple token (for demonstration purposes only)
    localStorage.setItem("token", "userToken");
    alert("Login successful!");
    navigate("/dashboard");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <section id="form">
      <div className="login-box">
        <form onSubmit={handleFormSubmit}>
          <h1>LOGIN</h1>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="">Password: </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit" value="submit" className="button3">
            Login
          </button>
          <br />
        </form>
        <p className="formpa">
          Don't have an account?
          <Link to="/register" className="formpaa">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
