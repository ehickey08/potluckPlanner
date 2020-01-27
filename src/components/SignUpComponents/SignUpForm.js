import React, { useState } from 'react';
import { signUpAction } from '../../actions';
import { useStateValue } from '../../hooks/useStateValue';
import { StyledSignUpForm, SignUpInput } from '../../styled_components';

const SignUpForm = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        full_name: '',
        email: '',
    });
    const [{ signUp }, dispatch] = useStateValue();

    const userInputHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    return (
        <StyledSignUpForm
            onSubmit={e => {
                e.preventDefault();
                signUpAction(dispatch, user);
                setUser({
                    username: '',
                    password: '',
                    full_name: '',
                    email: '',
                });
            }}>
            <h1>Sign up</h1>
            <div className='signup_input_and_label'>
                <label htmlFor='username'>
                    <i className='user icon' />
                </label>
                <SignUpInput
                    name='username'
                    type='text'
                    onChange={event => userInputHandler(event)}
                    value={user.username}
                    placeholder='Username'
                />
            </div>
            <div className='signup_input_and_label'>
                <label htmlFor='password'>
                    <i className='lock icon' />
                </label>
                <SignUpInput
                    name='password'
                    type='password'
                    onChange={event => userInputHandler(event)}
                    value={user.password}
                    placeholder='Password'
                />
            </div>
            <div className='signup_input_and_label'>
                <label htmlFor='full_name'>
                    <i className='id card outline icon' />
                </label>
                <SignUpInput
                    name='full_name'
                    type='text'
                    onChange={event => userInputHandler(event)}
                    value={user.full_name}
                    placeholder='Full Name'
                />
            </div>
            <div className='signup_input_and_label'>
                <label htmlFor='email'>
                    <i className='envelope icon' />
                </label>
                <SignUpInput
                    name='email'
                    type='email'
                    onChange={event => userInputHandler(event)}
                    value={user.email}
                    placeholder='E-Mail'
                />
            </div>
            <button disabled={signUp.isSignUpLoading} type='submit'>
                Register
            </button>
        </StyledSignUpForm>
    );
};

export default SignUpForm;
