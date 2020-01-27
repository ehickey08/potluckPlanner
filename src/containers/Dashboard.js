import React from 'react';
import { withRouter } from 'react-router-dom';
import { PrivateRoute } from '../utils/PrivateRoute';

import Header from '../components/DashboardComponents/Header';
import EventPage from '../containers/EventPage';
import AddEventForm from './AddEventPage';
import EventList from './EventList';
import UpdateEventForm from './UpdateEventPage';

const Dashboard = props => {
    const { path } = props.match;
    return (
        <>
            <Header />
            <PrivateRoute
                exact
                path={`${path}`}
                component={EventList}
                redirectURL='/'
            />
            <PrivateRoute
                exact
                path={`${path}/addEvent`}
                component={AddEventForm}
                redirectURL='/'
            />
            <PrivateRoute
                exact
                path={`${path}/event/:eventID`}
                component={EventPage}
                redirectURL='/'
            />
            <PrivateRoute
                path={`${path}/event/:eventID/update`}
                component={UpdateEventForm}
                redirectURL='/'
            />
        </>
    );
};

export default withRouter(Dashboard);
