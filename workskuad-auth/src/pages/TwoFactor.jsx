import AuthLayout from "../components/AuthLayout";
import wkimg from "../assets/wkimg.png"; 

export default function TwoFactor() {
  return (
    <AuthLayout title="Two factor authentication">
      <div className="auth-logo">
               <img src={wkimg} alt="Logo" className="auth-logo" />
      </div>
      <form className="auth-form">
        <input placeholder="Verification code" />

        <div className="row">
          <button className="outline-btn">Back</button>
          <button className="primary-btn">Continue</button>
        </div>

        <p className="hint">Didn’t get a code? Reset</p>
      </form>
    </AuthLayout>
  );
}
