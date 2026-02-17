import AuthLayout from "../components/AuthLayout";
import wkimg from "../assets/wkimg.png"; 
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <AuthLayout title="Forgot Password">
      <div className="auth-logo">
               <img src={wkimg} alt="Logo" className="auth-logo" />
      </div>
      <p style={{fontSize: "14px", padding: 0, margin: 0}}> Please enter your email address, and click continue to request password reset</p><br></br>
      <form className="auth-form">
        <label>Email Address*</label>
        <input type="email" placeholder="Email Address" />

        <div className="outline-row">
          <Link className="outline-btn" to="/">Back</Link>
          <button className="outlineblue-btn">Continue</button>
        </div>
       <p className="switch">
         Didn’t receive an email? <Link to="/forgot-password">Retry</Link>
       </p> 

      </form>
    </AuthLayout>
  );
}
