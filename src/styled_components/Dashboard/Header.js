import styled from 'styled-components';
import { device } from '../device';

export const HeaderDiv = styled.div`
    font-size: 2rem;
    color: ${({ theme }) => theme.darkBlue};
    font-family: ${({ theme }) => theme.poppinsFont};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    border-bottom: 5px solid ${({ theme }) => theme.blue};
    background-color: #e6ebee;
    width: 100%;

    img {
        height: 100px;
        width: 100px;
    }

    @media (max-width: 850px) {
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 15px 0px 5px;

        img{
            height: 50px;
            width: 50px;
        }
    }
`;

export const HeaderTitle = styled.h1`
    font-size: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-right: 15px;
    }

    @media (max-width: 850px) {
        font-size: 3.8rem;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;

        img {
            margin-right: 0;
            margin-bottom: 3%
        }
    }

    @media ${device.mobileL} {
        font-size: 3.5rem;
    }

    @media ${device.mobileS} {
        font-size: 3.5rem;
    }
`;

export const HeaderNavLinks = styled.div`
    min-width: 325px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 850px) {
        margin: 10px 0;
        font-size: 2rem;

        a {
            padding: 3% 0;
        }
    }

    @media ${device.mobileL} {
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`;
