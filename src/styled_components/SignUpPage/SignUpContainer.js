import styled from 'styled-components';
import { LoginContainer } from '../index';
import { device } from '../device';

export const SignUpContainer = styled(LoginContainer)`
    max-width: 900px;
    min-width: 700px;
    flex-direction: row;
    justify-content: space-between;
    padding: 75px 0;
    height: 500px;
    font-family: ${({ theme }) => theme.poppinsFont};
    font-weight: 400;

    .sign_up_inner {
        width: 49%;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding-left: 34px;

        @media ${device.tablet} {
            width: 75%;
        }
        
        @media ${device.mobileL} {
            width: 100%;
            padding: 0;
            order: 2;
            padding-left: 0px;
        }

        @media (max-width: 550px) {
            width: 100%;
            padding: 0;
            order: 2;
            padding-left: 34px;
            padding-right: 34px;
        }
    }

    .image {
        padding-right: 15px;

        @media ${device.tablet} {
            flex-direction: column-reverse;
            height: auto;
        }

        img {
            max-width: 100%;
        }
        a {
            font-size: 1.5rem;
            color: #222;
            line-height: 1.8;
            text-decoration: underline;
        }
    }

    .sign_up_error {
        color: #dd2c00;
        font-size: ${({ theme }) => theme.tinyFont};
    }

    @media ${device.tablet} {
        flex-direction: column;
        height: auto;
        width: 90%;
        min-width: 0;
    }

    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;
