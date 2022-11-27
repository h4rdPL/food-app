import { createGlobalStyle } from "styled-components";
import RobotoWoff2 from "assets/fonts/Montserrat-VariableFont_wght.ttf";
import RobotoWoff2Bold from "assets/fonts/Montserrat-Bold.ttf";
// setting global style using styled-components
export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    /* setting fonts */
    @font-face {
        font-family: 'Montserrat';
        font-weight: bold;
        src: url(${RobotoWoff2Bold});


    }
    @font-face {
        font-family: 'Montserrat';
        src: url(${RobotoWoff2});
    }


    body {
        font-family: 'Montserrat';
        font-size: 16px;
        
    }
    ul {
        list-style: none;
    } 
    a {
        text-decoration: none;
        cursor: pointer;
    }
    img {
        width: 100%;
    }
    button {
        font-family: "Montserrat";
    }

`;
