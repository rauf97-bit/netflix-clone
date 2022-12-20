import "./login.scss";
import axios from 'axios'
import img from "../../assets/images/bcg.jpg";
import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '71c7cb7e3bmsh918c4979d20a3a8p144613jsn49c42c2f74ea',
      'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
    }
  };
  
  fetch('https://unogs-unogs-v1.p.rapidapi.com/search/deleted', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={img}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" type="submit">
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
