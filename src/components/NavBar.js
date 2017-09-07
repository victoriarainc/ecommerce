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
          <div className="nav"><NavLink to="/shop">Shop</NavLink></div>
          <div className="nav"><NavLink to="/about">About</NavLink></div>
          <div className="nav"><NavLink to="/craft">Craft</NavLink></div>
        </div>

      </div>
    );
  }
}
