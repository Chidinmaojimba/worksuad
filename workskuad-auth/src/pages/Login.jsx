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
        <label>Email address</label>
        <input type="email" placeholder="Email address" />
        <label>Password</label>
        <input type="password" placeholder="Password" />

        <div className="row">
          <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
          <label className="checkbox">
            <input type="checkbox"  style={{margin: 0, padding: 0}}/> 
          </label>
          <p style={{fontSize: "14px", padding: 0, margin: 0}}>Keep me logged in</p>
          </div>
          <Link className="primary-color text-sm font-semibold" to="/forgot-password">Forgot password</Link>
        </div>

        <button className="primary-btn">Log in</button>

        <p className="switch">
          Don’t have an account? <Link className="primary-color text-sm font-semibold" to="/signup">Sign up</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
