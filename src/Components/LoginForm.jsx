import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Components/Form.css";
import img from "../Components/Images/sign.svg";

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
    <section className="my-5" id="san">
      <div className="first">
        <div className="py-5">
          <h2 className="text-center mb-5">LOGIN</h2>
        </div>
        <div className="container-fluid pb-5">
          <div className="row">
            <div id="height" className="col-lg-6 col-md-6 col-sm-12 mt-3 ">
              <img src={img} style={{ width: "100%" }} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 o ">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group mt-5">
                  <input
                    className="mb-3 col-lg-6"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <br />
                </div>
                <div className="form-group">
                  <input
                    className="mb-3 col-lg-6"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <br />
                </div>

                <button
                  type="submit"
                  value="submit"
                  className="btn btn-success col-lg-6"
                >
                  Login
                </button>
              </form>

              <p className="formpa mt-3 col-lg-6">
                Don't have an account?
                <Link to="/register" className="formpaa">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
