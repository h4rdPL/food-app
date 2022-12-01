import React from "react";
import { ThemeProvider } from "styled-components";
import "./styles/styles.css";
import { theme } from "themes/theme";
import { GlobalStyle } from "themes/GlobalStyle";

const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
