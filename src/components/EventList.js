import React, { useEffect } from 'react';

import { getEvents, getUsers } from '../actions';
import { useStateValue, useLocalStorage } from '../hooks';
import EventCard from '../components/EventCard';
import { EventListContainer, SearchNote } from '../styled_components';
import { SearchEvents } from './SearchEvents';

const EventList = () => {
    const [user_id] = useLocalStorage('user_id');
    const [{ events, users }, dispatch] = useStateValue();
    const { errorMessage, data } = events;

    useEffect(() => {
        getEvents(dispatch, user_id);
    }, [dispatch, user_id]);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const checkOrganizers = id => {
        let matches = organizers.filter(user =>
            user.full_name
                .toLowerCase()
                .includes(events.searchTerm.toLowerCase())
        );
        return Boolean(matches.map(match => match.user_id === id).length);
    };
    
    let organizers = data.map(event =>
        users.data.find(user => {
            if (user.user_id === event.organizer_id)
                return { name: user.full_name, id: user.user_id };
        })
    );

    let filteredData = data.filter(
        event =>
            event.event_name
                .toLowerCase()
                .includes(events.searchTerm.toLowerCase()) ||
            checkOrganizers(event.organizer_id)
    );
    let eventsToMap = events.searchTerm ? filteredData : data;

    return (
        <>
            <SearchEvents />
            <SearchNote>*Search by event name or event organizer*</SearchNote>
            <EventListContainer>
                {errorMessage && data.length < 1 && (
                    <h2 className='no_events'>
                        Time to start creating events!
                    </h2>
                )}
                {data.length > 0 &&
                    eventsToMap.map(event => (
                        <EventCard
                            event={event}
                            key={event.event_id}
                            organizers={organizers}
                        />
                    ))}
            </EventListContainer>
        </>
    );
};

export default EventList;
