import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyAccount from "./pages/VerifyAccount";
import ForgotPassword from "./pages/ForgotPassword";
import TwoFactor from "./pages/TwoFactor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<VerifyAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/2fa" element={<TwoFactor />} />
      </Routes>
    </BrowserRouter>
  );
}
