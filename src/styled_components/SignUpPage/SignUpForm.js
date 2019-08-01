import styled from 'styled-components';
import { device } from '../device';

export const StyledSignUpForm = styled.form`
    h1 {
        margin-bottom: 35px;
        line-height: 1.66;
        font-weight: bold;
        color: #222;
        font-family: ${({ theme }) => theme.poppinsFont};
        font-size: ${({ theme }) => theme.hugeFont};
        color: ${({ theme }) => theme.blue};
    }
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;

    @media ${device.mobileL} {
        width: 100%;
        align-items: center;
    }

    .signup_input_and_label {
        position: relative;
        margin-bottom: 25px;

        label {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            color: #222;

            .icon {
                font-size: 1.5rem;
                color: #708090;
            }
        }
    }

    button {
        background: ${({ theme }) => theme.blue};
        color: #fff;
        border: none;
        border-radius: 5px;
        margin-top: 25px;
        padding: 15px 40px;
        width: fit-content;
        cursor: pointer;
        font-family: ${({ theme }) => theme.poppinsFont};
        font-size: ${({ theme }) => theme.smallFont};

        &:hover {
            background: ${({ theme }) => theme.darkBlue};
        }
    }
`;

export const SignUpInput = styled.input`
    width: 100%;
    display: block;
    border: none;
    border-bottom: 1px solid #999;
    padding: 6px 30px;
    font-family: ${({ theme }) => theme.poppinsFont};
    outline: none;
    font-size: ${({ theme }) => theme.smallFont};

    ::placeholder {
        color: #adadad;
    }
    &:focus {
        color: ${({ theme }) => theme.blue};

        ::placeholder {
            opacity: 0;
        }
    }
`;
