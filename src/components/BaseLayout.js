import React, { Component } from 'react';

import NavBar from './NavBar';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="baseLayout">
        <NavBar />
        <div className="children">
        {this.props.children}
        </div>
        <div className="navBar footer">
          <a href="https://www.patreon.com/victoriarain" target="_blank" className="nav">Patreon</a>
        </div>
      </div>
    );
  }
}
