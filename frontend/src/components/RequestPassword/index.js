import { ReactComponent as LogoLogin } from "../../images/Logo.svg";
import { ReactComponent as LogoRequest } from "../../images/Lock.svg";
import { useNavigate } from "react-router-dom";
import "@fontsource/metropolis";
import "./RequestPassword.css";

const RequestPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <div>
        <LogoLogin className="logo" />
      </div>
      <div>
        <p className="req-text">Request to Reset Your Account Password</p>
      </div>
      <div className="req-box">
        <LogoRequest />
      </div>
      <div className="">
        <button
          type="button"
          className="btn btn-danger btn-prim-req"
          onClick={() => navigate("/new-password")}
        >
          Request
        </button>
      </div>
    </div>
  );
};

export default RequestPassword;
