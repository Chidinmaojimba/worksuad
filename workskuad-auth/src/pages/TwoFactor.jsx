import AuthLayout from "../components/AuthLayout";
import wkimg from "../assets/wkimg.png"; 
import { Link } from "react-router-dom";
export default function TwoFactor() {
  return (
    <AuthLayout title="Two factor authentication">
      <div className="auth-logo">
               <img src={wkimg} alt="Logo" className="auth-logo" />
      </div>
      <p style={{fontSize: "14px", padding: 0, margin: 0}}> Please put in the verification sent to your phone or authenticator app</p><br></br>
      <form className="auth-form">
        <label>Verification code*</label>
        <input type="text" placeholder="Verification code" />

       <div className="outline-row">
          <Link className="outline-btn" to="/forgot-password">Back</Link>
          <button className="outlineblue-btn">Continue</button>
        </div>

       <p className="switch">
         Don’t have access to your authenticator app or phone number? <Link to="/forgot-password">Click here to reset</Link>
        </p>  
      </form>
    </AuthLayout>
  );
}
