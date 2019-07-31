import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getUsers } from "./../actions/usersActions";
import { changeAttendance, removeGuest } from "../actions/specificEventActions";
import { deleteEvent } from "../actions/generalEventsActions";
import moment from "moment";

const EventCard = props => {
  const {
    event_name,
    organizer_id,
    date,
    time,
    city,
    state,
    event_id
  } = props.event;
  const { url } = props.match;
  const [{ users }, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");

  useEffect(() => {
    getUsers(dispatch);
  }, [props.event, dispatch]);

  let username;
  users.data.forEach(user => {
    if (user.user_id === organizer_id) {
      username = user.username;
    }
  });

  if (user_id === organizer_id) {
    return (
      <div className="EventCard">
        <NavLink to={`${url}/event/${event_id}`}>
          <h2>{event_name}</h2>
        </NavLink>
        <div className="card-organizer">Organized By: {username}</div>
        <div className="card-date">
          Date: {moment(date).format("LL")} Time: {time}
        </div>
        <div className="card-location">
          Location: {city}, {state}
        </div>
        <button onClick={() => deleteEvent(dispatch, event_id)}>
          Remove Event
        </button>
      </div>
    );
  } else {
    return (
      <div className="EventCard">
        <NavLink to={`${url}/event/${event_id}`}>
          <h2>{event_name}</h2>
        </NavLink>
        <div className="card-organizer">Organized By: {username}</div>
        <div className="card-date">
          Date: {moment(date).format("LL")} Time: {time}
        </div>
        <div className="card-location">
          Location: {city}, {state}
        </div>
        {props.event.attending ? (
          <button
            onClick={() =>
              removeGuest(dispatch, event_id, { data: { user_id: user_id } })
            }
          >
            Leave Event
          </button>
        ) : (
          <button
            onClick={() => {
              changeAttendance(dispatch, event_id, user_id, {
                attending: true
              });
              console.log(event_id);
            }}
          >
            Accept Invite
          </button>
        )}
        {props.event.attending ? null : (
          <button
            onClick={() =>
              removeGuest(dispatch, event_id, { data: { user_id: user_id } })
            }
          >
            Decline
          </button>
        )}
      </div>
    );
  }
};

export default withRouter(EventCard);
