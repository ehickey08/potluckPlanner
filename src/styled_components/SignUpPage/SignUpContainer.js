import styled from 'styled-components';
import { LoginContainer } from '../index';
import { device } from '../device';

export const SignUpContainer = styled(LoginContainer)`
    width: 900px;
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

        @media ${device.mobileL} {
            width: 100%;
            padding: 0;
            order: 2;
        }
    }

    .image {
        padding-right: 15px;

        @media ${device.mobileL} {
            flex-direction: column-reverse;
        }

        img {
            max-width: 100%;
        }
        a {
            font-size: ${({ theme }) => theme.smallFont};
            color: #222;
            line-height: 1.8;
            text-decoration: underline;
        }
    }

    .sign_up_error {
        color: #dd2c00;
        font-size: ${({ theme }) => theme.tinyFont};
    }

    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`;
