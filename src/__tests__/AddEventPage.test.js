import React from 'react';
import { render, fireEvent, cleanup } from '../utils/customRender';
import AddEventPage from '../containers/AddEventPage';
import { addEvent } from '../actions';
import moment from "moment";

jest.mock('../actions');

afterEach(cleanup)

describe('Add Event Page', () => {
    it('properly renders', () => {
        const component = render(<AddEventPage />);
        const eventName = component.getByLabelText('event name');
        const eventDate = component.getByLabelText('event date');
        const eventTime = component.getByLabelText('event time');
        const eventDesc = component.getByLabelText('event description');
        const eventAddress = component.getByLabelText('event address');
        const eventCity = component.getByLabelText('event city');
        const submitButton = component.getByLabelText('create event');
        expect(eventName).toBeVisible();
        expect(eventDate).toBeVisible();
        expect(eventTime).toBeVisible();
        expect(eventDesc).toBeVisible();
        expect(eventAddress).toBeVisible();
        expect(eventCity).toBeVisible();
        expect(submitButton).toBeVisible();
    });

    it('allows form inputs to change and submit', () => {
        const component = render(
            <AddEventPage
                history={{ push: () => console.log('return to dashboard') }}
            />
        );
        const eventName = component.getByLabelText('event name');
        const eventDesc = component.getByLabelText('event description');
        const eventAddress = component.getByLabelText('event address');
        const eventCity = component.getByLabelText('event city');
        const eventState = component.getByLabelText('event state');
        const submitButton = component.getByLabelText('create event');

        const newEvent = {
            event_name: 'test name',
            date: moment(new Date()).format("YYYY-MM-DD"),
            time: '20:00',
            description: 'test description',
            address: 'test address',
            city: 'test city',
            state: 'test state',
        };

        fireEvent.change(eventName, { target: { value: newEvent.event_name } });
        fireEvent.change(eventDesc, {
            target: { value: newEvent.description },
        });
        fireEvent.change(eventAddress, { target: { value: newEvent.address} });
        fireEvent.change(eventCity, { target: { value: newEvent.city} });
        fireEvent.change(eventState, { target: { value: newEvent.state} });


        fireEvent.click(submitButton);
        expect(addEvent).toHaveBeenCalledTimes(1);
    });
});
