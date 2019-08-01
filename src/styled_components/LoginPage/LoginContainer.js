import styled from 'styled-components';
import { device } from '../device';

export const LoginContainer = styled.div`
    margin: 100px auto;
    width: 390px;
    height: 650px;
    background: #fff;
    border-radius: 10px;
    padding: 77px 55px 33px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-contents: space-evenly;
    align-items: center;

    @media ${device.mobileL} {
        width: 95%;
    }
`;
