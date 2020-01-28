import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import { deleteEvent } from '../../actions';
import { useStateValue } from '../../hooks';
import { EditContainer } from '../../styled_components/EventPage/EventContainers';

const EditEventContainer = ({ url, eventID, history }) => {
    const [, dispatch] = useStateValue();
    return (
        <EditContainer>
            <button><NavLink to={`${url}/update`}>Edit Event</NavLink></button>
            <button
                onClick={e => {
                    e.preventDefault();
                    deleteEvent(dispatch, eventID);
                    history.push('/dashboard');
                }}>
                <Icon name='trash alternate' />
            </button>
        </EditContainer>
    );
};

export default EditEventContainer;
