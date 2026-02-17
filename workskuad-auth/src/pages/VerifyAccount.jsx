    import AuthLayout from "../components/AuthLayout";
    import wkimg from "../assets/wkimg.png"; 

export default function VerifyAccount() {
  return (
    <AuthLayout title="Account Verification">
      <div className="auth-logo">
               <img src={wkimg} alt="Logo" className="auth-logo" />
       </div>
      <form className="auth-form">
        <input placeholder="Verification code" />
        <button className="primary-btn">Verify account</button>  
       <p className="switch">
         Didn’t receive an email? <Link to="/verify">Retry</Link>
       </p> 
      </form>
    </AuthLayout>
  );
}
