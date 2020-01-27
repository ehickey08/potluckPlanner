import React, { useState } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { addEvent } from "../actions";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { StyledInput } from "../styled_components";
import moment from "moment";
import { StyledEventForm } from "../styled_components";

const AddEventForm = props => {
  const today = moment(new Date()).format("YYYY-MM-DD");
  const [event, setEvent] = useState({
    event_name: "",
    date: today,
    time: "20:00",
    description: "",
    address: "",
    city: "",
    state: ""
  });

  const [, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");
  const eventInputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;
    setEvent({ ...event, [name]: value });
  };

  return (
    <StyledEventForm
      onSubmit={e => {
        e.preventDefault();
        addEvent(dispatch, user_id, event);
        setEvent({
          event_name: "",
          date: "",
          time: "",
          description: "",
          address: "",
          city: "",
          state: ""
        });
        props.history.push("/dashboard");
      }}
    >
      <legend>Add Event</legend>
      <StyledInput
        name="event_name"
        type="text"
        required
        value={event.event_name}
        onChange={event => eventInputHandler(event)}
        placeholder="Event Name"
      />
      <StyledInput
        name="date"
        type="date"
        required
        min={today}
        value={event.date}
        onChange={event => eventInputHandler(event)}
      />
      <StyledInput
        name="time"
        type="time"
        required
        value={event.time}
        onChange={event => eventInputHandler(event)}
      />
      <StyledInput
        name="description"
        type="text"
        required
        value={event.description}
        onChange={event => eventInputHandler(event)}
        placeholder="Description"
      />
      <StyledInput
        name="address"
        type="text"
        required
        value={event.address}
        onChange={event => eventInputHandler(event)}
        placeholder="Street Address"
      />
      <StyledInput
        name="city"
        type="text"
        required
        value={event.city}
        onChange={event => eventInputHandler(event)}
        placeholder="City"
      />
      <StyledInput
        name="state"
        type="text"
        required
        value={event.state}
        onChange={event => eventInputHandler(event)}
        placeholder="State"
      />
      <button type="submit">Submit</button>
    </StyledEventForm>
  );
};

export default AddEventForm;
