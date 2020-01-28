import React from 'react';
import { Icon } from 'semantic-ui-react';
import { useStateValue } from '../../hooks';
import { addGuest } from '../../actions';
import { StyledUserContainer } from '../../styled_components/EventPage/EventContainers';

const User = ({ user, eventID }) => {
    const [, dispatch] = useStateValue();

    return (
        <StyledUserContainer
            onClick={() =>
                addGuest(dispatch, eventID, {
                    user_id: user.user_id,
                    attending: false,
                })
            }>
            <Icon name='user' />
            <span>{user.full_name}</span>
            <span>{user.username}</span>
        </StyledUserContainer>
    );
};

export default User;
