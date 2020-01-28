import styled from 'styled-components';
import { device } from '../device';

export const EventPageContainer = styled.div`
    max-width: 1000px;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    
`;

export const GuestsandRecipesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
    }
    
`;
