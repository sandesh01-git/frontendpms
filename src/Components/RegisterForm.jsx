import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Components/Form.css";
import img from "../Components/Images/sign.svg";
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassWord] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [show, setShow] = useState(false);

  // const addToLocalStorage = (email, password, cpassword) => {
  //   localStorage.setItem(email, password, cpassword);
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email && password && cpassword) {
      if (password === cpassword) {
        if (password.length > 5 && password.length <= 15) {
          // localStorage.setItem("email", email);
          // localStorage.setItem("password", password);
          // localStorage.setItem("cpassword", cpassword);
          // addToLocalStorage(email, password, cpassword);
          addUserToLocalStorage(email, password);
          alert("Account created successfully");
          navigate("/");
        } else {
          alert("must be between 5 to 15 character length required");
        }
      } else {
        alert("Passwords  not match.");
      }
    } else {
      alert("Please fill otherwise no chance.");
    }
  };
  const addUserToLocalStorage = (email, password) => {
    const existingUsers = getUsersFromLocalStorage();
    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
  };

  const getUsersFromLocalStorage = () => {
    const usersString = localStorage.getItem("users");
    return usersString ? JSON.parse(usersString) : [];
  };

  return (
    <section className="my-5" id="san">
      <div className="first">
        <div className="py-5">
          <h2 className="text-center">Register Form</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div id="height" className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <img src={img} style={{ width: "100%" }} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 ">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group ">
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
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                  {/* <span
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  0
                </span> */}
                  <br />
                </div>

                <div className="form-group">
                  <input
                    className="mb-3 col-lg-6"
                    type="password"
                    placeholder="Enter Password to confirm"
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                    required
                  />
                  <br />
                </div>

                <button
                  type="submit"
                  value="submit"
                  className="btn btn-success col-lg-6"
                >
                  Register
                </button>
              </form>

              <p className="formpa mt-3 col-lg-6">
                Already have an account?
                <Link to="/" className="formpaa">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
