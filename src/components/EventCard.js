import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { getUsers } from "./../actions/usersActions";
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

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  let username;
  users.data.forEach(user => {
    if (user.user_id === organizer_id) {
      username = user.username;
    }
  });

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
    </div>
  );
};

export default withRouter(EventCard);
