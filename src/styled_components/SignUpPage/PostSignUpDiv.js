import styled from 'styled-components';

export const PostSignUpDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    width: 100%;

    h2 {
        font-size: ${({ theme }) => theme.mediumFont};
        display: block;
        margin-bottom: 15px;
    }

    a {
        font-size: ${({ theme }) => theme.mediumFont};
        text-decoration: underline;
        color: ${({ theme }) => theme.blue};
    }
`;
