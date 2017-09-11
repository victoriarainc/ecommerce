import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about">
        <div className="aboutDiv">
          <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/18582512_1205405952901206_250421057947286575_n.jpg?oh=84b42ecfd1baaf403bf6b8cb70bfa01a&oe=5A154F0A" className="aboutImg"/>

          <div className="aboutBody" id="aboutVi">
            <h1>about vi</h1>
            <p>Victoria Rain, or Vi, was born and raised in North Carolina
            with a serious knack for craft!</p>
          </div>
        </div>

        <div className="aboutDiv">
          <div className="aboutBody" id="aboutHandmade">
            <h1>handmade</h1>
            <p>Handmade by vi is a local Raleigh company that believes in
            reuse and recycling!</p>
          </div>
          <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/21151419_1294442027330931_595850224348675514_n.jpg?oh=c2531ce534694a223c43f355f0eb87b2&oe=5A4B120A" className="aboutImg"/>
        </div>

        <div className="aboutDiv">
          <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/18952824_1223191734455961_1669375980580884894_n.png?oh=c6736d3ea5836184610d3fba6ee3bb4b&oe=5A19F719" className="aboutImg"/>
          <div className="aboutBody" id="aboutPatreon">
            <h1>patreon</h1>
            <p>To support handmadebyvi and it's vision to support the community
            through reducing waste and recycling everyday paper products please
            visit <a href="www.patreon.com/victoriarain">www.patreon.com/victoriarain</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
