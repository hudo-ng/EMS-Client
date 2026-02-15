import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
export default function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      {token && (
        <>
          <Link to="/employees">Employees</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
