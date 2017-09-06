import React, { Component } from 'react';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
        return (
          <div className="post">
          <h1>Craft Services</h1>
            {// <h1>{this.state.title}</h1>
            // <h3>{this.state.description}</h3>
            // <p>{this.state.gallery}</p>
            }
          </div>
        )
      }
}
