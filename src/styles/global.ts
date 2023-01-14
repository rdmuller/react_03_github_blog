import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, text-area, button {
        font-family: nunito;
        line-height: 1.3;
    }

    body {
        background-color: ${props => props.theme["base-background"]};
        color: ${props => props.theme["base-text"]};
    }

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme["base-title"]};
    }
`;