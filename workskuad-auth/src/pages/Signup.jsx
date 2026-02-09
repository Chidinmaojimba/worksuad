import AuthLayout from "../components/AuthLayout";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <AuthLayout title="Create account">
      <form className="auth-form">
        <input placeholder="First name" />
        <input placeholder="Last name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <label className="checkbox">
          <input type="checkbox" /> I agree to Terms & Privacy Policy
        </label>

        <button className="primary-btn">Sign up</button>

        <p className="switch">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
