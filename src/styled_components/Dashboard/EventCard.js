import styled from 'styled-components';
import { device } from '../device';

export const StyledEventCard = styled.div`
    width: 500px
    height: fit-content;
    min-height: 125px;
    border: 2px solid ${({ theme }) => theme.blue};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    justify-content: space-around;
    font-size: ${({ theme }) => theme.smallFont};
    font-family: ${({ theme }) => theme.poppinsFont};
    color: #555
    background-color: #E6EBEE;
    margin: 10px auto;


    .card-field {
      font-weight: 900;
    }  
    
    @media ${device.mobileL} {
      max-width: 100%;
    }
    `;

export const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CardDetails = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50%;

    @media ${device.tablet} {
        flex-direction: column
    }
`;

export const CardCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    

    @media ${device.tablet} {
        text-align: center;
        div{
            margin: 5px 0
        }
    }
`;

export const CardButtons = styled.div`
    background-color: transparent;

    button {
        outline: none;
        background-color: ${({ theme }) => theme.blue};
        border-radius: 5px;
    }
`;

export const StyledCardHeader = styled.div`
    font-size: 3rem;
    text-align: center;

    @media ${device.mobileS} {
        font-size: 2.5rem;
    }
`;

export const LeaveButton = styled.button`
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.poppinsFont};
    color: #fff;
    passing: 0 20px;
    height: 35px;
    width: 100%;
    background: ${({ theme }) => theme.blue};
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.darkBlue};
    }

    @media ${device.mobileS} {
        font-size: 1.2rem;
    }
`;
