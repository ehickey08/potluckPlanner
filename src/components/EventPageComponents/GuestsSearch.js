import React, { useState, useEffect } from 'react';

import { useStateValue } from '../../hooks';
import { getUsers } from '../../actions';
import User from './User';
import { StyledGuestSearchContainer } from '../../styled_components/EventPage/EventContainers';

const GuestsSearch = ({ eventID }) => {
    const [userSearch, setUserSearch] = useState('');
    const [filteredGuests, setFilteredGuests] = useState([]);
    const [{ users, event }, dispatch] = useStateValue();

    useEffect(() => {
        setFilteredGuests(
            users.data.filter(user =>
                user.full_name.toLowerCase().includes(userSearch.toLowerCase())
            )
        );
    }, [userSearch, users.data]);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    useEffect(() => {
        dispatch({ type: "RESET_EVENT_ERROR" });
    }, [userSearch, dispatch]);

    return (
        <StyledGuestSearchContainer>
            <input
                value={userSearch}
                placeholder='Search users'
                onChange={e => setUserSearch(e.target.value)}
                aria-label="search user input"
            />
            {event.errorMessage && <h2>{event.errorMessage}</h2>}
            <div>
                {userSearch &&
                    filteredGuests.map(user => (
                        <User
                            key={user.user_id}
                            user={user}
                            eventID={eventID}
                        />
                    ))}
            </div>
        </StyledGuestSearchContainer>
    );
};

export default GuestsSearch;
