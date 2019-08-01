import styled from 'styled-components';

export const WelcomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    height: 300px;
    justify-content: space-between;
    padding-bottom: 50px;

    span{
        display: block;
        font-family: ${({ theme }) => theme.poppinsFont};
        font-weight: 900;
        font-size: ${({ theme }) => theme.largeFont}
        line-height: 1.2;
        text-align: center;
        color: ${({ theme }) => theme.blue}
    }
    img{
        margin: 0 auto;
        width: 40%;
    }
`;
