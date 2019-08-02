import React from 'react';
import { Icon } from 'semantic-ui-react';

import { removeGuest } from '../actions';
import { useStateValue } from '../hooks';

const Guest = ({ guest, organizer, eventID }) => {
    const [, dispatch] = useStateValue();
    let response = guest.attending ? 'Attending' : 'Invited';

    return (
        <div>
            <h2>{`${guest.full_name} - ${response}`}</h2>
            {guest.user_id !== organizer && (
                <Icon
                    size='small'
                    name='trash alternate'
                    onClick={() =>
                        removeGuest(dispatch, eventID, {
                            data: {
                                user_id: guest.user_id,
                            },
                        })
                    }
                />
            )}
        </div>
    );
};

export default Guest;
