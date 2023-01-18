import styled from "styled-components";

export const GithubInfoContainer = styled.section`
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    
    background-color: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    padding-left: 2.5rem;
    padding-top: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;

    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }
`;

export const GithubInfoTitleContent = styled.section`
    display: flex;
    justify-content: space-between;

    a {
        display: flex;
        gap: 0.5rem;
        justify-content: flex-end;
        align-items: center;
    }
`;

export const GithubInfoDescription = styled.section`
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;

export const GithubInfoLabelContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
`;