import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/auth";

import GlobalStyles from "./global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
