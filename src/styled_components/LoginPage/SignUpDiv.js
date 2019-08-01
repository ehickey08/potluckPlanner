import styled from 'styled-components';

export const SignUpDiv = styled.div`
    padding-top: 115px;
    span {
        font-family: ${({ theme }) => theme.poppinsFont};
        font-weight: 400;
        font-size: ${({ theme }) => theme.tinyFont};
        color: #666;
        line-height: 1.5;
        padding-right: 5px;
    }
    a {
        font-family: ${({ theme }) => theme.poppinsFont};
        font-weight: 400;
        font-size: ${({ theme }) => theme.tinyFont};
        color: #333;
        line-height: 1.5;

        :hover {
            text-decoration: underline;
            color: ${({ theme }) => theme.blue};
        }
    }
`;
