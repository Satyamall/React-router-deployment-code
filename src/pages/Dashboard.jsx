import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const [auth, { handleSignout }] = useContext(AuthContext);

  return (
    <div>
      Dashboard
      <div>
        <button onClick={handleSignout}>SIGN OUT</button>
      </div>
    </div>
  );
}

export default Dashboard;
