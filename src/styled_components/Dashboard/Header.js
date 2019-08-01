import styled from 'styled-components';
import { device } from '../device';

export const HeaderDiv = styled.div`
    height: 125px;
    font-size: 2rem;
    color: ${({ theme }) => theme.darkBlue};
    font-family: ${({ theme }) => theme.poppinsFont};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10px;
    border-bottom: 5px solid ${({ theme }) => theme.blue};
    background-color: #e6ebee;

    img {
        height: 100px;
        width: 100px;
    }

    @media ${device.mobileL} {
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
`;

export const HeaderTitle = styled.h1`
    font-size: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;

    @media ${device.mobileL} {
        font-size: 4rem;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        height: 175px;
    }

    @media ${device.mobileS} {
        font-size: 3.8rem;
    }
`;

export const HeaderNavLinks = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;

    @media ${device.mobileL} {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 150px;
        margin: 10px 0;
        font-size: 3rem;
    }

    @media ${device.mobileS} {
        width: 100%;
    }
`;
