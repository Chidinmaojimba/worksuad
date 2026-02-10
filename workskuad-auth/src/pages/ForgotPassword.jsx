import AuthLayout from "../components/AuthLayout";
import wkimg from "../assets/wkimg.png"; 
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <AuthLayout title="Forgot Password">
      <div className="auth-logo">
               <img src={wkimg} alt="Logo" className="auth-logo" />
      </div>
      <form className="auth-form">
        <input placeholder="Reset token" />

        <div className="row">
          <Link className="outline-btn" to="/">Back</Link>
          <button className="primary-btn">Continue</button>
        </div>

        <p className="hint">Didn’t receive an email? Retry</p>
      </form>
    </AuthLayout>
  );
}
