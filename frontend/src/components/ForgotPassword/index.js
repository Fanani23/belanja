import { ReactComponent as LogoLogin } from "../../images/Logo.svg";
import { useNavigate } from "react-router-dom";
import "@fontsource/metropolis";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <div>
        <LogoLogin className="logo" />
      </div>
      <div>
        <p className="forgot-text">Reset Password</p>
      </div>
      <div className="forgot-box">
        <div className="forgot-val">
          <input type="text" className="form-control" placeholder="Email" />
        </div>
      </div>
      <div className="txt-forget">
        <a href="/forgot-password">Forgot password?</a>
      </div>
      <div className="">
        <button
          type="button"
          className="btn btn-danger btn-prim-forgot"
          onClick={() => navigate("/req-password")}
        >
          Send
        </button>
      </div>
      <div className="txt-bot-forgot">
        <p>Don't have a Belanja account?</p>
        <a href="/signup">Register</a>
      </div>
    </div>
  );
};

export default ForgotPassword;
