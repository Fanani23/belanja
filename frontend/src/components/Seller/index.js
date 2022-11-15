import { ReactComponent as LogoLogin } from "../../images/Logo.svg";
import { useNavigate } from "react-router-dom";
import "@fontsource/metropolis";
import "./Seller.css";

const Seller = () => {
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <div>
        <LogoLogin className="logo" />
      </div>
      <div>
        <p className="log-text">Please sign up with your account</p>
      </div>
      <div className="btn-group btn-box" role="group" aria-label="button-login">
        <input
          type="radio"
          className="btn-check"
          name="btn-radio"
          id="btn-customer"
          autoComplete="off"
          onClick={() => navigate("/signup")}
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
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="input-val">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
        <div className="input-val">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>
        <div className="input-val">
          <input type="text" className="form-control" placeholder="Store" />
        </div>
        <div className="input-val">
          <input type="text" className="form-control" placeholder="Password" />
        </div>
      </div>
      <div className="">
        <button
          type="button"
          className="btn btn-danger btn-prim-seller"
          onClick={() => navigate("/")}
        >
          Sign Up
        </button>
      </div>
      <div className="txt-bot-seller">
        <p>Already have a Belanja account?</p>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Seller;
