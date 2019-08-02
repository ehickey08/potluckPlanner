import React, { useEffect } from 'react';

import { getEvents } from '../actions';
import { useStateValue, useLocalStorage } from '../hooks';
import EventCard from '../components/EventCard';
import { EventListContainer } from '../styled_components';
import { SearchEvents } from './SearchEvents';

const EventList = () => {
    const [user_id] = useLocalStorage('user_id');
    const [{ events }, dispatch] = useStateValue();
    const { errorMessage, data } = events;

    useEffect(() => {
        getEvents(dispatch, user_id);
    }, [dispatch, user_id]);

    let filteredData = data.filter(event =>
        event.event_name.includes(events.searchTerm)
    );
    let eventsToMap = events.searchTerm ? filteredData : data;

    return (
        <>
            <SearchEvents />
            <EventListContainer>
                {errorMessage && data.length < 1 && (
                    <h2 className='no_events'>
                        Time to start creating events!
                    </h2>
                )}
                {data.length > 0 &&
                    eventsToMap.map(event => (
                        <EventCard event={event} key={event.event_id} />
                    ))}
            </EventListContainer>
        </>
    );
};

export default EventList;
