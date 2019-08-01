import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { loginAction } from '../actions/loginActions';
import { useStateValue } from '../hooks/useStateValue';

import { StyledLoginForm, LoginButton } from '../styled_components';

const LoginForm = props => {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const [{ login }, dispatch] = useStateValue();

    useEffect(() => {
        if (login.isLoggedIn) {
            props.history.push('/dashboard');
        }
    }, [login, props.history]);

    function handleChange(event) {
        const updatedUser = {
            ...user,
            [event.target.name]: event.target.value,
        };
        setUser(updatedUser);
    }

    return (
        <StyledLoginForm
            onSubmit={e => {
                e.preventDefault();
                loginAction(dispatch, user);
            }}>
            <div className='form-group row'>
                <input
                    type='text'
                    name='username'
                    required
                    placeholder='Username'
                    autoComplete='off'
                    value={user.username}
                    onChange={handleChange}
                />
                <span data-placeholder='Username' />
            </div>
            <div className='form-group row'>
                <input
                    type='password'
                    name='password'
                    required
                    placeholder='Password'
                    value={user.password}
                    onChange={handleChange}
                />
                <span data-placeholder='Password' />
            </div>
            <LoginButton disabled={login.isLoginLoading} type='submit'>
                Login
            </LoginButton>
        </StyledLoginForm>
    );
};

export default withRouter(LoginForm);
