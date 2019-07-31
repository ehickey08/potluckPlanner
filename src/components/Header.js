import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../actions";
import { useStateValue } from "../hooks/useStateValue";
import {
  HeaderDiv,
  HeaderTitle,
  HeaderNavLinks
} from "../styled_components/Dashboard/Header";
import logo from '../PP_logo.png'

const Header = () => {
  const [, dispatch] = useStateValue();
  return (
    <HeaderDiv>
      <HeaderTitle>
        <img src={logo} alt="logo" /> Potluck Planner
      </HeaderTitle>
      <HeaderNavLinks>
        <NavLink to="/dashboard/addEvent">Add New Event</NavLink>
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/" onClick={() => logout(dispatch)}>
          Log Out
        </NavLink>
      </HeaderNavLinks>
    </HeaderDiv>
  );
};

export default Header;
