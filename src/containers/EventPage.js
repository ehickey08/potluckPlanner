import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getEvent } from "../actions";
import { useStateValue } from "../hooks/useStateValue";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { addRecipe, removeGuest } from "../actions/specificEventActions";
import { claimRecipe } from "../actions/specificEventActions";
import { removeRecipe } from "../actions/specificEventActions";
import { deleteEvent } from "../actions/generalEventsActions";
import Guests from "../components/Guests";
import { NavLink } from "react-router-dom";

const EventPage = ({ match, history }) => {
  let eventID = match.params.eventID;
  const { url } = match;
  const [{ event }, dispatch] = useStateValue();
  const [user_id] = useLocalStorage("user_id");
  const [createRecipe, setRecipe] = useState({ recipe_name: "" });
  useEffect(() => {
    getEvent(dispatch, eventID);
  }, [dispatch, eventID]);

  const recipeChangeHandler = e => {
    setRecipe({ recipe_name: e.target.value });
  };
  console.log(event);
  useEffect(() => {
    const guests = event.data.guests;
    if (typeof event.data.recipes !== "string") {
      event.data.recipes.forEach(recipe => {
        let includes = false;
        guests.forEach(guest => {
          if (guest.user_id === recipe.user_id) {
            includes = true;
          }
        });
        if (includes === false) {
          claimRecipe(dispatch, eventID, {
            recipe_name: recipe.recipe_name,
            user_id: null
          });
        }
      });
    }
  }, [event.data.guests]);

  if (user_id === event.data.organizer_id) {
    //First case if for organizer, Second case is for guest
    return (
      <div>
        Event Page
        <h2>Event Name: {event.data.event_name}</h2>
        <ul>
          <li>Address: {event.data.address}</li>
          <li>City: {event.data.city}</li>
          <li>State: {event.data.state}</li>
          <li>Time: {event.data.time}</li>
          <li>
            Description: <p>{event.data.description}</p>
          </li>
          <NavLink to={`${url}/update`}>
            <button>Edit Event</button>
          </NavLink>
          <button
            onClick={e => {
              e.preventDefault();
              deleteEvent(dispatch, eventID);
              history.push("/dashboard");
            }}
          >
            Delete Event
          </button>
          <li>
            Guests:{" "}
            <ul>
              {event.data.guests.map(guest => {
                //Mapping over guests to display

                if (guest.attending) {
                  return (
                    <li>
                      Attending: {guest.full_name}{" "}
                      {guest.user_id === event.data.organizer_id ? null : (
                        <button
                          onClick={() =>
                            removeGuest(dispatch, eventID, {
                              data: { user_id: guest.user_id }
                            })
                          }
                        >
                          Remove Guest
                        </button>
                      )}
                    </li>
                  );
                } else {
                  return (
                    <li>
                      Invited: {guest.full_name}
                      <button
                        onClick={() =>
                          removeGuest(dispatch, eventID, {
                            data: { user_id: guest.user_id }
                          })
                        }
                      >
                        Uninvite
                      </button>
                    </li>
                  );
                }
              })}
            </ul>
          </li>
          <li>
            <ul>
              {" "}
              {typeof event.data.recipes === "string" ? (
                <li>{event.data.recipes}</li>
              ) : (
                event.data.recipes.map(recipe => {
                  //Determine if Recipes is an array or string and return value
                  return (
                    <li>
                      {recipe.recipe_name} :{" "}
                      {recipe.full_name ? recipe.full_name : ""}{" "}
                      {/* Toggling between the name and unclaimed */}
                      <button
                        onClick={e => {
                          e.preventDefault();
                          recipe.full_name
                            ? claimRecipe(dispatch, eventID, {
                                //Determine if a full_name is associated with recipe and return value, toggle between null and name to claim
                                recipe_name: recipe.recipe_name,
                                user_id: null
                              })
                            : claimRecipe(dispatch, eventID, {
                                recipe_name: recipe.recipe_name,
                                user_id: user_id
                              });
                        }}
                      >
                        {recipe.full_name ? "Unclaim Recipe" : "Claim Recipe"}
                      </button>
                      <button
                        onClick={event => {
                          event.preventDefault();
                          removeRecipe(dispatch, parseInt(eventID), {
                            data: { recipe_name: recipe.recipe_name }
                          });
                        }}
                      >
                        Delete Recipe
                      </button>
                    </li>
                  );
                })
              )}
              <form
                onSubmit={e => {
                  addRecipe(dispatch, eventID, createRecipe); //Creates recipe
                  setRecipe({ recipe_name: "" });
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  value={createRecipe.recipe_name}
                  placeholder="Recipe"
                  onChange={e => recipeChangeHandler(e)}
                />
                <button>Add Recipe</button>
              </form>
            </ul>
          </li>
        </ul>
        <Guests eventID={eventID} />
      </div>
    );
  } else {
    return (
      <div>
        Event Page
        <h2>Event Name: {event.data.event_name}</h2>
        <ul>
          <li>Address: {event.data.address}</li>
          <li>City: {event.data.city}</li>
          <li>State: {event.data.state}</li>
          <li>Time: {event.data.time}</li>
          <li>
            Description: <p>{event.data.description}</p>
          </li>
          <li>
            Guests:{" "}
            <ul>
              {event.data.guests.map(guest => {
                //Mapping over guests to display
                if (guest.attending) {
                  return (
                    <li key={guest.full_name}>Attending: {guest.full_name} </li>
                  );
                } else {
                  return <li>Invited: {guest.full_name}</li>;
                }
              })}
            </ul>
          </li>
          <li>
            <ul>
              {" "}
              {typeof event.data.recipes === "string" ? (
                <li>{event.data.recipes}</li>
              ) : (
                event.data.recipes.map(recipe => {
                  //Determine if Recipes is an array or string and return value
                  return (
                    <li
                      onClick={e => {
                        e.preventDefault();
                        recipe.full_name
                          ? claimRecipe(dispatch, eventID, {
                              //Determine if a full_name is associated with recipe and return value, toggle between null and name to claim
                              recipe_name: recipe.recipe_name,
                              user_id: null
                            })
                          : claimRecipe(dispatch, eventID, {
                              recipe_name: recipe.recipe_name,
                              user_id: user_id
                            });
                      }}
                    >
                      {recipe.recipe_name} :{" "}
                      {recipe.full_name ? recipe.full_name : "unclaimed"}{" "}
                      {/* Toggling between the name and unclaimed */}
                    </li>
                  );
                })
              )}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
};

export default withRouter(EventPage);
