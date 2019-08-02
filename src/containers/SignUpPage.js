import React from 'react';
import { NavLink } from 'react-router-dom';
import undraw from '../images/undraw_having_fun_iais.svg';

import { SIGNUP_OVER } from '../actions';
import { useStateValue } from '../hooks/useStateValue';
import SignUpForm from '../components/SignUpForm';
import { SignUpContainer, PostSignUpDiv } from '../styled_components';

const SignUpPage = () => {
    const [{ signUp }, dispatch] = useStateValue();

    return (
        <SignUpContainer>
            <div className='form sign_up_inner'>
                {signUp.errorMessage ? (
                    <h2 className='sign_up_error'>{signUp.errorMessage}</h2>
                ) : (
                    <h2> </h2>
                )}
                {!signUp.isSignedUp ? (
                    <SignUpForm />
                ) : (
                    <PostSignUpDiv>
                        <h2>Thank you for signing up!</h2>
                        <NavLink
                            to='/'
                            onClick={() => dispatch({ type: SIGNUP_OVER })}>
                            Login Now
                        </NavLink>
                    </PostSignUpDiv>
                )}
            </div>
            <div className='image sign_up_inner'>
                <img src={undraw} alt='family fun' />
                <NavLink to='/'>I am already a member</NavLink>
            </div>
        </SignUpContainer>
    );
};

export default SignUpPage;
