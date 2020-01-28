import styled from 'styled-components';
import { device } from '../device';

export const EventInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    text-align: center;

    i {
        color: ${({ theme }) => theme.darkBlue};
    }
    .check{
        font-size: 6rem;
        margin: 0 auto;
    }

    h2{
        font-size: 3.5rem;
    }
`

export const DataContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 5px 0;
`