import React, { useState, useEffect } from 'react';

import { UPDATE_SEARCH } from '../actions';
import { useStateValue } from '../hooks/useStateValue';
import { SearchInput } from '../styled_components';

export const SearchEvents = () => {
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
