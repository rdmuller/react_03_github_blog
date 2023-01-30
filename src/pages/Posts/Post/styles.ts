import styled from "styled-components";

export const PostContainer = styled.main`
    padding: 40px 32px;

    p {
        font-weight: 400;
        line-height: 1.6;
        font-size: 1rem;
    }

    a {
        color: ${props => props.theme.blue};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

`;