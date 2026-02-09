import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <AuthLayout title="Forgot Password">
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
