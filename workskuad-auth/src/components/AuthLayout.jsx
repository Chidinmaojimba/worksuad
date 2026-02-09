// import wkimg from "../assets/wkimg.png"; 

export default function AuthLayout({ title, subtitle, children }) {
  return (

  //  <div className="auth-logo">
  //        <img src={wkimg} alt="Logo" className="auth-logo" />
  //     </div>


    <div className="auth-container">
      <div className="auth-card">
        <h2>{title}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
