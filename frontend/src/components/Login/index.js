import { ReactComponent as LogoLogin } from "../../images/Logo.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import loginUser from "../Redux/Actions/Login";
import { useDispatch } from "react-redux";
import "@fontsource/metropolis";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data, navigate));
  };

  return (
    <div className="container-home">
      <div>
        <LogoLogin className="logo" />
      </div>
      <div>
        <p className="log-text">Please login with your account</p>
      </div>
      <div className="btn-group btn-box" role="group" aria-label="button-login">
        <input
          type="radio"
          className="btn-check"
          name="btn-radio"
          id="btn-customer"
          autoComplete="off"
          checked
        />
        <label
          className="btn btn-outline-danger btn-customer"
          for="btn-customer"
        >
          <p className="mt-2 mb-1 text-customer">Customer</p>
        </label>
        <input
          type="radio"
          className="btn-check"
          name="btn-radio"
          id="btn-seller"
          autoComplete="off"
          checked
        />
        <label className="btn btn-outline-danger btn-seller" for="btn-seller">
          <p className="mt-2 mb-1 text-seller">Seller</p>
        </label>
      </div>
      <div className="input-box">
        <form onSubmit={handleLogin} id="form-login" className="input-val">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
      <div className="txt-forgot">
        <a href="/forgot-password">Forgot password?</a>
      </div>
      <div className="">
        <button
          onClick={handleLogin}
          type="submit"
          form="form-login"
          className="btn btn-danger btn-prim-login"
        >
          Login
        </button>
      </div>
      <div className="txt-bot-login">
        <p>Don't have a Belanja account?</p>
        <a href="/signup">Register</a>
      </div>
    </div>
  );
};

export default Login;
