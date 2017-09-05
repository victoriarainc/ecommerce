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
      </div>
    );
  }
}
