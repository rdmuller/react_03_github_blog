import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 26rem;
    width: 26rem;
    min-height: 16.25rem;
    background-color: ${props => props.theme["base-post"]};
    border: 2px solid ${props => props.theme["base-post"]};
    border-radius: 10px;
    padding: 32px;
    cursor: pointer;

    :hover {
        border: 2px solid ${props => props.theme["base-label"]};
    }

    div {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    span {
        color: ${props => props.theme["base-span"]};
        font-size: 0.875rem;
        white-space: nowrap;
    }

    P {
        overflow: hidden; /* remove o estouro do elemento */
        display: -webkit-box;
        -webkit-line-clamp: 4; /* quantidade de linhas */
        -webkit-box-orient: vertical; /* conteúdo será apresentado verticalmente */
    }
`;