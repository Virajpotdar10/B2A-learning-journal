import { useNavigate } from "react-router-dom";
import { clearAuthUser } from "../utils/auth";

export default function Journal() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuthUser();
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Knowledge Journal</h1>
      <p>Welcome — your learning entries will appear here.</p>
    </div>
  );
}
