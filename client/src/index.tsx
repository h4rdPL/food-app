import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "routes/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "themes/GlobalStyle";
import { theme } from "themes/theme";
import { AuthContexProvider } from "context/authContext";
import { ShoppingCartProvider } from "context/shoppingCartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AuthContexProvider>
    <ShoppingCartProvider>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </React.StrictMode>
    </ShoppingCartProvider>
  </AuthContexProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
