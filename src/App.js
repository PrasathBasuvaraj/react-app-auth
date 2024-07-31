//@ts-check
import React from "react";
import "./App.css";
import { AuthProvider } from "./AuthContext";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Main />
    </AuthProvider>
  );
}

export default App;
