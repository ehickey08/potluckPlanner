import React, { useState, useEffect } from 'react';
import { useStateValue } from '../hooks/useStateValue';
import { UPDATE_SEARCH } from '../actions';
import styled from 'styled-components';
import { device } from '../styled_components/device';

export const Search = () => {
    const [search, setSearch] = useState('');
    const [{ events }, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({ type: UPDATE_SEARCH, payload: search });
    }, [dispatch, search]);

    return (
        <SearchInput
            type='text'
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='Search your events...'
            disabled={!events.data.length}
        />
    );
};

const SearchInput = styled.input`
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
