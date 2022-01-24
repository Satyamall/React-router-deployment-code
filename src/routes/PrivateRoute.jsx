import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ path, exact, children }) {
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
