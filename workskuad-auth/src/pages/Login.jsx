import AuthLayout from "../components/AuthLayout";
import wkimg from "../assets/wkimg.png"; 
import { Link } from "react-router-dom";

export default function Login() {
  return (

    <AuthLayout
      title="Welcome back"
      subtitle="Please enter your details"
    >

      <div className="auth-logo">
         <img src={wkimg} alt="Logo" className="auth-logo" />
       </div>
      <form className="auth-form">
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <div className="row">
          <label className="checkbox">
            <input type="checkbox" /> Keep me logged in
          </label>
          <Link to="/forgot-password">Forgot password</Link>
        </div>

        <button className="primary-btn">Log in</button>

        <p className="switch">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
