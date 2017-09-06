import React, { Component } from 'react';
import '../styles/App.css';

import {NavLink} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="App home">
      <div className="categories">
         <div className="link"><NavLink to="/cards">Greeting Cards</NavLink></div>
         <div className="link"><NavLink to="/stationery">Stationery</NavLink></div>
         <div className="link"><NavLink to="/singles">Single Letter Pieces</NavLink></div>
       </div>
      </div>
    );
  }
}
