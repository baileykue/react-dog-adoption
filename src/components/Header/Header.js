import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <NavLink className="home" exact to="/">
        Home
      </NavLink>
      <NavLink className="admin" to="/admin">
        Admin
      </NavLink>
    </div>
  );
}
