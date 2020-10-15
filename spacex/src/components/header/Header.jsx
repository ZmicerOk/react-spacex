import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import logo from '../../logo.svg';
import './header.css';

const Header = ({ rockets, changeRocket }) => {
  return (
    <header className="header">
      <Link to="/">
            <img src={logo} alt="Logo Space X" className="logo" />
      </Link>


      <nav className="main-nav nav">
        <ul className="list">
          {rockets.map((el, i) => (
            <li className="item" key={i + el}>
              <Link 
                to="/rocket"
                onClick={() =>changeRocket(el)}
                className="item-link">
                {el}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="secondary-nav">
        <ul className="list">
          <li className="item">
            <NavLink exact to="/" activeClassName='active' className="item-link">
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/calendar" activeClassName='active' className="item-link">
              Calendar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
