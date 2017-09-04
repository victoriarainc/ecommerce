import React, { Component } from 'react';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        NavBar
        Content
        {this.props.children}
      </div>
    );
  }
}
