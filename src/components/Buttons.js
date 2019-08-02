import React from 'react';
import { Popup } from 'semantic-ui-react';

import {
    getEvents,
    deleteEvent,
    changeAttendance,
    removeGuest,
} from '../actions';
import { LeaveButton } from '../styled_components';

export const HostButtons = ({ event, dispatch }) => {
    return (
        <button
            onClick={() => deleteEvent(dispatch, event.event_id)}
            alt='Delete'>
            <Popup
                content='Delete Event'
                trigger={<i className='trash alternate icon' />}
                size='large'
            />
        </button>
    );
};

export const GuestButtons = ({ event, dispatch, user_id }) => {
    const { event_id } = event;
    return (
        <>
            {event.attending ? (
                <AttendingButton
                    event_id={event_id}
                    dispatch={dispatch}
                    user_id={user_id}
                />
            ) : (
                <NotAttendingButtons
                    event_id={event_id}
                    dispatch={dispatch}
                    user_id={user_id}
                />
            )}
        </>
    );
};

const AttendingButton = ({ event_id, dispatch, user_id }) => {
    return (
        <LeaveButton
            onClick={() =>
                removeGuest(dispatch, event_id, {
                    data: { user_id: user_id },
                }).then(res => getEvents(dispatch, user_id))
            }
            alt='Leave'>
            Leave Event
        </LeaveButton>
    );
};

const NotAttendingButtons = ({ event_id, dispatch, user_id }) => {
    return (
        <>
            <button
                onClick={() => {
                    changeAttendance(dispatch, event_id, user_id, {
                        attending: true,
                    }).then(res => getEvents(dispatch, user_id));
                }}
                alt='Accept'>
                <Popup
                    content='Accept'
                    trigger={<i className='check icon' />}
                    size='large'
                />
            </button>

            <button
                onClick={() => {
                    removeGuest(dispatch, event_id, {
                        data: { user_id: user_id },
                    }).then(res => getEvents(dispatch, user_id));
                }}
                alt='Decline'>
                <Popup
                    content='Decline'
                    trigger={<i className='close icon' />}
                    size='large'
                />
            </button>
        </>
    );
};
