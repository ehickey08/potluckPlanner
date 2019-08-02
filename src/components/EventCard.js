import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import moment from 'moment';

import { useStateValue, useLocalStorage } from '../hooks';
import {
    StyledEventCard,
    StyledCardHeader,
    CardTop,
    CardDetails,
    CardCol,
    CardButtons,
} from '../styled_components/Dashboard/EventCard';
import { HostButtons, GuestButtons } from './Buttons';

const EventCard = ({ event, match, organizers }) => {
    const {
        event_name,
        organizer_id,
        date,
        time,
        city,
        state,
        event_id,
    } = event;
    const { url } = match;
    const [, dispatch] = useStateValue();
    const [user_id] = useLocalStorage('user_id');

    let eventOrganizer =
        organizers.length > 0 &&
        organizers.filter(user => user.user_id === organizer_id)[0];
    let isHost = user_id === organizer_id;

    return (
        <StyledEventCard>
            <CardTop>
                <NavLink to={`${url}/event/${event_id}`}>
                    <StyledCardHeader>{event_name}</StyledCardHeader>
                </NavLink>
                <CardButtons>
                    {isHost ? (
                        <HostButtons event={event} dispatch={dispatch} />
                    ) : (
                        <GuestButtons
                            event={event}
                            dispatch={dispatch}
                            user_id={user_id}
                        />
                    )}
                </CardButtons>
            </CardTop>
            <CardDetails>
                <CardCol>
                    <div className='card-organizer'>
                        <span className='card-field'>Organized By: </span>
                        {eventOrganizer.full_name}
                    </div>
                    <div className='card-location'>
                        <span className='card-field'>Location: </span>
                        {city}, {state}
                    </div>
                </CardCol>
                <CardCol>
                    <div className='card-date'>
                        <span className='card-field'>Date:</span>
                        {moment(date).format('LL')}
                    </div>
                    <div className='card-time'>
                        <span className='card-field'>Time: </span> {time}
                    </div>
                </CardCol>
            </CardDetails>
        </StyledEventCard>
    );
};

export default withRouter(EventCard);
