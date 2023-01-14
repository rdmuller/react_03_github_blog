import styled from "styled-components";

export const InfoLabelContainer = styled.div`
    gap: 0.5rem;
    display: flex;
    justify-content: flex-start;

    span {
        color: ${props => props.theme["base-subtitle"]};
        line-height: 1.6;
    }

    svg {
        color: ${props => props.theme["base-label"]};
        height: 1.125rem;
    }
`;