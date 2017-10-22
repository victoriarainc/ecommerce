import React, { Component } from 'react';
import '../styles/App.css';

import {NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App home">
      <p className="homeSpan">Handmade by Vi</p>
      { // <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/21686041_1309955992446201_7507814998148813410_n.jpg?oh=da6959435b77f718fb44f65246a5c81b&oe=5A3B837E" className="introImg"/>
    }
      </div>
    );
  }
}

export default App;
