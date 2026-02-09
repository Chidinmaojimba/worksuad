import AuthLayout from "../components/AuthLayout";

export default function TwoFactor() {
  return (
    <AuthLayout title="Two factor authentication">
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
