import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./themes/default-theme";
import App from "./components/app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
