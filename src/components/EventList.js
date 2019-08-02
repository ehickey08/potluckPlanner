import React, { useEffect } from 'react';

import { getEvents, getUsers } from '../actions';
import { useStateValue, useLocalStorage } from '../hooks';
import EventCard from '../components/EventCard';
import { EventListContainer } from '../styled_components';
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
            user.name.toLowerCase().includes(events.searchTerm.toLowerCase())
        );
        return Boolean(matches.map(match => match.id === id).length);
    };

    let organizers =
        data.length > 0 &&
        data
            .map(event =>
                users.data.find(user => user.user_id === event.organizer_id)
            )
            .map(user => ({ name: user.full_name, id: user.user_id }));

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
