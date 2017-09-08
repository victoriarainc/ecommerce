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
    craft.forEach((item) => {
      if (services.indexOf(craft.service) === -1) {
        services.push(item.service);
      }
    });

    let service_links = services.map((item) => {
      return (
        <div key={item} className="link">
          <NavLink to={`/shop/${item}`}>{item}</NavLink>
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
