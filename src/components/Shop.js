import React, {Component} from 'react';
import '../styles/App.css';

import {product} from '../product.js';

import {NavLink} from 'react-router-dom';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    let match = this.props.match;
    console.log(match);
  }

  render() {

    let categories = []
    product.forEach((shopItem) => {
      if (categories.indexOf(shopItem.category) === -1) {
        categories.push(shopItem.category);
        console.log("testing", categories[0].description)
      }
    });

    let category_links = categories.map((shopItem) => {
      return (
        <div key={shopItem} className="link">
          <NavLink to={`/shop/${shopItem}`}>{shopItem}</NavLink>
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
