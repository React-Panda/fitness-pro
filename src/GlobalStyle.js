import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

    }

    img {
        max-width: 100%;
        height: auto;
    }

    html {
        font-size: 10px;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    ul,li{
        list-style: none;
    }

    body {
        background-color: ${(props) => props.theme.BodyColor};
        font-family: "Poppins", sans-serif;
        transition: .4s ;
    }

    ::selection {
     color: #fff;
     background: ${(props) => props.theme.PrimaryColor};
    }
 
`;
