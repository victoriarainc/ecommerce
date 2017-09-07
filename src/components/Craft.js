import React, { Component } from 'react';

export default class Craft extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="categories">
        <div className="link craft">handlettering</div>
        <div className="link craft">typewriter</div>
        <div className="link craft">custom envelopes</div>
      </div>
    );
  }
}
