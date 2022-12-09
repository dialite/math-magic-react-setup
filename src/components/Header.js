/* eslint-disable react/void-dom-elements-no-children */
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import style from './styles.module.css';

const Header = () => (
  <div className="Header">
    <h1>Math Magician</h1>
    <ul className="navigation-container">
      <li>
        <Link className={style.linkStyle} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={style.linkStyle} to="/Calculator">
          Calculator
        </Link>
      </li>
      <li>
        <Link className={style.linkStyle} to="/Quote">
          Quote
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
