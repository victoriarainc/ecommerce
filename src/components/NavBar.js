import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>

      <div className="link"><NavLink to="/">Home</NavLink></div>
      <div className="link"><NavLink to="/about">About</NavLink></div>
      <div className="link"><NavLink to="/contact">Contact</NavLink></div>
      <div className="link"><NavLink to="/category/cards">Greeting Cards</NavLink></div>
      <div className="link"><NavLink to="/category/stationery">Stationery</NavLink></div>
      <div className="link"><NavLink to="/category/singles">Single Letter Pieces</NavLink></div>

      </div>
    );
  }
}
