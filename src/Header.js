// Header.js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Header = () => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <header>
      <h1>My Application</h1>
      {authState.isAuthenticated ? (
        <>
          <p>Welcome, {authState.user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in.</p>
      )}
    </header>
  );
};

export default Header;
