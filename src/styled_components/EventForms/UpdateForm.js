import styled from 'styled-components';
import { device } from '../device';

export const UpdateContainer = styled.div`
    display: flex;
    width: 1200px;
    height: 800px;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;

    @media ${device.mobileL} {
        width: 100%;
    }
`;
