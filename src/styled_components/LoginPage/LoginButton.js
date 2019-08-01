import styled from 'styled-components';

export const LoginButton = styled.button`
    font-size: ${({ theme }) => theme.smallFont};
    font-family: ${({ theme }) => theme.poppinsFont};
    color: #fff;
    text-transform: uppercase;
    padding: 0 20px;
    height: 50px;
    width: 100%;
    background: ${({ theme }) => theme.blue};
    outline: none;
    border: none;
    border-radius: 25px;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.darkBlue};
    }
`;
