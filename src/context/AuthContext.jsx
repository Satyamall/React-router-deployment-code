import React, { useState } from "react";
export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);

  const handleSignIn = ({ email, password }) => {
    // * manage sign in
    if (!auth) {
      // * handle logic
      setAuth(true);
    } else {
      // * already signed in
      return true;
    }
  };

  const handleSignout = () => {
    // * manage sign out
    if (auth) {
      setAuth(false);
    } else {
      // * already signed out
      return false;
    }
  };

  const isSignedIn = () => {
    // *
    return auth;
  };

  const value = [auth, { handleSignIn, handleSignout, isSignedIn }];

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
