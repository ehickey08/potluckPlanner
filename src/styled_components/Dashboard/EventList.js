import styled from 'styled-components';
import { device } from '../device';

export const EventListContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .no_events {
        font-size: ${({ theme }) => theme.hugeFont};
        margin-top: 50px;
        font-family: ${({ theme }) => theme.poppinsFont};
        color: ${({ theme }) => theme.darkBlue};
        text-align: center;

        @media ${device.tablet}{
            font-size: ${({ theme }) => theme.mediumFont};
        }

        @media ${device.mobileL}{
            font-size: ${({ theme }) => theme.smallFont};
        }
    }

    @media ${device.mobileL} {
        width: 95%;
        flex-direction: column;
    }
`;
