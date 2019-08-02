import React from 'react';
import { Icon } from 'semantic-ui-react';
import { useStateValue } from '../hooks';
import { addGuest } from '../actions';

const User = ({ user, eventID }) => {
    const [, dispatch] = useStateValue();

    return (
        <div
            onClick={() =>
                addGuest(dispatch, eventID, {
                    user_id: user.user_id,
                    attending: false,
                })
            }>
            <Icon name='user' />
            {user.full_name}
            {user.username}
        </div>
    );
};

export default User;
