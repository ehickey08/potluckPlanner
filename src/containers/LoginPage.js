import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import LoginForm from '../components/LoginForm';
import { LoginContainer, WelcomeDiv, SignUpDiv } from '../styled_components';
import logo from '../PP_logo.png';

const LoginPage = props => {
    const [token] = useLocalStorage('token');

    useEffect(() => {
        if (token) props.history.push('/dashboard');
    }, [token, props.history]);

    return (
        <LoginContainer>
            <WelcomeDiv>
                <img src={logo} alt='logo' />
                <span>Potluck Planner</span>
            </WelcomeDiv>
            <LoginForm />
            <SignUpDiv>
                <span>Don't have an account?</span>
                <NavLink to='/signup'>Sign Up</NavLink>
            </SignUpDiv>
        </LoginContainer>
    );
};

export default withRouter(LoginPage);
