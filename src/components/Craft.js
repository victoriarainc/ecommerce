import React, {Component} from 'react';
import '../styles/App.css';

import {craft} from '../offer.js';

import {NavLink} from 'react-router-dom';

export default class Craft extends Component {
  constructor(props) {
    super(props);

    let match = this.props.match;
    console.log(match);
  }

  render() {

    let services = []
    craft.forEach((craftItem) => {
      if (services.indexOf(craftItem.service) === -1) {
        services.push(craftItem.service)
        console.log("craftTHINGS",services[0].description)
      }
    });

    let service_links = services.map((craftItem) => {
      return (
        <div key={craftItem} className="link">
          <NavLink to={`/craft/${craftItem}`}>{craftItem}</NavLink>
        </div>
      )
    });

    return (
      <div className="shop">
        {service_links}
      </div>
    );
  }
}
