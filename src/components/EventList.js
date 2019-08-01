import React, { useEffect } from 'react';
import { useStateValue } from '../hooks/useStateValue';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getEvents } from '../actions';
import EventCard from '../components/EventCard';
import { EventListContainer } from '../styled_components';
import { Search } from './Search';

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
            <Search />
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
