import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { useStateValue, useLocalStorage } from '../hooks';
import { getEvent } from '../actions';

import EventInfo from '../components/EventPageComponents/EventInfo';
import GuestsContainer from '../components/EventPageComponents/GuestsContainer';
import EditEventContainer from '../components/EventPageComponents/EditEventContainer';
import RecipesContainer from '../components/EventPageComponents/RecipesContainer';
import GuestsSearch from '../components/EventPageComponents/GuestsSearch';
import { EventPageContainer, GuestsandRecipesContainer } from '../styled_components/EventPage/EventPageContainer';

const EventPage = ({ match, history }) => {
    let eventID = match.params.eventID;
    const { url } = match;
    const [{ event }, dispatch] = useStateValue();
    const [user_id] = useLocalStorage('user_id');

    useEffect(() => {
        getEvent(dispatch, eventID);
    }, [dispatch, eventID]);

    const isHost = user_id === event.data.organizer_id;

    return (
        <EventPageContainer>
            <EventInfo event={event} />
            
            {isHost && (
                <EditEventContainer
                    url={url}
                    eventID={event.data.event_id}
                    history={history}
                />
            )}
            <GuestsandRecipesContainer>
            <GuestsContainer
                guests={event.data.guests}
                organizer={event.data.organizer_id}
                eventID={event.data.event_id}
            />
            <RecipesContainer
                recipes={event.data.recipes}
                user_id={user_id}
                eventID={event.data.event_id}
                isHost={isHost}
            />
            </GuestsandRecipesContainer>
            {isHost && <GuestsSearch eventID={eventID} />}
        </EventPageContainer>
    );
};

export default withRouter(EventPage);
