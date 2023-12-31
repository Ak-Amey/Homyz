import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Auth0Provider domain="dev-cr5faa6zrt6rqewb.us.auth0.com"
  clientId="UmCWEY6ej3xNtVWGHseUQgF6QAhkAhCn"
  authorizationParams={{
    redirect_uri:"https://homyz-tau.vercel.app"
  }}
  audience="http://localhost:8000"
  scope="openid profile email"
>
    <App />
  </Auth0Provider>
  </React.StrictMode>
);
