import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navBar">

        <div className="HAC">
          <div className="link"><NavLink to="/">Home</NavLink></div>
          <div className="link"><NavLink to="/about">About</NavLink></div>
          <div className="link"><NavLink to="/contact">Contact</NavLink></div>
        </div>

      <div className="categories">
        <div className="link"><NavLink to="/cards">Greeting Cards</NavLink></div>
        <div className="link"><NavLink to="/stationery">Stationery</NavLink></div>
        <div className="link"><NavLink to="/singles">Single Letter Pieces</NavLink></div>
      </div>

      </div>
    );
  }
}
