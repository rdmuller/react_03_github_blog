import styled from "styled-components";

export const SearchFormContainer = styled.form`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > div {
        display: flex;
        justify-content: space-between;
    }

    span {
        color: ${props => props.theme["base-span"]};
        font-size: 0.875rem;
    }

    input {
        flex: 1;
        border-radius: 6px;
        padding: 12px 16px;
        border: 1px solid ${props => props.theme["base-border"]};
        color: ${props => props.theme["base-text"]};
        font-size: 1rem;
        font-weight: 400;
        background-color: ${props => props.theme["base-input"]};

        ::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }
`;