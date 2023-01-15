import styled from "styled-components";

interface HeaderContainerProps {
    backgroundImage: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
    background-color: ${props => props.theme["base-profile"]};
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 4rem;
    height: 18.5rem;
`;

export const ImgLogo = styled.img`
    display: block;
`;
