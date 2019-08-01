import styled from 'styled-components';
import { device } from '../device';

export const EventListContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .no_events {
        font-size: ${({ theme }) => theme.hugeFont};
        margin-top: 50px;
        font-family: ${({ theme }) => theme.poppinsFont};
        color: ${({ theme }) => theme.darkBlue};
    }

    @media ${device.mobileL} {
        width: 95%;
        flex-direction: column;
    }
`;
