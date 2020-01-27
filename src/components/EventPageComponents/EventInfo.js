import React from 'react';
import moment from 'moment';
import { Icon } from 'semantic-ui-react';

const EventInfo = ({ event }) => {
    const eventTime = moment(event.data.time, 'HH:mm:ss a').format('LT');

    return (
        <div>
            <Icon name='calendar check' />
            <h2>{event.data.event_name}</h2>
            <>
                <Icon name='calendar' />
                {moment(event.data.date).format('LL')}
            </>
            <>
                <Icon name='map marker' />
                {event.data.address}, {event.data.city}, {event.data.state}
            </>
            <>
                <Icon name='outline clock' />
                {`${eventTime}`}
            </>
            <>
                <Icon name='newspaper outline' />
                {event.data.description}
            </>
        </div>
    );
};

export default EventInfo;
