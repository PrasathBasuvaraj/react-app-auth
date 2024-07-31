// Login.js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const user = { name: "John Doe" }; // Replace with real user data
    login(user);
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
