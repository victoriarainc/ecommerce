import React, {Component} from 'react';
import '../styles/App.css';

import {craft} from '../craft.js';

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
        services.push(craftItem.service);
      }
    });

    let service_links = services.map((craftItem) => {
      return (
        <div key={craftItem} className="link">
          <NavLink to={`/shop/${craftItem}`}>{craftItem}</NavLink>
        </div>
      )
    });
    console.log(service_links);

    return (
      <div className="shop">
        {service_links}
      </div>
    );
  }
}
