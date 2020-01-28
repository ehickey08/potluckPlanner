import styled from 'styled-components';
import { device } from '../device';

export const StyledEventForm = styled.form`
    max-width: 800px;
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 650px;
    font-family: ${({ theme }) => theme.poppinsFont};

    legend {
        font-size: ${({ theme }) => theme.largeFont};
        text-align: center;
        color: ${({ theme }) => theme.darkBlue};
    }

    button {
        background: ${({ theme }) => theme.blue};
        color: #fff;
        border: none;
        border-radius: 5px;
        margin: 25px auto 0;
        padding: 15px 40px;
        width: fit-content;
        cursor: pointer;
        font-family: ${({ theme }) => theme.poppinsFont};
        font-size: ${({ theme }) => theme.smallFont};

        &:hover {
            background: ${({ theme }) => theme.darkBlue};
        }
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`;

export const StyledInput = styled.input`
    width: 400px;
    height: 50px;
    border-radius: 10px;
    border: none;
    margin: 15px auto;
    display: block;
    border: 2px solid ${({ theme }) => theme.darkBlue};
    background: rgba(212, 212, 212, 0.4);
    padding: 6px 30px;
    font-family: ${({ theme }) => theme.poppinsFont};
    outline: none;
    font-size: ${({ theme }) => theme.smallFont};

    ::placeholder {
        color: #708090;
    }
    &:focus {
        color: #222;
        background: #fff;
        ::placeholder {
            opacity: 0;
        }
    }
    &:valid {
        background: rgb(232, 240, 254);
    }

    @media ${device.mobileL} {
        width: 90%;
    }
`;
