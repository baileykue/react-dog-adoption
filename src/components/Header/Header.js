import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </div>
  );
}
