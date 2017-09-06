import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about">
        <div>
          <h1>about vi</h1>
          <p>Victoria Rain, or Vi, was born and raised in North Carolina
          with a serious knack for craft!</p>
        </div>

        <div>
          <h1>handmade</h1>
          <p>Handmade by vi is a local Raleigh company that believes in
          reuse and recycling!</p>
        </div>

        <div>
          <h1>patreon</h1>
          <p>To support handmadebyvi and it's vision to support the community
          through reducing waste and recycling everyday paper products please
          visit <a href="www.patreon.com/victoriarain">www.patreon.com/victoriarain</a>.
          </p>
        </div>
      </div>
    );
  }
}
