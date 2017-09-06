import React, { Component } from 'react';
import '../styles/App.css';

import {NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p> Welcome to Handmade by Vi! </p>

      <div className="categories">
        <div className="cat"><NavLink to="/cards">Greeting Cards</NavLink></div>
        <div className="cat"><NavLink to="/stationery">Stationery</NavLink></div>
        <div className="cat"><NavLink to="/singles">Single Letter Pieces</NavLink></div>
      </div>

      </div>
    );
  }
}

export default App;
