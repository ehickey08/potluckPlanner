import React, { useState, useEffect } from 'react';
import { useStateValue } from '../hooks/useStateValue';
import { addGuest } from '../actions/specificEventActions';
import { getUsers } from '../actions';
import { List, Label, Icon, Button } from 'semantic-ui-react';
const GuestsSearch = props => {
    const [userSearch, setUserSearch] = useState('');
    const [displayedUsers, setDisplayedUsers] = useState([]);

    const [{ users }, dispatch] = useStateValue();

    const searchHandler = event => {
        setUserSearch(event.target.value);
    };

    const userCompare = toCompare => {
        let searchGuests = users.data;
        console.log(users);
        searchGuests = searchGuests.filter(user =>
            user.full_name.toLowerCase().includes(toCompare.toLowerCase())
        );
        setDisplayedUsers(searchGuests);
    };

    useEffect(() => {
        getUsers(dispatch);
    }, [userSearch]);

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    userCompare(userSearch);
                }}>
                <input
                    value={userSearch}
                    style={{ lineHeight: '3rem' }}
                    placeholder='Search users'
                    onChange={event => searchHandler(event)}
                />
                <Button size='huge' color='twitter'>
                    Submit
                </Button>
            </form>
            <List>
                {displayedUsers.map(user => {
                    return (
                        <List.Item>
                            <Label
                                key={user.user_id}
                                size='massive'
                                onClick={e => {
                                    e.preventDefault();
                                    addGuest(dispatch, props.eventID, {
                                        user_id: user.user_id,
                                        attending: false,
                                    });
                                }}>
                                <Icon name='user' /> {user.full_name} <br />
                                <p style={{ color: '#c2bfb8' }}>
                                    {' '}
                                    {user.username}
                                </p>
                            </Label>
                        </List.Item>
                    );
                })}
            </List>
        </div>
    );
};

export default GuestsSearch;
