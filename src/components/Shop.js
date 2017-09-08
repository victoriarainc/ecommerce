import React, {Component} from 'react';
import '../styles/App.css';

import {data} from '../data.js';

import {NavLink} from 'react-router-dom';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    let match = this.props.match;
    console.log(match);
  }

  render() {

    let categories = []
    data.forEach((item) => {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    });

    let category_links = categories.map((item) => {
      return (
        <div key={item} className="link">
          <NavLink to={`/shop/${item}`}>{item}</NavLink>
        </div>
      )
    });
    console.log(category_links);

    return (
      <div className="shop">
        {category_links}
      </div>
    );
  }
}
