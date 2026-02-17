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
        <input placeholder="Enter your first name" />
        <label>Last name*</label>
        <input placeholder="Enter your last name" />
        <label>Email*</label>
        <input type="email" placeholder="Enter your Email address" />
        <label>Password*</label>
        <input type="password" placeholder=" Enter your Password" />

        <div className="row">
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <label className="checkbox">
          <input type="checkbox"  style={{margin: 0, padding: 0, fontSize: "8px"}}/>
          <p style={{fontSize: "14px", padding: 0, margin: 0}}> I have read and agree to worksuad<Link to="/"> Terms</Link> and  <Link to="/">Privacy Policy</Link></p>
        </label>
        </div>
      </div>
        <button className="primary-btn">Sign up</button>

        <p className="switch">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
