import { ReactComponent as LogoLogin } from "../../images/Logo.svg";
import { useNavigate } from "react-router-dom";
import "@fontsource/metropolis";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

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
        <div className="input-val">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="input-val">
          <input type="text" className="form-control" placeholder="Password" />
        </div>
      </div>
      <div className="txt-forgot">
        <a href="/forgot-password">Forgot password?</a>
      </div>
      <div className="">
        <button
          type="button"
          className="btn btn-danger btn-prim-login"
          onClick={() => navigate("/home-login")}
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
