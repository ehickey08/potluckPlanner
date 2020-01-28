import React from 'react';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';
import { EventInfoContainer, DataContainer } from '../../styled_components/EventPage/EventInfoContainer';

const EventInfo = ({ event }) => {
    const eventTime = moment(event.data.time, 'HH:mm:ss a').format('LT');

    return (
        <EventInfoContainer>
            <Icon name='calendar check' />
            <h2>{event.data.event_name}</h2>
            <DataContainer>
                <Icon name='calendar' />
                {moment(event.data.date).format('LL')}
            </DataContainer>
            <DataContainer>
                <Icon name='map marker' />
                {event.data.address}, {event.data.city}, {event.data.state}
            </DataContainer>
            <DataContainer>
                <Icon name='outline clock' />
                {`${eventTime}`}
            </DataContainer>
            <DataContainer>
                <Icon name='newspaper outline' />
                {event.data.description}
            </DataContainer>
        </EventInfoContainer>
    );
};

export default EventInfo;
