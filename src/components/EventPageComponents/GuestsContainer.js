import React from 'react';
import guestHeaderImg from '../../images/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg';
import Guest from './Guest';
import { StyledGuestsContainer } from '../../styled_components/EventPage/EventContainers';

const GuestsContainer = ({ guests, organizer, eventID }) => {
    return (
        <StyledGuestsContainer>
            <img
                src={guestHeaderImg}
                alt='Guests having fun!'
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
        </StyledGuestsContainer>
    );
};

export default GuestsContainer;
