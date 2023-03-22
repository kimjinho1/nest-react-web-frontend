import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const API_ID = process.env.REACT_APP_GOOGLE_OAUTH_API_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={`${API_ID}`}>
    <App />
  </GoogleOAuthProvider>
);
