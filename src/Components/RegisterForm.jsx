import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Form.css";

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
    <section id="form">
      <div className="register-box ">
        <form onSubmit={handleFormSubmit}>
          <h1>Register</h1>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br></br>
          <label htmlFor="">Password: </label>
          <input
            type={`${show ? "text" : "password"}`}
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
          <br></br>
          <label htmlFor="">Repassword: </label>
          <input
            type="password"
            placeholder="Enter Password to confirm"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            required
          />
          <br></br>
          <button type="submit" value="submit" className="button3">
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
