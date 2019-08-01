import styled from 'styled-components';

export const StyledLoginForm = styled.form`
    width: 280px
    height: 235px;

    .row{
        border-bottom: 2px solid #adadad;
        margin-bottom: 37px;
    }

    input {
        color: #555;
        line-height: 1.2;
        font-size: ${({ theme }) => theme.smallFont};
        font-family: ${({ theme }) => theme.poppinsFont};
        height: 45px;
        padding: 0 5px;
        outline: none;
        border: none;
        width: 100%;

        ::placeholder{
            color: #adadad
        }

        &:focus {
            color: ${({ theme }) => theme.blue};

            ::placeholder{
                opacity: 0;
            }
        }

    }
`;
