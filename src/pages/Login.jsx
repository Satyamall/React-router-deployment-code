import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [auth, { handleSignIn }] = useContext(AuthContext);
  if (auth) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      Login
      <div>
        <button onClick={handleSignIn}>SIGN IN</button>
      </div>
    </div>
  );
}

export default Login;
