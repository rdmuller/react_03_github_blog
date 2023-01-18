import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, text-area, button {
        font-family: nunito;
        line-height: 1.6;
    }

    body {
        background-color: ${props => props.theme["base-background"]};
        color: ${props => props.theme["base-text"]};
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme["base-title"]};
        line-height: 1.3;
    }

    h2 {
        font-size: 1.25rem;
        color: ${props => props.theme["base-title"]};
    }

    h3 {
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    a {
        font-weight: 700;
        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${props => props.theme.blue};
        text-decoration: none;

        border-color: ${props => props.theme.blue};
        border-style: solid;
        border-width: 0px 0px 0px 0px;

        :hover {
            border-width: 0px 0px 1px 0px;
        }
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme.blue};
    }
`;