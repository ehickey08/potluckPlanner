import styled from 'styled-components';
import { device } from '../device';

export const EditContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-size: 2rem;
    align-items: center;
    margin-bottom: 15px; 
    
    button{
        width: 150px;
        padding: 10px 5px;
        background: ${({theme}) => theme.blue}
        color: white;
        border: none;
    }

    a{
        color: white
    }
`

export const StyledGuestsContainer = styled.div`
    background: white;
    width: 40%
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;

    img{
        width: 80%;
        margin: 10px auto;
        border-radius: 5px;
    }

    h3{
        font-size: ${({theme}) => theme.largeFont}
        text-decoration: underline;
    }

    @media ${device.tablet} {
        width: 80%
        margin-bottom: 15px;

        h3{
            font-size: ${({theme}) => theme.mediumFont}
        }
    }

    @media ${device.mobileL} {
        width: 90%
        h3{
            font-size: ${({theme}) => theme.smallFont}
        }
    }
`

export const StyledGuestContainer = styled.div`
    h2{
        font-size: ${({theme}) => theme.mediumFont}
    }
`

export const StyledRecipeContainer = styled(StyledGuestContainer)`
    font-size: ${({theme}) => theme.mediumFont}
    margin-bottom: 5px;

    i {
        color: ${({ theme }) => theme.darkBlue};
    }
`

export const StyledRecipesContainer = styled(StyledGuestsContainer)`
    form{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 15px;
    }    

    input{
        padding: 10px 0;
        padding-left: 5px
        border: 2px solid rgb(238,238,238);
        font-size: ${({theme}) => theme.smallFont};
    }

    button{ 
        background: ${({theme}) => theme.blue}
        color: white;
        border: none;
        font-size: ${({theme}) => theme.smallFont};
    }
`

export const StyledGuestSearchContainer = styled.div`
    margin: 15px auto;

    input{
        padding: 10px 0;
        padding-left: 5px
        border: 2px solid rgb(238,238,238);
        font-size: ${({theme}) => theme.smallFont};
    }
`

export const StyledUserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3px auto;
    font-size: ${({theme}) => theme.smallFont};

    i {
        color: ${({ theme }) => theme.darkBlue};
    }

    span{
        padding: 0 5px;
    }
`