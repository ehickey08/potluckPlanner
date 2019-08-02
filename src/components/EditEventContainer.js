import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import { deleteEvent } from '../actions';
import { useStateValue } from '../hooks';

const EditEventContainer = ({ url, eventID, history }) => {
    const [, dispatch] = useStateValue();
    return (
        <>
            <NavLink to={`${url}/update`}>Edit Event</NavLink>
            <button
                onClick={e => {
                    e.preventDefault();
                    deleteEvent(dispatch, eventID);
                    history.push('/dashboard');
                }}>
                <Icon name='trash alternate' />
            </button>
        </>
    );
};

export default EditEventContainer;
