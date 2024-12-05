import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-body">
      <div className="title">SPIRITCARD</div>
      <div className="login-card">
        <div className="email-data">
          <span>Email</span>
          <input
            type="text"
            name="email-input"
            id="email-input"
            className="email-input"
            placeholder="email@domain.com"
          />
        </div>
        <div className="password-data">
          <span>Password</span>
          <input
            type="password"
            name="password-input"
            id="password-input"
            className="password-input"
            placeholder=""
          />
        </div>

        <div className="login-options">
          <div className="login-option">G</div>
          <div className="login-option">G</div>
          <div className="login-option">G</div>
          <div className="login-option">G</div>
        </div>

        <div className="login-button">Sing In</div>
        <Link to="/singUp" className="sing-up-link">
          Sing up for free here
        </Link>
      </div>
    </div>
  );
}

export default Login;
