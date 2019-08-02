import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import moment from 'moment';
import { Popup } from 'semantic-ui-react';

import { useStateValue, useLocalStorage } from '../hooks';
import {
    getEvents,
    deleteEvent,
    changeAttendance,
    removeGuest,
} from '../actions';
import {
    StyledEventCard,
    StyledCardHeader,
    CardTop,
    CardDetails,
    CardCol,
    CardButtons,
    LeaveButton,
} from '../styled_components/Dashboard/EventCard';

const EventCard = ({event, match}) => {
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
    const [{ users }, dispatch] = useStateValue();
    const [user_id] = useLocalStorage('user_id');

    

    let username;
    users.data.forEach(user => {
        if (user.user_id === organizer_id) {
            username = user.username;
        }
    });

    return (
        <StyledEventCard>
            <CardTop>
                <NavLink to={`${url}/event/${event_id}`}>
                    <StyledCardHeader>{event_name}</StyledCardHeader>{' '}
                </NavLink>

                <CardButtons>
                    {/*if a user is the organizer, only show delete button*/}
                    {user_id === organizer_id && (
                        <button
                            onClick={e => {
                                e.preventDefault();
                                deleteEvent(dispatch, event_id);
                            }}
                            alt='Delete'>
                            <Popup
                                content='Delete Event'
                                trigger={<i className='trash alternate icon' />}
                                size='large'
                            />
                        </button>
                    )}

                    {/*if a user isnt the organizer, show option to accept/decline. If accept, show option to leave */}
                    {user_id !== organizer_id ? (
                        event.attending ? (
                            <LeaveButton
                                onClick={() =>
                                    removeGuest(dispatch, event_id, {
                                        data: { user_id: user_id },
                                    }).then(res => getEvents(dispatch, user_id))
                                }
                                alt='Leave'>
                                Leave Event
                            </LeaveButton>
                        ) : (
                            <div>
                                <button
                                    onClick={() => {
                                        changeAttendance(
                                            dispatch,
                                            event_id,
                                            user_id,
                                            {
                                                attending: true,
                                            }
                                        ).then(res =>
                                            getEvents(dispatch, user_id)
                                        );
                                    }}
                                    alt='Accept'>
                                    <Popup
                                        content='Accept'
                                        trigger={<i className='check icon' />}
                                        size='large'
                                    />
                                </button>
                                <button
                                    onClick={() =>
                                        removeGuest(dispatch, event_id, {
                                            data: { user_id: user_id },
                                        }).then(res =>
                                            getEvents(dispatch, user_id)
                                        )
                                    }
                                    alt='Decline'>
                                    <Popup
                                        content='Decline'
                                        trigger={<i className='close icon' />}
                                        size='large'
                                    />
                                </button>
                            </div>
                        )
                    ) : null}
                </CardButtons>
            </CardTop>
            <CardDetails>
                <CardCol>
                    <div className='card-organizer'>
                        <span className='card-field'>Organized By:</span>{' '}
                        {username}
                    </div>
                    <div className='card-location'>
                        <span className='card-field'>Location:</span> {city},{' '}
                        {state}
                    </div>
                </CardCol>
                <CardCol>
                    <div className='card-date'>
                        <span className='card-field'>Date:</span>{' '}
                        {moment(date).format('LL')}
                    </div>
                    <div className='card-time'>
                        <span className='card-field'>Time:</span> {time}
                    </div>
                </CardCol>
            </CardDetails>
        </StyledEventCard>
    );
};

export default withRouter(EventCard);
