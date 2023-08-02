import { useEffect, useState } from "react";
import { fakeApi } from "../Api/Api";
import Cookies from "js-cookie";

const Form = () => {
  let [rdata, setRdata] = useState("");
  let [submit, setSubmit] = useState(false);
  const register = async (username, password) => {
    try {
      let data = await fakeApi.post("/auth/login", { username, password });
      setRdata(data);
    } catch (error) {
      console.log(error);
    }
  };
  let [username, Setusername] = useState("");

  let [password, Setpassword] = useState("");
  useEffect(() => {
    if (rdata) {
      Cookies.set("Logintoken", rdata?.data?.token);
    }
  }, [rdata]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // SetInfo((prevState) => ({
        //   ...prevState,
        //   username,
        //   password,
        // }));
      }}
    >
      <br></br>
      <label htmlFor="username">username:</label>
      <input
        id="username"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => {
          Setusername(e.target.value);
        }}
      ></input>
      <br />

      <br></br>
      <label htmlFor="password">password:</label>
      <input
        id="password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => {
          Setpassword(e.target.value);
        }}
      ></input>
      <br />

      <button
        type="submit"
        onClick={() => {
          setSubmit(!submit);
          register(username, password);
        }}
      >
        sendme{" "}
      </button>
    </form>
  );
};

export default Form;
