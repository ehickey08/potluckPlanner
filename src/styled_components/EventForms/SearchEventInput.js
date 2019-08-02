import styled from 'styled-components';
import { device } from '../device';

export const SearchInput = styled.input`
    width: 400px;
    height: 50px;
    border-radius: 10px;
    margin: 15px auto;
    display: block;
    border: 2px solid ${({ theme }) => theme.darkBlue};
    background: #fff;
    padding: 6px 30px;
    font-family: ${({ theme }) => theme.poppinsFont};
    outline: none;
    font-size: ${({ theme }) => theme.smallFont};

    ::placeholder {
        color: ${({ theme }) => theme.darkBlue};
    }
    &:focus {
        color: ${({ theme }) => theme.blue};
        ::placeholder {
            opacity: 0;
        }
    }
    &:disabled {
        border: 1px solid #999999;
        background-color: #cccccc;
        ::placeholder {
            color: #666666;
        }
    }

    @media ${device.mobileL} {
        width: 250px;
    }
`;
