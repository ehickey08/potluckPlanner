import React from 'react';
import guestHeaderImg from '../../images/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg';
import Guest from './Guest';

const GuestsContainer = ({ guests, organizer, eventID }) => {
    return (
        <div>
            <img
                src={guestHeaderImg}
                alt='Guests having fun!'
                style={{ width: '10%' }}
            />
            <h3>Guests</h3>
            {guests.map(guest => {
                return (
                    <Guest
                        key={guest.user_id}
                        guest={guest}
                        organizer={organizer}
                        eventID={eventID}
                    />
                );
            })}
        </div>
    );
};

export default GuestsContainer;
