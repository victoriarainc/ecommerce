import React, { Component } from 'react';
import '../styles/App.css';

import {NavLink} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="categories">
         <div className="link shop"><NavLink to="/cards">Greeting Cards</NavLink></div>
         <div className="link shop"><NavLink to="/stationery">Stationery</NavLink></div>
         <div className="link shop"><NavLink to="/singles">Single Letter Pieces</NavLink></div>
       </div>
    );
  }
}
