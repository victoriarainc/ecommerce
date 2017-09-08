import React, {Component} from 'react';
import '../styles/App.css';

import {data} from '../data.js';

import {NavLink} from 'react-router-dom';

export default class Craft extends Component {
  constructor(props) {
    super(props);

    let match = this.props.match;
    console.log(match);
  }

  render() {

    let services = []
    data.forEach((item) => {
      if (services.indexOf(item.service) === -1) {
        services.push(item.service);
      }
    });

    let service_links = services.map((item) => {
      return (
        <div key={item} className="link shop">
          <NavLink to={`/shop/${item}`}>{item}</NavLink>
        </div>
      )
    });
    console.log(service_links);

    return (
      <div>
        {service_links}
      </div>
    );
  }
}
