    import AuthLayout from "../components/AuthLayout";

export default function VerifyAccount() {
  return (
    <AuthLayout title="Account Verification">
      <form className="auth-form">
        <input placeholder="Verification code" />
        <button className="primary-btn">Verify account</button>
        <p className="hint">Didn’t receive an email? Retry</p>
      </form>
    </AuthLayout>
  );
}
