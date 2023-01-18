import styled from "styled-components";

export const PostInfoContainer = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    
    background-color: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    padding-left: 2.5rem;
    padding-top: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;

    h1 {
        margin-bottom: 0.5rem;
        margin-top: 1.25rem;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const PostInfoLabelContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
`;