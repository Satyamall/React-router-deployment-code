import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "center" }}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Navbar;
