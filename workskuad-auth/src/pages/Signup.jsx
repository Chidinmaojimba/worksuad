import AuthLayout from "../components/AuthLayout";
import wkimg from "../assets/wkimg.png"; 
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <AuthLayout title="Create account">
      <div className="auth-logo">
               <img src={wkimg} alt="Logo" className="auth-logo" />
      </div>
      <form className="auth-form">
        <label>First name*</label>
        <input placeholder="First name" />
        <label>Last name*</label>
        <input placeholder="Last name" />
        <label>Email*</label>
        <input type="email" placeholder="Email address" />
        <label>Password*</label>
        <input type="password" placeholder="Password" />

        <label className="checkbox">
          <input type="checkbox" /> I have read and agree to worksuad Terms & Privacy Policy
        </label>

        <button className="primary-btn">Sign up</button>

        <p className="switch">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
