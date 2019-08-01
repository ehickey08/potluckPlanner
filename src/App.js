import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';

import SignUpPage from './containers/SignUpPage';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';

function App() {
    return (
        <>
            <Route path='/' exact component={LoginPage} />
            <Route path='/signup' component={SignUpPage} />
            <PrivateRoute
                path='/dashboard'
                component={Dashboard}
                redirectURL='/'
            />
        </>
    );
}

export default App;
