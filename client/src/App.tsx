import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "components/atoms/Button/Button";
import "./styles/styles.css";
import { theme } from "themes/theme";
import { Heading } from "components/atoms/Heading/Heading";
import { GlobalStyle } from "themes/GlobalStyle";
import { Faq } from "components/organisms/FAQ/Faq";
const App = (): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button>example button</Button>
        <Faq />
        <Heading title>Hello wordls</Heading>
      </ThemeProvider>
    </>
  );
};

export default App;
