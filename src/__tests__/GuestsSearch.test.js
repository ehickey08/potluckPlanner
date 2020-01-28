import React from 'react';
import { render, fireEvent, cleanup} from '../utils/customRender';
import { getUsers as mockGetUsers, addGuest as mockAddGuest } from '../actions';
import GuestsSearch from '../components/EventPageComponents/GuestsSearch';
import User from '../components/EventPageComponents/User';

jest.mock('../actions');
afterEach(cleanup)
describe('Searching for guests', () => {
    it('properly renders', () => {
        const component = render(<GuestsSearch eventID={75} />);
        const searchInput = component.getByLabelText(/search user input/);
        expect(searchInput).toBeVisible();
        expect(mockGetUsers).toHaveBeenCalledTimes(1);
    });

    it('allows you to search for users', () => {
        const component = render(<GuestsSearch eventID={75} />);
        const searchInput = component.getByLabelText(/search user input/);
        fireEvent.change(searchInput, { target: { value: 'Eth' } });
    });
});

describe('Potential Users', () => {
    it('properly renders', () => {
        const component = render(
            <User
                user={{ full_name: 'ethan', username: 'ehickey' }}
                eventID={75}
            />
        );
        const firstName = component.getByLabelText(/full name/);
        const userName = component.getByLabelText(/username/);

        expect(firstName).toBeVisible();
        expect(firstName.textContent).toEqual('ethan');
        expect(userName).toBeVisible();
        expect(userName.textContent).toEqual('ehickey');
    });

    it('allows you to add guest', () => {
        const component = render(
            <User
                user={{ full_name: 'ethan', username: 'ehickey' }}
                eventID={75}
            />
        );

        const guestContainer = component.getByLabelText(/potential guest container/)
        fireEvent.click(guestContainer)

        expect(mockAddGuest).toHaveBeenCalledTimes(1)

    })
});
