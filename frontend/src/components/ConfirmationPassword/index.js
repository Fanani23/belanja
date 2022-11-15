import { ReactComponent as LogoLogin } from "../../images/Logo.svg";
import { useNavigate } from "react-router-dom";
import "@fontsource/metropolis";
import "./ConfirmationPassword.css";

const ConfirmationPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <div>
        <LogoLogin className="logo" />
      </div>
      <div>
        <p className="conf-text">Reset Password</p>
      </div>
      <div className="conf-box">
        <div className="conf-val">
          <input
            type="text"
            className="form-control"
            placeholder="New password"
          />
        </div>
        <div className="conf-val">
          <input
            type="text"
            className="form-control"
            placeholder="Confirmation password"
          />
        </div>
      </div>
      <div className="txt-conf">
        <a href="/forgot-password">Forgot password?</a>
      </div>
      <div className="">
        <button
          type="button"
          className="btn btn-danger btn-prim-conf"
          onClick={() => navigate("/login")}
        >
          New Password
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPassword;
