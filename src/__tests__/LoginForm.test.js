import React from 'react';
import { render, fireEvent, cleanup } from '../utils/customRender';
import LoginForm from '../components/LoginComponents/LoginForm';

afterEach(cleanup)

describe('Login form', () => {
    it('properly renders', () => {
        const component = render(<LoginForm />);
        expect(component.getByText(/Login/)).toBeInTheDocument();
        expect(component.getByLabelText('login-button')).toBeVisible();
    });

    it('allows change to inputs', () => {
        const component = render(<LoginForm />);
        const username = component.getByLabelText(/username/);
        const password = component.getByLabelText(/password/);
        
        fireEvent.change(username, {target: {value: 'fe-interview'}})
        fireEvent.change(password, {target: {value: 'testing1234'}})
        
        expect(username).toHaveValue('fe-interview')
        expect(password).toHaveValue('testing1234')
    });
});
